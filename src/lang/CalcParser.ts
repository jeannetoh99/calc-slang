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
  public static readonly MUL = 3
  public static readonly DIV = 4
  public static readonly ADD = 5
  public static readonly SUB = 6
  public static readonly INTDIV = 7
  public static readonly MOD = 8
  public static readonly INTEGER = 9
  public static readonly WHITESPACE = 10
  public static readonly RULE_start = 0
  public static readonly RULE_expression = 1
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = ['start', 'expression']

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    "'div'",
    "'mod'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    'MUL',
    'DIV',
    'ADD',
    'SUB',
    'INTDIV',
    'MOD',
    'INTEGER',
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
  public start(): StartContext {
    const _localctx: StartContext = new StartContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CalcParser.RULE_start)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 4
        this.expression(0)
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

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 2
    this.enterRecursionRule(_localctx, 2, CalcParser.RULE_expression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 12
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CalcParser.INTEGER:
            {
              _localctx = new IntegerContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 7
              this.match(CalcParser.INTEGER)
            }
            break
          case CalcParser.T__0:
            {
              _localctx = new ParenthesesContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 8
              this.match(CalcParser.T__0)
              this.state = 9
              ;(_localctx as ParenthesesContext)._inner = this.expression(0)
              this.state = 10
              this.match(CalcParser.T__1)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 22
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 20
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                  {
                    _localctx = new BinopContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as BinopContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 14
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                    }
                    this.state = 15
                    ;(_localctx as BinopContext)._operator = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CalcParser.MUL) |
                            (1 << CalcParser.DIV) |
                            (1 << CalcParser.INTDIV) |
                            (1 << CalcParser.MOD))) !==
                          0
                      )
                    ) {
                      ;(_localctx as BinopContext)._operator = this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 16
                    ;(_localctx as BinopContext)._right = this.expression(3)
                  }
                  break

                case 2:
                  {
                    _localctx = new BinopContext(new ExpressionContext(_parentctx, _parentState))
                    ;(_localctx as BinopContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 17
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 1)')
                    }
                    this.state = 18
                    ;(_localctx as BinopContext)._operator = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (!(_la === CalcParser.ADD || _la === CalcParser.SUB)) {
                      ;(_localctx as BinopContext)._operator = this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 19
                    ;(_localctx as BinopContext)._right = this.expression(2)
                  }
                  break
              }
            }
          }
          this.state = 24
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx)
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
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 1:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2)

      case 1:
        return this.precpred(this._ctx, 1)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f\x1C\x04\x02' +
    '\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x03\x05\x03\x0F\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
    '\x03\x03\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x03\x02\x02\x03' +
    '\x04\x04\x02\x02\x04\x02\x02\x04\x04\x02\x05\x06\t\n\x03\x02\x07\b\x02' +
    '\x1C\x02\x06\x03\x02\x02\x02\x04\x0E\x03\x02\x02\x02\x06\x07\x05\x04\x03' +
    '\x02\x07\x03\x03\x02\x02\x02\b\t\b\x03\x01\x02\t\x0F\x07\v\x02\x02\n\v' +
    '\x07\x03\x02\x02\v\f\x05\x04\x03\x02\f\r\x07\x04\x02\x02\r\x0F\x03\x02' +
    '\x02\x02\x0E\b\x03\x02\x02\x02\x0E\n\x03\x02\x02\x02\x0F\x18\x03\x02\x02' +
    '\x02\x10\x11\f\x04\x02\x02\x11\x12\t\x02\x02\x02\x12\x17\x05\x04\x03\x05' +
    '\x13\x14\f\x03\x02\x02\x14\x15\t\x03\x02\x02\x15\x17\x05\x04\x03\x04\x16' +
    '\x10\x03\x02\x02\x02\x16\x13\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18' +
    '\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x05\x03\x02\x02\x02\x1A' +
    '\x18\x03\x02\x02\x02\x05\x0E\x16\x18'
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

export class StartContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_start
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterStart) {
      listener.enterStart(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitStart) {
      listener.exitStart(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitStart) {
      return visitor.visitStart(this)
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
export class IntegerContext extends ExpressionContext {
  public INTEGER(): TerminalNode {
    return this.getToken(CalcParser.INTEGER, 0)
  }
  constructor(ctx: ExpressionContext) {
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
export class BinopContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: Token
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public MUL(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.MUL, 0)
  }
  public DIV(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.DIV, 0)
  }
  public INTDIV(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.INTDIV, 0)
  }
  public MOD(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.MOD, 0)
  }
  public ADD(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.ADD, 0)
  }
  public SUB(): TerminalNode | undefined {
    return this.tryGetToken(CalcParser.SUB, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterBinop) {
      listener.enterBinop(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitBinop) {
      listener.exitBinop(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitBinop) {
      return visitor.visitBinop(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
