import { uniqueId } from 'lodash'

import { Context } from '..'
import * as es from '../ast'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { arity } from '../stdlib/misc'
import { Environment, Frame, Value } from '../types'
import * as ast from '../utils/astCreator'
import { builtinFunctions, builtinInfixFunctions } from './builtin'
import * as instr from './instrCreator'
import { Agenda } from './interpreter'
import { AgendaItem, BuiltinInstr, ClosureInstr, Instr, InstrType } from './types'

/**
 * Stack is implemented for agenda and stash registers.
 */
interface IStack<T> {
  push(...items: T[]): void
  pop(): T | undefined
  peek(): T | undefined
  size(): number
}

export class Stack<T> implements IStack<T> {
  // Bottom of the array is at index 0
  private storage: T[] = []

  public constructor() {}

  public push(...items: T[]): void {
    for (const item of items) {
      this.storage.push(item)
    }
  }

  public pop(): T | undefined {
    return this.storage.pop()
  }

  public peek(): T | undefined {
    if (this.size() === 0) {
      return undefined
    }
    return this.storage[this.size() - 1]
  }

  public size(): number {
    return this.storage.length
  }
}

/**
 * Typeguard for esNode to distinguish between program statements and instructions.
 *
 * @param command An AgendaItem
 * @returns true if the AgendaItem is an esNode and false if it is an instruction.
 */
export const isNode = (command: AgendaItem): command is es.Node => {
  return (command as es.Node).type !== undefined
}

/**
 * Typeguard for esIdentifier. To verify if an esNode is an esIdentifier.
 *
 * @param node an esNode
 * @returns true if node is an esIdentifier, false otherwise.
 */
export const isIdentifier = (node: es.Node): node is es.Identifier => {
  return (node as es.Identifier).name !== undefined
}

/**
 * A helper function for handling sequences of statements.
 * Statements must be pushed in reverse order, and each statement is separated by a pop
 * instruction so that only the result of the last statement remains on stash.
 * Value producing statements have an extra pop instruction.
 *
 * @param seq Array of statements.
 * @returns Array of commands to be pushed into agenda.
 */
export const handleSequence = (seq: es.Statement[]): AgendaItem[] => {
  const result: AgendaItem[] = []
  let valueProduced = false
  for (const command of seq) {
    valueProduced ? result.push(instr.popInstr()) : (valueProduced = true)
    result.push(command)
  }
  return result.reverse()
}

/**
 * Environments
 */

export const currentEnvironment = (context: Context) => context.runtime.environments[0]

export const createEnvironment = (
  closure: ClosureInstr,
  args: Value[],
  callExpression: es.CallExpression
): Environment => {
  const id = uniqueId()
  const environment: Environment = {
    name: isIdentifier(callExpression.callee)
      ? callExpression.callee.name
      : 'anonymous closure ' + id,
    tail: closure.env,
    head: {},
    id,
    callExpression: {
      ...callExpression,
      args
    }
  }
  closure.srcNode.params.forEach((param, index) => {
    environment.head[(param as es.Identifier).name] = args[index]
  })
  return environment
}

export const popEnvironment = (context: Context) => context.runtime.environments.shift()

export const pushEnvironment = (context: Context, environment: Environment) => {
  context.runtime.environments.unshift(environment)
  context.runtime.environmentTree.insert(environment)
}

export const createBlockEnvironment = (
  context: Context,
  name = 'blockEnvironment',
  head: Frame = {}
): Environment => {
  return {
    name,
    tail: currentEnvironment(context),
    head,
    id: uniqueId()
  }
}
/**
 * Variables
 */

const DECLARED_BUT_NOT_YET_ASSIGNED = Symbol('Used to implement hoisting')

function declareIdentifier(context: Context, name: string, node: es.Node) {
  const environment = currentEnvironment(context)
  if (!environment.head.hasOwnProperty(name)) {
    environment.head[name] = DECLARED_BUT_NOT_YET_ASSIGNED
  }
  return environment
}

function declareVariables(context: Context, node: es.ValueDeclaration) {
  for (const declaration of node.declarations) {
    declareIdentifier(context, (declaration.id as es.Identifier).name, node)
  }
}

export function declareFunctionsAndVariables(context: Context, node: es.BlockStatement) {
  for (const statement of node.body) {
    switch (statement.type) {
      case 'ValueDeclaration':
        declareVariables(context, statement)
        break
      case 'FunctionDeclaration':
        declareIdentifier(context, (statement.id as es.Identifier).name, statement)
        break
    }
  }
}

export function defineVariable(context: Context, name: string, value: Value, constant = false) {
  const environment = currentEnvironment(context)

  Object.defineProperty(environment.head, name, {
    value,
    writable: !constant,
    enumerable: true
  })

  return environment
}

export const getVariable = (context: Context, name: string, node: es.Identifier) => {
  let environment: Environment | null = currentEnvironment(context)
  while (environment) {
    if (environment.head.hasOwnProperty(name)) {
      if (environment.head[name] === DECLARED_BUT_NOT_YET_ASSIGNED) {
        return handleRuntimeError(context, new errors.UnassignedVariable(name, node))
      } else {
        return environment.head[name]
      }
    } else {
      environment = environment.tail
    }
  }
  return handleRuntimeError(context, new errors.UndefinedVariable(name, node))
}

export const handleRuntimeError = (context: Context, error: RuntimeSourceError) => {
  context.errors.push(error)
  context.runtime.environments = context.runtime.environments.slice(
    -context.numberOfOuterEnvironments
  )
  throw error
}

export const checkNumberOfArguments = (
  context: Context,
  callee: ClosureInstr | BuiltinInstr,
  args: Value[],
  exp: es.CallExpression
) => {
  if (callee?.instrType === InstrType.CLOSURE) {
    // User-defined or Pre-defined functions
    const instr = callee as ClosureInstr
    const params = instr.srcNode?.params
    if (params.length !== args.length) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(exp, params.length, args.length)
      )
    }
  } else if (callee?.instrType === InstrType.BUILTIN) {
    const instr = callee as BuiltinInstr
    if (instr.arity !== args.length) {
      return handleRuntimeError(
        context,
        new errors.InvalidNumberOfArguments(exp, instr.arity, args.length)
      )
    }
  }
  return undefined
}

/**
 * This function can be used to check for a stack overflow.
 * The current limit is set to be an agenda size of 1.0 x 10^5, if the agenda
 * flows beyond this limit an error is thrown.
 * This corresponds to about 10mb of space according to tests ran.
 */
export const checkStackOverFlow = (context: Context, agenda: Agenda) => {
  if (agenda.size() > 100000) {
    const stacks: es.CallExpression[] = []
    let counter = 0
    for (
      let i = 0;
      counter < errors.MaximumStackLimitExceeded.MAX_CALLS_TO_SHOW &&
      i < context.runtime.environments.length;
      i++
    ) {
      if (context.runtime.environments[i].callExpression) {
        stacks.unshift(context.runtime.environments[i].callExpression!)
        counter++
      }
    }
    handleRuntimeError(
      context,
      new errors.MaximumStackLimitExceeded(context.runtime.nodes[0], stacks)
    )
  }
}

export const populateBuiltInIdentifiers = (context: Context) => {
  for (const key in builtinFunctions) {
    const builtinInstr = instr.builtinInstr(key, arity(builtinFunctions[key]), false)
    defineVariable(context, key, builtinInstr)
  }
}
