/**
 * This interpreter implements an explicit-control evaluator.
 *
 * Heavily adapted from https://github.com/source-academy/JSpike/
 * and the legacy interpreter at '../interpreter/interpreter'
 */

/* tslint:disable:max-classes-per-file */
import { cloneDeep } from 'lodash'

import * as es from '../ast'
import * as errors from '../errors/errors'
import { arity } from '../stdlib/misc'
import { Context, Result, Value } from '../types'
import { expressionStatement, functionType, listType, tupleType } from '../utils/astCreator'
import * as rttc from '../utils/rttc'
import { applyBuiltin, builtinInfixFunctions, builtinMapping } from './builtin'
import * as instr from './instrCreator'
import {
  AgendaItem,
  AssmtInstr,
  BranchInstr,
  BuiltinInstr,
  CallInstr,
  ClosureInstr,
  CmdEvaluator,
  ECError,
  EnvInstr,
  Instr,
  InstrType,
  ListInstr,
  LocalEnvInstr,
  TailCallInstr,
  TupleInstr
} from './types'
import {
  checkStackOverFlow,
  createBlockEnvironment,
  createEnvironment,
  currentEnvironment,
  declareFunctionsAndVariables,
  defineVariable,
  getVariable,
  handleRuntimeError,
  handleSequence,
  isNode,
  popEnvironment,
  popLocalEnvironment,
  populateBuiltInIdentifiers,
  pushEnvironment,
  pushLocalEnvironment,
  Stack
} from './utils'
import assert from 'assert'
import { cp } from 'fs'

/**
 * The agenda is a list of commands that still needs to be executed by the machine.
 * It contains syntax tree nodes or instructions.
 */
export class Agenda extends Stack<AgendaItem> {
  public constructor(program: es.Program) {
    super()
    // Evaluation of last statement is undefined if stash is empty
    this.push(instr.endInstr())

    // Load program into agenda stack
    this.push(program)
  }
}

/**
 * The stash is a list of values that stores intermediate results.
 */
export class Stash extends Stack<Value> {
  public constructor() {
    super()
  }
}

/**
 * Function to be called when a program is to be interpreted using
 * the explicit control evaluator.
 *
 * @param program The program to evaluate.
 * @param context The context to evaluate the program in.
 * @returns The result of running the ECE machine.
 */
export function evaluate(program: es.Program, context: Context): Value {
  try {
    context.runtime.isRunning = true
    context.runtime.agenda = new Agenda(program)
    context.runtime.stash = new Stash()
    const environment = createBlockEnvironment(currentEnvironment(context), 'globalEnvironment')
    pushEnvironment(context, environment)
    populateBuiltInIdentifiers(context)
    return runECEMachine(context, context.runtime.agenda, context.runtime.stash)
  } catch (error) {
    console.error(error)
    return new ECError()
  } finally {
    context.runtime.isRunning = false
  }
}

/**
 * Function that is called when a user wishes to resume evaluation after
 * hitting a breakpoint.
 * This should only be called after the first 'evaluate' function has been called so that
 * context.runtime.agenda and context.runtime.stash are defined.
 * @param context The context to continue evaluating the program in.
 * @returns The result of running the ECE machine.
 */
export function resumeEvaluate(context: Context) {
  try {
    context.runtime.isRunning = true
    return runECEMachine(context, context.runtime.agenda!, context.runtime.stash!)
  } catch (error) {
    return new ECError()
  } finally {
    context.runtime.isRunning = false
  }
}

/**
 * Function that returns the appropriate Promise<Result> given the output of ec evaluating, depending
 * on whether the program is finished evaluating, ran into a breakpoint or ran into an error.
 * @param context The context of the program.
 * @param value The value of ec evaluating the program.
 * @returns The corresponding promise.
 */
export function ECEResultPromise(context: Context, value: Value): Promise<Result> {
  return new Promise((resolve, reject) => {
    if (value instanceof ECError) {
      resolve({ status: 'error' })
    } else {
      resolve({ status: 'finished', context, value })
    }
  })
}

/**
 *
 * @param context The context to evaluate the program in.
 * @param agenda Points to the current context.runtime.agenda
 * @param stash Points to the current context.runtime.stash
 * @returns A special break object if the program is interrupted by a break point;
 * else the top value of the stash. It is usually the return value of the program.
 */
function runECEMachine(context: Context, agenda: Agenda, stash: Stash) {
  context.runtime.break = false
  context.runtime.nodes = []
  let command = agenda.pop()
  while (command) {
    console.log(command)
    // console.log(currentEnvironment(context))
    if (isNode(command)) {
      context.runtime.nodes.unshift(command)
      cmdEvaluators[command.type](command, context, agenda, stash)
      context.runtime.nodes.shift()
    } else {
      // Node is an instrucion
      cmdEvaluators[command.instrType](command, context, agenda, stash)
    }
    command = agenda.pop()
  }
  return context.globalDeclarations
}

export const evaluateCallInstr = (
  command: CallInstr | TailCallInstr,
  context: Context,
  agenda: Agenda,
  stash: Stash
) => {
  checkStackOverFlow(context, agenda)
  // Get function arguments from the stash
  const args: es.Literal[] = []
  for (let i = 0; i < command.arity; i++) {
    args.unshift(stash.pop())
  }

  const func: ClosureInstr | BuiltinInstr = stash.pop()
  if (func?.instrType === InstrType.CLOSURE) {
    const closure = func as ClosureInstr
    // Push on top of current environment and then restore if call
    if (command.instrType === InstrType.CALL) {
      agenda.push(instr.envInstr(currentEnvironment(context)))
    }
    agenda.push(closure.srcNode.body)

    const environment = createEnvironment(
      closure, 
      {
        type: 'TupleExpression',
        smlType: command.srcNode.args.smlType,
        elements: args
      }, 
      command.srcNode)

    // Replace current environment if tail call
    if (command.instrType === InstrType.TAIL_CALL) {
      popEnvironment(context)
    }
    pushEnvironment(context, environment)
  } else if (func?.instrType == InstrType.BUILTIN) {
    const builtin = func as BuiltinInstr
    stash.push(applyBuiltin(builtin.identifier, args, command.srcNode.smlType))
  } else {
    // not a callable function, error
    handleRuntimeError(context, new errors.CallingNonFunctionValue(func, command.srcNode))
  }
}

/**
 * Dictionary of functions which handle the logic for the response of the three registers of
 * the ASE machine to each AgendaItem.
 */
const cmdEvaluators: { [type: string]: CmdEvaluator } = {
  /**
   * Statements
   */

  Program: function (command: es.BlockStatement, context: Context, agenda: Agenda, stash: Stash) {
    context.numberOfOuterEnvironments += 1
    const environment = createBlockEnvironment(currentEnvironment(context), 'programEnvironment')
    pushEnvironment(context, environment)
    declareFunctionsAndVariables(currentEnvironment(context), command)
    agenda.push(...handleSequence(command.body))
  },

  BlockStatement: function (command: es.BlockStatement, context: Context, agenda: Agenda) {
    // To restore environment after block ends
    agenda.push(instr.envInstr(currentEnvironment(context)))

    const environment = createBlockEnvironment(currentEnvironment(context), 'blockEnvironment')
    pushEnvironment(context, environment)
    declareFunctionsAndVariables(currentEnvironment(context), command)

    // Push block body
    agenda.push(...handleSequence(command.body))
  },

  ExpressionStatement: function (
    command: es.ExpressionStatement,
    context: Context,
    agenda: Agenda
  ) {
    agenda.push(command.expression)
  },

  ValueDeclaration: function (command: es.ValueDeclaration, context: Context, agenda: Agenda) {
    const env = command.declEnv ?? currentEnvironment(context)
    const pat = command.pat as es.Pattern

    // Parser enforces initialisation during variable declaration
    const init = command.init!

    agenda.push(instr.assmtInstr(pat, true, command, env))
    agenda.push(init)
  },

  RecValueDeclaration: function (
    command: es.RecValueDeclaration,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    agenda.push(
      instr.assmtInstr(command.pat, true, command, command.declEnv ?? currentEnvironment(context))
    )
    command.init.recursiveId = command.pat.name
    agenda.push(command.init)
  },

  FunctionDeclaration: function (
    command: es.FunctionDeclaration,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const lambdaExpression: es.LambdaExpression = {
      type: 'LambdaExpression',
      smlType: command.smlType,
      param: command.param,
      body: command.body,
      recursiveId: command.id.name
    }
    agenda.push(
      instr.assmtInstr(command.id, true, command, command.declEnv ?? currentEnvironment(context))
    )
    agenda.push(lambdaExpression)
  },

  LocalDeclaration: function (command: es.LocalDeclaration, context: Context, agenda: Agenda) {
    agenda.push(instr.localEnvInstr())

    const env = command.declEnv ?? currentEnvironment(context)
    command.body.declEnv = env
    agenda.push(command.body)

    const localEnv = createBlockEnvironment(env, 'localEnvironment')
    pushLocalEnvironment(context, localEnv)
    command.local.declEnv = localEnv
    agenda.push(command.local)
  },

  DeclarationList: function (
    command: es.DeclarationList,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const env = command.declEnv ?? currentEnvironment(context)
    declareFunctionsAndVariables(env, command)
    command.body.map(decl => (decl.declEnv = env))
    agenda.push(...handleSequence(command.body))
  },

  /**
   * Expressions
   */

  Literal: function (command: es.Literal, context: Context, agenda: Agenda, stash: Stash) {
    stash.push(command)
  },

  Identifier: function (command: es.Identifier, context: Context, agenda: Agenda, stash: Stash) {
    stash.push(getVariable(context, command.name, command))
  },

  ApplicationExpression: function (
    command: es.ApplicationExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    if (command.tail) {
      agenda.push(instr.tailCallInstr(command.args.elements.length, command))
    } else {
      agenda.push(instr.callInstr(command.args.elements.length, command))
    }
    for (let i = command.args.elements.length - 1; i >= 0; i--) {
      agenda.push(command.args.elements[i])
    }
    if (command.isInfix) {
      const op = (command.callee as es.Identifier).name
      if (!(op in builtinInfixFunctions)) {
        handleRuntimeError(context, new errors.UndefinedVariable(op, command))
      }
      const infixInstr = instr.builtinInstr(op, arity(builtinInfixFunctions[op]), true)
      stash.push(infixInstr)
    } else {
      agenda.push(command.callee)
    }
  },

  ConditionalExpression: function (
    command: es.ConditionalExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    if (command.tail) {
      command.alt.tail = true
      command.cons.tail = true
    }
    agenda.push(instr.branchInstr(command.cons, command.alt, command))
    agenda.push(command.pred)
  },

  LambdaExpression: function (
    command: es.LambdaExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    if (command.body.type === 'SequenceExpression') {
      command.body.expressions[command.body.expressions.length - 1].tail = true
    } else {
      command.body.tail = true
    }
    const env = cloneDeep(currentEnvironment(context))
    env.name += '_clone'
    if (command.recursiveId) {
      defineVariable(context, env, command.recursiveId, instr.closureInstr(env, command))
    }

    stash.push(instr.closureInstr(env, command))
  },

  LetExpression: function (
    command: es.LetExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const blockStmt: es.BlockStatement = {
      type: 'BlockStatement',
      smlType: command.body.smlType,
      body: [command.declarations, expressionStatement(command.body, command.body.smlType)]
    }
    agenda.push(blockStmt)
  },

  SequenceExpression: function (
    command: es.SequenceExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const expressionStatements = command.expressions.map(expr =>
      expressionStatement(expr, expr.smlType)
    )
    agenda.push(...handleSequence(expressionStatements))
  },

  ListExpression: function (
    command: es.ListExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    agenda.push(instr.listInstr(command.elements.length, command))
    for (let i = command.elements.length - 1; i >= 0; i--) {
      agenda.push(command.elements[i])
    }
  },

  TupleExpression: function (
    command: es.TupleExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    agenda.push(instr.tupleInstr(command.elements.length, command))
    for (let i = command.elements.length - 1; i >= 0; i--) {
      agenda.push(command.elements[i])
    }
  },

  /**
   * Instructions
   */

  [InstrType.ASSIGNMENT]: function (
    command: AssmtInstr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    if (command.pat.type === 'TuplePattern') {
      const tup = stash.pop() as es.Tuple
      for (let i = command.pat.elements.length - 1; i >= 0; i--) {
        const pat = command.pat.elements[i]
        const val = tup.value[i]
        agenda.push(instr.assmtInstr(pat, true, command.srcNode, command.env))
        stash.push(val)
      }
    } else if (command.pat.type === 'Identifier') {
      const val = stash.pop()
      if (val?.instrType == InstrType.CLOSURE && command.pat.name in builtinMapping) {
        handleRuntimeError(
          context,
          new errors.ReservedKeywordVariable(command.srcNode, command.pat.name, 'builtin function')
        )
      }
      defineVariable(context, command.env, command.pat.name, val, false)
    } else if (command.pat.type === 'Literal') {
      // TODO: check that literal is the same
      stash.pop()
    } else {
      // assignment is to wildcard pat
      stash.pop()
    }
  },

  [InstrType.BRANCH]: function (
    command: BranchInstr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const test: es.BoolLiteral = stash.pop()

    // Check if predicate is a boolean
    const error = rttc.checkIsBool(command.srcNode, ' as condition', test)
    if (error) {
      handleRuntimeError(context, error)
    }

    if (test.value) {
      agenda.push(command.consequent)
    } else {
      agenda.push(command.alternate)
    }
  },

  [InstrType.CALL]: function (command: CallInstr, context: Context, agenda: Agenda, stash: Stash) {
    evaluateCallInstr(command, context, agenda, stash)
  },

  [InstrType.POP]: function (command: Instr, context: Context, agenda: Agenda, stash: Stash) {
    stash.pop()
  },

  [InstrType.ENVIRONMENT]: function (command: EnvInstr, context: Context) {
    // Restore environment
    while (currentEnvironment(context).id !== command.env.id) {
      popEnvironment(context)
    }
  },

  [InstrType.LOCAL_ENVIRONMENT]: function (command: LocalEnvInstr, context: Context) {
    popLocalEnvironment(context)
  },

  [InstrType.END]: function (command: Instr, context: Context, agenda: Agenda, stash: Stash) {
    if (stash.size() !== 0) {
      // TODO: replace with runtime error
      console.error('program ends with non-empty stash!')
    }
  },

  [InstrType.TAIL_CALL]: function (
    command: TailCallInstr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    evaluateCallInstr(command, context, agenda, stash)
  },

  [InstrType.LIST]: function (command: ListInstr, context: Context, agenda: Agenda, stash: Stash) {
    const elements: es.SmlValue[] = []
    for (let i = 0; i < command.arity; i++) {
      elements.push(stash.pop())
    }
    const list: es.List = {
      type: 'List',
      smlType: command.srcNode.smlType as es.ListType,
      value: elements.reverse()
    }
    stash.push(list)
  },

  [InstrType.TUPLE]: function (
    command: TupleInstr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const elements: es.SmlValue[] = []
    for (let i = 0; i < command.arity; i++) {
      elements.push(stash.pop())
    }
    elements.reverse()
    const tuple: es.Tuple = {
      type: 'Tuple',
      smlType: command.srcNode.smlType as es.TupleType,
      value: elements
    }
    stash.push(tuple)
  }
}
