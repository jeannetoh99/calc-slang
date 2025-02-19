import * as es from '../ast'
import { InstrType } from '../ec-evaluator/types'
import { Environment } from '../types'

// export const getValueDeclarationName = (decl: es.ValueDeclaration) =>
//   (decl.id as es.Identifier).name

let id: number = 0
export function getNextVarId(): number {
  return ++id
}
export function getCurrVarId(): number {
  return id
}

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
  id
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
  loc?: es.SourceLocation | null,
  isPat: boolean = false
): es.Identifier => ({
  type: 'Identifier',
  smlType,
  name,
  loc,
  isPat
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

export const closure = (env: Environment, srcNode: es.LambdaExpression): es.Closure => ({
  instrType: InstrType.CLOSURE,
  type: 'Function',
  smlType: srcNode.smlType as es.FunctionType,
  value: 'fn',
  env,
  srcNode
})

export const expressionStatement = (
  expression: es.Expression,
  smlType: es.Type
): es.ExpressionStatement => ({
  type: 'ExpressionStatement',
  expression,
  smlType
})

export const tupleExpression = (
  elements: es.Expression[],
  loc?: es.SourceLocation
): es.TupleExpression => ({
  type: 'TupleExpression',
  smlType: tupleType(elements.map(elem => elem.smlType)),
  elements,
  loc
})

export const tuplePattern = (patterns: es.Pattern[], loc?: es.SourceLocation): es.TuplePattern => ({
  type: 'TuplePattern',
  smlType: tupleType(patterns.map(pat => pat.smlType)),
  elements: patterns,
  loc
})

export const program = (body: es.Statement[], smlType: es.Type): es.Program => ({
  type: 'Program',
  sourceType: 'module',
  smlType,
  body
})
