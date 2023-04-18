/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream, RecognitionException, Recognizer } from 'antlr4ts'
import { ANTLRErrorListener } from 'antlr4ts/ANTLRErrorListener'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import * as es from '../ast'
import { CalcLexer } from '../lang/CalcLexer'
import {
  BooleanContext,
  CalcParser,
  ConditionalExpressionContext,
  DeclarationContext,
  DeclarationListContext,
  DeclarationStatementContext,
  EmptyListContext,
  ExpressionContext,
  ExpressionListContext,
  ExpressionStatementContext,
  FunctionApplicationContext,
  FunctionDeclarationContext,
  FunctionTypeContext,
  IdentifierContext,
  IdentifierExpressionContext,
  IdentifierPatternContext,
  InfixApplicationContext,
  IntegerContext,
  LambdaContext,
  LambdaExpressionContext,
  LetExpressionContext,
  ListConstructionExpressionContext,
  ListExpressionContext,
  ListTypeContext,
  LiteralContext,
  LiteralExpressionContext,
  LiteralPatternContext,
  LiteralTypeContext,
  LocalDeclarationContext,
  ParenthesizedExpressionContext,
  ParenthesizedPatternContext,
  ParenthesizedTypeContext,
  ProgramContext,
  RealContext,
  RecursiveDeclarationContext,
  SequenceExpressionContext,
  SquareBracketListContext,
  StatementContext,
  StringContext,
  TupleExpressionContext,
  TuplePatternContext,
  TupleTypeContext,
  TypeContext,
  TypedExpressionContext,
  TypedPatternContext,
  UnitContext,
  ValueDeclarationContext
} from '../lang/CalcParser'
import { CalcVisitor } from '../lang/CalcVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import {
  boolType,
  functionType,
  identifier,
  intType,
  listType,
  realType,
  stringType,
  tupleType,
  unitType,
  variableType
} from '../utils/astCreator'

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation, public message: string) {}

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}

// @ts-ignore
class ThrowingErrorListener implements ANTLRErrorListener {
  // @ts-ignore
  syntaxError<T extends TSymbol>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    throw new FatalSyntaxError(
      {
        start: {
          line: line,
          column: charPositionInLine
        },
        end: {
          line: line,
          column: charPositionInLine + 1
        }
      },
      `invalid syntax ${msg}`
    )
  }
}

export class MissingSemicolonError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Missing semicolon at the end of statement'
  }

  public elaborate() {
    return 'Every statement must be terminated by a semicolon.'
  }
}

export class TrailingCommaError implements SourceError {
  public type: ErrorType.SYNTAX
  public severity: ErrorSeverity.WARNING
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ExpressionContext): es.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

class AstConverter implements CalcVisitor<es.Node> {
  id: number = 0;

  visitLiteralExpression(ctx: LiteralExpressionContext): es.Literal {
    return this.visit(ctx.literal()) as es.Literal
  }
  visitIdentifierExpression(ctx: IdentifierExpressionContext): es.Identifier {
    return this.visit(ctx.identifier()) as es.Identifier
  }
  visitListConstructionExpression(
    ctx: ListConstructionExpressionContext
  ): es.ApplicationExpression {
    return {
      type: 'ApplicationExpression',
      smlType: variableType(this.id++),
      callee: identifier(
        '::', 
        functionType(variableType(this.id++), listType(variableType(this.id++))),
        contextToLocation(ctx)
      ),
      args: ctx.expression().map(arg => this.visit(arg) as es.Expression),
      isInfix: true,
      loc: contextToLocation(ctx)
    }
  }
  visitTypedExpression(ctx: TypedExpressionContext): es.Expression {
    const expr = this.visit(ctx.expression()) as es.Expression
    expr.annotatedType = this.visit(ctx.type()) as es.Type
    return expr
  }
  visitFunctionApplication(ctx: FunctionApplicationContext): es.ApplicationExpression {
    let callee = this.visit(ctx._fn) as es.Expression
    let args = [this.visit(ctx._args) as es.Expression]
    return {
      type: 'ApplicationExpression',
      smlType: variableType(this.id++),
      callee: this.visit(ctx._fn) as es.Expression,
      args: [this.visit(ctx._args) as es.Expression],
      isInfix: false,
      loc: contextToLocation(ctx)
    }
  }
  visitInfixApplication(ctx: InfixApplicationContext): es.ApplicationExpression {
    let callee = identifier(ctx._op.text ?? '', variableType(this.id++), contextToLocation(ctx))
    let args = [this.visit(ctx._left) as es.Expression, this.visit(ctx._right) as es.Expression]

    return {
      type: 'ApplicationExpression',
      smlType: variableType(this.id++),
      callee,
      args,
      isInfix: true,
      loc: contextToLocation(ctx)
    }
  }
  visitConditionalExpression(ctx: ConditionalExpressionContext): es.ConditionalExpression {
    return {
      type: 'ConditionalExpression',
      smlType: variableType(this.id++),
      pred: this.visit(ctx._pred) as es.Expression,
      cons: this.visit(ctx._cons) as es.Expression,
      alt: this.visit(ctx._alt) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitLambdaExpression(ctx: LambdaExpressionContext): es.LambdaExpression {
    return this.visit(ctx.lambda()) as es.LambdaExpression
  }
  visitLetExpression(ctx: LetExpressionContext): es.LetExpression {
    return {
      type: 'LetExpression',
      smlType: variableType(this.id++),
      declarations: this.visit(ctx.declarationList()) as es.DeclarationList,
      body: this.visit(ctx.expressionList()) as es.SequenceExpression,
      loc: contextToLocation(ctx)
    }
  }
  visitListExpression(ctx: ListExpressionContext): es.ListExpression {
    return this.visit(ctx.list()) as es.ListExpression
  }
  visitParenthesizedExpression(ctx: ParenthesizedExpressionContext): es.Expression {
    return this.visit(ctx.expression()) as es.Expression
  }
  visitSequenceExpression(ctx: SequenceExpressionContext): es.SequenceExpression {
    return this.visit(ctx.expressionList()) as es.SequenceExpression
  }
  visitTupleExpression(ctx: TupleExpressionContext): es.TupleExpression {
    return {
      type: 'TupleExpression',
      elements: ctx.expression().map(expr => this.visit(expr) as es.Expression),
      smlType: tupleType(ctx.expression().map(expr => variableType(this.id++))),
      loc: contextToLocation(ctx)
    }
  }
  visitLiteralPattern(ctx: LiteralPatternContext): es.Literal {
    return this.visit(ctx.literal()) as es.Literal
  }
  visitIdentifierPattern(ctx: IdentifierPatternContext): es.Identifier {
    return this.visit(ctx.identifier()) as es.Identifier
  }
  visitTypedPattern(ctx: TypedPatternContext): es.Pattern {
    const pat = this.visit(ctx.pattern()) as es.Pattern
    pat.annotedType = this.visit(ctx.type()) as es.Type
    return pat
  }
  visitTuplePattern(ctx: TuplePatternContext): es.Pattern {
    return {
      type: 'TupleExpression',
      elements: ctx.pattern().map(expr => this.visit(expr) as es.Pattern),
      smlType: tupleType(ctx.pattern().map(pat => variableType(this.id++))),
      loc: contextToLocation(ctx),
    }
  }
  visitParenthesizedPattern(ctx: ParenthesizedPatternContext): es.Pattern {
    return this.visit(ctx.pattern()) as es.Pattern
  }
  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {
    return {
      type: 'ValueDeclaration',
      smlType: variableType(this.id++),
      id: identifier('it', variableType(this.id++), contextToLocation(ctx)),
      init: this.visit(ctx.expression()) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitDeclarationStatement(ctx: DeclarationStatementContext): es.Statement {
    return this.visit(ctx.declaration()) as es.Statement
  }
  visitLiteralType(ctx: LiteralTypeContext): es.LiteralType {
    return {
      type: ctx._litType.text as es.LiteralTypeType,
      loc: contextToLocation(ctx)
    }
  }
  visitListType(ctx: ListTypeContext): es.ListType {
    return {
      type: 'list',
      elementType: this.visit(ctx._elType) as es.Type,
      loc: contextToLocation(ctx)
    }
  }
  visitFunctionType(ctx: FunctionTypeContext): es.FunctionType {
    return {
      type: 'function',
      paramType: this.visit(ctx._param) as es.Type,
      returnType: this.visit(ctx._return) as es.Type,
      loc: contextToLocation(ctx)
    }
  }
  visitTupleType(ctx: TupleTypeContext): es.TupleType {
    return {
      type: 'tuple',
      elementTypes: ctx.type().map(typ => this.visit(typ) as es.Type),
      loc: contextToLocation(ctx)
    }
  }
  visitParenthesizedType(ctx: ParenthesizedTypeContext): es.Type {
    return this.visit(ctx._inner) as es.Type
  }
  visitSquareBracketList(ctx: SquareBracketListContext): es.ListExpression {
    const elements = ctx.expression().map(expr => this.visit(expr) as es.Expression)
    return {
      type: 'ListExpression',
      smlType: listType(variableType(this.id++)),
      elements,
      loc: contextToLocation(ctx)
    }
  }
  visitEmptyList(ctx: EmptyListContext): es.ListExpression {
    return {
      type: 'ListExpression',
      smlType: listType(unitType()),
      elements: [],
      loc: contextToLocation(ctx)
    }
  }
  visitValueDeclaration(ctx: ValueDeclarationContext): es.ValueDeclaration {
    return {
      type: 'ValueDeclaration',
      smlType: variableType(this.id++),
      id: this.visit(ctx.pattern()) as es.Identifier,
      init: this.visit(ctx.expression()) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitRecursiveDeclaration(ctx: RecursiveDeclarationContext): es.RecValueDeclaration {
    return {
      type: 'RecValueDeclaration',
      smlType: variableType(this.id++),
      id: this.visit(ctx.identifier()) as es.Identifier,
      lambda: this.visit(ctx.lambda()) as es.LambdaExpression,
      loc: contextToLocation(ctx)
    }
  }
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): es.FunctionDeclaration {
    return {
      type: 'FunctionDeclaration',
      smlType: variableType(this.id++),
      id: this.visit(ctx.identifier()) as es.Identifier,
      params: [this.visit(ctx.pattern()) as es.Pattern],
      body: this.visit(ctx.expression()) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitLocalDeclaration(ctx: LocalDeclarationContext): es.LocalDeclaration {
    return {
      type: 'LocalDeclaration',
      smlType: variableType(this.id++),
      local: this.visit(ctx._local) as es.DeclarationList,
      body: this.visit(ctx._body) as es.DeclarationList,
      loc: contextToLocation(ctx)
    }
  }
  visitInteger(ctx: IntegerContext): es.IntLiteral {
    return {
      type: 'Literal',
      smlType: intType(),
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitBoolean(ctx: BooleanContext): es.BoolLiteral {
    return {
      type: 'Literal',
      smlType: boolType(),
      value: ctx.text === 'true',
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitReal(ctx: RealContext): es.RealLiteral {
    return {
      type: 'Literal',
      smlType: realType(),
      value: parseFloat(ctx.text.replace('~', '-')),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitString(ctx: StringContext): es.StringLiteral {
    return {
      type: 'Literal',
      smlType: stringType(),
      value: eval(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitUnit(ctx: UnitContext): es.UnitLiteral {
    return {
      type: 'Literal',
      smlType: unitType(),
      value: undefined,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitType?: ((ctx: TypeContext) => es.Type) | undefined
  visitIdentifier(ctx: IdentifierContext): es.Identifier {
    return {
      type: 'Identifier',
      smlType: variableType(this.id++),
      name: ctx.IDENTIFIER().text,
      loc: contextToLocation(ctx)
    }
  }

  visitLiteral?: ((ctx: LiteralContext) => es.Literal) | undefined
  visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined

  visitLambda(ctx: LambdaContext): es.LambdaExpression {
    const params = [this.visit(ctx.pattern()) as es.Pattern]
    const body = this.visit(ctx.expression()) as es.Expression
    return {
      type: 'LambdaExpression',
      smlType: functionType(variableType(this.id++), variableType(this.id++)),
      params,
      body,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionList(ctx: ExpressionListContext): es.SequenceExpression {
    return {
      type: 'SequenceExpression',
      smlType: variableType(this.id++),
      expressions: ctx.expression().map(expr => this.visit(expr) as es.Expression),
      loc: contextToLocation(ctx)
    }
  }

  visitPattern?: ((ctx: ProgramContext) => es.Pattern) | undefined
  visitDeclaration?: ((ctx: DeclarationContext) => es.Declaration) | undefined

  visitDeclarationList(ctx: DeclarationListContext): es.DeclarationList {
    return {
      type: 'DeclarationList',
      smlType: variableType(this.id++),
      body: ctx.declaration().map(decl => this.visit(decl) as es.Declaration),
      loc: contextToLocation(ctx)
    }
  }

  visitStatement?: ((ctx: StatementContext) => es.Statement) | undefined

  visitProgram(ctx: ProgramContext): es.Program {
    const statements: es.Statement[] = []
    for (const statement of ctx.statement()) {
      statements.push(this.visit(statement) as es.Statement)
    }
    return {
      type: 'Program',
      sourceType: 'script',
      smlType: variableType(this.id++),
      body: statements,
      loc: contextToLocation(ctx)
    }
  }
  visit(tree: ParseTree): es.Node {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Node {
    const nodes: es.Node[] = []
    for (let i = 0; i < node.childCount; i++) {
      nodes.push(node.getChild(i).accept(this))
    }
    return {
      type: 'NodeArray',
      nodes
    }
  }
  visitTerminal(node: TerminalNode): es.Node {
    return node.accept(this)
  }
  visitErrorNode(node: ErrorNode): es.Node {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

function convertSource(program: ProgramContext): es.Program {
  const converter = new AstConverter()
  return program.accept(converter) as es.Program
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'calc') {
    const errorListener = new ThrowingErrorListener()
    const inputStream = CharStreams.fromString(source)
    const lexer = new CalcLexer(inputStream)
    lexer.removeErrorListeners()
    lexer.addErrorListener(errorListener)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CalcParser(tokenStream)
    parser.removeErrorListeners()
    parser.addErrorListener(errorListener)
    parser.buildParseTree = true
    try {
      const tree = parser.program()
      console.log(tree)
      program = convertSource(tree)
      console.log(program)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
