import { concat, isInteger } from 'lodash'

import { RawType, SmlValue, Type, VariableType } from '../ast'
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

export const extractVariableTypes = (type: RawType): VariableType[] => {
  switch (type.type) {
    case 'function':
      return extractVariableTypes(type.paramType.getType())
        .concat(extractVariableTypes(type.returnType.getType()))
    case 'list':
      return extractVariableTypes(type.elementType.getType())
    case 'tuple':
      return type.elementTypes
        .flatMap(elemType => extractVariableTypes(elemType.getType()))
    case 'variable':
      return [type]
    default:
      return []
  }
}

export const extractType = (type: RawType, inner: boolean = false): string => {
  return type.type === 'function'
    ? (type.paramType ? extractType(type.paramType.getType()) : '?') +
        ' -> ' +
        (type.returnType ? extractType(type.returnType.getType()) : '?')
    : type.type === 'list'
    ? (type.elementType ? extractType(type.elementType.getType()) : '?') + ' list'
    : type.type === 'tuple'
    ? (inner ? '(' : '') +
      type.elementTypes.map(elemType => extractType(elemType.getType(), true)).join(' * ') +
      (inner ? ')' : '')
    : type.type === 'variable'
    ? "'v" + type.id
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
    : type === 'tuple' && Array.isArray(value.value)
    ? '(' + value.value.map(extractValue) + ')'
    : value.value
}

const extractDeclaration = (declaration: DeclarationType): ResultType => {
  const varTypes = extractVariableTypes(declaration.value.smlType.getType())
  let varTypesString = ''
  if (varTypes.length != 0) {
    varTypesString = '\u2200 ' + extractType(varTypes[0])
    for (let i = 1; i < varTypes.length; i++) {
      varTypesString += ',' + extractType(varTypes[i])
    }
    varTypesString += ' . '
  }

  return {
    name: declaration.name,
    value: extractValue(declaration.value),
    type: varTypesString + extractType(declaration.value.smlType.getType())
  }
}

export const formatResults = (result: ResultType[]) => {
  return result.map(formatResult).join('\n')
}

export const stringify = (value: Value): string => {
  return value.map(extractDeclaration).map(formatResult).join('\n')
}
