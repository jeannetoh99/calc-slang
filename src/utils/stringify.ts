import { isInteger } from 'lodash'

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

const extractDeclaration = (declaration: DeclarationType): ResultType => {
  const type = declaration.value.type === 'Literal' ? declaration.value.litType : 'function'
  const value =
    declaration.value.type === 'Literal'
      ? declaration.value.litType === 'string'
        ? '"' + declaration.value.value + '"'
        : declaration.value.litType === 'unit'
        ? '()'
        : declaration.value.litType === 'real' && isInteger(declaration.value.value)
        ? declaration.value.value + '.0'
        : declaration.value.value
      : 'fn'
  return { name: declaration.name, value, type }
}

export const formatResults = (result: ResultType[]) => {
  return result.map(formatResult).join('\n')
}

export const stringify = (value: Value): string => {
  return value.map(extractDeclaration).map(formatResult).join('\n')
}
