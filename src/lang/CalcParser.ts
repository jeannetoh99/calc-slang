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
	public static readonly INTEGER_LITERAL = 13;
	public static readonly BOOLEAN_LITERAL = 14;
	public static readonly REAL_LITERAL = 15;
	public static readonly TYPE = 16;
	public static readonly IDENTIFIER = 17;
	public static readonly WHITESPACE = 18;
	public static readonly RULE_identifier = 0;
	public static readonly RULE_literal = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_pattern = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_program = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"identifier", "literal", "expression", "pattern", "declaration", "statement", 
		"program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'if'", "'then'", "'else'", "'fn'", "'=>'", "'('", "')'", 
		"'val'", "'='", "'fun'", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "INTEGER_LITERAL", 
		"BOOLEAN_LITERAL", "REAL_LITERAL", "TYPE", "IDENTIFIER", "WHITESPACE",
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
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CalcParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
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
			this.state = 19;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER_LITERAL:
				_localctx = new IntegerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 16;
				this.match(CalcParser.INTEGER_LITERAL);
				}
				break;
			case CalcParser.BOOLEAN_LITERAL:
				_localctx = new BooleanContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 17;
				this.match(CalcParser.BOOLEAN_LITERAL);
				}
				break;
			case CalcParser.REAL_LITERAL:
				_localctx = new RealContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 18;
				this.match(CalcParser.REAL_LITERAL);
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
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CalcParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER_LITERAL:
			case CalcParser.BOOLEAN_LITERAL:
			case CalcParser.REAL_LITERAL:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 22;
				this.literal();
				}
				break;
			case CalcParser.IDENTIFIER:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 23;
				this.identifier();
				}
				break;
			case CalcParser.T__1:
				{
				_localctx = new ConditionalExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.match(CalcParser.T__1);
				this.state = 25;
				(_localctx as ConditionalExpressionContext)._pred = this.expression(0);
				this.state = 26;
				this.match(CalcParser.T__2);
				this.state = 27;
				(_localctx as ConditionalExpressionContext)._cons = this.expression(0);
				this.state = 28;
				this.match(CalcParser.T__3);
				this.state = 29;
				(_localctx as ConditionalExpressionContext)._alt = this.expression(4);
				}
				break;
			case CalcParser.T__4:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 31;
				this.match(CalcParser.T__4);
				this.state = 32;
				this.pattern(0);
				this.state = 33;
				this.match(CalcParser.T__5);
				this.state = 34;
				this.expression(3);
				}
				break;
			case CalcParser.T__6:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 36;
				this.match(CalcParser.T__6);
				this.state = 37;
				this.expression(0);
				this.state = 38;
				this.match(CalcParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 47;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new FunctionApplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as FunctionApplicationContext)._fn = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 42;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 43;
						(_localctx as FunctionApplicationContext)._args = this.expression(3);
						}
						break;

					case 2:
						{
						_localctx = new TypedExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, CalcParser.RULE_expression);
						this.state = 44;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 45;
						this.match(CalcParser.T__0);
						this.state = 46;
						this.match(CalcParser.TYPE);
						}
						break;
					}
					}
				}
				this.state = 51;
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
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, CalcParser.RULE_pattern, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.INTEGER_LITERAL:
			case CalcParser.BOOLEAN_LITERAL:
			case CalcParser.REAL_LITERAL:
				{
				_localctx = new LiteralPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 53;
				this.literal();
				}
				break;
			case CalcParser.IDENTIFIER:
				{
				_localctx = new IdentifierPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				this.identifier();
				}
				break;
			case CalcParser.T__6:
				{
				_localctx = new ParenthesizedPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 55;
				this.match(CalcParser.T__6);
				this.state = 56;
				this.pattern(0);
				this.state = 57;
				this.match(CalcParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 66;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
					this.state = 61;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 62;
					this.match(CalcParser.T__0);
					this.state = 63;
					this.match(CalcParser.TYPE);
					}
					}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.T__8:
				_localctx = new ValueDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 69;
				this.match(CalcParser.T__8);
				this.state = 70;
				this.pattern(0);
				this.state = 71;
				this.match(CalcParser.T__9);
				this.state = 72;
				this.expression(0);
				}
				break;
			case CalcParser.T__10:
				_localctx = new FunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.match(CalcParser.T__10);
				this.state = 75;
				this.identifier();
				this.state = 76;
				this.pattern(0);
				this.state = 77;
				this.match(CalcParser.T__9);
				this.state = 78;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CalcParser.RULE_statement);
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CalcParser.T__1:
			case CalcParser.T__4:
			case CalcParser.T__6:
			case CalcParser.INTEGER_LITERAL:
			case CalcParser.BOOLEAN_LITERAL:
			case CalcParser.REAL_LITERAL:
			case CalcParser.IDENTIFIER:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.expression(0);
				this.state = 83;
				this.match(CalcParser.T__11);
				}
				break;
			case CalcParser.T__8:
			case CalcParser.T__10:
				_localctx = new DeclarationStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 85;
				this.declaration();
				this.state = 86;
				this.match(CalcParser.T__11);
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
		this.enterRule(_localctx, 12, CalcParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CalcParser.T__1) | (1 << CalcParser.T__4) | (1 << CalcParser.T__6) | (1 << CalcParser.T__8) | (1 << CalcParser.T__10) | (1 << CalcParser.INTEGER_LITERAL) | (1 << CalcParser.BOOLEAN_LITERAL) | (1 << CalcParser.REAL_LITERAL) | (1 << CalcParser.IDENTIFIER))) !== 0)) {
				{
				{
				this.state = 90;
				this.statement();
				}
				}
				this.state = 95;
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
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14c\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03\x16\n" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04+\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x042\n\x04\f\x04\x0E\x045\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05>\n\x05\x03\x05\x03\x05\x03\x05\x07\x05C\n\x05" +
		"\f\x05\x0E\x05F\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06S\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07[\n\x07\x03\b\x07\b^\n\b\f\b\x0E" +
		"\ba\v\b\x03\b\x02\x02\x04\x06\b\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x02\x02\x02i\x02\x10\x03\x02\x02\x02\x04\x15\x03\x02\x02" +
		"\x02\x06*\x03\x02\x02\x02\b=\x03\x02\x02\x02\nR\x03\x02\x02\x02\fZ\x03" +
		"\x02\x02\x02\x0E_\x03\x02\x02\x02\x10\x11\x07\x13\x02\x02\x11\x03\x03" +
		"\x02\x02\x02\x12\x16\x07\x0F\x02\x02\x13\x16\x07\x10\x02\x02\x14\x16\x07" +
		"\x11\x02\x02\x15\x12\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x14\x03" +
		"\x02\x02\x02\x16\x05\x03\x02\x02\x02\x17\x18\b\x04\x01\x02\x18+\x05\x04" +
		"\x03\x02\x19+\x05\x02\x02\x02\x1A\x1B\x07\x04\x02\x02\x1B\x1C\x05\x06" +
		"\x04\x02\x1C\x1D\x07\x05\x02\x02\x1D\x1E\x05\x06\x04\x02\x1E\x1F\x07\x06" +
		"\x02\x02\x1F \x05\x06\x04\x06 +\x03\x02\x02\x02!\"\x07\x07\x02\x02\"#" +
		"\x05\b\x05\x02#$\x07\b\x02\x02$%\x05\x06\x04\x05%+\x03\x02\x02\x02&\'" +
		"\x07\t\x02\x02\'(\x05\x06\x04\x02()\x07\n\x02\x02)+\x03\x02\x02\x02*\x17" +
		"\x03\x02\x02\x02*\x19\x03\x02\x02\x02*\x1A\x03\x02\x02\x02*!\x03\x02\x02" +
		"\x02*&\x03\x02\x02\x02+3\x03\x02\x02\x02,-\f\x04\x02\x02-2\x05\x06\x04" +
		"\x05./\f\x07\x02\x02/0\x07\x03\x02\x0202\x07\x12\x02\x021,\x03\x02\x02" +
		"\x021.\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02" +
		"\x024\x07\x03\x02\x02\x0253\x03\x02\x02\x0267\b\x05\x01\x027>\x05\x04" +
		"\x03\x028>\x05\x02\x02\x029:\x07\t\x02\x02:;\x05\b\x05\x02;<\x07\n\x02" +
		"\x02<>\x03\x02\x02\x02=6\x03\x02\x02\x02=8\x03\x02\x02\x02=9\x03\x02\x02" +
		"\x02>D\x03\x02\x02\x02?@\f\x04\x02\x02@A\x07\x03\x02\x02AC\x07\x12\x02" +
		"\x02B?\x03\x02\x02\x02CF\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02" +
		"\x02E\t\x03\x02\x02\x02FD\x03\x02\x02\x02GH\x07\v\x02\x02HI\x05\b\x05" +
		"\x02IJ\x07\f\x02\x02JK\x05\x06\x04\x02KS\x03\x02\x02\x02LM\x07\r\x02\x02" +
		"MN\x05\x02\x02\x02NO\x05\b\x05\x02OP\x07\f\x02\x02PQ\x05\x06\x04\x02Q" +
		"S\x03\x02\x02\x02RG\x03\x02\x02\x02RL\x03\x02\x02\x02S\v\x03\x02\x02\x02" +
		"TU\x05\x06\x04\x02UV\x07\x0E\x02\x02V[\x03\x02\x02\x02WX\x05\n\x06\x02" +
		"XY\x07\x0E\x02\x02Y[\x03\x02\x02\x02ZT\x03\x02\x02\x02ZW\x03\x02\x02\x02" +
		"[\r\x03\x02\x02\x02\\^\x05\f\x07\x02]\\\x03\x02\x02\x02^a\x03\x02\x02" +
		"\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`\x0F\x03\x02\x02\x02a_\x03\x02" +
		"\x02\x02\v\x15*13=DRZ_";
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


