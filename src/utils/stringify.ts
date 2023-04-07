import { isInteger } from 'lodash'

import { DeclarationType, Value } from '../types'

export interface ArrayLike {
  replPrefix: string
  replSuffix: string
  replArrayContents: () => Value[]
}

const formatDeclaration = (declaration: DeclarationType) => {
  const type = declaration.value.type === 'Literal' ? declaration.value.litType : 'function'
  const val =
    declaration.value.type === 'Literal'
      ? declaration.value.litType === 'string'
        ? '"' + declaration.value.value + '"'
        : declaration.value.litType === 'real' && isInteger(declaration.value.value)
        ? declaration.value.value + '.0'
        : declaration.value.value
      : 'fn'

  return ['val', declaration.name, '=', val, ':', type].join(' ') + ';'
}

const formatDeclarations = (declarations: DeclarationType[]) => {
  return declarations.map(formatDeclaration).join('\n')
}

export const stringify = (value: Value): string => {
  return formatDeclarations(value)
}
