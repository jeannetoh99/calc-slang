import * as es from '../ast'
import { BlockExpression } from '../types'

export const locationDummyNode = (line: number, column: number) =>
  literal('Dummy', { start: { line, column }, end: { line, column } })

export const identifier = (name: string, loc?: es.SourceLocation | null): es.Identifier => ({
  type: 'Identifier',
  name,
  loc
})

export const literal = (
  value: string | number | boolean | null,
  loc?: es.SourceLocation | null
): es.Literal => ({
  type: 'Literal',
  value,
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

export const mutateToExpressionStatement = (node: es.Node, expr: es.Expression) => {
  node.type = 'ExpressionStatement'
  node = node as es.ExpressionStatement
  node.expression = expr
}

export const binaryExpression = (
  operator: es.BinaryOperator,
  left: es.Expression,
  right: es.Expression,
  loc?: es.SourceLocation | null
): es.BinaryExpression => ({
  type: 'BinaryExpression',
  operator,
  left,
  right,
  loc
})

export const unaryExpression = (
  operator: es.UnaryOperator,
  argument: es.Expression,
  loc?: es.SourceLocation | null
): es.UnaryExpression => ({
  type: 'UnaryExpression',
  operator,
  prefix: true,
  argument,
  loc
})

// primitive: undefined is a possible value
export const primitive = (value: any): es.Expression => {
  return value === undefined ? identifier('undefined') : literal(value)
}

export const blockExpression = (
  body: es.Statement[],
  loc?: es.SourceLocation | null
): BlockExpression => ({
  type: 'BlockExpression',
  body,
  loc
})
