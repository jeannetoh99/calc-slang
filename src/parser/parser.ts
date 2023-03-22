/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import * as es from '../ast'
import { CalcLexer } from '../lang/CalcLexer'
import {
  CalcParser,
  DeclarationContext,
  DeclarationStatementContext,
  ExpressionContext,
  ExpressionStatementContext,
  IdentifierContext,
  IdentifierPatContext,
  IntegerContext,
  LitContext,
  LiteralContext,
  ParenthesesContext,
  PatternContext,
  ProgramContext,
  StatementContext,
  ValueDeclarationContext,
} from '../lang/CalcParser'
import { CalcVisitor } from '../lang/CalcVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError } from '../types'
import { stripIndent } from '../utils/formatters'

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: es.Node) {
    this.nodeType = this.formatNodeType(this.node.type)
  }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return `${this.nodeType} are not allowed`
  }

  public elaborate() {
    return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
  }

  /**
   * Converts ast node.type into english
   * e.g. ThisExpression -> 'this' expressions
   *      Property -> Properties
   *      EmptyStatement -> Empty Statements
   */
  private formatNodeType(nodeType: string) {
    switch (nodeType) {
      case 'ThisExpression':
        return "'this' expressions"
      case 'Property':
        return 'Properties'
      default: {
        const words = nodeType.split(/(?=[A-Z])/)
        return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
      }
    }
  }
}

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

class ExpressionGenerator implements CalcVisitor<es.Expression> {
  visitLit(ctx: LitContext): es.Expression {
    return this.visit(ctx.literal())
  }
  visitIdentifier(ctx: IdentifierContext): es.Expression {
    return {
      type: 'Identifier',
      name: ctx.text,
    }
  }
  visitParentheses(ctx: ParenthesesContext): es.Expression {
    return this.visit(ctx.expression())
  }
  visitInteger(ctx: IntegerContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitLiteral?: ((ctx: LiteralContext) => es.Expression) | undefined;
  visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined;
  visit(tree: ParseTree): es.Expression {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Expression {
    const expressions: es.Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }
  visitTerminal(node: TerminalNode): es.Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Expression {
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

class PatternGenerator implements CalcVisitor<es.Pattern> {

  visitIdentifierPat(ctx: IdentifierPatContext): es.Pattern {
    return {
      type: 'Identifier',
      name: ctx.text,
    }
  }

  visitPattern?: ((ctx: PatternContext) => es.Pattern) | undefined;

  visit(tree: ParseTree): es.Pattern {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Pattern {
    const pattern: es.Pattern[] = []
    for (let i = 0; i < node.childCount; i++) {
      pattern.push(node.getChild(i).accept(this))
    }
    return {
      type: 'ArrayPattern',
      elements: pattern
    }
  }
  visitTerminal(node: TerminalNode): es.Pattern {
    return node.accept(this)
  }
  visitErrorNode(node: ErrorNode): es.Pattern {
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

class StatementGenerator implements CalcVisitor<es.Statement> {
  expressionGenerator_ : ExpressionGenerator = new ExpressionGenerator() 
  patternGenerator_: PatternGenerator = new PatternGenerator()

  visitExpressionStatement(ctx: ExpressionStatementContext): es.Statement {
    return {
      type: 'ExpressionStatement',
      expression: ctx.expression().accept(this.expressionGenerator_)
    }
  }
  visitDeclarationStatement(ctx: DeclarationStatementContext): es.Statement {
    return ctx._decl.accept(this);
  }
  visitValueDeclaration(ctx: ValueDeclarationContext): es.Declaration {
    return {
      type: 'ValueDeclaration',
      declarations: [
        {
          type: 'ValueDeclarator',
          id: ctx._id.accept(this.patternGenerator_),
          init: ctx.expression().accept(this.expressionGenerator_),
        }
      ]
    }
  }
  visitDeclaration?: ((ctx: DeclarationContext) => es.Declaration) | undefined;
  visitStatement?: ((ctx: StatementContext) => es.Declaration) | undefined;

  visit(tree: ParseTree): es.Statement {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): es.Statement {
    const statements: es.Statement[] = []
    for (let i = 0; i < node.childCount; i++) {
      statements.push(node.getChild(i).accept(this))
    }
    return {
      type: 'BlockStatement',
      body: statements
    }
  }
  visitTerminal(node: TerminalNode): es.Statement {
    return node.accept(this);
  }
  visitErrorNode(node: ErrorNode): es.Statement {
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

function convertStatement(statement: StatementContext): es.Statement {
  const generator = new StatementGenerator()
  return statement.accept(generator)
}

function convertSource(program: ProgramContext): es.Program {
  const statements: es.Statement[] = []
  for (let statement of program.statement()) {
    statements.push(convertStatement(statement));
  }
  return {
    type: 'Program',
    sourceType: 'script',
    body: statements
  }
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'calc') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new CalcLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new CalcParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.program()
      program = convertSource(tree)
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
