import * as es from '../ast'

// export const getValueDeclarationName = (decl: es.ValueDeclaration) =>
//   (decl.id as es.Identifier).name

let id: number = 0
export const getNextVarId = (): number => id++;
export const getCurrVarId = (): number => id;

export const stringType = (): es.LiteralType => ({
  type: 'string'
})

export const intType = (): es.LiteralType => ({
  type: 'int'
})

export const realType = (): es.LiteralType => ({
  type: 'real'
})

export const boolType = (): es.LiteralType => ({
  type: 'bool'
})

export const unitType = (): es.LiteralType => ({
  type: 'unit'
})

export const listType = (elementType: es.Type): es.ListType => ({
  type: 'list',
  elementType
})

export const tupleType = (elementTypes: es.Type[]): es.TupleType => ({
  type: 'tuple',
  elementTypes
})

export const variableType = (id: number): es.VariableType => ({
  type: 'variable',
  id,
})

export const functionType = (paramType: es.Type, returnType: es.Type): es.FunctionType => ({
  type: 'function',
  paramType,
  returnType
})

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', stringType(), { start: { line, column }, end: { line, column } })

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
  smlType: es.LiteralType,
  loc?: es.SourceLocation | null
): es.Literal => ({
  type: 'Literal',
  smlType,
  value,
  loc
})

export const list = (
  value: Array<es.SmlValue>,
  smlType: es.ListType,
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
