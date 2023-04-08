import { Context } from '..'
import * as es from '../ast'
import { boolType, intType, literal, realType, stringType } from '../utils/astCreator'
import {
  checkIsBool,
  checkIsInt,
  checkIsNum,
  checkIsReal,
  checkIsString,
  checkIsType
} from '../utils/rttc'
import { BuiltinInstr } from './types'
import { handleRuntimeError } from './utils'

const side = (id: string) => {
  return ' as operand for ' + id
}

export const checkBuiltin = (
  context: Context,
  builtin: BuiltinInstr,
  args: es.Literal[],
  node: es.Node
) => {
  let type: es.Type
  for (const [i, arg] of args.entries()) {
    let error
    switch (builtin.identifier) {
      case '+':
      case '-':
      case '*':
      case '<>':
      case '<':
      case '>':
      case '<=':
      case '>=':
      case '=':
      case '~':
        error =
          i == 0
            ? checkIsNum(node, side(builtin.identifier), arg)
            : checkIsType(node, side(builtin.identifier), arg, args[0].smlType)
        break
      case 'div':
      case 'mod':
      case 'real':
        error = checkIsInt(node, side(builtin.identifier), arg)
        break
      case 'floor':
      case '/':
        error = checkIsReal(node, side(builtin.identifier), arg)
        break
      case 'not':
      case 'andalso':
      case 'orelse':
        error = checkIsBool(node, side(builtin.identifier), arg)
        break
      case 'size':
      case '^':
        error = checkIsString(node, side(builtin.identifier), arg)
        break
      default:
        break
    }
    if (error) {
      return handleRuntimeError(context, error)
    }
  }
  return
}

export const builtinInfixFunctions = {
  '+': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value + y.value, x.smlType),
  '-': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value - y.value, x.smlType),
  '*': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value * y.value, x.smlType),
  '/': (x: es.RealLiteral, y: es.RealLiteral) => literal(x.value / y.value, realType()),
  div: (x: es.IntLiteral, y: es.IntLiteral) => literal(Math.floor(x.value / y.value), intType()),
  mod: (x: es.IntLiteral, y: es.IntLiteral) => literal(x.value % y.value, intType()),
  '<>': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value != y.value, boolType()),
  '<': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value < y.value, boolType()),
  '>': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value > y.value, boolType()),
  '=': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value === y.value, boolType()),
  '<=': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value <= y.value, boolType()),
  '>=': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value >= y.value, boolType()),
  andalso: (x: es.BoolLiteral, y: es.BoolLiteral) => literal(x.value && y.value, boolType()),
  orelse: (x: es.BoolLiteral, y: es.BoolLiteral) => literal(x.value || y.value, boolType()),
  '^': (x: es.StringLiteral, y: es.StringLiteral) => literal(x.value + y.value, stringType())
}

export const builtinFunctions = {
  '~': (x: es.NumLiteral) => literal(-x.value, x.smlType),
  not: (x: es.BoolLiteral) => literal(!x.value, boolType()),
  floor: (x: es.RealLiteral) => literal(x.value, intType()),
  real: (x: es.IntLiteral) => literal(x.value, realType()),
  size: (x: es.StringLiteral) => literal(x.value.length, intType())
}

export const builtinMapping = {
  ...builtinInfixFunctions,
  ...builtinFunctions
}

export const applyBuiltin = (op: string, args: any) => {
  return builtinMapping[op](...args)
}
