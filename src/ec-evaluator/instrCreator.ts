/**
 * Utility functions for creating the various agenda instructions.
 */

import * as es from '../ast'
import { Environment } from '../types'
import { functionType } from '../utils/astCreator'
import {
  AssmtInstr,
  BranchInstr,
  BuiltinInstr,
  CallInstr,
  ClosureInstr,
  EnvInstr,
  Instr,
  InstrType,
  ListInstr,
  LocalEnvInstr,
  TailCallInstr
} from './types'

export const assmtInstr = (
  symbol: string,
  declaration: boolean,
  srcNode: es.Node,
  env: Environment
): AssmtInstr => ({
  instrType: InstrType.ASSIGNMENT,
  symbol,
  declaration,
  srcNode,
  env
})

export const popInstr = (): Instr => ({ instrType: InstrType.POP })

export const branchInstr = (
  consequent: es.Expression,
  alternate: es.Expression,
  srcNode: es.Node
): BranchInstr => ({
  instrType: InstrType.BRANCH,
  consequent,
  alternate,
  srcNode
})

export const builtinInstr = (
  identifier: string,
  arity: number,
  isInfix: boolean
): BuiltinInstr => ({
  instrType: InstrType.BUILTIN,
  identifier,
  arity,
  isInfix
})

export const callInstr = (arity: number, srcNode: es.ApplicationExpression): CallInstr => ({
  instrType: InstrType.CALL,
  arity,
  srcNode
})

export const closureInstr = (env: Environment, srcNode: es.LambdaExpression): ClosureInstr => ({
  instrType: InstrType.CLOSURE,
  type: 'function',
  smlType: srcNode.smlType,
  value: 'fn',
  env,
  srcNode
})

export const envInstr = (env: Environment): EnvInstr => ({
  instrType: InstrType.ENVIRONMENT,
  env
})

export const localEnvInstr = (): LocalEnvInstr => ({
  instrType: InstrType.LOCAL_ENVIRONMENT
})

export const pushUndefIfNeededInstr = (): Instr => ({
  instrType: InstrType.PUSH_UNDEFINED_IF_NEEDED
})

export const tailCallInstr = (arity: number, srcNode: es.ApplicationExpression): TailCallInstr => ({
  instrType: InstrType.TAIL_CALL,
  arity,
  srcNode
})

export const listInstr = (arity: number, srcNode: es.ListExpression): ListInstr => ({
  instrType: InstrType.LIST,
  arity,
  srcNode
})
