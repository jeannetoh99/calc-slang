import { uniqueId } from 'lodash'

import { Context } from '..'
import * as es from '../ast'
import * as errors from '../errors/errors'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { Environment, Frame, Value } from '../types'
import * as instr from './instrCreator'
import { AgendaItem } from './types'

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
    }
  }
}

export function defineVariable(
  context: Context,
  name: string,
  value: Value,
  constant = false,
  node: es.ValueDeclaration
) {
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
