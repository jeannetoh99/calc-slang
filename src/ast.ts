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
  NodeArray: NodeArray
  Program: Program
  Statement: Statement
  DeclarationList: DeclarationList
  ValueDeclarator: ValueDeclarator
}

export type Node = NodeMap[keyof NodeMap]

export interface NodeArray extends BaseNode {
  type: 'NodeArray'
  nodes: Array<BaseNode>
}

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

export type Statement =
  | BlockStatement
  | ExpressionStatement
  | EmptyStatement
  | Declaration
  | DeclarationList

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

export type Declaration = ValueDeclaration | FunctionDeclaration

type BaseDeclaration = BaseStatement

export interface ValueDeclaration extends BaseDeclaration {
  type: 'ValueDeclaration'
  declarations: Array<ValueDeclarator>
}

export interface FunctionDeclaration extends BaseDeclaration {
  type: 'FunctionDeclaration'
  id: Identifier
  params: Array<Pattern>
  body: Expression
}
export interface ValueDeclarator extends BaseNode {
  type: 'ValueDeclarator'
  id: Identifier
  init?: Expression | null | undefined
}

export interface DeclarationList extends BaseStatement {
  type: 'DeclarationList'
  declarations: Array<Declaration>
}

export interface ExpressionMap {
  CallExpression: CallExpression
  ConditionalExpression: ConditionalExpression
  Identifier: Identifier
  LambdaExpression: LambdaExpression
  LetExpression: LetExpression
  Literal: Literal
  SequenceExpression: SequenceExpression
}

export type Type = 'int' | 'bool' | 'real' | 'string'

export type Expression = ExpressionMap[keyof ExpressionMap]

export interface BaseExpression extends BaseNode {
  annotatedType?: Type
  inferredType?: Type
}

export interface PatternMap {
  Identifier: Identifier
  Literal: Literal
}

export type Pattern = PatternMap[keyof PatternMap]

export interface BasePattern extends BaseNode {
  annotedType?: Type
  inferredType?: Type
}

export interface CallExpression extends BaseExpression {
  type: 'CallExpression'
  callee: Expression
  args: Array<Expression>
  isInfix: boolean
}

export interface ConditionalExpression extends BaseExpression {
  type: 'ConditionalExpression'
  pred: Expression
  cons: Expression
  alt: Expression
}

export interface LambdaExpression extends BaseExpression {
  type: 'LambdaExpression'
  params: Array<Pattern>
  body: Expression
}

export interface LetExpression extends BaseExpression {
  type: 'LetExpression'
  declarations: DeclarationList
  body: SequenceExpression
}

export interface SequenceExpression extends BaseExpression {
  type: 'SequenceExpression'
  expressions: Expression[]
}

export interface Identifier extends BaseExpression, BasePattern {
  type: 'Identifier'
  name: string
}

export type Literal = BoolLiteral | StringLiteral | IntLiteral | RealLiteral

export interface SimpleLiteral extends BaseExpression, BasePattern {
  type: 'Literal'
  raw?: string | undefined
}

export interface BoolLiteral extends SimpleLiteral {
  litType: 'bool'
  value: boolean
}

export interface StringLiteral extends SimpleLiteral {
  litType: 'string'
  value: string
}

export interface IntLiteral extends SimpleLiteral {
  litType: 'int'
  value: number
}

export interface RealLiteral extends SimpleLiteral {
  litType: 'real'
  value: number
}

export type NumLiteral = IntLiteral | RealLiteral
