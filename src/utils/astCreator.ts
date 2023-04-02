import * as es from '../ast'

export const getValueDeclarationName = (decl: es.ValueDeclaration) =>
  (decl.declarations[0].id as es.Identifier).name

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', 'string', { start: { line, column }, end: { line, column } })

export const identifier = (name: string, loc?: es.SourceLocation | null): es.Identifier => ({
  type: 'Identifier',
  name,
  loc
})

export const literal = (
  value: any,
  litType: es.Type,
  loc?: es.SourceLocation | null
): es.Literal => ({
  type: 'Literal',
  value,
  litType,
  loc
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
