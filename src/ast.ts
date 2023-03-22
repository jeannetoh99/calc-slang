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

export type Statement = ExpressionStatement | EmptyStatement

type BaseStatement = BaseNode

export interface EmptyStatement extends BaseStatement {
  type: 'EmptyStatement'
}

export interface ExpressionStatement extends BaseStatement {
  type: 'ExpressionStatement'
  expression: Expression
}

export interface ExpressionMap {
  BinaryExpression: BinaryExpression
  Identifier: Identifier
  Literal: Literal
  SequenceExpression: SequenceExpression
  UnaryExpression: UnaryExpression
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export type BaseExpression = BaseNode

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

export interface UnaryExpression extends BaseExpression {
  type: 'UnaryExpression'
  operator: UnaryOperator
  prefix: true
  argument: Expression
}

export interface BinaryExpression extends BaseExpression {
  type: 'BinaryExpression'
  operator: BinaryOperator
  left: Expression
  right: Expression
}

export type Pattern = Identifier

type BasePattern = BaseNode

export interface Identifier extends BaseNode, BaseExpression, BasePattern {
  type: 'Identifier'
  name: string
}

export type Literal = SimpleLiteral

export interface SimpleLiteral extends BaseNode, BaseExpression {
  type: 'Literal'
  value: string | boolean | number | null
  raw?: string | undefined
}

export type UnaryOperator = '!'

export type BinaryOperator = 
    '+' | '-' | '*' | '/' | 'div' | 'mod' |
    '<>' | '<' | '>' | '=' | '<=' | '>=';
