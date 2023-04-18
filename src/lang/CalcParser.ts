// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

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
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly INTEGER_LITERAL = 44;
	public static readonly BOOLEAN_LITERAL = 45;
	public static readonly REAL_LITERAL = 46;
	public static readonly STRING_LITERAL = 47;
	public static readonly UNIT_LITERAL = 48;
	public static readonly NIL = 49;
	public static readonly IDENTIFIER = 50;
	public static readonly WHITESPACE = 51;
	public static readonly RULE_type = 0;
	public static readonly RULE_identifier = 1;
	public static readonly RULE_literal = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_list = 4;
	public static readonly RULE_lambda = 5;
	public static readonly RULE_expressionList = 6;
	public static readonly RULE_pattern = 7;
	public static readonly RULE_declaration = 8;
	public static readonly RULE_declarationList = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_program = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"type", "identifier", "literal", "expression", "list", "lambda", "expressionList", 
		"pattern", "declaration", "declarationList", "statement", "program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'bool'", "'int'", "'real'", "'string'", "'unit'", "'list'", 
		"'->'", "'*'", "'('", "')'", "'::'", "':'", "'/'", "'div'", "'mod'", "'+'", 
		"'-'", "'<>'", "'<'", "'>'", "'<='", "'>='", "'='", "'andalso'", "'orelse'", 
		"'^'", "'@'", "'if'", "'then'", "'else'", "'let'", "'in'", "'end'", "','", 
		"'['", "']'", "'fn'", "'=>'", "';'", "'val'", "'rec'", "'fun'", "'local'", 
		undefined, undefined, undefined, undefined, "'()'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "INTEGER_LITERAL", "BOOLEAN_LITERAL", "REAL_LITERAL", 
		"STRING_LITERAL", "UNIT_LITERAL", "NIL", "IDENTIFIER", "WHITESPACE",
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

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 0;
		this.enterRecursionRule(_localctx, 0, CalcParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.T__0:
			case CalcParser.T__1:
			case CalcParser.T__2:
			case CalcParser.T__3:
			case CalcParser.T__4:
				{
				_localctx = new LiteralTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 25;
				(_localctx as LiteralTypeContext)._litType = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.T__0) | (1 << CalcParser.T__1) | (1 << CalcParser.T__2) | (1 << CalcParser.T__3) | (1 << CalcParser.T__4))) !== 0))) {
					(_localctx as LiteralTypeContext)._litType = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case CalcParser.T__8:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 26;
				this.match(CalcParser.T__8);
				this.state = 27;
				(_localctx as ParenthesizedTypeContext)._inner = this.type(0);
				this.state = 28;
				this.match(CalcParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 46;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 44;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new FunctionTypeContext(new TypeContext(_parentctx, _parentState));
						(_localctx as FunctionTypeContext)._param = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_type);
						this.state = 32;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 33;
						this.match(CalcParser.T__6);
						this.state = 34;
						(_localctx as FunctionTypeContext)._return = this.type(4);
						}
						break;

					case 2:
						{
						_localctx = new ListTypeContext(new TypeContext(_parentctx, _parentState));
						(_localctx as ListTypeContext)._elType = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_type);
						this.state = 35;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 36;
						this.match(CalcParser.T__5);
						}
						break;

					case 3:
						{
						_localctx = new TupleTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_type);
						this.state = 37;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 40;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 38;
								this.match(CalcParser.T__7);
								this.state = 39;
								this.type(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 42;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CalcParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
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
		this.enterRule(_localctx, 4, CalcParser.RULE_literal);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER_LITERAL:
				_localctx = new IntegerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.match(CalcParser.INTEGER_LITERAL);
				}
				break;
			case CalcParser.BOOLEAN_LITERAL:
				_localctx = new BooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.match(CalcParser.BOOLEAN_LITERAL);
				}
				break;
			case CalcParser.REAL_LITERAL:
				_localctx = new RealContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 53;
				this.match(CalcParser.REAL_LITERAL);
				}
				break;
			case CalcParser.STRING_LITERAL:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 54;
				this.match(CalcParser.STRING_LITERAL);
				}
				break;
			case CalcParser.UNIT_LITERAL:
				_localctx = new UnitContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 55;
				this.match(CalcParser.UNIT_LITERAL);
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

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, CalcParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 59;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 60;
				this.identifier();
				}
				break;

			case 3:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 61;
				this.match(CalcParser.T__27);
				this.state = 62;
				(_localctx as ConditionalExpressionContext)._pred = this.expression(0);
				this.state = 63;
				this.match(CalcParser.T__28);
				this.state = 64;
				(_localctx as ConditionalExpressionContext)._cons = this.expression(0);
				this.state = 65;
				this.match(CalcParser.T__29);
				this.state = 66;
				(_localctx as ConditionalExpressionContext)._alt = this.expression(7);
				}
				break;

			case 4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 68;
				this.lambda();
				}
				break;

			case 5:
				{
				_localctx = new LetExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 69;
				this.match(CalcParser.T__30);
				this.state = 70;
				this.declarationList();
				this.state = 71;
				this.match(CalcParser.T__31);
				this.state = 72;
				this.expressionList();
				this.state = 73;
				this.match(CalcParser.T__32);
				}
				break;

			case 6:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 75;
				this.match(CalcParser.T__8);
				this.state = 76;
				this.expression(0);
				this.state = 77;
				this.match(CalcParser.T__9);
				}
				break;

			case 7:
				{
				_localctx = new SequenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 79;
				this.match(CalcParser.T__8);
				this.state = 80;
				this.expressionList();
				this.state = 81;
				this.match(CalcParser.T__9);
				}
				break;

			case 8:
				{
				_localctx = new TupleExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 83;
				this.match(CalcParser.T__8);
				this.state = 84;
				this.expression(0);
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalcParser.T__33) {
					{
					{
					this.state = 85;
					this.match(CalcParser.T__33);
					this.state = 86;
					this.expression(0);
					}
					}
					this.state = 91;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 92;
				this.match(CalcParser.T__9);
				}
				break;

			case 9:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 94;
				this.list();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 125;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 123;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new ListConstructionExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 97;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 98;
						this.match(CalcParser.T__10);
						this.state = 99;
						this.expression(16);
						}
						break;

					case 2:
						{
						_localctx = new FunctionApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionApplicationContext)._fn = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 100;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 101;
						(_localctx as FunctionApplicationContext)._args = this.expression(15);
						}
						break;

					case 3:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 102;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 103;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.T__7) | (1 << CalcParser.T__12) | (1 << CalcParser.T__13) | (1 << CalcParser.T__14))) !== 0))) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 104;
						(_localctx as InfixApplicationContext)._right = this.expression(14);
						}
						break;

					case 4:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 105;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 106;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalcParser.T__15 || _la === CalcParser.T__16)) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 107;
						(_localctx as InfixApplicationContext)._right = this.expression(13);
						}
						break;

					case 5:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 108;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 109;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.T__17) | (1 << CalcParser.T__18) | (1 << CalcParser.T__19) | (1 << CalcParser.T__20) | (1 << CalcParser.T__21) | (1 << CalcParser.T__22))) !== 0))) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 110;
						(_localctx as InfixApplicationContext)._right = this.expression(12);
						}
						break;

					case 6:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 111;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 112;
						(_localctx as InfixApplicationContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CalcParser.T__23 || _la === CalcParser.T__24)) {
							(_localctx as InfixApplicationContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 113;
						(_localctx as InfixApplicationContext)._right = this.expression(11);
						}
						break;

					case 7:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 114;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 115;
						(_localctx as InfixApplicationContext)._op = this.match(CalcParser.T__25);
						this.state = 116;
						(_localctx as InfixApplicationContext)._right = this.expression(10);
						}
						break;

					case 8:
						{
						_localctx = new InfixApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as InfixApplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 117;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 118;
						(_localctx as InfixApplicationContext)._op = this.match(CalcParser.T__26);
						this.state = 119;
						(_localctx as InfixApplicationContext)._right = this.expression(9);
						}
						break;

					case 9:
						{
						_localctx = new TypedExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 120;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 121;
						this.match(CalcParser.T__11);
						this.state = 122;
						this.type(0);
						}
						break;
					}
					}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CalcParser.RULE_list);
		let _la: number;
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.T__34:
				_localctx = new SquareBracketListContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.match(CalcParser.T__34);
				this.state = 129;
				this.expression(0);
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalcParser.T__33) {
					{
					{
					this.state = 130;
					this.match(CalcParser.T__33);
					this.state = 131;
					this.expression(0);
					}
					}
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 137;
				this.match(CalcParser.T__35);
				}
				break;
			case CalcParser.NIL:
				_localctx = new EmptyListContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.match(CalcParser.NIL);
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
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CalcParser.RULE_lambda);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(CalcParser.T__36);
			this.state = 143;
			this.pattern(0);
			this.state = 144;
			this.match(CalcParser.T__37);
			this.state = 145;
			this.expression(0);
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CalcParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.expression(0);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.T__38) {
				{
				{
				this.state = 148;
				this.match(CalcParser.T__38);
				this.state = 149;
				this.expression(0);
				}
				}
				this.state = 154;
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

	public pattern(): PatternContext;
	public pattern(_p: number): PatternContext;
	// @RuleVersion(0)
	public pattern(_p?: number): PatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatternContext = new PatternContext(this._ctx, _parentState);
		let _prevctx: PatternContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, CalcParser.RULE_pattern, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 156;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 157;
				this.identifier();
				}
				break;

			case 3:
				{
				_localctx = new TuplePatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 158;
				this.match(CalcParser.T__8);
				this.state = 159;
				this.pattern(0);
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CalcParser.T__33) {
					{
					{
					this.state = 160;
					this.match(CalcParser.T__33);
					this.state = 161;
					this.pattern(0);
					}
					}
					this.state = 166;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 167;
				this.match(CalcParser.T__9);
				}
				break;

			case 4:
				{
				_localctx = new ParenthesizedPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 169;
				this.match(CalcParser.T__8);
				this.state = 170;
				this.pattern(0);
				this.state = 171;
				this.match(CalcParser.T__9);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 180;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
					this.state = 175;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 176;
					this.match(CalcParser.T__11);
					this.state = 177;
					this.type(0);
					}
					}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
		this.enterRule(_localctx, 16, CalcParser.RULE_declaration);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new ValueDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 183;
				this.match(CalcParser.T__39);
				this.state = 184;
				this.pattern(0);
				this.state = 185;
				this.match(CalcParser.T__22);
				this.state = 186;
				this.expression(0);
				}
				break;

			case 2:
				_localctx = new RecursiveDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.match(CalcParser.T__39);
				this.state = 189;
				this.match(CalcParser.T__40);
				this.state = 190;
				this.identifier();
				this.state = 191;
				this.match(CalcParser.T__22);
				this.state = 192;
				this.lambda();
				}
				break;

			case 3:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 194;
				this.match(CalcParser.T__41);
				this.state = 195;
				this.identifier();
				this.state = 196;
				this.pattern(0);
				this.state = 197;
				this.match(CalcParser.T__22);
				this.state = 198;
				this.expression(0);
				}
				break;

			case 4:
				_localctx = new LocalDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 200;
				this.match(CalcParser.T__42);
				this.state = 201;
				(_localctx as LocalDeclarationContext)._local = this.declarationList();
				this.state = 202;
				this.match(CalcParser.T__31);
				this.state = 203;
				(_localctx as LocalDeclarationContext)._body = this.declarationList();
				this.state = 204;
				this.match(CalcParser.T__32);
				}
				break;
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
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CalcParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.declaration();
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CalcParser.T__38) {
				{
				{
				this.state = 209;
				this.match(CalcParser.T__38);
				this.state = 210;
				this.declaration();
				}
				}
				this.state = 215;
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
		this.enterRule(_localctx, 20, CalcParser.RULE_statement);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.T__8:
			case CalcParser.T__27:
			case CalcParser.T__30:
			case CalcParser.T__34:
			case CalcParser.T__36:
			case CalcParser.INTEGER_LITERAL:
			case CalcParser.BOOLEAN_LITERAL:
			case CalcParser.REAL_LITERAL:
			case CalcParser.STRING_LITERAL:
			case CalcParser.UNIT_LITERAL:
			case CalcParser.NIL:
			case CalcParser.IDENTIFIER:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.expression(0);
				this.state = 217;
				this.match(CalcParser.T__38);
				}
				break;
			case CalcParser.T__39:
			case CalcParser.T__41:
			case CalcParser.T__42:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.declaration();
				this.state = 220;
				this.match(CalcParser.T__38);
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
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CalcParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.T__8) | (1 << CalcParser.T__27) | (1 << CalcParser.T__30))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CalcParser.T__34 - 35)) | (1 << (CalcParser.T__36 - 35)) | (1 << (CalcParser.T__39 - 35)) | (1 << (CalcParser.T__41 - 35)) | (1 << (CalcParser.T__42 - 35)) | (1 << (CalcParser.INTEGER_LITERAL - 35)) | (1 << (CalcParser.BOOLEAN_LITERAL - 35)) | (1 << (CalcParser.REAL_LITERAL - 35)) | (1 << (CalcParser.STRING_LITERAL - 35)) | (1 << (CalcParser.UNIT_LITERAL - 35)) | (1 << (CalcParser.NIL - 35)) | (1 << (CalcParser.IDENTIFIER - 35)))) !== 0)) {
				{
				{
				this.state = 224;
				this.statement();
				}
				}
				this.state = 229;
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
		case 0:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 3:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 7:
			return this.pattern_sempred(_localctx as PatternContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 14);

		case 5:
			return this.precpred(this._ctx, 13);

		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 10);

		case 9:
			return this.precpred(this._ctx, 9);

		case 10:
			return this.precpred(this._ctx, 8);

		case 11:
			return this.precpred(this._ctx, 15);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x035\xE9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02!\n\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02+\n\x02\r" +
		"\x02\x0E\x02,\x07\x02/\n\x02\f\x02\x0E\x022\v\x02\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04;\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05Z\n\x05\f\x05\x0E\x05]\v\x05\x03\x05\x03\x05\x03\x05\x05\x05b\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"~\n\x05\f\x05\x0E\x05\x81\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\x87\n\x06\f\x06\x0E\x06\x8A\v\x06\x03\x06\x03\x06\x03\x06\x05\x06\x8F" +
		"\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b" +
		"\x99\n\b\f\b\x0E\b\x9C\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\t\xA5\n\t\f\t\x0E\t\xA8\v\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\xB0\n\t\x03\t\x03\t\x03\t\x07\t\xB5\n\t\f\t\x0E\t\xB8\v\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xD1\n\n" +
		"\x03\v\x03\v\x03\v\x07\v\xD6\n\v\f\v\x0E\v\xD9\v\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f\xE1\n\f\x03\r\x07\r\xE4\n\r\f\r\x0E\r\xE7\v\r\x03" +
		"\r\x02\x02\x05\x02\b\x10\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x07\x03\x02\x03\x07" +
		"\x04\x02\n\n\x0F\x11\x03\x02\x12\x13\x03\x02\x14\x19\x03\x02\x1A\x1B\x02" +
		"\u0105\x02 \x03\x02\x02\x02\x043\x03\x02\x02\x02\x06:\x03\x02\x02\x02" +
		"\ba\x03\x02\x02\x02\n\x8E\x03\x02\x02\x02\f\x90\x03\x02\x02\x02\x0E\x95" +
		"\x03\x02\x02\x02\x10\xAF\x03\x02\x02\x02\x12\xD0\x03\x02\x02\x02\x14\xD2" +
		"\x03\x02\x02\x02\x16\xE0\x03\x02\x02\x02\x18\xE5\x03\x02\x02\x02\x1A\x1B" +
		"\b\x02\x01\x02\x1B!\t\x02\x02\x02\x1C\x1D\x07\v\x02\x02\x1D\x1E\x05\x02" +
		"\x02\x02\x1E\x1F\x07\f\x02\x02\x1F!\x03\x02\x02\x02 \x1A\x03\x02\x02\x02" +
		" \x1C\x03\x02\x02\x02!0\x03\x02\x02\x02\"#\f\x05\x02\x02#$\x07\t\x02\x02" +
		"$/\x05\x02\x02\x06%&\f\x06\x02\x02&/\x07\b\x02\x02\'*\f\x04\x02\x02()" +
		"\x07\n\x02\x02)+\x05\x02\x02\x02*(\x03\x02\x02\x02+,\x03\x02\x02\x02," +
		"*\x03\x02\x02\x02,-\x03\x02\x02\x02-/\x03\x02\x02\x02.\"\x03\x02\x02\x02" +
		".%\x03\x02\x02\x02.\'\x03\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02" +
		"\x0201\x03\x02\x02\x021\x03\x03\x02\x02\x0220\x03\x02\x02\x0234\x074\x02" +
		"\x024\x05\x03\x02\x02\x025;\x07.\x02\x026;\x07/\x02\x027;\x070\x02\x02" +
		"8;\x071\x02\x029;\x072\x02\x02:5\x03\x02\x02\x02:6\x03\x02\x02\x02:7\x03" +
		"\x02\x02\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;\x07\x03\x02\x02\x02" +
		"<=\b\x05\x01\x02=b\x05\x06\x04\x02>b\x05\x04\x03\x02?@\x07\x1E\x02\x02" +
		"@A\x05\b\x05\x02AB\x07\x1F\x02\x02BC\x05\b\x05\x02CD\x07 \x02\x02DE\x05" +
		"\b\x05\tEb\x03\x02\x02\x02Fb\x05\f\x07\x02GH\x07!\x02\x02HI\x05\x14\v" +
		"\x02IJ\x07\"\x02\x02JK\x05\x0E\b\x02KL\x07#\x02\x02Lb\x03\x02\x02\x02" +
		"MN\x07\v\x02\x02NO\x05\b\x05\x02OP\x07\f\x02\x02Pb\x03\x02\x02\x02QR\x07" +
		"\v\x02\x02RS\x05\x0E\b\x02ST\x07\f\x02\x02Tb\x03\x02\x02\x02UV\x07\v\x02" +
		"\x02V[\x05\b\x05\x02WX\x07$\x02\x02XZ\x05\b\x05\x02YW\x03\x02\x02\x02" +
		"Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\^\x03\x02\x02" +
		"\x02][\x03\x02\x02\x02^_\x07\f\x02\x02_b\x03\x02\x02\x02`b\x05\n\x06\x02" +
		"a<\x03\x02\x02\x02a>\x03\x02\x02\x02a?\x03\x02\x02\x02aF\x03\x02\x02\x02" +
		"aG\x03\x02\x02\x02aM\x03\x02\x02\x02aQ\x03\x02\x02\x02aU\x03\x02\x02\x02" +
		"a`\x03\x02\x02\x02b\x7F\x03\x02\x02\x02cd\f\x12\x02\x02de\x07\r\x02\x02" +
		"e~\x05\b\x05\x12fg\f\x10\x02\x02g~\x05\b\x05\x11hi\f\x0F\x02\x02ij\t\x03" +
		"\x02\x02j~\x05\b\x05\x10kl\f\x0E\x02\x02lm\t\x04\x02\x02m~\x05\b\x05\x0F" +
		"no\f\r\x02\x02op\t\x05\x02\x02p~\x05\b\x05\x0Eqr\f\f\x02\x02rs\t\x06\x02" +
		"\x02s~\x05\b\x05\rtu\f\v\x02\x02uv\x07\x1C\x02\x02v~\x05\b\x05\fwx\f\n" +
		"\x02\x02xy\x07\x1D\x02\x02y~\x05\b\x05\vz{\f\x11\x02\x02{|\x07\x0E\x02" +
		"\x02|~\x05\x02\x02\x02}c\x03\x02\x02\x02}f\x03\x02\x02\x02}h\x03\x02\x02" +
		"\x02}k\x03\x02\x02\x02}n\x03\x02\x02\x02}q\x03\x02\x02\x02}t\x03\x02\x02" +
		"\x02}w\x03\x02\x02\x02}z\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\t\x03\x02\x02\x02\x81\x7F\x03" +
		"\x02\x02\x02\x82\x83\x07%\x02\x02\x83\x88\x05\b\x05\x02\x84\x85\x07$\x02" +
		"\x02\x85\x87\x05\b\x05\x02\x86\x84\x03\x02\x02\x02\x87\x8A\x03\x02\x02" +
		"\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8B\x03\x02\x02" +
		"\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x07&\x02\x02\x8C\x8F\x03\x02\x02" +
		"\x02\x8D\x8F\x073\x02\x02\x8E\x82\x03\x02\x02\x02\x8E\x8D\x03\x02\x02" +
		"\x02\x8F\v\x03\x02\x02\x02\x90\x91\x07\'\x02\x02\x91\x92\x05\x10\t\x02" +
		"\x92\x93\x07(\x02\x02\x93\x94\x05\b\x05\x02\x94\r\x03\x02\x02\x02\x95" +
		"\x9A\x05\b\x05\x02\x96\x97\x07)\x02\x02\x97\x99\x05\b\x05\x02\x98\x96" +
		"\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B" +
		"\x03\x02\x02\x02\x9B\x0F\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\x9E" +
		"\b\t\x01\x02\x9E\xB0\x05\x06\x04\x02\x9F\xB0\x05\x04\x03\x02\xA0\xA1\x07" +
		"\v\x02\x02\xA1\xA6\x05\x10\t\x02\xA2\xA3\x07$\x02\x02\xA3\xA5\x05\x10" +
		"\t\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02" +
		"\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xA6\x03\x02" +
		"\x02\x02\xA9\xAA\x07\f\x02\x02\xAA\xB0\x03\x02\x02\x02\xAB\xAC\x07\v\x02" +
		"\x02\xAC\xAD\x05\x10\t\x02\xAD\xAE\x07\f\x02\x02\xAE\xB0\x03\x02\x02\x02" +
		"\xAF\x9D\x03\x02\x02\x02\xAF\x9F\x03\x02\x02\x02\xAF\xA0\x03\x02\x02\x02" +
		"\xAF\xAB\x03\x02\x02\x02\xB0\xB6\x03\x02\x02\x02\xB1\xB2\f\x05\x02\x02" +
		"\xB2\xB3\x07\x0E\x02\x02\xB3\xB5\x05\x02\x02\x02\xB4\xB1\x03\x02\x02\x02" +
		"\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02" +
		"\xB7\x11\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07*\x02\x02" +
		"\xBA\xBB\x05\x10\t\x02\xBB\xBC\x07\x19\x02\x02\xBC\xBD\x05\b\x05\x02\xBD" +
		"\xD1\x03\x02\x02\x02\xBE\xBF\x07*\x02\x02\xBF\xC0\x07+\x02\x02\xC0\xC1" +
		"\x05\x04\x03\x02\xC1\xC2\x07\x19\x02\x02\xC2\xC3\x05\f\x07\x02\xC3\xD1" +
		"\x03\x02\x02\x02\xC4\xC5\x07,\x02\x02\xC5\xC6\x05\x04\x03\x02\xC6\xC7" +
		"\x05\x10\t\x02\xC7\xC8\x07\x19\x02\x02\xC8\xC9\x05\b\x05\x02\xC9\xD1\x03" +
		"\x02\x02\x02\xCA\xCB\x07-\x02\x02\xCB\xCC\x05\x14\v\x02\xCC\xCD\x07\"" +
		"\x02\x02\xCD\xCE\x05\x14\v\x02\xCE\xCF\x07#\x02\x02\xCF\xD1\x03\x02\x02" +
		"\x02\xD0\xB9\x03\x02\x02\x02\xD0\xBE\x03\x02\x02\x02\xD0\xC4\x03\x02\x02" +
		"\x02\xD0\xCA\x03\x02\x02\x02\xD1\x13\x03\x02\x02\x02\xD2\xD7\x05\x12\n" +
		"\x02\xD3\xD4\x07)\x02\x02\xD4\xD6\x05\x12\n\x02\xD5\xD3\x03\x02\x02\x02" +
		"\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02" +
		"\xD8\x15\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\x05\b\x05\x02" +
		"\xDB\xDC\x07)\x02\x02\xDC\xE1\x03\x02\x02\x02\xDD\xDE\x05\x12\n\x02\xDE" +
		"\xDF\x07)\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xDA\x03\x02\x02\x02\xE0" +
		"\xDD\x03\x02\x02\x02\xE1\x17\x03\x02\x02\x02\xE2\xE4\x05\x16\f\x02\xE3" +
		"\xE2\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5" +
		"\xE6\x03\x02\x02\x02\xE6\x19\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\x15" +
		" ,.0:[a}\x7F\x88\x8E\x9A\xA6\xAF\xB6\xD0\xD7\xE0\xE5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcParser.__ATN) {
			CalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcParser._serializedATN));
		}

		return CalcParser.__ATN;
	}

}

export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralTypeContext extends TypeContext {
	public _litType!: Token;
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLiteralType) {
			listener.enterLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLiteralType) {
			listener.exitLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLiteralType) {
			return visitor.visitLiteralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListTypeContext extends TypeContext {
	public _elType!: TypeContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterListType) {
			listener.enterListType(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitListType) {
			listener.exitListType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitListType) {
			return visitor.visitListType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionTypeContext extends TypeContext {
	public _param!: TypeContext;
	public _return!: TypeContext;
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleTypeContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterTupleType) {
			listener.enterTupleType(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitTupleType) {
			listener.exitTupleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitTupleType) {
			return visitor.visitTupleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedTypeContext extends TypeContext {
	public _inner!: TypeContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterParenthesizedType) {
			listener.enterParenthesizedType(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitParenthesizedType) {
			listener.exitParenthesizedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitParenthesizedType) {
			return visitor.visitParenthesizedType(this);
		} else {
			return visitor.visitChildren(this);
		}
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
export class UnitContext extends LiteralContext {
	public UNIT_LITERAL(): TerminalNode { return this.getToken(CalcParser.UNIT_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterUnit) {
			listener.enterUnit(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitUnit) {
			listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
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
export class ListConstructionExpressionContext extends ExpressionContext {
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
		if (listener.enterListConstructionExpression) {
			listener.enterListConstructionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitListConstructionExpression) {
			listener.exitListConstructionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitListConstructionExpression) {
			return visitor.visitListConstructionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypedExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
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
	public lambda(): LambdaContext {
		return this.getRuleContext(0, LambdaContext);
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
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
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
export class SequenceExpressionContext extends ExpressionContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
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
export class TupleExpressionContext extends ExpressionContext {
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
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListExpressionContext extends ExpressionContext {
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterListExpression) {
			listener.enterListExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitListExpression) {
			listener.exitListExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitListExpression) {
			return visitor.visitListExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_list; }
	public copyFrom(ctx: ListContext): void {
		super.copyFrom(ctx);
	}
}
export class SquareBracketListContext extends ListContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterSquareBracketList) {
			listener.enterSquareBracketList(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitSquareBracketList) {
			listener.exitSquareBracketList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitSquareBracketList) {
			return visitor.visitSquareBracketList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyListContext extends ListContext {
	public NIL(): TerminalNode { return this.getToken(CalcParser.NIL, 0); }
	constructor(ctx: ListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterEmptyList) {
			listener.enterEmptyList(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitEmptyList) {
			listener.exitEmptyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitEmptyList) {
			return visitor.visitEmptyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_lambda; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CalcParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
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
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
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
export class TuplePatternContext extends PatternContext {
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterTuplePattern) {
			listener.enterTuplePattern(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitTuplePattern) {
			listener.exitTuplePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitTuplePattern) {
			return visitor.visitTuplePattern(this);
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
export class RecursiveDeclarationContext extends DeclarationContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public lambda(): LambdaContext {
		return this.getRuleContext(0, LambdaContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterRecursiveDeclaration) {
			listener.enterRecursiveDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitRecursiveDeclaration) {
			listener.exitRecursiveDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitRecursiveDeclaration) {
			return visitor.visitRecursiveDeclaration(this);
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
export class LocalDeclarationContext extends DeclarationContext {
	public _local!: DeclarationListContext;
	public _body!: DeclarationListContext;
	public declarationList(): DeclarationListContext[];
	public declarationList(i: number): DeclarationListContext;
	public declarationList(i?: number): DeclarationListContext | DeclarationListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationListContext);
		} else {
			return this.getRuleContext(i, DeclarationListContext);
		}
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CalcListener): void {
		if (listener.enterLocalDeclaration) {
			listener.enterLocalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CalcListener): void {
		if (listener.exitLocalDeclaration) {
			listener.exitLocalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CalcVisitor<Result>): Result {
		if (visitor.visitLocalDeclaration) {
			return visitor.visitLocalDeclaration(this);
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


