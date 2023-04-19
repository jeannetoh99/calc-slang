import * as es from '../ast'
import {
  boolType,
  functionType,
  getCurrVarId,
  getNextVarId,
  intType,
  list,
  listType,
  literal,
  realType,
  stringType,
  tupleType,
  variableType
} from '../utils/astCreator'

export const builtinFunctionTypes = {
  '+': functionType(tupleType([intType(), intType()]), intType()),
  '-': functionType(tupleType([intType(), intType()]), intType()),
  '*': functionType(tupleType([intType(), intType()]), intType()),
  '<>': functionType(tupleType([intType(), intType()]), boolType()),
  '<': functionType(tupleType([intType(), intType()]), boolType()),
  '>': functionType(tupleType([intType(), intType()]), boolType()),
  '<=': functionType(tupleType([intType(), intType()]), boolType()),
  '>=': functionType(tupleType([intType(), intType()]), boolType()),
  '=': functionType(tupleType([intType(), intType()]), boolType()),
  '~': functionType(tupleType([intType()]), intType()),
  div: functionType(tupleType([intType(), intType()]), intType()),
  mod: functionType(tupleType([intType(), intType()]), intType()),
  real: functionType(tupleType([intType()]), realType()),
  floor: functionType(tupleType([realType()]), intType()),
  '/': functionType(tupleType([realType(), realType()]), realType()),
  not: functionType(tupleType([boolType()]), boolType()),
  andalso: functionType(tupleType([boolType(), boolType()]), boolType()),
  orelse: functionType(tupleType([boolType(), boolType()]), boolType()),
  size: functionType(tupleType([stringType()]), intType()),
  '^': functionType(tupleType([stringType(), stringType()]), stringType()),
  '@': functionType(
    tupleType([listType(variableType(getNextVarId())), listType(variableType(getCurrVarId()))]),
    listType(variableType(getCurrVarId()))
  ),
  '::': functionType(
    tupleType([variableType(getNextVarId()), listType(variableType(getCurrVarId()))]),
    listType(variableType(getCurrVarId()))
  )
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

export const builtinTypeMapping = {}

export const applyBuiltin = (op: string, args: any) => {
  return builtinMapping[op](...args)
}
