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
  public static readonly T__5 = 6
  public static readonly T__6 = 7
  public static readonly T__7 = 8
  public static readonly T__8 = 9
  public static readonly T__9 = 10
  public static readonly T__10 = 11
  public static readonly T__11 = 12
  public static readonly T__12 = 13
  public static readonly T__13 = 14
  public static readonly T__14 = 15
  public static readonly T__15 = 16
  public static readonly T__16 = 17
  public static readonly T__17 = 18
  public static readonly T__18 = 19
  public static readonly T__19 = 20
  public static readonly T__20 = 21
  public static readonly T__21 = 22
  public static readonly T__22 = 23
  public static readonly T__23 = 24
  public static readonly T__24 = 25
  public static readonly T__25 = 26
  public static readonly T__26 = 27
  public static readonly T__27 = 28
  public static readonly T__28 = 29
  public static readonly T__29 = 30
  public static readonly T__30 = 31
  public static readonly T__31 = 32
  public static readonly T__32 = 33
  public static readonly T__33 = 34
  public static readonly INTEGER_LITERAL = 35
  public static readonly BOOLEAN_LITERAL = 36
  public static readonly REAL_LITERAL = 37
  public static readonly STRING_LITERAL = 38
  public static readonly UNIT_LITERAL = 39
  public static readonly NIL = 40
  public static readonly TYPE = 41
  public static readonly IDENTIFIER = 42
  public static readonly WHITESPACE = 43
  public static readonly RULE_identifier = 0
  public static readonly RULE_literal = 1
  public static readonly RULE_expression = 2
  public static readonly RULE_lambda = 3
  public static readonly RULE_expressionList = 4
  public static readonly RULE_listElements = 5
  public static readonly RULE_pattern = 6
  public static readonly RULE_declaration = 7
  public static readonly RULE_declarationList = 8
  public static readonly RULE_statement = 9
  public static readonly RULE_program = 10
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'identifier',
    'literal',
    'expression',
    'lambda',
    'expressionList',
    'listElements',
    'pattern',
    'declaration',
    'declarationList',
    'statement',
    'program'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "':'",
    "'*'",
    "'/'",
    "'div'",
    "'mod'",
    "'+'",
    "'-'",
    "'<>'",
    "'<'",
    "'>'",
    "'<='",
    "'>='",
    "'='",
    "'andalso'",
    "'orelse'",
    "'^'",
    "'if'",
    "'then'",
    "'else'",
    "'let'",
    "'in'",
    "'end'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'fn'",
    "'=>'",
    "';'",
    "','",
    "'val'",
    "'rec'",
    "'fun'",
    "'local'",
    undefined,
    undefined,
    undefined,
    undefined,
    "'()'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'INTEGER_LITERAL',
    'BOOLEAN_LITERAL',
    'REAL_LITERAL',
    'STRING_LITERAL',
    'UNIT_LITERAL',
    'NIL',
    'TYPE',
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
  public identifier(): IdentifierContext {
    const _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state)
    this.enterRule(_localctx, 0, CalcParser.RULE_identifier)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 22
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
  public literal(): LiteralContext {
    let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, CalcParser.RULE_literal)
    try {
      this.state = 29
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.INTEGER_LITERAL:
          _localctx = new IntegerContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 24
            this.match(CalcParser.INTEGER_LITERAL)
          }
          break
        case CalcParser.BOOLEAN_LITERAL:
          _localctx = new BooleanContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 25
            this.match(CalcParser.BOOLEAN_LITERAL)
          }
          break
        case CalcParser.REAL_LITERAL:
          _localctx = new RealContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 26
            this.match(CalcParser.REAL_LITERAL)
          }
          break
        case CalcParser.STRING_LITERAL:
          _localctx = new StringContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 27
            this.match(CalcParser.STRING_LITERAL)
          }
          break
        case CalcParser.UNIT_LITERAL:
          _localctx = new UnitContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 28
            this.match(CalcParser.UNIT_LITERAL)
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
    const _startState: number = 4
    this.enterRecursionRule(_localctx, 4, CalcParser.RULE_expression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 61
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
          case 1:
            {
              _localctx = new LiteralExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 32
              this.literal()
            }
            break

          case 2:
            {
              _localctx = new IdentifierExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 33
              this.identifier()
            }
            break

          case 3:
            {
              _localctx = new ConditionalExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 34
              this.match(CalcParser.T__16)
              this.state = 35
              ;(_localctx as ConditionalExpressionContext)._pred = this.expression(0)
              this.state = 36
              this.match(CalcParser.T__17)
              this.state = 37
              ;(_localctx as ConditionalExpressionContext)._cons = this.expression(0)
              this.state = 38
              this.match(CalcParser.T__18)
              this.state = 39
              ;(_localctx as ConditionalExpressionContext)._alt = this.expression(7)
            }
            break

          case 4:
            {
              _localctx = new LambdaExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 41
              this.lambda()
            }
            break

          case 5:
            {
              _localctx = new LetExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 42
              this.match(CalcParser.T__19)
              this.state = 43
              this.declarationList()
              this.state = 44
              this.match(CalcParser.T__20)
              this.state = 45
              this.expressionList()
              this.state = 46
              this.match(CalcParser.T__21)
            }
            break

          case 6:
            {
              _localctx = new ParenthesizedExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 48
              this.match(CalcParser.T__22)
              this.state = 49
              this.expression(0)
              this.state = 50
              this.match(CalcParser.T__23)
            }
            break

          case 7:
            {
              _localctx = new SequenceExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 52
              this.match(CalcParser.T__22)
              this.state = 53
              this.expressionList()
              this.state = 54
              this.match(CalcParser.T__23)
            }
            break

          case 8:
            {
              _localctx = new ListExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 56
              this.match(CalcParser.T__24)
              this.state = 57
              this.listElements()
              this.state = 58
              this.match(CalcParser.T__25)
            }
            break

          case 9:
            {
              _localctx = new EmptyListExpressionContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 60
              this.match(CalcParser.NIL)
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 85
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 83
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                  {
                    _localctx = new FunctionApplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as FunctionApplicationContext)._fn = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 63
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)')
                    }
                    this.state = 64
                    ;(_localctx as FunctionApplicationContext)._args = this.expression(14)
                  }
                  break

                case 2:
                  {
                    _localctx = new InfixApplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as InfixApplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 65
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)')
                    }
                    this.state = 66
                    ;(_localctx as InfixApplicationContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CalcParser.T__1) |
                            (1 << CalcParser.T__2) |
                            (1 << CalcParser.T__3) |
                            (1 << CalcParser.T__4))) !==
                          0
                      )
                    ) {
                      ;(_localctx as InfixApplicationContext)._op =
                        this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 67
                    ;(_localctx as InfixApplicationContext)._right = this.expression(13)
                  }
                  break

                case 3:
                  {
                    _localctx = new InfixApplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as InfixApplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 68
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)')
                    }
                    this.state = 69
                    ;(_localctx as InfixApplicationContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (!(_la === CalcParser.T__5 || _la === CalcParser.T__6)) {
                      ;(_localctx as InfixApplicationContext)._op =
                        this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 70
                    ;(_localctx as InfixApplicationContext)._right = this.expression(12)
                  }
                  break

                case 4:
                  {
                    _localctx = new InfixApplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as InfixApplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 71
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)')
                    }
                    this.state = 72
                    ;(_localctx as InfixApplicationContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << CalcParser.T__7) |
                            (1 << CalcParser.T__8) |
                            (1 << CalcParser.T__9) |
                            (1 << CalcParser.T__10) |
                            (1 << CalcParser.T__11) |
                            (1 << CalcParser.T__12))) !==
                          0
                      )
                    ) {
                      ;(_localctx as InfixApplicationContext)._op =
                        this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 73
                    ;(_localctx as InfixApplicationContext)._right = this.expression(11)
                  }
                  break

                case 5:
                  {
                    _localctx = new InfixApplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as InfixApplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 74
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)')
                    }
                    this.state = 75
                    ;(_localctx as InfixApplicationContext)._op = this._input.LT(1)
                    _la = this._input.LA(1)
                    if (!(_la === CalcParser.T__13 || _la === CalcParser.T__14)) {
                      ;(_localctx as InfixApplicationContext)._op =
                        this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                    this.state = 76
                    ;(_localctx as InfixApplicationContext)._right = this.expression(10)
                  }
                  break

                case 6:
                  {
                    _localctx = new InfixApplicationContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as InfixApplicationContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 77
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 78
                    ;(_localctx as InfixApplicationContext)._op = this.match(CalcParser.T__15)
                    this.state = 79
                    ;(_localctx as InfixApplicationContext)._right = this.expression(9)
                  }
                  break

                case 7:
                  {
                    _localctx = new TypedExpressionContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression)
                    this.state = 80
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)')
                    }
                    this.state = 81
                    this.match(CalcParser.T__0)
                    this.state = 82
                    this.match(CalcParser.TYPE)
                  }
                  break
              }
            }
          }
          this.state = 87
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx)
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
  // @RuleVersion(0)
  public lambda(): LambdaContext {
    const _localctx: LambdaContext = new LambdaContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, CalcParser.RULE_lambda)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 88
        this.match(CalcParser.T__26)
        this.state = 89
        this.pattern(0)
        this.state = 90
        this.match(CalcParser.T__27)
        this.state = 91
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
  // @RuleVersion(0)
  public expressionList(): ExpressionListContext {
    const _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state)
    this.enterRule(_localctx, 8, CalcParser.RULE_expressionList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 93
        this.expression(0)
        this.state = 98
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.T__28) {
          {
            {
              this.state = 94
              this.match(CalcParser.T__28)
              this.state = 95
              this.expression(0)
            }
          }
          this.state = 100
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
  // @RuleVersion(0)
  public listElements(): ListElementsContext {
    const _localctx: ListElementsContext = new ListElementsContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, CalcParser.RULE_listElements)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 101
        this.expression(0)
        this.state = 106
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.T__29) {
          {
            {
              this.state = 102
              this.match(CalcParser.T__29)
              this.state = 103
              this.expression(0)
            }
          }
          this.state = 108
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

  public pattern(): PatternContext
  public pattern(_p: number): PatternContext
  // @RuleVersion(0)
  public pattern(_p?: number): PatternContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: PatternContext = new PatternContext(this._ctx, _parentState)
    let _prevctx: PatternContext = _localctx
    const _startState: number = 12
    this.enterRecursionRule(_localctx, 12, CalcParser.RULE_pattern, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 116
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case CalcParser.INTEGER_LITERAL:
          case CalcParser.BOOLEAN_LITERAL:
          case CalcParser.REAL_LITERAL:
          case CalcParser.STRING_LITERAL:
          case CalcParser.UNIT_LITERAL:
            {
              _localctx = new LiteralPatternContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 110
              this.literal()
            }
            break
          case CalcParser.IDENTIFIER:
            {
              _localctx = new IdentifierPatternContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 111
              this.identifier()
            }
            break
          case CalcParser.T__22:
            {
              _localctx = new ParenthesizedPatternContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 112
              this.match(CalcParser.T__22)
              this.state = 113
              this.pattern(0)
              this.state = 114
              this.match(CalcParser.T__23)
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 123
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new TypedPatternContext(new PatternContext(_parentctx, _parentState))
                this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_pattern)
                this.state = 118
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 2)')
                }
                this.state = 119
                this.match(CalcParser.T__0)
                this.state = 120
                this.match(CalcParser.TYPE)
              }
            }
          }
          this.state = 125
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx)
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
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, CalcParser.RULE_declaration)
    try {
      this.state = 149
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
        case 1:
          _localctx = new ValueDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 126
            this.match(CalcParser.T__30)
            this.state = 127
            this.pattern(0)
            this.state = 128
            this.match(CalcParser.T__12)
            this.state = 129
            this.expression(0)
          }
          break

        case 2:
          _localctx = new RecursiveDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 131
            this.match(CalcParser.T__30)
            this.state = 132
            this.match(CalcParser.T__31)
            this.state = 133
            this.identifier()
            this.state = 134
            this.match(CalcParser.T__12)
            this.state = 135
            this.lambda()
          }
          break

        case 3:
          _localctx = new FunctionDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 137
            this.match(CalcParser.T__32)
            this.state = 138
            this.identifier()
            this.state = 139
            this.pattern(0)
            this.state = 140
            this.match(CalcParser.T__12)
            this.state = 141
            this.expression(0)
          }
          break

        case 4:
          _localctx = new LocalDeclarationContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 143
            this.match(CalcParser.T__33)
            this.state = 144
            ;(_localctx as LocalDeclarationContext)._local = this.declarationList()
            this.state = 145
            this.match(CalcParser.T__20)
            this.state = 146
            ;(_localctx as LocalDeclarationContext)._body = this.declarationList()
            this.state = 147
            this.match(CalcParser.T__21)
          }
          break
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
  public declarationList(): DeclarationListContext {
    const _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state)
    this.enterRule(_localctx, 16, CalcParser.RULE_declarationList)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 151
        this.declaration()
        this.state = 156
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (_la === CalcParser.T__28) {
          {
            {
              this.state = 152
              this.match(CalcParser.T__28)
              this.state = 153
              this.declaration()
            }
          }
          this.state = 158
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
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(this._ctx, this.state)
    this.enterRule(_localctx, 18, CalcParser.RULE_statement)
    try {
      this.state = 165
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case CalcParser.T__16:
        case CalcParser.T__19:
        case CalcParser.T__22:
        case CalcParser.T__24:
        case CalcParser.T__26:
        case CalcParser.INTEGER_LITERAL:
        case CalcParser.BOOLEAN_LITERAL:
        case CalcParser.REAL_LITERAL:
        case CalcParser.STRING_LITERAL:
        case CalcParser.UNIT_LITERAL:
        case CalcParser.NIL:
        case CalcParser.IDENTIFIER:
          _localctx = new ExpressionStatementContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 159
            this.expression(0)
            this.state = 160
            this.match(CalcParser.T__28)
          }
          break
        case CalcParser.T__30:
        case CalcParser.T__32:
        case CalcParser.T__33:
          _localctx = new DeclarationStatementContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 162
            this.declaration()
            this.state = 163
            this.match(CalcParser.T__28)
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
    this.enterRule(_localctx, 20, CalcParser.RULE_program)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 170
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          ((_la - 17) & ~0x1f) === 0 &&
          ((1 << (_la - 17)) &
            ((1 << (CalcParser.T__16 - 17)) |
              (1 << (CalcParser.T__19 - 17)) |
              (1 << (CalcParser.T__22 - 17)) |
              (1 << (CalcParser.T__24 - 17)) |
              (1 << (CalcParser.T__26 - 17)) |
              (1 << (CalcParser.T__30 - 17)) |
              (1 << (CalcParser.T__32 - 17)) |
              (1 << (CalcParser.T__33 - 17)) |
              (1 << (CalcParser.INTEGER_LITERAL - 17)) |
              (1 << (CalcParser.BOOLEAN_LITERAL - 17)) |
              (1 << (CalcParser.REAL_LITERAL - 17)) |
              (1 << (CalcParser.STRING_LITERAL - 17)) |
              (1 << (CalcParser.UNIT_LITERAL - 17)) |
              (1 << (CalcParser.NIL - 17)) |
              (1 << (CalcParser.IDENTIFIER - 17)))) !==
            0
        ) {
          {
            {
              this.state = 167
              this.statement()
            }
          }
          this.state = 172
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

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 2:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)

      case 6:
        return this.pattern_sempred(_localctx as PatternContext, predIndex)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 13)

      case 1:
        return this.precpred(this._ctx, 12)

      case 2:
        return this.precpred(this._ctx, 11)

      case 3:
        return this.precpred(this._ctx, 10)

      case 4:
        return this.precpred(this._ctx, 9)

      case 5:
        return this.precpred(this._ctx, 8)

      case 6:
        return this.precpred(this._ctx, 14)
    }
    return true
  }
  private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 2)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\xB0\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02' +
    '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03 \n\x03\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x05\x04@\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04V\n\x04\f\x04\x0E\x04' +
    'Y\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06' +
    '\x07\x06c\n\x06\f\x06\x0E\x06f\v\x06\x03\x07\x03\x07\x03\x07\x07\x07k' +
    '\n\x07\f\x07\x0E\x07n\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b' +
    '\x05\bw\n\b\x03\b\x03\b\x03\b\x07\b|\n\b\f\b\x0E\b\x7F\v\b\x03\t\x03\t' +
    '\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03' +
    '\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x98\n\t' +
    '\x03\n\x03\n\x03\n\x07\n\x9D\n\n\f\n\x0E\n\xA0\v\n\x03\v\x03\v\x03\v\x03' +
    '\v\x03\v\x03\v\x05\v\xA8\n\v\x03\f\x07\f\xAB\n\f\f\f\x0E\f\xAE\v\f\x03' +
    '\f\x02\x02\x04\x06\x0E\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E' +
    '\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x06\x03\x02\x04\x07\x03\x02\b' +
    '\t\x03\x02\n\x0F\x03\x02\x10\x11\x02\xC2\x02\x18\x03\x02\x02\x02\x04\x1F' +
    '\x03\x02\x02\x02\x06?\x03\x02\x02\x02\bZ\x03\x02\x02\x02\n_\x03\x02\x02' +
    '\x02\fg\x03\x02\x02\x02\x0Ev\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12' +
    '\x99\x03\x02\x02\x02\x14\xA7\x03\x02\x02\x02\x16\xAC\x03\x02\x02\x02\x18' +
    '\x19\x07,\x02\x02\x19\x03\x03\x02\x02\x02\x1A \x07%\x02\x02\x1B \x07&' +
    "\x02\x02\x1C \x07'\x02\x02\x1D \x07(\x02\x02\x1E \x07)\x02\x02\x1F\x1A" +
    '\x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02\x1F\x1C\x03\x02\x02\x02\x1F\x1D' +
    '\x03\x02\x02\x02\x1F\x1E\x03\x02\x02\x02 \x05\x03\x02\x02\x02!"\b\x04' +
    '\x01\x02"@\x05\x04\x03\x02#@\x05\x02\x02\x02$%\x07\x13\x02\x02%&\x05' +
    "\x06\x04\x02&'\x07\x14\x02\x02'(\x05\x06\x04\x02()\x07\x15\x02\x02)" +
    '*\x05\x06\x04\t*@\x03\x02\x02\x02+@\x05\b\x05\x02,-\x07\x16\x02\x02-.' +
    '\x05\x12\n\x02./\x07\x17\x02\x02/0\x05\n\x06\x0201\x07\x18\x02\x021@\x03' +
    '\x02\x02\x0223\x07\x19\x02\x0234\x05\x06\x04\x0245\x07\x1A\x02\x025@\x03' +
    '\x02\x02\x0267\x07\x19\x02\x0278\x05\n\x06\x0289\x07\x1A\x02\x029@\x03' +
    '\x02\x02\x02:;\x07\x1B\x02\x02;<\x05\f\x07\x02<=\x07\x1C\x02\x02=@\x03' +
    '\x02\x02\x02>@\x07*\x02\x02?!\x03\x02\x02\x02?#\x03\x02\x02\x02?$\x03' +
    '\x02\x02\x02?+\x03\x02\x02\x02?,\x03\x02\x02\x02?2\x03\x02\x02\x02?6\x03' +
    '\x02\x02\x02?:\x03\x02\x02\x02?>\x03\x02\x02\x02@W\x03\x02\x02\x02AB\f' +
    '\x0F\x02\x02BV\x05\x06\x04\x10CD\f\x0E\x02\x02DE\t\x02\x02\x02EV\x05\x06' +
    '\x04\x0FFG\f\r\x02\x02GH\t\x03\x02\x02HV\x05\x06\x04\x0EIJ\f\f\x02\x02' +
    'JK\t\x04\x02\x02KV\x05\x06\x04\rLM\f\v\x02\x02MN\t\x05\x02\x02NV\x05\x06' +
    '\x04\fOP\f\n\x02\x02PQ\x07\x12\x02\x02QV\x05\x06\x04\vRS\f\x10\x02\x02' +
    'ST\x07\x03\x02\x02TV\x07+\x02\x02UA\x03\x02\x02\x02UC\x03\x02\x02\x02' +
    'UF\x03\x02\x02\x02UI\x03\x02\x02\x02UL\x03\x02\x02\x02UO\x03\x02\x02\x02' +
    'UR\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02' +
    'X\x07\x03\x02\x02\x02YW\x03\x02\x02\x02Z[\x07\x1D\x02\x02[\\\x05\x0E\b' +
    '\x02\\]\x07\x1E\x02\x02]^\x05\x06\x04\x02^\t\x03\x02\x02\x02_d\x05\x06' +
    '\x04\x02`a\x07\x1F\x02\x02ac\x05\x06\x04\x02b`\x03\x02\x02\x02cf\x03\x02' +
    '\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\v\x03\x02\x02\x02fd\x03' +
    '\x02\x02\x02gl\x05\x06\x04\x02hi\x07 \x02\x02ik\x05\x06\x04\x02jh\x03' +
    '\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\r' +
    '\x03\x02\x02\x02nl\x03\x02\x02\x02op\b\b\x01\x02pw\x05\x04\x03\x02qw\x05' +
    '\x02\x02\x02rs\x07\x19\x02\x02st\x05\x0E\b\x02tu\x07\x1A\x02\x02uw\x03' +
    '\x02\x02\x02vo\x03\x02\x02\x02vq\x03\x02\x02\x02vr\x03\x02\x02\x02w}\x03' +
    '\x02\x02\x02xy\f\x04\x02\x02yz\x07\x03\x02\x02z|\x07+\x02\x02{x\x03\x02' +
    '\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x0F' +
    '\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x07!\x02\x02\x81\x82\x05' +
    '\x0E\b\x02\x82\x83\x07\x0F\x02\x02\x83\x84\x05\x06\x04\x02\x84\x98\x03' +
    '\x02\x02\x02\x85\x86\x07!\x02\x02\x86\x87\x07"\x02\x02\x87\x88\x05\x02' +
    '\x02\x02\x88\x89\x07\x0F\x02\x02\x89\x8A\x05\b\x05\x02\x8A\x98\x03\x02' +
    '\x02\x02\x8B\x8C\x07#\x02\x02\x8C\x8D\x05\x02\x02\x02\x8D\x8E\x05\x0E' +
    '\b\x02\x8E\x8F\x07\x0F\x02\x02\x8F\x90\x05\x06\x04\x02\x90\x98\x03\x02' +
    '\x02\x02\x91\x92\x07$\x02\x02\x92\x93\x05\x12\n\x02\x93\x94\x07\x17\x02' +
    '\x02\x94\x95\x05\x12\n\x02\x95\x96\x07\x18\x02\x02\x96\x98\x03\x02\x02' +
    '\x02\x97\x80\x03\x02\x02\x02\x97\x85\x03\x02\x02\x02\x97\x8B\x03\x02\x02' +
    '\x02\x97\x91\x03\x02\x02\x02\x98\x11\x03\x02\x02\x02\x99\x9E\x05\x10\t' +
    '\x02\x9A\x9B\x07\x1F\x02\x02\x9B\x9D\x05\x10\t\x02\x9C\x9A\x03\x02\x02' +
    '\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02' +
    '\x02\x9F\x13\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA2\x05\x06\x04' +
    '\x02\xA2\xA3\x07\x1F\x02\x02\xA3\xA8\x03\x02\x02\x02\xA4\xA5\x05\x10\t' +
    '\x02\xA5\xA6\x07\x1F\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA1\x03\x02\x02' +
    '\x02\xA7\xA4\x03\x02\x02\x02\xA8\x15\x03\x02\x02\x02\xA9\xAB\x05\x14\v' +
    '\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02' +
    '\x02\xAC\xAD\x03\x02\x02\x02\xAD\x17\x03\x02\x02\x02\xAE\xAC\x03\x02\x02' +
    '\x02\x0E\x1F?UWdlv}\x97\x9E\xA7\xAC'
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

export class IdentifierContext extends ParserRuleContext {
  public IDENTIFIER(): TerminalNode {
    return this.getToken(CalcParser.IDENTIFIER, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_identifier
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
export class RealContext extends LiteralContext {
  public REAL_LITERAL(): TerminalNode {
    return this.getToken(CalcParser.REAL_LITERAL, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterReal) {
      listener.enterReal(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitReal) {
      listener.exitReal(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitReal) {
      return visitor.visitReal(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class StringContext extends LiteralContext {
  public STRING_LITERAL(): TerminalNode {
    return this.getToken(CalcParser.STRING_LITERAL, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterString) {
      listener.enterString(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitString) {
      listener.exitString(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitString) {
      return visitor.visitString(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class UnitContext extends LiteralContext {
  public UNIT_LITERAL(): TerminalNode {
    return this.getToken(CalcParser.UNIT_LITERAL, 0)
  }
  constructor(ctx: LiteralContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterUnit) {
      listener.enterUnit(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitUnit) {
      listener.exitUnit(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitUnit) {
      return visitor.visitUnit(this)
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
export class LiteralExpressionContext extends ExpressionContext {
  public literal(): LiteralContext {
    return this.getRuleContext(0, LiteralContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLiteralExpression) {
      listener.enterLiteralExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLiteralExpression) {
      listener.exitLiteralExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLiteralExpression) {
      return visitor.visitLiteralExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class IdentifierExpressionContext extends ExpressionContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIdentifierExpression) {
      listener.enterIdentifierExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIdentifierExpression) {
      listener.exitIdentifierExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIdentifierExpression) {
      return visitor.visitIdentifierExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class TypedExpressionContext extends ExpressionContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  public TYPE(): TerminalNode {
    return this.getToken(CalcParser.TYPE, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterTypedExpression) {
      listener.enterTypedExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitTypedExpression) {
      listener.exitTypedExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitTypedExpression) {
      return visitor.visitTypedExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FunctionApplicationContext extends ExpressionContext {
  public _fn!: ExpressionContext
  public _args!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterFunctionApplication) {
      listener.enterFunctionApplication(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitFunctionApplication) {
      listener.exitFunctionApplication(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitFunctionApplication) {
      return visitor.visitFunctionApplication(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class InfixApplicationContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _op!: Token
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
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterInfixApplication) {
      listener.enterInfixApplication(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitInfixApplication) {
      listener.exitInfixApplication(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitInfixApplication) {
      return visitor.visitInfixApplication(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConditionalExpressionContext extends ExpressionContext {
  public _pred!: ExpressionContext
  public _cons!: ExpressionContext
  public _alt!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterConditionalExpression) {
      listener.enterConditionalExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitConditionalExpression) {
      listener.exitConditionalExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitConditionalExpression) {
      return visitor.visitConditionalExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LambdaExpressionContext extends ExpressionContext {
  public lambda(): LambdaContext {
    return this.getRuleContext(0, LambdaContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLambdaExpression) {
      listener.enterLambdaExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLambdaExpression) {
      listener.exitLambdaExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLambdaExpression) {
      return visitor.visitLambdaExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LetExpressionContext extends ExpressionContext {
  public declarationList(): DeclarationListContext {
    return this.getRuleContext(0, DeclarationListContext)
  }
  public expressionList(): ExpressionListContext {
    return this.getRuleContext(0, ExpressionListContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLetExpression) {
      listener.enterLetExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLetExpression) {
      listener.exitLetExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLetExpression) {
      return visitor.visitLetExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParenthesizedExpressionContext extends ExpressionContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParenthesizedExpression) {
      listener.enterParenthesizedExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParenthesizedExpression) {
      listener.exitParenthesizedExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParenthesizedExpression) {
      return visitor.visitParenthesizedExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class SequenceExpressionContext extends ExpressionContext {
  public expressionList(): ExpressionListContext {
    return this.getRuleContext(0, ExpressionListContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterSequenceExpression) {
      listener.enterSequenceExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitSequenceExpression) {
      listener.exitSequenceExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitSequenceExpression) {
      return visitor.visitSequenceExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ListExpressionContext extends ExpressionContext {
  public listElements(): ListElementsContext {
    return this.getRuleContext(0, ListElementsContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterListExpression) {
      listener.enterListExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitListExpression) {
      listener.exitListExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitListExpression) {
      return visitor.visitListExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class EmptyListExpressionContext extends ExpressionContext {
  public NIL(): TerminalNode {
    return this.getToken(CalcParser.NIL, 0)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterEmptyListExpression) {
      listener.enterEmptyListExpression(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitEmptyListExpression) {
      listener.exitEmptyListExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitEmptyListExpression) {
      return visitor.visitEmptyListExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LambdaContext extends ParserRuleContext {
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_lambda
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLambda) {
      listener.enterLambda(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLambda) {
      listener.exitLambda(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLambda) {
      return visitor.visitLambda(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionListContext extends ParserRuleContext {
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_expressionList
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ListElementsContext extends ParserRuleContext {
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_listElements
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterListElements) {
      listener.enterListElements(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitListElements) {
      listener.exitListElements(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitListElements) {
      return visitor.visitListElements(this)
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
export class LiteralPatternContext extends PatternContext {
  public literal(): LiteralContext {
    return this.getRuleContext(0, LiteralContext)
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLiteralPattern) {
      listener.enterLiteralPattern(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLiteralPattern) {
      listener.exitLiteralPattern(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLiteralPattern) {
      return visitor.visitLiteralPattern(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class IdentifierPatternContext extends PatternContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterIdentifierPattern) {
      listener.enterIdentifierPattern(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitIdentifierPattern) {
      listener.exitIdentifierPattern(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitIdentifierPattern) {
      return visitor.visitIdentifierPattern(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class TypedPatternContext extends PatternContext {
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext)
  }
  public TYPE(): TerminalNode {
    return this.getToken(CalcParser.TYPE, 0)
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterTypedPattern) {
      listener.enterTypedPattern(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitTypedPattern) {
      listener.exitTypedPattern(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitTypedPattern) {
      return visitor.visitTypedPattern(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ParenthesizedPatternContext extends PatternContext {
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext)
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterParenthesizedPattern) {
      listener.enterParenthesizedPattern(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitParenthesizedPattern) {
      listener.exitParenthesizedPattern(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitParenthesizedPattern) {
      return visitor.visitParenthesizedPattern(this)
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
export class RecursiveDeclarationContext extends DeclarationContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
  public lambda(): LambdaContext {
    return this.getRuleContext(0, LambdaContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterRecursiveDeclaration) {
      listener.enterRecursiveDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitRecursiveDeclaration) {
      listener.exitRecursiveDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitRecursiveDeclaration) {
      return visitor.visitRecursiveDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class FunctionDeclarationContext extends DeclarationContext {
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext)
  }
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
    if (listener.enterFunctionDeclaration) {
      listener.enterFunctionDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitFunctionDeclaration) {
      listener.exitFunctionDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitFunctionDeclaration) {
      return visitor.visitFunctionDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LocalDeclarationContext extends DeclarationContext {
  public _local!: DeclarationListContext
  public _body!: DeclarationListContext
  public declarationList(): DeclarationListContext[]
  public declarationList(i: number): DeclarationListContext
  public declarationList(i?: number): DeclarationListContext | DeclarationListContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationListContext)
    } else {
      return this.getRuleContext(i, DeclarationListContext)
    }
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterLocalDeclaration) {
      listener.enterLocalDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitLocalDeclaration) {
      listener.exitLocalDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitLocalDeclaration) {
      return visitor.visitLocalDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationListContext extends ParserRuleContext {
  public declaration(): DeclarationContext[]
  public declaration(i: number): DeclarationContext
  public declaration(i?: number): DeclarationContext | DeclarationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DeclarationContext)
    } else {
      return this.getRuleContext(i, DeclarationContext)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return CalcParser.RULE_declarationList
  }
  // @Override
  public enterRule(listener: CalcListener): void {
    if (listener.enterDeclarationList) {
      listener.enterDeclarationList(this)
    }
  }
  // @Override
  public exitRule(listener: CalcListener): void {
    if (listener.exitDeclarationList) {
      listener.exitDeclarationList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: CalcVisitor<Result>): Result {
    if (visitor.visitDeclarationList) {
      return visitor.visitDeclarationList(this)
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
