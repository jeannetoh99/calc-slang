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
	public static readonly INTEGER_LITERAL = 6;
	public static readonly IDENTIFIER = 7;
	public static readonly WHITESPACE = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "INTEGER_LITERAL", "SYMBOLIC_IDENTIFIER", 
		"ALPHANUMERIC_IDENTIFIER", "IDENTIFIER", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'val'", "'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "INTEGER_LITERAL", 
		"IDENTIFIER", "WHITESPACE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n?\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x06\x07%\n\x07\r\x07\x0E\x07&\x03\b\x06\b*\n\b\r\b\x0E\b" +
		"+\x03\t\x03\t\x07\t0\n\t\f\t\x0E\t3\v\t\x03\n\x03\n\x05\n7\n\n\x03\v\x06" +
		"\v:\n\v\r\v\x0E\v;\x03\v\x03\v\x02\x02\x02\f\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\x02\x11\x02\x02\x13\x02\t" +
		"\x15\x02\n\x03\x02\x07\x03\x022;\v\x02##%),1<<>B^^``~~\x80\x80\x04\x02" +
		"C\\c|\x07\x02))2;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02A\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
		"\x02\x02\x15\x03\x02\x02\x02\x03\x17\x03\x02\x02\x02\x05\x19\x03\x02\x02" +
		"\x02\x07\x1B\x03\x02\x02\x02\t\x1F\x03\x02\x02\x02\v!\x03\x02\x02\x02" +
		"\r$\x03\x02\x02\x02\x0F)\x03\x02\x02\x02\x11-\x03\x02\x02\x02\x136\x03" +
		"\x02\x02\x02\x159\x03\x02\x02\x02\x17\x18\x07*\x02\x02\x18\x04\x03\x02" +
		"\x02\x02\x19\x1A\x07+\x02\x02\x1A\x06\x03\x02\x02\x02\x1B\x1C\x07x\x02" +
		"\x02\x1C\x1D\x07c\x02\x02\x1D\x1E\x07n\x02\x02\x1E\b\x03\x02\x02\x02\x1F" +
		" \x07?\x02\x02 \n\x03\x02\x02\x02!\"\x07=\x02\x02\"\f\x03\x02\x02\x02" +
		"#%\t\x02\x02\x02$#\x03\x02\x02\x02%&\x03\x02\x02\x02&$\x03\x02\x02\x02" +
		"&\'\x03\x02\x02\x02\'\x0E\x03\x02\x02\x02(*\t\x03\x02\x02)(\x03\x02\x02" +
		"\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x10\x03\x02" +
		"\x02\x02-1\t\x04\x02\x02.0\t\x05\x02\x02/.\x03\x02\x02\x0203\x03\x02\x02" +
		"\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x12\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0247\x05\x11\t\x0257\x05\x0F\b\x0264\x03\x02\x02\x0265\x03\x02\x02" +
		"\x027\x14\x03\x02\x02\x028:\t\x06\x02\x0298\x03\x02\x02\x02:;\x03\x02" +
		"\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=>\b\v\x02" +
		"\x02>\x16\x03\x02\x02\x02\b\x02&+16;\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

