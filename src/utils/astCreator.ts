import * as es from '../ast'

// export const getValueDeclarationName = (decl: es.ValueDeclaration) =>
//   (decl.id as es.Identifier).name

let id: number = 0
export function getNextVarId(): number {
  return ++id
}
export function getCurrVarId(): number {
  return id
}

export const stringType = (): es.Type => new es.Type({
  type: 'string'
})

export const intType = (): es.Type => new es.Type({
  type: 'int'
})

export const realType = (): es.Type => new es.Type({
  type: 'real'
})

export const boolType = (): es.Type => new es.Type({
  type: 'bool'
})

export const unitType = (): es.Type => new es.Type({
  type: 'unit'
})

export const listType = (elementType: es.Type): es.Type => new es.Type({
  type: 'list',
  elementType
})

export const tupleType = (elementTypes: es.Type[]): es.Type => new es.Type({
  type: 'tuple',
  elementTypes
})

export const variableType = (id: number): es.Type => new es.Type({
  type: 'variable',
  id
})

export const functionType = (
  paramType: es.Type, returnType: es.Type
): es.Type => new es.Type({
  type: 'function',
  paramType,
  returnType
})

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy',stringType(), { start: { line, column }, end: { line, column } })

export const identifier = (
  name: string,
  smlType: es.Type,
  loc?: es.SourceLocation | null
): es.Identifier => ({
  type: 'Identifier',
  smlType,
  name,
  loc
})

export const literal = (
  value: any,
  smlType: es.Type,
  loc?: es.SourceLocation | null
): es.Literal => ({
  type: 'Literal',
  smlType,
  value,
  loc
})

export const list = (
  value: Array<es.SmlValue>,
  smlType: es.Type,
  loc?: es.SourceLocation | null
): es.List => ({
  type: 'List',
  smlType,
  value
})

export const expressionStatement = (
  expression: es.Expression,
  smlType: es.Type
): es.ExpressionStatement => ({
  type: 'ExpressionStatement',
  expression,
  smlType
})

export const program = (body: es.Statement[], smlType: es.Type): es.Program => ({
  type: 'Program',
  sourceType: 'module',
  smlType,
  body
})
