/**
 * This interpreter implements an explicit-control evaluator.
 *
 * Heavily adapted from https://github.com/source-academy/JSpike/
 * and the legacy interpreter at '../interpreter/interpreter'
 */

/* tslint:disable:max-classes-per-file */
import * as es from '../ast'
import * as errors from '../errors/errors'
import { arity } from '../stdlib/misc'
import { Context, Result, Value } from '../types'
import * as rttc from '../utils/rttc'
import { applyBuiltin, builtinInfixFunctions, builtinMapping } from './builtin'
import * as instr from './instrCreator'
import {
  AgendaItem,
  AppInstr,
  AssmtInstr,
  BranchInstr,
  BuiltinInstr,
  ClosureInstr,
  CmdEvaluator,
  ECError,
  EnvInstr,
  Instr,
  InstrType
} from './types'
import {
  checkNumberOfArguments,
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
  populateBuiltInIdentifiers,
  pushEnvironment,
  Stack
} from './utils'

/**
 * The agenda is a list of commands that still needs to be executed by the machine.
 * It contains syntax tree nodes or instructions.
 */
export class Agenda extends Stack<AgendaItem> {
  public constructor(program: es.Program) {
    super()
    // Evaluation of last statement is undefined if stash is empty
    this.push(instr.pushUndefIfNeededInstr())

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
    const environment = createBlockEnvironment(context, 'globalEnvironment')
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
  return stash.peek()
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
    const environment = createBlockEnvironment(context, 'programEnvironment')
    pushEnvironment(context, environment)
    declareFunctionsAndVariables(context, command)
    agenda.push(...handleSequence(command.body))
  },

  BlockStatement: function (command: es.BlockStatement, context: Context, agenda: Agenda) {
    // To restore environment after block ends
    agenda.push(instr.envInstr(currentEnvironment(context)))

    const environment = createBlockEnvironment(context, 'blockEnvironment')
    pushEnvironment(context, environment)
    declareFunctionsAndVariables(context, command)

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
    const declaration: es.ValueDeclarator = command.declarations[0]
    const id = declaration.id as es.Identifier

    // Parser enforces initialisation during variable declaration
    const init = declaration.init!

    agenda.push(instr.assmtInstr(id.name, true, command))
    agenda.push(init)
  },

  FunctionDeclaration: function (
    command: es.FunctionDeclaration,
    context: Context,
    agenda: Agenda
  ) {
    const lambdaExpression: es.LambdaExpression = {
      type: 'LambdaExpression',
      params: command.params,
      body: command.body
    }
    agenda.push(instr.assmtInstr(command.id.name, true, command))
    agenda.push(lambdaExpression)
  },

  /**
   * Expressions
   */

  Literal: function (command: es.Literal, context: Context, agenda: Agenda, stash: Stash) {
    stash.push(command.value)
  },

  Identifier: function (command: es.Identifier, context: Context, agenda: Agenda, stash: Stash) {
    stash.push(getVariable(context, command.name, command))
  },

  CallExpression: function (
    command: es.CallExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    agenda.push(instr.appInstr(command.args.length, command))
    for (let i = command.args.length - 1; i >= 0; i--) {
      agenda.push(command.args[i])
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
    agenda.push(instr.branchInstr(command.cons, command.alt, command))
    agenda.push(command.pred)
  },

  LambdaExpression: function (
    command: es.LambdaExpression,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    stash.push(instr.closureInstr(currentEnvironment(context), command))
  },

  /**
   * Instructions
   */

  [InstrType.APPLICATION]: function (
    command: AppInstr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    checkStackOverFlow(context, agenda)
    // Get function arguments from the stash
    const args: Value[] = []
    for (let i = 0; i < command.arity; i++) {
      args.unshift(stash.pop())
    }

    const func: ClosureInstr | BuiltinInstr = stash.pop()
    if (func?.instrType === InstrType.CLOSURE) {
      const closure = func as ClosureInstr
      //  Check for number of arguments mismatch error
      checkNumberOfArguments(context, closure, args, command.srcNode)

      agenda.push(instr.envInstr(currentEnvironment(context)))
      agenda.push(closure.srcNode.body)

      const environment = createEnvironment(closure, args, command.srcNode)
      pushEnvironment(context, environment)
    } else if (func?.instrType == InstrType.BUILTIN) {
      const builtin = func as BuiltinInstr

      checkNumberOfArguments(context, builtin, args, command.srcNode)
      stash.push(applyBuiltin(builtin.identifier, args))
    } else {
      // not a callable function, error
      handleRuntimeError(context, new errors.CallingNonFunctionValue(func, command.srcNode))
    }
  },

  [InstrType.ASSIGNMENT]: function (
    command: AssmtInstr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const val = stash.peek()
    if (val?.instrType == InstrType.CLOSURE && command.symbol in builtinMapping) {
      handleRuntimeError(
        context,
        new errors.ReservedKeywordVariable(command.srcNode, command.symbol, 'builtin function')
      )
    }
    defineVariable(context, command.symbol, stash.peek(), false)
  },

  [InstrType.BRANCH]: function (
    command: BranchInstr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    const test = stash.pop()

    // Check if predicate is a boolean
    const error = rttc.checkIsBool(command.srcNode, test)
    if (error) {
      handleRuntimeError(context, error)
    }

    if (test) {
      agenda.push(command.consequent)
    } else {
      agenda.push(command.alternate)
    }
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

  [InstrType.PUSH_UNDEFINED_IF_NEEDED]: function (
    command: Instr,
    context: Context,
    agenda: Agenda,
    stash: Stash
  ) {
    if (stash.size() === 0) {
      stash.push(undefined)
    }
  }
}
