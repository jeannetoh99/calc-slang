import { isInteger } from 'lodash'

import { List, ListType, SmlValue, Tuple, TupleType, Type, VariableType } from '../ast'
import { ProgramResult, ResultType, Value } from '../types'

export interface ArrayLike {
  replPrefix: string
  replSuffix: string
  replArrayContents: () => Value[]
}

export type DecResType = {
  name: string
  value: Value
  type: string
}

const formatResult = (result: DecResType) => {
  return ['val', result.name, '=', result.value, ':', result.type].join(' ') + ';'
}

export const extractVariableTypes = (type: Type): VariableType[] => {
  switch (type.type) {
    case 'function':
      return extractVariableTypes(type.paramType).concat(extractVariableTypes(type.returnType))
    case 'list':
      return extractVariableTypes(type.elementType)
    case 'tuple':
      return type.elementTypes.flatMap(elemType => extractVariableTypes(elemType))
    case 'variable':
      return [type]
    default:
      return []
  }
}

export const stringifyVarTypes = (type: Type): string => {
  const varTypes = extractVariableTypes(type)
  let res = ''
  if (varTypes.length != 0) {
    res = '\u2200 ' + stringifyType(varTypes[0])
    for (let i = 1; i < varTypes.length; i++) {
      res += ',' + stringifyType(varTypes[i])
    }
    res += ' . '
  }
  return res
}

export const stringifyType = (type: Type, inner: boolean = false): string => {
  return type.type === 'function'
    ? (type.paramType ? stringifyType(type.paramType) : '?') +
        ' -> ' +
        (type.returnType ? stringifyType(type.returnType) : '?')
    : type.type === 'list'
    ? (type.elementType ? stringifyType(type.elementType) : '?') + ' list'
    : type.type === 'tuple'
    ? (inner ? '(' : '') +
      type.elementTypes.map(elemType => stringifyType(elemType, true)).join(' * ') +
      (inner ? ')' : '')
    : type.type === 'variable'
    ? "'v" + type.id
    : type.type
}

const stringifyValue = (value: SmlValue, type: Type): Value => {
  switch (type.type) {
    case 'string': {
      return '"' + value.value + '"'
    }
    case 'unit': {
      return '()'
    }
    case 'real': {
      return value.value + (isInteger(value.value) ? '.0' : '')
    }
    case 'list': {
      const list = value as List
      return '[' + list.value.map(val => stringifyValue(val, type.elementType)) + ']'
    }
    case 'tuple': {
      const tuple = value as Tuple
      const elementStrings = []
      for (let i = 0; i < tuple.value.length; i++) {
        elementStrings.push(stringifyValue(tuple.value[i], type.elementTypes[i]))
      }
      return '(' + elementStrings + ')'
    }
    default: {
      return value.value
    }
  }
}

const extractMatch = (name: string, value: Value, type: Type): DecResType => {
  return {
    name,
    value: stringifyValue(value, type),
    type: stringifyVarTypes(type) + stringifyType(type)
  }
}

const extractDeclaration = (res: ResultType, type: Type): DecResType[] => {
  console.log(res, type)
  if (res.pat.type === 'Identifier') {
    return [extractMatch(res.pat.name, res.value, type)]
  }

  if (res.pat.type === 'TuplePattern') {
    const matches: DecResType[] = []
    const elemTypes = (type as TupleType).elementTypes
    const patterns = res.pat.elements
    const values = (res.value as Tuple).value
    for (let i = 0; i < res.pat.elements.length; i++) {
      const pat = patterns[i]
      if (pat.type === 'Identifier') {
        matches.push(extractMatch(pat.name, values[i], elemTypes[i]))
      }
    }
    return matches
  }

  // If pattern is wildcard or literal
  return []
}

export const formatResults = (result: DecResType[]) => {
  return result.map(formatResult).join('\n')
}

export const stringify = (value: Value): string => {
  const programResult = value as ProgramResult
  const res = []
  for (let i = 0; i < programResult.values.length; i++) {
    res.push(...extractDeclaration(programResult.values[i], programResult.types[i]))
  }
  return res.map(formatResult).join('\n')
}
