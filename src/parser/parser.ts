/* tslint:disable:max-classes-per-file */
import { parseExpression } from '@babel/parser'
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
  DeclarationStatementContext,
  ExpressionContext,
  ExpressionStatementContext,
  FunctionApplicationContext,
  FunctionDeclarationContext,
  IdentifierContext,
  IdentifierExpressionContext,
  IdentifierPatternContext,
  InfixApplicationContext,
  IntegerContext,
  LambdaExpressionContext,
  LiteralContext,
  LiteralExpressionContext,
  LiteralPatternContext,
  ParenthesizedExpressionContext,
  ParenthesizedPatternContext,
  ProgramContext,
  RealContext,
  StatementContext,
  StringContext,
  TypedExpressionContext,
  TypedPatternContext,
  UnitContext,
  ValueDeclarationContext
} from '../lang/CalcParser'
import { CalcVisitor } from '../lang/CalcVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { identifier } from '../utils/astCreator'

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
  visitLiteralExpression(ctx: LiteralExpressionContext): es.Literal {
    return this.visit(ctx.literal()) as es.Literal
  }
  visitIdentifierExpression(ctx: IdentifierExpressionContext): es.Identifier {
    return this.visit(ctx.identifier()) as es.Identifier
  }
  visitTypedExpression(ctx: TypedExpressionContext): es.Expression {
    const expr = this.visit(ctx.expression()) as es.Expression
    expr.annotatedType = ctx.TYPE().text as es.Type
    return expr
  }
  visitFunctionApplication(ctx: FunctionApplicationContext): es.CallExpression {
    return {
      type: 'CallExpression',
      callee: this.visit(ctx._fn) as es.Expression,
      args: [this.visit(ctx._args) as es.Expression],
      isInfix: false,
      loc: contextToLocation(ctx)
    }
  }
  visitInfixApplication(ctx: InfixApplicationContext): es.CallExpression {
    return {
      type: 'CallExpression',
      callee: identifier(ctx._op.text ?? '', contextToLocation(ctx)),
      args: [this.visit(ctx._left) as es.Expression, this.visit(ctx._right) as es.Expression],
      isInfix: true,
      loc: contextToLocation(ctx)
    }
  }
  visitConditionalExpression(ctx: ConditionalExpressionContext): es.ConditionalExpression {
    return {
      type: 'ConditionalExpression',
      pred: this.visit(ctx._pred) as es.Expression,
      cons: this.visit(ctx._cons) as es.Expression,
      alt: this.visit(ctx._alt) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitLambdaExpression(ctx: LambdaExpressionContext): es.LambdaExpression {
    return {
      type: 'LambdaExpression',
      params: [this.visit(ctx.pattern()) as es.Pattern],
      body: this.visit(ctx.expression()) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitParenthesizedExpression(ctx: ParenthesizedExpressionContext): es.Expression {
    return this.visit(ctx.expression()) as es.Expression
  }
  visitLiteralPattern(ctx: LiteralPatternContext): es.Literal {
    return this.visit(ctx.literal()) as es.Literal
  }
  visitIdentifierPattern(ctx: IdentifierPatternContext): es.Identifier {
    return this.visit(ctx.identifier()) as es.Identifier
  }
  visitTypedPattern(ctx: TypedPatternContext): es.Pattern {
    const pat = this.visit(ctx.pattern()) as es.Pattern
    pat.annotedType = ctx.TYPE().text as es.Type
    return pat
  }
  visitParenthesizedPattern(ctx: ParenthesizedPatternContext): es.Pattern {
    return this.visit(ctx.pattern()) as es.Pattern
  }
  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {
    return {
      type: 'ExpressionStatement',
      expression: this.visit(ctx.expression()) as es.Expression,
      loc: contextToLocation(ctx)
    }
  }
  visitDeclarationStatement(ctx: DeclarationStatementContext): es.Statement {
    return this.visit(ctx.declaration()) as es.Statement
  }
  visitValueDeclaration(ctx: ValueDeclarationContext): es.ValueDeclaration {
    return {
      type: 'ValueDeclaration',
      declarations: [
        {
          type: 'ValueDeclarator',
          id: this.visit(ctx.pattern()) as es.Identifier,
          init: this.visit(ctx.expression()) as es.Expression
        }
      ],
      loc: contextToLocation(ctx)
    }
  }
  visitFunctionDeclaration(ctx: FunctionDeclarationContext): es.FunctionDeclaration {
    return {
      type: 'FunctionDeclaration',
      id: this.visit(ctx.identifier()) as es.Identifier,
      params: [this.visit(ctx.pattern()) as es.Pattern],
      body: this.visit(ctx.expression()) as es.Expression
    }
  }
  visitInteger(ctx: IntegerContext): es.IntLiteral {
    return {
      type: 'Literal',
      litType: 'int',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitBoolean(ctx: BooleanContext): es.BoolLiteral {
    return {
      type: 'Literal',
      litType: 'bool',
      value: ctx.text === 'true',
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitReal(ctx: RealContext): es.RealLiteral {
    return {
      type: 'Literal',
      litType: 'real',
      value: parseFloat(ctx.text.replace('~', '-')),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitString(ctx: StringContext): es.StringLiteral {
    return {
      type: 'Literal',
      litType: 'string',
      value: ctx.text.substring(1, ctx.text.length - 1),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitUnit(ctx: UnitContext): es.UnitLiteral {
    return {
      type: 'Literal',
      litType: 'unit',
      value: undefined,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }
  visitIdentifier(ctx: IdentifierContext): es.Identifier {
    return {
      type: 'Identifier',
      name: ctx.IDENTIFIER().text,
      loc: contextToLocation(ctx)
    }
  }

  visitLiteral?: ((ctx: LiteralContext) => es.Literal) | undefined
  visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined
  visitPattern?: ((ctx: ProgramContext) => es.Pattern) | undefined
  visitDeclaration?: ((ctx: DeclarationContext) => es.Declaration) | undefined
  visitStatement?: ((ctx: StatementContext) => es.Statement) | undefined

  visitProgram(ctx: ProgramContext): es.Program {
    const statements: es.Statement[] = []
    for (const statement of ctx.statement()) {
      statements.push(this.visit(statement) as es.Statement)
    }
    return {
      type: 'Program',
      sourceType: 'script',
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
    const inputStream = CharStreams.fromString(source)
    const lexer = new CalcLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CalcParser(tokenStream)
    parser.removeErrorListeners()
    parser.addErrorListener(new ThrowingErrorListener())
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
