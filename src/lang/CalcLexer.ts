// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CalcLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "INTEGER_LITERAL", "BOOLEAN_LITERAL", "REAL_LITERAL", 
		"TYPE", "SYMBOLIC_IDENTIFIER", "ALPHANUMERIC_IDENTIFIER", "IDENTIFIER", 
		"WHITESPACE",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CalcLexer._LITERAL_NAMES, CalcLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CalcLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CalcLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Calc.g4"; }

	// @Override
	public get ruleNames(): string[] { return CalcLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CalcLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CalcLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CalcLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14\x9D\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x06\x0ER\n\x0E\r\x0E\x0E\x0ES\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"_\n\x0F\x03\x10\x06\x10b\n\x10\r\x10\x0E\x10c\x03\x10\x05\x10g\n\x10\x03" +
		"\x10\x06\x10j\n\x10\r\x10\x0E\x10k\x03\x10\x03\x10\x05\x10p\n\x10\x03" +
		"\x10\x06\x10s\n\x10\r\x10\x0E\x10t\x05\x10w\n\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x05\x11\x85\n\x11\x03\x12\x06\x12\x88\n\x12\r\x12\x0E\x12\x89\x03" +
		"\x13\x03\x13\x07\x13\x8E\n\x13\f\x13\x0E\x13\x91\v\x13\x03\x14\x03\x14" +
		"\x05\x14\x95\n\x14\x03\x15\x06\x15\x98\n\x15\r\x15\x0E\x15\x99\x03\x15" +
		"\x03\x15\x02\x02\x02\x16\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x02%\x02\x02" +
		"\'\x02\x13)\x02\x14\x03\x02\n\x03\x022;\x03\x0200\x04\x02GGgg\x03\x02" +
		"\x80\x80\v\x02##%),1<<>B^^``~~\x80\x80\x04\x02C\\c|\x07\x02))2;C\\aac" +
		"|\x05\x02\v\f\x0F\x0F\"\"\x02\xA9\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02\'\x03\x02\x02" +
		"\x02\x02)\x03\x02\x02\x02\x03+\x03\x02\x02\x02\x05-\x03\x02\x02\x02\x07" +
		"0\x03\x02\x02\x02\t5\x03\x02\x02\x02\v:\x03\x02\x02\x02\r=\x03\x02\x02" +
		"\x02\x0F@\x03\x02\x02\x02\x11B\x03\x02\x02\x02\x13D\x03\x02\x02\x02\x15" +
		"H\x03\x02\x02\x02\x17J\x03\x02\x02\x02\x19N\x03\x02\x02\x02\x1BQ\x03\x02" +
		"\x02\x02\x1D^\x03\x02\x02\x02\x1Ff\x03\x02\x02\x02!\x84\x03\x02\x02\x02" +
		"#\x87\x03\x02\x02\x02%\x8B\x03\x02\x02\x02\'\x94\x03\x02\x02\x02)\x97" +
		"\x03\x02\x02\x02+,\x07<\x02\x02,\x04\x03\x02\x02\x02-.\x07k\x02\x02./" +
		"\x07h\x02\x02/\x06\x03\x02\x02\x0201\x07v\x02\x0212\x07j\x02\x0223\x07" +
		"g\x02\x0234\x07p\x02\x024\b\x03\x02\x02\x0256\x07g\x02\x0267\x07n\x02" +
		"\x0278\x07u\x02\x0289\x07g\x02\x029\n\x03\x02\x02\x02:;\x07h\x02\x02;" +
		"<\x07p\x02\x02<\f\x03\x02\x02\x02=>\x07?\x02\x02>?\x07@\x02\x02?\x0E\x03" +
		"\x02\x02\x02@A\x07*\x02\x02A\x10\x03\x02\x02\x02BC\x07+\x02\x02C\x12\x03" +
		"\x02\x02\x02DE\x07x\x02\x02EF\x07c\x02\x02FG\x07n\x02\x02G\x14\x03\x02" +
		"\x02\x02HI\x07?\x02\x02I\x16\x03\x02\x02\x02JK\x07h\x02\x02KL\x07w\x02" +
		"\x02LM\x07p\x02\x02M\x18\x03\x02\x02\x02NO\x07=\x02\x02O\x1A\x03\x02\x02" +
		"\x02PR\t\x02\x02\x02QP\x03\x02\x02\x02RS\x03\x02\x02\x02SQ\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02T\x1C\x03\x02\x02\x02UV\x07v\x02\x02VW\x07t\x02" +
		"\x02WX\x07w\x02\x02X_\x07g\x02\x02YZ\x07h\x02\x02Z[\x07c\x02\x02[\\\x07" +
		"n\x02\x02\\]\x07u\x02\x02]_\x07g\x02\x02^U\x03\x02\x02\x02^Y\x03\x02\x02" +
		"\x02_\x1E\x03\x02\x02\x02`b\t\x02\x02\x02a`\x03\x02\x02\x02bc\x03\x02" +
		"\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02eg\t\x03" +
		"\x02\x02fa\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hj\t\x02" +
		"\x02\x02ih\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lv\x03\x02\x02\x02mo\t\x04\x02\x02np\t\x05\x02\x02on\x03\x02\x02" +
		"\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qs\t\x02\x02\x02rq\x03\x02\x02" +
		"\x02st\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02" +
		"\x02vm\x03\x02\x02\x02vw\x03\x02\x02\x02w \x03\x02\x02\x02xy\x07d\x02" +
		"\x02yz\x07q\x02\x02z{\x07q\x02\x02{\x85\x07n\x02\x02|}\x07k\x02\x02}~" +
		"\x07p\x02\x02~\x85\x07v\x02\x02\x7F\x80\x07t\x02\x02\x80\x81\x07g\x02" +
		"\x02\x81\x82\x07c\x02\x02\x82\x85\x07n\x02\x02\x83\x85\x03\x02\x02\x02" +
		"\x84x\x03\x02\x02\x02\x84|\x03\x02\x02\x02\x84\x7F\x03\x02\x02\x02\x84" +
		"\x83\x03\x02\x02\x02\x85\"\x03\x02\x02\x02\x86\x88\t\x06\x02\x02\x87\x86" +
		"\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A" +
		"\x03\x02\x02\x02\x8A$\x03\x02\x02\x02\x8B\x8F\t\x07\x02\x02\x8C\x8E\t" +
		"\b\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90&\x03\x02\x02\x02\x91\x8F\x03" +
		"\x02\x02\x02\x92\x95\x05%\x13\x02\x93\x95\x05#\x12\x02\x94\x92\x03\x02" +
		"\x02\x02\x94\x93\x03\x02\x02\x02\x95(\x03\x02\x02\x02\x96\x98\t\t\x02" +
		"\x02\x97\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03\x02\x02" +
		"\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\b\x15\x02" +
		"\x02\x9C*\x03\x02\x02\x02\x10\x02S^cfkotv\x84\x89\x8F\x94\x99\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

