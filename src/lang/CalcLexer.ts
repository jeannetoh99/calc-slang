// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { CharStream } from "antlr4ts/CharStream";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { Lexer } from "antlr4ts/Lexer";
import * as Utils from "antlr4ts/misc/Utils";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";


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
	public static readonly INTEGER_LITERAL = 32;
	public static readonly BOOLEAN_LITERAL = 33;
	public static readonly REAL_LITERAL = 34;
	public static readonly STRING_LITERAL = 35;
	public static readonly TYPE = 36;
	public static readonly IDENTIFIER = 37;
	public static readonly WHITESPACE = 38;

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
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "INTEGER_LITERAL", 
		"BOOLEAN_LITERAL", "REAL_LITERAL", "STRING_LITERAL", "TYPE", "SYMBOLIC_IDENTIFIER", 
		"ALPHANUMERIC_IDENTIFIER", "IDENTIFIER", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'*'", "'/'", "'div'", "'mod'", "'+'", "'-'", "'<>'", 
		"'<'", "'>'", "'<='", "'>='", "'='", "'andalso'", "'orelse'", "'^'", "'if'", 
		"'then'", "'else'", "'let'", "'in'", "'end'", "'('", "')'", "'fn'", "'=>'", 
		"';'", "'val'", "'rec'", "'fun'", "'local'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "INTEGER_LITERAL", "BOOLEAN_LITERAL", 
		"REAL_LITERAL", "STRING_LITERAL", "TYPE", "IDENTIFIER", "WHITESPACE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02(\u0118\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03!\x06!\xBD\n" +
		"!\r!\x0E!\xBE\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05" +
		"\"\xCA\n\"\x03#\x06#\xCD\n#\r#\x0E#\xCE\x03#\x05#\xD2\n#\x03#\x06#\xD5" +
		"\n#\r#\x0E#\xD6\x03#\x03#\x05#\xDB\n#\x03#\x06#\xDE\n#\r#\x0E#\xDF\x05" +
		"#\xE2\n#\x03$\x03$\x03$\x03$\x07$\xE8\n$\f$\x0E$\xEB\v$\x03$\x03$\x03" +
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x05%\u0100\n%\x03&\x06&\u0103\n&\r&\x0E&\u0104\x03\'\x03\'" +
		"\x07\'\u0109\n\'\f\'\x0E\'\u010C\v\'\x03(\x03(\x05(\u0110\n(\x03)\x06" +
		")\u0113\n)\r)\x0E)\u0114\x03)\x03)\x02\x02\x02*\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!" +
		"\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x19" +
		"1\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02" +
		"\"C\x02#E\x02$G\x02%I\x02&K\x02\x02M\x02\x02O\x02\'Q\x02(\x03\x02\f\x03" +
		"\x022;\x03\x0200\x04\x02GGgg\x03\x02\x80\x80\x04\x02$$^^\x06\x02\f\f\x0F" +
		"\x0F$$^^\v\x02##%),1<<>B^^``~~\x80\x80\x04\x02C\\c|\x07\x02))2;C\\aac" +
		"|\x05\x02\v\f\x0F\x0F\"\"\x02\u0126\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02" +
		"\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02" +
		"+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02" +
		"Q\x03\x02\x02\x02\x03S\x03\x02\x02\x02\x05U\x03\x02\x02\x02\x07W\x03\x02" +
		"\x02\x02\tY\x03\x02\x02\x02\v]\x03\x02\x02\x02\ra\x03\x02\x02\x02\x0F" +
		"c\x03\x02\x02\x02\x11e\x03\x02\x02\x02\x13h\x03\x02\x02\x02\x15j\x03\x02" +
		"\x02\x02\x17l\x03\x02\x02\x02\x19o\x03\x02\x02\x02\x1Br\x03\x02\x02\x02" +
		"\x1Dt\x03\x02\x02\x02\x1F|\x03\x02\x02\x02!\x83\x03\x02\x02\x02#\x85\x03" +
		"\x02\x02\x02%\x88\x03\x02\x02\x02\'\x8D\x03\x02\x02\x02)\x92\x03\x02\x02" +
		"\x02+\x96\x03\x02\x02\x02-\x99\x03\x02\x02\x02/\x9D\x03\x02\x02\x021\x9F" +
		"\x03\x02\x02\x023\xA1\x03\x02\x02\x025\xA4\x03\x02\x02\x027\xA7\x03\x02" +
		"\x02\x029\xA9\x03\x02\x02\x02;\xAD\x03\x02\x02\x02=\xB1\x03\x02\x02\x02" +
		"?\xB5\x03\x02\x02\x02A\xBC\x03\x02\x02\x02C\xC9\x03\x02\x02\x02E\xD1\x03" +
		"\x02\x02\x02G\xE3\x03\x02\x02\x02I\xFF\x03\x02\x02\x02K\u0102\x03\x02" +
		"\x02\x02M\u0106\x03\x02\x02\x02O\u010F\x03\x02\x02\x02Q\u0112\x03\x02" +
		"\x02\x02ST\x07<\x02\x02T\x04\x03\x02\x02\x02UV\x07,\x02\x02V\x06\x03\x02" +
		"\x02\x02WX\x071\x02\x02X\b\x03\x02\x02\x02YZ\x07f\x02\x02Z[\x07k\x02\x02" +
		"[\\\x07x\x02\x02\\\n\x03\x02\x02\x02]^\x07o\x02\x02^_\x07q\x02\x02_`\x07" +
		"f\x02\x02`\f\x03\x02\x02\x02ab\x07-\x02\x02b\x0E\x03\x02\x02\x02cd\x07" +
		"/\x02\x02d\x10\x03\x02\x02\x02ef\x07>\x02\x02fg\x07@\x02\x02g\x12\x03" +
		"\x02\x02\x02hi\x07>\x02\x02i\x14\x03\x02\x02\x02jk\x07@\x02\x02k\x16\x03" +
		"\x02\x02\x02lm\x07>\x02\x02mn\x07?\x02\x02n\x18\x03\x02\x02\x02op\x07" +
		"@\x02\x02pq\x07?\x02\x02q\x1A\x03\x02\x02\x02rs\x07?\x02\x02s\x1C\x03" +
		"\x02\x02\x02tu\x07c\x02\x02uv\x07p\x02\x02vw\x07f\x02\x02wx\x07c\x02\x02" +
		"xy\x07n\x02\x02yz\x07u\x02\x02z{\x07q\x02\x02{\x1E\x03\x02\x02\x02|}\x07" +
		"q\x02\x02}~\x07t\x02\x02~\x7F\x07g\x02\x02\x7F\x80\x07n\x02\x02\x80\x81" +
		"\x07u\x02\x02\x81\x82\x07g\x02\x02\x82 \x03\x02\x02\x02\x83\x84\x07`\x02" +
		"\x02\x84\"\x03\x02\x02\x02\x85\x86\x07k\x02\x02\x86\x87\x07h\x02\x02\x87" +
		"$\x03\x02\x02\x02\x88\x89\x07v\x02\x02\x89\x8A\x07j\x02\x02\x8A\x8B\x07" +
		"g\x02\x02\x8B\x8C\x07p\x02\x02\x8C&\x03\x02\x02\x02\x8D\x8E\x07g\x02\x02" +
		"\x8E\x8F\x07n\x02\x02\x8F\x90\x07u\x02\x02\x90\x91\x07g\x02\x02\x91(\x03" +
		"\x02\x02\x02\x92\x93\x07n\x02\x02\x93\x94\x07g\x02\x02\x94\x95\x07v\x02" +
		"\x02\x95*\x03\x02\x02\x02\x96\x97\x07k\x02\x02\x97\x98\x07p\x02\x02\x98" +
		",\x03\x02\x02\x02\x99\x9A\x07g\x02\x02\x9A\x9B\x07p\x02\x02\x9B\x9C\x07" +
		"f\x02\x02\x9C.\x03\x02\x02\x02\x9D\x9E\x07*\x02\x02\x9E0\x03\x02\x02\x02" +
		"\x9F\xA0\x07+\x02\x02\xA02\x03\x02\x02\x02\xA1\xA2\x07h\x02\x02\xA2\xA3" +
		"\x07p\x02\x02\xA34\x03\x02\x02\x02\xA4\xA5\x07?\x02\x02\xA5\xA6\x07@\x02" +
		"\x02\xA66\x03\x02\x02\x02\xA7\xA8\x07=\x02\x02\xA88\x03\x02\x02\x02\xA9" +
		"\xAA\x07x\x02\x02\xAA\xAB\x07c\x02\x02\xAB\xAC\x07n\x02\x02\xAC:\x03\x02" +
		"\x02\x02\xAD\xAE\x07t\x02\x02\xAE\xAF\x07g\x02\x02\xAF\xB0\x07e\x02\x02" +
		"\xB0<\x03\x02\x02\x02\xB1\xB2\x07h\x02\x02\xB2\xB3\x07w\x02\x02\xB3\xB4" +
		"\x07p\x02\x02\xB4>\x03\x02\x02\x02\xB5\xB6\x07n\x02\x02\xB6\xB7\x07q\x02" +
		"\x02\xB7\xB8\x07e\x02\x02\xB8\xB9\x07c\x02\x02\xB9\xBA\x07n\x02\x02\xBA" +
		"@\x03\x02\x02\x02\xBB\xBD\t\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xBE" +
		"\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBFB" +
		"\x03\x02\x02\x02\xC0\xC1\x07v\x02\x02\xC1\xC2\x07t\x02\x02\xC2\xC3\x07" +
		"w\x02\x02\xC3\xCA\x07g\x02\x02\xC4\xC5\x07h\x02\x02\xC5\xC6\x07c\x02\x02" +
		"\xC6\xC7\x07n\x02\x02\xC7\xC8\x07u\x02\x02\xC8\xCA\x07g\x02\x02\xC9\xC0" +
		"\x03\x02\x02\x02\xC9\xC4\x03\x02\x02\x02\xCAD\x03\x02\x02\x02\xCB\xCD" +
		"\t\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC" +
		"\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2" +
		"\t\x03\x02\x02\xD1\xCC\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4" +
		"\x03\x02\x02\x02\xD3\xD5\t\x02\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD6" +
		"\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xE1" +
		"\x03\x02\x02\x02\xD8\xDA\t\x04\x02\x02\xD9\xDB\t\x05\x02\x02\xDA\xD9\x03" +
		"\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDE\t" +
		"\x02\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xDD\x03" +
		"\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xD8\x03" +
		"\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2F\x03\x02\x02\x02\xE3\xE9\x07" +
		"$\x02\x02\xE4\xE5\x07^\x02\x02\xE5\xE8\t\x06\x02\x02\xE6\xE8\n\x07\x02" +
		"\x02\xE7\xE4\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xEB\x03\x02\x02" +
		"\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02\x02" +
		"\x02\xEB\xE9\x03\x02\x02\x02\xEC\xED\x07$\x02\x02\xEDH\x03\x02\x02\x02" +
		"\xEE\xEF\x07d\x02\x02\xEF\xF0\x07q\x02\x02\xF0\xF1\x07q\x02\x02\xF1\u0100" +
		"\x07n\x02\x02\xF2\xF3\x07k\x02\x02\xF3\xF4\x07p\x02\x02\xF4\u0100\x07" +
		"v\x02\x02\xF5\xF6\x07t\x02\x02\xF6\xF7\x07g\x02\x02\xF7\xF8\x07c\x02\x02" +
		"\xF8\u0100\x07n\x02\x02\xF9\xFA\x07u\x02\x02\xFA\xFB\x07v\x02\x02\xFB" +
		"\xFC\x07t\x02\x02\xFC\xFD\x07k\x02\x02\xFD\xFE\x07p\x02\x02\xFE\u0100" +
		"\x07i\x02\x02\xFF\xEE\x03\x02\x02\x02\xFF\xF2\x03\x02\x02\x02\xFF\xF5" +
		"\x03\x02\x02\x02\xFF\xF9\x03\x02\x02\x02\u0100J\x03\x02\x02\x02\u0101" +
		"\u0103\t\b\x02\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02" +
		"\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105L\x03" +
		"\x02\x02\x02\u0106\u010A\t\t\x02\x02\u0107\u0109\t\n\x02\x02\u0108\u0107" +
		"\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02" +
		"\u010A\u010B\x03\x02\x02\x02\u010BN\x03\x02\x02\x02\u010C\u010A\x03\x02" +
		"\x02\x02\u010D\u0110\x05M\'\x02\u010E\u0110\x05K&\x02\u010F\u010D\x03" +
		"\x02\x02\x02\u010F\u010E\x03\x02\x02\x02\u0110P\x03\x02\x02\x02\u0111" +
		"\u0113\t\v\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02" +
		"\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116" +
		"\x03\x02\x02\x02\u0116\u0117\b)\x02\x02\u0117R\x03\x02\x02\x02\x12\x02" +
		"\xBE\xC9\xCE\xD1\xD6\xDA\xDF\xE1\xE7\xE9\xFF\u0104\u010A\u010F\u0114\x03" +
		"\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

