/**
 * Utility functions for creating the various agenda instructions.
 */

import * as es from '../ast'
import { Environment } from '../types'
import { AssmtInstr, BranchInstr, ClosureInstr, EnvInstr, Instr, InstrType } from './types'

export const assmtInstr = (symbol: string, declaration: boolean, srcNode: es.Node): AssmtInstr => ({
  instrType: InstrType.ASSIGNMENT,
  symbol,
  declaration,
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

export const closureInstr = (
  env: Environment,
  srcNode: es.Node
): ClosureInstr => ({
  instrType: InstrType.CLOSURE,
  env,
  srcNode
})

export const envInstr = (env: Environment): EnvInstr => ({
  instrType: InstrType.ENVIRONMENT,
  env
})

export const pushUndefIfNeededInstr = (): Instr => ({
  instrType: InstrType.PUSH_UNDEFINED_IF_NEEDED
})
