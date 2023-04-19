import { Context } from '..'
import * as es from '../ast'
import {
  boolType,
  intType,
  list,
  listType,
  literal,
  realType,
  stringType
} from '../utils/astCreator'

// const side = (id: string) => {
//   return ' as operand for ' + id
// }

// export const checkBuiltin = (
//   context: Context,
//   builtin: BuiltinInstr,
//   args: es.SmlValue[],
//   node: es.Node
// ) => {
//   let type: es.Type

//   let error
//   switch (builtin.identifier) {
//     case '+':
//     case '-':
//     case '*':
//     case '<>':
//     case '<':
//     case '>':
//     case '<=':
//     case '>=':
//     case '=':
//     case '~':
//       error = checkIsNum(node, side(builtin.identifier), args[0])
//       for (const arg of args) {
//         if (error) break
//         error = checkIsType(node, side(builtin.identifier), arg, args[0].smlType)
//       }
//       break
//     case 'div':
//     case 'mod':
//     case 'real':
//       for (const arg of args) {
//         error = checkIsInt(node, side(builtin.identifier), arg)
//         if (error) break
//       }
//       break
//     case 'floor':
//     case '/':
//       for (const arg of args) {
//         error = checkIsReal(node, side(builtin.identifier), arg)
//         if (error) break
//       }
//       break
//     case 'not':
//     case 'andalso':
//     case 'orelse':
//       for (const arg of args) {
//         error = checkIsBool(node, side(builtin.identifier), arg)
//         if (error) break
//       }
//       break
//     case 'size':
//     case '^':
//       for (const arg of args) {
//         error = checkIsString(node, side(builtin.identifier), arg)
//         if (error) break
//       }
//       break
//     case '@':
//       for (const arg of args) {
//         error = checkIsList(node, side(builtin.identifier), arg)
//         if (error) break
//       }
//       if (error) break
//       error = checkIsTypeEqual(node, side(builtin.identifier), args[0].smlType, args[1].smlType)
//       break
//     case '::':
//       const listType = args[args.length - 1].smlType as es.ListType
//       if (listType.elementType == undefined) break
//       error = checkIsType(node, side(builtin.identifier), args[0], listType.elementType)
//       break
//     default:
//       break
//   }
//   if (error) {
//     return handleRuntimeError(context, error)
//   }
//   return
// }

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
  '^': (x: es.StringLiteral, y: es.StringLiteral) => literal(x.value + y.value, stringType()),
  '@': (x: es.List, y: es.List) => list([...x.value, ...y.value], x.smlType),
  '::': (x: es.SmlValue, y: es.List) =>
    list([x, ...y.value], y.smlType.elementType ? y.smlType : listType(x.smlType))
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

export const builtinTypeMapping = {

}

export const applyBuiltin = (op: string, args: any) => {
  return builtinMapping[op](...args)
}
