import { Context } from '..'
import * as es from '../ast'
import { Environment } from '../types'
import { Agenda, Stash } from './interpreter'

export enum InstrType {
  ASSIGNMENT = 'Assignment',
  POP = 'Pop',
  ENVIRONMENT = 'Environment',
  PUSH_UNDEFINED_IF_NEEDED = 'PushUndefinedIfNeeded'
}

interface BaseInstr {
  instrType: InstrType
}

export interface AssmtInstr extends BaseInstr {
  symbol: string
  declaration: boolean
  srcNode: es.Node
}

export interface EnvInstr extends BaseInstr {
  env: Environment
}

export type Instr = BaseInstr | AssmtInstr | EnvInstr

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
