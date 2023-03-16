import * as es from '../estree'

import { AllowedDeclarations, BlockExpression } from '../types'

export const getVariableDecarationName = (decl: es.VariableDeclaration) =>
  (decl.declarations[0].id as es.Identifier).name

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

export const declaration = (
  name: string,
  kind: AllowedDeclarations,
  init: es.Expression,
  loc?: es.SourceLocation | null
): es.VariableDeclaration => ({
  type: 'VariableDeclaration',
  declarations: [
    {
      type: 'VariableDeclarator',
      id: identifier(name),
      init
    }
  ],
  kind,
  loc
})

export const constantDeclaration = (
  name: string,
  init: es.Expression,
  loc?: es.SourceLocation | null
) => declaration(name, 'const', init, loc)

export const callExpression = (
  callee: es.Expression,
  args: es.Expression[],
  loc?: es.SourceLocation | null
): es.CallExpression => ({
  type: 'CallExpression',
  callee,
  arguments: args,
  optional: false,
  loc
})

export const expressionStatement = (expression: es.Expression): es.ExpressionStatement => ({
  type: 'ExpressionStatement',
  expression
})

export const blockStatement = (body: es.Statement[]): es.BlockStatement => ({
  type: 'BlockStatement',
  body
})

export const program = (body: es.Statement[]): es.Program => ({
  type: 'Program',
  sourceType: 'module',
  body
})

export const mutateToCallExpression = (
  node: es.Node,
  callee: es.Expression,
  args: es.Expression[]
) => {
  node.type = 'CallExpression'
  node = node as es.CallExpression
  node.callee = callee
  node.arguments = args
}

export const mutateToAssignmentExpression = (
  node: es.Node,
  left: es.Pattern,
  right: es.Expression
) => {
  node.type = 'AssignmentExpression'
  node = node as es.AssignmentExpression
  node.operator = '='
  node.left = left
  node.right = right
}

export const mutateToExpressionStatement = (node: es.Node, expr: es.Expression) => {
  node.type = 'ExpressionStatement'
  node = node as es.ExpressionStatement
  node.expression = expr
}

export const mutateToReturnStatement = (node: es.Node, expr: es.Expression) => {
  node.type = 'ReturnStatement'
  node = node as es.ReturnStatement
  node.argument = expr
}

export const arrayExpression = (elements: es.Expression[]): es.ArrayExpression => ({
  type: 'ArrayExpression',
  elements
})

export const assignmentExpression = (
  left: es.Identifier,
  right: es.Expression
): es.AssignmentExpression => ({
  type: 'AssignmentExpression',
  operator: '=',
  left,
  right
})

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

export const variableDeclaration = (
  declarations: es.VariableDeclarator[],
  loc?: es.SourceLocation | null
): es.VariableDeclaration => ({
  type: 'VariableDeclaration',
  kind: 'const',
  declarations,
  loc
})

export const variableDeclarator = (
  id: es.Pattern,
  init: es.Expression,
  loc?: es.SourceLocation | null
): es.VariableDeclarator => ({
  type: 'VariableDeclarator',
  id,
  init,
  loc
})
