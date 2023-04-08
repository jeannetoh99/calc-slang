import * as es from '../ast'

export const getValueDeclarationName = (decl: es.ValueDeclaration) =>
  (decl.declarations[0].id as es.Identifier).name

export const stringType = () : es.LiteralType => ({
  type: 'string'
})

export const intType = () : es.LiteralType => ({
  type: 'int'
})

export const realType = () : es.LiteralType => ({
  type: 'real'
})

export const boolType = () : es.LiteralType => ({
  type: 'bool'
})

export const unitType = () : es.LiteralType => ({
  type: 'unit'
})

export const listType = ( elementType?: es.Type ) : es.ListType => ({
  type: 'list',
  elementType
})

export const functionType = ( paramType?: es.Type, returnType?: es.Type ) : es.FunctionType => ({
  type: 'function',
  paramType,
  returnType
})

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', stringType(), { start: { line, column }, end: { line, column } })

export const identifier = (name: string, loc?: es.SourceLocation | null): es.Identifier => ({
  type: 'Identifier',
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
  loc,
})

export const expressionStatement = (expression: es.Expression): es.ExpressionStatement => ({
  type: 'ExpressionStatement',
  expression
})

export const program = (body: es.Statement[]): es.Program => ({
  type: 'Program',
  sourceType: 'module',
  body
})
