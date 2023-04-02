/**
 * Utility functions for creating the various agenda instructions.
 */

import * as es from '../ast'
import { Environment } from '../types'
import {
  AppInstr,
  AssmtInstr,
  BranchInstr,
  BuiltinInstr,
  ClosureInstr,
  EnvInstr,
  Instr,
  InstrType,
  LocalEnvInstr
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

export const appInstr = (arity: number, srcNode: es.CallExpression): AppInstr => ({
  instrType: InstrType.APPLICATION,
  arity,
  srcNode
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

export const closureInstr = (env: Environment, srcNode: es.LambdaExpression): ClosureInstr => ({
  instrType: InstrType.CLOSURE,
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
