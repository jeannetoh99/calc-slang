import { Context } from '..'
import * as es from '../ast'
import { literal } from '../utils/astCreator'
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
            : checkIsType(node, side(builtin.identifier), arg, args[0].litType)
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
  '+': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value + y.value, x.litType),
  '-': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value - y.value, x.litType),
  '*': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value * y.value, x.litType),
  '/': (x: es.RealLiteral, y: es.RealLiteral) => literal(x.value / y.value, 'real'),
  div: (x: es.IntLiteral, y: es.IntLiteral) => literal(Math.floor(x.value / y.value), 'int'),
  mod: (x: es.IntLiteral, y: es.IntLiteral) => literal(x.value % y.value, 'int'),
  '<>': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value != y.value, 'bool'),
  '<': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value < y.value, 'bool'),
  '>': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value > y.value, 'bool'),
  '=': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value === y.value, 'bool'),
  '<=': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value <= y.value, 'bool'),
  '>=': (x: es.NumLiteral, y: es.NumLiteral) => literal(x.value >= y.value, 'bool'),
  andalso: (x: es.BoolLiteral, y: es.BoolLiteral) => literal(x.value && y.value, 'bool'),
  orelse: (x: es.BoolLiteral, y: es.BoolLiteral) => literal(x.value || y.value, 'bool'),
  '^': (x: es.StringLiteral, y: es.StringLiteral) => literal(x.value + y.value, 'string')
}

export const builtinFunctions = {
  '~': (x: es.NumLiteral) => literal(-x.value, x.litType),
  not: (x: es.BoolLiteral) => literal(!x.value, 'bool'),
  floor: (x: es.RealLiteral) => literal(x.value, 'int'),
  real: (x: es.IntLiteral) => literal(x.value, 'real'),
  size: (x: es.StringLiteral) => literal(x.value.length, 'int')
}

export const builtinMapping = {
  ...builtinInfixFunctions,
  ...builtinFunctions
}

export const applyBuiltin = (op: string, args: any) => {
  return builtinMapping[op](...args)
}
