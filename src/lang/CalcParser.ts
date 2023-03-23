// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { CalcListener } from './CalcListener'
import { CalcVisitor } from './CalcVisitor'

export class CalcParser extends Parser {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly T__2 = 3
  public static readonly T__3 = 4
  public static readonly T__4 = 5
  public static readonly INTEGER_LITERAL = 6
  public static readonly BOOLEAN_LITERAL = 7
  public static readonly IDENTIFIER = 8
  public static readonly WHITESPACE = 9
  public static readonly RULE_literal = 0
  public static readonly RULE_expression = 1
  public static readonly RULE_pattern = 2
  public static readonly RULE_declaration = 3
  public static readonly RULE_statement = 4
  public static readonly RULE_program = 5
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'literal',
    'expression',
    'pattern',
    'declaration',
    'statement',
    'program'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'val'",
    "'='",
    "';'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'INTEGER_LITERAL',
    'BOOLEAN_LITERAL',
    'IDENTIFIER',
    'WHITESPACE'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    CalcParser._LITERAL_NAMES,
    CalcParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CalcParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'Calc.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CalcParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CalcParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(CalcParser._ATN, this)
  }
  // @RuleVersion(0)
  public literal(): LiteralContext {
    let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CalcParser.RULE_literal)
    try {
      this.state = 14
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.INTEGER_LITERAL:
          _localctx = new IntegerContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 12
            this.match(CalcParser.INTEGER_LITERAL)
          }
          break
        case CalcParser.BOOLEAN_LITERAL:
          _localctx = new BooleanContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 13
            this.match(CalcParser.BOOLEAN_LITERAL)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, CalcParser.RULE_expression)
    try {
      this.state = 22
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.INTEGER_LITERAL:
        case CalcParser.BOOLEAN_LITERAL:
          _localctx = new LitContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 16
            this.literal()
          }
          break
        case CalcParser.IDENTIFIER:
          _localctx = new IdentifierContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 17
            this.match(CalcParser.IDENTIFIER)
          }
          break
        case CalcParser.T__0:
          _localctx = new ParenthesesContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 18
            this.match(CalcParser.T__0)
            this.state = 19
            ;(_localctx as ParenthesesContext)._inner = this.expression()
            this.state = 20
            this.match(CalcParser.T__1)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public pattern(): PatternContext {
    let _localctx: PatternContext = new PatternContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, CalcParser.RULE_pattern)
    try {
      _localctx = new IdentifierPatContext(_localctx)
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 24
        this.match(CalcParser.IDENTIFIER)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, CalcParser.RULE_declaration)
    try {
      _localctx = new ValueDeclarationContext(_localctx)
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 26
        this.match(CalcParser.T__2)
        this.state = 27
        ;(_localctx as ValueDeclarationContext)._id = this.pattern()
        this.state = 28
        this.match(CalcParser.T__3)
        this.state = 29
        ;(_localctx as ValueDeclarationContext)._val = this.expression()
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, CalcParser.RULE_statement)
    try {
      this.state = 37
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.T__0:
        case CalcParser.INTEGER_LITERAL:
        case CalcParser.BOOLEAN_LITERAL:
        case CalcParser.IDENTIFIER:
          _localctx = new ExpressionStatementContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 31
            ;(_localctx as ExpressionStatementContext)._expr = this.expression()
            this.state = 32
            this.match(CalcParser.T__4)
          }
          break
        case CalcParser.T__2:
          _localctx = new DeclarationStatementContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 34
            ;(_localctx as DeclarationStatementContext)._decl = this.declaration()
            this.state = 35
            this.match(CalcParser.T__4)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    const _localctx: ProgramContext = new ProgramContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, CalcParser.RULE_program)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 42
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << CalcParser.T__0) |
              (1 << CalcParser.T__2) |
              (1 << CalcParser.INTEGER_LITERAL) |
              (1 << CalcParser.BOOLEAN_LITERAL) |
              (1 << CalcParser.IDENTIFIER))) !==
            0
        ) {
          {
            {
              this.state = 39
              this.statement()
            }
          }
          this.state = 44
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v0\x04\x02\t' +
    '\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t' +
    '\x07\x03\x02\x03\x02\x05\x02\x11\n\x02\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x03\x05\x03\x19\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03' +
    '\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05' +
    '\x06(\n\x06\x03\x07\x07\x07+\n\x07\f\x07\x0E\x07.\v\x07\x03\x07\x02\x02' +
    '\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02.\x02\x10' +
    '\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02\x06\x1A\x03\x02\x02\x02\b\x1C' +
    "\x03\x02\x02\x02\n'\x03\x02\x02\x02\f,\x03\x02\x02\x02\x0E\x11\x07\b" +
    '\x02\x02\x0F\x11\x07\t\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x0F\x03\x02' +
    '\x02\x02\x11\x03\x03\x02\x02\x02\x12\x19\x05\x02\x02\x02\x13\x19\x07\n' +
    '\x02\x02\x14\x15\x07\x03\x02\x02\x15\x16\x05\x04\x03\x02\x16\x17\x07\x04' +
    '\x02\x02\x17\x19\x03\x02\x02\x02\x18\x12\x03\x02\x02\x02\x18\x13\x03\x02' +
    '\x02\x02\x18\x14\x03\x02\x02\x02\x19\x05\x03\x02\x02\x02\x1A\x1B\x07\n' +
    '\x02\x02\x1B\x07\x03\x02\x02\x02\x1C\x1D\x07\x05\x02\x02\x1D\x1E\x05\x06' +
    '\x04\x02\x1E\x1F\x07\x06\x02\x02\x1F \x05\x04\x03\x02 \t\x03\x02\x02\x02' +
    '!"\x05\x04\x03\x02"#\x07\x07\x02\x02#(\x03\x02\x02\x02$%\x05\b\x05\x02' +
    "%&\x07\x07\x02\x02&(\x03\x02\x02\x02'!\x03\x02\x02\x02'$\x03\x02\x02" +
    '\x02(\v\x03\x02\x02\x02)+\x05\n\x06\x02*)\x03\x02\x02\x02+.\x03\x02\x02' +
    '\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\r\x03\x02\x02\x02.,\x03\x02' +
    "\x02\x02\x06\x10\x18',"
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CalcParser.__ATN) {
      CalcParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(CalcParser._serializedATN)
      )
    }

    return CalcParser.__ATN
  }
}

export class LiteralContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_literal
  }
  public copyFrom(ctx: LiteralContext): void {
    super.copyFrom(ctx)
  }
}
export class IntegerContext extends LiteralContext {
  public INTEGER_LITERAL(): TerminalNode {
    return this.getToken(CalcParser.INTEGER_LITERAL, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInteger) {
      listener.enterInteger(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInteger) {
      listener.exitInteger(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInteger) {
      return visitor.visitInteger(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class BooleanContext extends LiteralContext {
  public BOOLEAN_LITERAL(): TerminalNode {
    return this.getToken(CalcParser.BOOLEAN_LITERAL, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterBoolean) {
      listener.enterBoolean(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitBoolean) {
      listener.exitBoolean(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitBoolean) {
      return visitor.visitBoolean(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_expression
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx)
  }
}
export class LitContext extends ExpressionContext {
  public literal(): LiteralContext {
    return this.getRuleContext(0, LiteralContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLit) {
      listener.enterLit(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLit) {
      listener.exitLit(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLit) {
      return visitor.visitLit(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class IdentifierContext extends ExpressionContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(CalcParser.IDENTIFIER, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIdentifier) {
      return visitor.visitIdentifier(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParenthesesContext extends ExpressionContext {
  public _inner!: ExpressionContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParentheses) {
      listener.enterParentheses(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParentheses) {
      listener.exitParentheses(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParentheses) {
      return visitor.visitParentheses(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PatternContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_pattern
  }
  public copyFrom(ctx: PatternContext): void {
    super.copyFrom(ctx)
  }
}
export class IdentifierPatContext extends PatternContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(CalcParser.IDENTIFIER, 0)
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIdentifierPat) {
      listener.enterIdentifierPat(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIdentifierPat) {
      listener.exitIdentifierPat(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIdentifierPat) {
      return visitor.visitIdentifierPat(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declaration
  }
  public copyFrom(ctx: DeclarationContext): void {
    super.copyFrom(ctx)
  }
}
export class ValueDeclarationContext extends DeclarationContext {
  public _id!: PatternContext
  public _val!: ExpressionContext
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterValueDeclaration) {
      listener.enterValueDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitValueDeclaration) {
      listener.exitValueDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitValueDeclaration) {
      return visitor.visitValueDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class StatementContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_statement
  }
  public copyFrom(ctx: StatementContext): void {
    super.copyFrom(ctx)
  }
}
export class ExpressionStatementContext extends StatementContext {
  public _expr!: ExpressionContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExpressionStatement) {
      listener.enterExpressionStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExpressionStatement) {
      listener.exitExpressionStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExpressionStatement) {
      return visitor.visitExpressionStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DeclarationStatementContext extends StatementContext {
  public _decl!: DeclarationContext
  public declaration(): DeclarationContext {
    return this.getRuleContext(0, DeclarationContext)
  }
  constructor(ctx: StatementContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclarationStatement) {
      listener.enterDeclarationStatement(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclarationStatement) {
      listener.exitDeclarationStatement(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclarationStatement) {
      return visitor.visitDeclarationStatement(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ProgramContext extends ParserRuleContext {
  public statement(): StatementContext[]
  public statement(i: number): StatementContext
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext)
    } else {
      return this.getRuleContext(i, StatementContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_program
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
