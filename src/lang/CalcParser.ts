// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import * as Utils from "antlr4ts/misc/Utils";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import { CalcListener } from "./CalcListener";
import { CalcVisitor } from "./CalcVisitor";


export class CalcParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly INTEGER_LITERAL = 30;
	public static readonly BOOLEAN_LITERAL = 31;
	public static readonly REAL_LITERAL = 32;
	public static readonly STRING_LITERAL = 33;
	public static readonly TYPE = 34;
	public static readonly IDENTIFIER = 35;
	public static readonly WHITESPACE = 36;
	public static readonly RULE_identifier = 0;
	public static readonly RULE_literal = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_pattern = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_declarationList = 5;
	public static readonly RULE_statement = 6;
	public static readonly RULE_program = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"identifier", "literal", "expression", "pattern", "declaration", "declarationList", 
		"statement", "program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'*'", "'/'", "'div'", "'mod'", "'+'", "'-'", "'<>'", 
		"'<'", "'>'", "'<='", "'>='", "'='", "'andalso'", "'orelse'", "'^'", "'if'", 
		"'then'", "'else'", "'fn'", "'=>'", "'let'", "'in'", "'end'", "'('", "';'", 
		"')'", "'val'", "'fun'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "INTEGER_LITERAL", "BOOLEAN_LITERAL", "REAL_LITERAL", 
		"STRING_LITERAL", "TYPE", "IDENTIFIER", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcParser._LITERAL_NAMES, CalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		const _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalcParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.match(CalcParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CalcParser.RULE_literal);
		try {
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER_LITERAL:
				_localctx = new IntegerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.match(CalcParser.INTEGER_LITERAL);
				}
				break;
			case CalcParser.BOOLEAN_LITERAL:
				_localctx = new BooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 19;
				this.match(CalcParser.BOOLEAN_LITERAL);
				}
				break;
			case CalcParser.REAL_LITERAL:
				_localctx = new RealContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 20;
				this.match(CalcParser.REAL_LITERAL);
				}
				break;
			case CalcParser.STRING_LITERAL:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 21;
				this.match(CalcParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		const _parentctx: ParserRuleContext = this._ctx;
		const _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		const _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CalcParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 25;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 26;
				this.identifier();
				}
				break;

			case 3:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 27;
				this.match(CalcParser.T__16);
				this.state = 28;
				(_localctx as ConditionalExpressionContext)._pred = this.expression(0);
				this.state = 29;
				this.match(CalcParser.T__17);
				this.state = 30;
				(_localctx as ConditionalExpressionContext)._cons = this.expression(0);
				this.state = 31;
				this.match(CalcParser.T__18);
				this.state = 32;
				(_localctx as ConditionalExpressionContext)._alt = this.expression(5);
				}
				break;

			case 4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 34;
				this.match(CalcParser.T__19);
				this.state = 35;
				this.pattern(0);
				this.state = 36;
				this.match(CalcParser.T__20);
				this.state = 37;
				this.expression(4);
				}
				break;

			case 5:
				{
				_localctx = new LetExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 39;
				this.match(CalcParser.T__21);
				this.state = 40;
				this.declarationList();
				this.state = 41;
				this.match(CalcParser.T__22);
				this.state = 42;
				this.expression(0);
				this.state = 43;
				this.match(CalcParser.T__23);
				}
				break;

			case 6:
				{
				_localctx = new SequenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 45;
				this.match(CalcParser.T__24);
				this.state = 46;
				this.expression(0);
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalcParser.T__25) {
					{
					{
					this.state = 47;
					this.match(CalcParser.T__25);
					this.state = 48;
					this.expression(0);
					}
					}
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 54;
				this.match(CalcParser.T__26);
				}
				break;

			case 7:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 56;
				this.match(CalcParser.T__24);
				this.state = 57;
				this.expression(0);
				this.state = 58;
				this.match(CalcParser.T__26);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 84;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 82;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new FunctionApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionApplicationContext)._fn = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 62;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 63;
						(_localctx as FunctionApplicationContext)._args = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 64;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 65;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__2) | (1 << CalcParser.T__3) | (1 << CalcParser.T__4))) !== 0))) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 66;
						(_localctx as InfixApplicationContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 67;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 68;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalcParser.T__5 || _la === CalcParser.T__6)) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 69;
						(_localctx as InfixApplicationContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 70;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 71;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.T__7) | (1 << CalcParser.T__8) | (1 << CalcParser.T__9) | (1 << CalcParser.T__10) | (1 << CalcParser.T__11) | (1 << CalcParser.T__12))) !== 0))) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 72;
						(_localctx as InfixApplicationContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 73;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 74;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalcParser.T__13 || _la === CalcParser.T__14)) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 75;
						(_localctx as InfixApplicationContext)._right = this.expression(8);
						}
						break;

					case 6:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 76;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 77;
						(_localctx as InfixApplicationContext)._op = this.match(CalcParser.T__15);
						this.state = 78;
						(_localctx as InfixApplicationContext)._right = this.expression(7);
						}
						break;

					case 7:
						{
						_localctx = new TypedExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 79;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 80;
						this.match(CalcParser.T__0);
						this.state = 81;
						this.match(CalcParser.TYPE);
						}
						break;
					}
					}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public pattern(): PatternContext;
	public pattern(_p: number): PatternContext;
	// @RuleVersion(0)
	public pattern(_p?: number): PatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		const _parentctx: ParserRuleContext = this._ctx;
		const _parentState: number = this.state;
		let _localctx: PatternContext = new PatternContext(this._ctx, _parentState);
		let _prevctx: PatternContext = _localctx;
		const _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, CalcParser.RULE_pattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER_LITERAL:
			case CalcParser.BOOLEAN_LITERAL:
			case CalcParser.REAL_LITERAL:
			case CalcParser.STRING_LITERAL:
				{
				_localctx = new LiteralPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 88;
				this.literal();
				}
				break;
			case CalcParser.IDENTIFIER:
				{
				_localctx = new IdentifierPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 89;
				this.identifier();
				}
				break;
			case CalcParser.T__24:
				{
				_localctx = new ParenthesizedPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 90;
				this.match(CalcParser.T__24);
				this.state = 91;
				this.pattern(0);
				this.state = 92;
				this.match(CalcParser.T__26);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 101;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypedPatternContext(new PatternContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_pattern);
					this.state = 96;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 97;
					this.match(CalcParser.T__0);
					this.state = 98;
					this.match(CalcParser.TYPE);
					}
					}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalcParser.RULE_declaration);
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.T__27:
				_localctx = new ValueDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				this.match(CalcParser.T__27);
				this.state = 105;
				this.pattern(0);
				this.state = 106;
				this.match(CalcParser.T__12);
				this.state = 107;
				this.expression(0);
				}
				break;
			case CalcParser.T__28:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.match(CalcParser.T__28);
				this.state = 110;
				this.identifier();
				this.state = 111;
				this.pattern(0);
				this.state = 112;
				this.match(CalcParser.T__12);
				this.state = 113;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationList(): DeclarationListContext {
		const _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CalcParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.declaration();
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.T__25) {
				{
				{
				this.state = 118;
				this.match(CalcParser.T__25);
				this.state = 119;
				this.declaration();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CalcParser.RULE_statement);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.T__16:
			case CalcParser.T__19:
			case CalcParser.T__21:
			case CalcParser.T__24:
			case CalcParser.INTEGER_LITERAL:
			case CalcParser.BOOLEAN_LITERAL:
			case CalcParser.REAL_LITERAL:
			case CalcParser.STRING_LITERAL:
			case CalcParser.IDENTIFIER:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.expression(0);
				this.state = 126;
				this.match(CalcParser.T__25);
				}
				break;
			case CalcParser.T__27:
			case CalcParser.T__28:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.declaration();
				this.state = 129;
				this.match(CalcParser.T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		const _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CalcParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (CalcParser.T__16 - 17)) | (1 << (CalcParser.T__19 - 17)) | (1 << (CalcParser.T__21 - 17)) | (1 << (CalcParser.T__24 - 17)) | (1 << (CalcParser.T__27 - 17)) | (1 << (CalcParser.T__28 - 17)) | (1 << (CalcParser.INTEGER_LITERAL - 17)) | (1 << (CalcParser.BOOLEAN_LITERAL - 17)) | (1 << (CalcParser.REAL_LITERAL - 17)) | (1 << (CalcParser.STRING_LITERAL - 17)) | (1 << (CalcParser.IDENTIFIER - 17)))) !== 0)) {
				{
				{
				this.state = 133;
				this.statement();
				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 3:
			return this.pattern_sempred(_localctx as PatternContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 9);

		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 12);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\x8E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03\x19\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x044\n\x04\f\x04\x0E\x047\v\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04?\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04U\n\x04\f" +
		"\x04\x0E\x04X\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05a\n\x05\x03\x05\x03\x05\x03\x05\x07\x05f\n\x05\f\x05\x0E\x05" +
		"i\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06v\n\x06\x03\x07\x03\x07\x03\x07\x07\x07" +
		"{\n\x07\f\x07\x0E\x07~\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"\x86\n\b\x03\t\x07\t\x89\n\t\f\t\x0E\t\x8C\v\t\x03\t\x02\x02\x04\x06\b" +
		"\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x06\x03" +
		"\x02\x04\x07\x03\x02\b\t\x03\x02\n\x0F\x03\x02\x10\x11\x02\x9D\x02\x12" +
		"\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02\x06>\x03\x02\x02\x02\b`\x03\x02" +
		"\x02\x02\nu\x03\x02\x02\x02\fw\x03\x02\x02\x02\x0E\x85\x03\x02\x02\x02" +
		"\x10\x8A\x03\x02\x02\x02\x12\x13\x07%\x02\x02\x13\x03\x03\x02\x02\x02" +
		"\x14\x19\x07 \x02\x02\x15\x19\x07!\x02\x02\x16\x19\x07\"\x02\x02\x17\x19" +
		"\x07#\x02\x02\x18\x14\x03\x02\x02\x02\x18\x15\x03\x02\x02\x02\x18\x16" +
		"\x03\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x05\x03\x02\x02\x02\x1A\x1B" +
		"\b\x04\x01\x02\x1B?\x05\x04\x03\x02\x1C?\x05\x02\x02\x02\x1D\x1E\x07\x13" +
		"\x02\x02\x1E\x1F\x05\x06\x04\x02\x1F \x07\x14\x02\x02 !\x05\x06\x04\x02" +
		"!\"\x07\x15\x02\x02\"#\x05\x06\x04\x07#?\x03\x02\x02\x02$%\x07\x16\x02" +
		"\x02%&\x05\b\x05\x02&\'\x07\x17\x02\x02\'(\x05\x06\x04\x06(?\x03\x02\x02" +
		"\x02)*\x07\x18\x02\x02*+\x05\f\x07\x02+,\x07\x19\x02\x02,-\x05\x06\x04" +
		"\x02-.\x07\x1A\x02\x02.?\x03\x02\x02\x02/0\x07\x1B\x02\x0205\x05\x06\x04" +
		"\x0212\x07\x1C\x02\x0224\x05\x06\x04\x0231\x03\x02\x02\x0247\x03\x02\x02" +
		"\x0253\x03\x02\x02\x0256\x03\x02\x02\x0268\x03\x02\x02\x0275\x03\x02\x02" +
		"\x0289\x07\x1D\x02\x029?\x03\x02\x02\x02:;\x07\x1B\x02\x02;<\x05\x06\x04" +
		"\x02<=\x07\x1D\x02\x02=?\x03\x02\x02\x02>\x1A\x03\x02\x02\x02>\x1C\x03" +
		"\x02\x02\x02>\x1D\x03\x02\x02\x02>$\x03\x02\x02\x02>)\x03\x02\x02\x02" +
		">/\x03\x02\x02\x02>:\x03\x02\x02\x02?V\x03\x02\x02\x02@A\f\r\x02\x02A" +
		"U\x05\x06\x04\x0EBC\f\f\x02\x02CD\t\x02\x02\x02DU\x05\x06\x04\rEF\f\v" +
		"\x02\x02FG\t\x03\x02\x02GU\x05\x06\x04\fHI\f\n\x02\x02IJ\t\x04\x02\x02" +
		"JU\x05\x06\x04\vKL\f\t\x02\x02LM\t\x05\x02\x02MU\x05\x06\x04\nNO\f\b\x02" +
		"\x02OP\x07\x12\x02\x02PU\x05\x06\x04\tQR\f\x0E\x02\x02RS\x07\x03\x02\x02" +
		"SU\x07$\x02\x02T@\x03\x02\x02\x02TB\x03\x02\x02\x02TE\x03\x02\x02\x02" +
		"TH\x03\x02\x02\x02TK\x03\x02\x02\x02TN\x03\x02\x02\x02TQ\x03\x02\x02\x02" +
		"UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\x07\x03\x02\x02" +
		"\x02XV\x03\x02\x02\x02YZ\b\x05\x01\x02Za\x05\x04\x03\x02[a\x05\x02\x02" +
		"\x02\\]\x07\x1B\x02\x02]^\x05\b\x05\x02^_\x07\x1D\x02\x02_a\x03\x02\x02" +
		"\x02`Y\x03\x02\x02\x02`[\x03\x02\x02\x02`\\\x03\x02\x02\x02ag\x03\x02" +
		"\x02\x02bc\f\x04\x02\x02cd\x07\x03\x02\x02df\x07$\x02\x02eb\x03\x02\x02" +
		"\x02fi\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02h\t\x03\x02" +
		"\x02\x02ig\x03\x02\x02\x02jk\x07\x1E\x02\x02kl\x05\b\x05\x02lm\x07\x0F" +
		"\x02\x02mn\x05\x06\x04\x02nv\x03\x02\x02\x02op\x07\x1F\x02\x02pq\x05\x02" +
		"\x02\x02qr\x05\b\x05\x02rs\x07\x0F\x02\x02st\x05\x06\x04\x02tv\x03\x02" +
		"\x02\x02uj\x03\x02\x02\x02uo\x03\x02\x02\x02v\v\x03\x02\x02\x02w|\x05" +
		"\n\x06\x02xy\x07\x1C\x02\x02y{\x05\n\x06\x02zx\x03\x02\x02\x02{~\x03\x02" +
		"\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\r\x03\x02\x02\x02~|\x03" +
		"\x02\x02\x02\x7F\x80\x05\x06\x04\x02\x80\x81\x07\x1C\x02\x02\x81\x86\x03" +
		"\x02\x02\x02\x82\x83\x05\n\x06\x02\x83\x84\x07\x1C\x02\x02\x84\x86\x03" +
		"\x02\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x82\x03\x02\x02\x02\x86\x0F\x03" +
		"\x02\x02\x02\x87\x89\x05\x0E\b\x02\x88\x87\x03\x02\x02\x02\x89\x8C\x03" +
		"\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x11\x03" +
		"\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\r\x185>TV`gu|\x85\x8A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcParser.__ATN) {
			CalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcParser._serializedATN));
		}

		return CalcParser.__ATN;
	}

}

export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(CalcParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_identifier; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(CalcParser.INTEGER_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanContext extends LiteralContext {
	public BOOLEAN_LITERAL(): TerminalNode { return this.getToken(CalcParser.BOOLEAN_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterBoolean) {
			listener.enterBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitBoolean) {
			listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RealContext extends LiteralContext {
	public REAL_LITERAL(): TerminalNode { return this.getToken(CalcParser.REAL_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterReal) {
			listener.enterReal(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitReal) {
			listener.exitReal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitReal) {
			return visitor.visitReal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(CalcParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypedExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public TYPE(): TerminalNode { return this.getToken(CalcParser.TYPE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterTypedExpression) {
			listener.enterTypedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitTypedExpression) {
			listener.exitTypedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitTypedExpression) {
			return visitor.visitTypedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionApplicationContext extends ExpressionContext {
	public _fn!: ExpressionContext;
	public _args!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFunctionApplication) {
			listener.enterFunctionApplication(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFunctionApplication) {
			listener.exitFunctionApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFunctionApplication) {
			return visitor.visitFunctionApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixApplicationContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterInfixApplication) {
			listener.enterInfixApplication(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitInfixApplication) {
			listener.exitInfixApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitInfixApplication) {
			return visitor.visitInfixApplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalExpressionContext extends ExpressionContext {
	public _pred!: ExpressionContext;
	public _cons!: ExpressionContext;
	public _alt!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LetExpressionContext extends ExpressionContext {
	public declarationList(): DeclarationListContext {
		return this.getRuleContext(0, DeclarationListContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLetExpression) {
			listener.enterLetExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLetExpression) {
			listener.exitLetExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLetExpression) {
			return visitor.visitLetExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SequenceExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSequenceExpression) {
			listener.enterSequenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSequenceExpression) {
			listener.exitSequenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSequenceExpression) {
			return visitor.visitSequenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_pattern; }
	public copyFrom(ctx: PatternContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralPatternContext extends PatternContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLiteralPattern) {
			listener.enterLiteralPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLiteralPattern) {
			listener.exitLiteralPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLiteralPattern) {
			return visitor.visitLiteralPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierPatternContext extends PatternContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterIdentifierPattern) {
			listener.enterIdentifierPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitIdentifierPattern) {
			listener.exitIdentifierPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitIdentifierPattern) {
			return visitor.visitIdentifierPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypedPatternContext extends PatternContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public TYPE(): TerminalNode { return this.getToken(CalcParser.TYPE, 0); }
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterTypedPattern) {
			listener.enterTypedPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitTypedPattern) {
			listener.exitTypedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitTypedPattern) {
			return visitor.visitTypedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedPatternContext extends PatternContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterParenthesizedPattern) {
			listener.enterParenthesizedPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitParenthesizedPattern) {
			listener.exitParenthesizedPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitParenthesizedPattern) {
			return visitor.visitParenthesizedPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueDeclarationContext extends DeclarationContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterValueDeclaration) {
			listener.enterValueDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitValueDeclaration) {
			listener.exitValueDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitValueDeclaration) {
			return visitor.visitValueDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionDeclarationContext extends DeclarationContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_declarationList; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDeclarationList) {
			listener.enterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDeclarationList) {
			listener.exitDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDeclarationList) {
			return visitor.visitDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclarationStatementContext extends StatementContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitDeclarationStatement) {
			return visitor.visitDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_program; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


