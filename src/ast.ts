interface BaseNode {
  // Every leaf interface that extends BaseNode must specify a type property.
  // The type property should be a string literal. For example, Identifier
  // has: `type: "Identifier"`
  type: string
  loc?: SourceLocation | null | undefined
  range?: [number, number] | undefined
}

interface NodeMap {
  Expression: Expression
  Identifier: Identifier
  Literal: Literal
  Pattern: Pattern
  Program: Program
  Statement: Statement
  ValueDeclarator: ValueDeclarator
}

export type Node = NodeMap[keyof NodeMap]

export interface SourceLocation {
  source?: string | null | undefined
  start: Position
  end: Position
}

export interface Position {
  /** >= 1 */
  line: number
  /** >= 0 */
  column: number
}

export interface Program extends BaseNode {
  type: 'Program'
  sourceType: 'script' | 'module'
  body: Array<Statement>
}

export type Statement = BlockStatement | ExpressionStatement | EmptyStatement | Declaration

type BaseStatement = BaseNode

export interface EmptyStatement extends BaseStatement {
  type: 'EmptyStatement'
}

export interface BlockStatement extends BaseStatement {
  type: 'BlockStatement'
  body: Array<Statement>
}

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

export type Declaration = ValueDeclaration

type BaseDeclaration = BaseStatement

export interface ValueDeclaration extends BaseDeclaration {
  type: 'ValueDeclaration'
  declarations: Array<ValueDeclarator>
}

export interface ValueDeclarator extends BaseNode {
  type: 'ValueDeclarator'
  id: Pattern
  init?: Expression | null | undefined
}

export interface ExpressionMap {
  Identifier: Identifier
  Literal: Literal
  SequenceExpression: SequenceExpression
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export type BaseExpression = BaseNode

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

export type Pattern = Identifier | ArrayPattern

type BasePattern = BaseNode

export interface Identifier extends BaseNode, BaseExpression, BasePattern {
  type: 'Identifier'
  name: string
}

export interface ArrayPattern extends BasePattern {
  type: 'ArrayPattern'
  elements: Array<Pattern | null>
}

export type Literal = SimpleLiteral

export interface SimpleLiteral extends BaseNode, BaseExpression {
  type: 'Literal'
  value: string | boolean | number | null
  raw?: string | undefined
}
