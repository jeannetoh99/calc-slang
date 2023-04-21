import { concat, isInteger } from 'lodash'

import { List, ListType, SmlValue, Tuple, TupleType, Type, VariableType } from '../ast'
import { DeclarationType, Value } from '../types'

export interface ArrayLike {
  replPrefix: string
  replSuffix: string
  replArrayContents: () => Value[]
}

export type ResultType = {
  name: string
  value: Value
  type: string
}

const formatResult = (result: ResultType) => {
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

const stringifyValue = (value: SmlValue): Value => {
  const type = value.smlType.type

  switch (type) {
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
      const listType = list.smlType as ListType
      list.value.forEach(elem => (elem.smlType = listType.elementType))
      return '[' + list.value.map(stringifyValue) + ']'
    }
    case 'tuple': {
      const tuple = value as Tuple
      const tupleType = tuple.smlType as TupleType
      for (let i = 0; i < tuple.value.length; i++) {
        tuple.value[i].smlType = tupleType.elementTypes[i]
      }
      return '(' + tuple.value.map(stringifyValue) + ')'
    }
    default: {
      return value.value
    }
  }
}

const extractDeclaration = (declaration: DeclarationType): ResultType => {
  declaration.value.smlType = declaration.smlType

  return {
    name: declaration.name,
    value: stringifyValue(declaration.value),
    type: stringifyVarTypes(declaration.smlType) + stringifyType(declaration.smlType)
  }
}

export const formatResults = (result: ResultType[]) => {
  return result.map(formatResult).join('\n')
}

export const stringify = (value: Value): string => {
  console.log(value)
  return value.map(extractDeclaration).map(formatResult).join('\n')
}
