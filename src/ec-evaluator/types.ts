import { Context } from '..'
import * as es from '../ast'
import { Environment } from '../types'
import { Agenda, Stash } from './interpreter'

export enum InstrType {
  ASSIGNMENT = 'Assignment',
  BRANCH = 'Branch',
  BUILTIN = 'Builtin',
  CALL = 'Call',
  CLOSURE = 'Closure',
  END = 'End',
  ENVIRONMENT = 'Environment',
  LOCAL_ENVIRONMENT = 'LocalEnvironment',
  POP = 'Pop',
  TAIL_CALL = 'TailCall',
  TUPLE = 'Tuple',
  LIST = 'List'
}

interface BaseInstr {
  instrType: InstrType
}

export interface AssmtInstr extends BaseInstr {
  pat: es.Pattern
  declaration: boolean
  srcNode: es.Node
  env: Environment
}

export interface BranchInstr extends BaseInstr {
  consequent: es.Expression
  alternate: es.Expression
  srcNode: es.Node
}

export interface BuiltinInstr extends BaseInstr {
  identifier: string
  arity: number
  isInfix: boolean
}

export interface CallInstr extends BaseInstr {
  arity: number
  srcNode: es.ApplicationExpression
}

export interface ClosureInstr extends BaseInstr {
  type: 'function'
  smlType: es.FunctionType
  value: 'fn'
  env: Environment
  srcNode: es.LambdaExpression
}

export interface EnvInstr extends BaseInstr {
  env: Environment
}

export type LocalEnvInstr = BaseInstr

export interface TailCallInstr extends BaseInstr {
  arity: number
  srcNode: es.ApplicationExpression
}

export interface ListInstr extends BaseInstr {
  arity: number
  srcNode: es.ListExpression
}

export interface TupleInstr extends BaseInstr {
  arity: number
  srcNode: es.TupleExpression
}

export type Instr =
  | AssmtInstr
  | BaseInstr
  | BranchInstr
  | BuiltinInstr
  | CallInstr
  | ClosureInstr
  | EnvInstr
  | LocalEnvInstr
  | TailCallInstr
  | ListInstr
  | TupleInstr

export type AgendaItem = es.Node | Instr

export type CmdEvaluator = (
  command: AgendaItem,
  context: Context,
  agenda: Agenda,
  stash: Stash
) => void

// Special value that cannot be found on the stash so is safe to be used
// as an indicator of an error from running the ECE machine
export class ECError {}
