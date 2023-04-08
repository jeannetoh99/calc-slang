import { isInteger } from 'lodash'

import { SmlValue, Type } from '../ast'
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

export const extractType = (type: Type): string => {
  return type.type === 'function'
    ? (type.paramType ? extractType(type.paramType) : '?') +
        ' -> ' +
        (type.returnType ? extractType(type.returnType) : '?')
    : type.type === 'list'
    ? (type.elementType ? extractType(type.elementType) : '?') + ' list'
    : type.type
}

const extractValue = (value: SmlValue): Value => {
  const type = value.smlType.type

  return type === 'string'
    ? '"' + value.value + '"'
    : type === 'unit'
    ? '()'
    : type === 'real' && isInteger(value.value)
    ? value.value + '.0'
    : type === 'list' && Array.isArray(value.value)
    ? '[' + value.value.map(extractValue) + ']'
    : value.value
}

const extractDeclaration = (declaration: DeclarationType): ResultType => {
  return {
    name: declaration.name,
    value: extractValue(declaration.value),
    type: extractType(declaration.value.smlType)
  }
}

export const formatResults = (result: ResultType[]) => {
  return result.map(formatResult).join('\n')
}

export const stringify = (value: Value): string => {
  return value.map(extractDeclaration).map(formatResult).join('\n')
}
