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
  '+': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value + y.value, t),
  '-': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value - y.value, t),
  '*': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value * y.value, t),
  '/': (x: es.RealLiteral, y: es.RealLiteral) => 
    (t: es.Type) => literal(x.value / y.value, t),
  div: (x: es.IntLiteral, y: es.IntLiteral) => 
    (t: es.Type) => literal(Math.floor(x.value / y.value), t),
  mod: (x: es.IntLiteral, y: es.IntLiteral) => 
    (t: es.Type) => literal(x.value % y.value, t),
  '<>': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value !== y.value, t),
  '<': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value < y.value, t),
  '>': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value > y.value, t),
  '=': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value === y.value, t),
  '<=': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value <= y.value, t),
  '>=': (x: es.NumLiteral, y: es.NumLiteral) => 
    (t: es.Type) => literal(x.value >= y.value, t),
  andalso: (x: es.BoolLiteral, y: es.BoolLiteral) => 
    (t: es.Type) => literal(x.value && y.value, t),
  orelse: (x: es.BoolLiteral, y: es.BoolLiteral) => 
    (t: es.Type) => literal(x.value || y.value, t),
  '^': (x: es.StringLiteral, y: es.StringLiteral) => 
    (t: es.Type) => literal(x.value + y.value, t),
  '@': (x: es.List, y: es.List) => 
    (t: es.Type) => list([...x.value, ...y.value], t),
  '::': (x: es.SmlValue, y: es.List) => 
    (t: es.Type) => list([x, ...y.value], t)
}

export const builtinFunctions = {
  '~': (x: es.NumLiteral) => (t: es.Type) => literal(-x.value, t),
  not: (x: es.BoolLiteral) => (t: es.Type) => literal(!x.value, t),
  floor: (x: es.RealLiteral) => (t: es.Type) => literal(x.value, t),
  real: (x: es.IntLiteral) => (t: es.Type) => literal(x.value, t),
  size: (x: es.StringLiteral) => (t: es.Type) => literal(x.value.length, t)
}

export const builtinMapping = {
  ...builtinInfixFunctions,
  ...builtinFunctions
}

export const builtinTypeMapping = {}

export const applyBuiltin = (op: string, args: any, t: es.Type): es.SmlValue => {
  return builtinMapping[op](...args)(t)
}
