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
	public static readonly BOOLEAN_LITERAL = 7;
	public static readonly IDENTIFIER = 8;
	public static readonly WHITESPACE = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "INTEGER_LITERAL", "BOOLEAN_LITERAL", 
		"SYMBOLIC_IDENTIFIER", "ALPHANUMERIC_IDENTIFIER", "IDENTIFIER", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'val'", "'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "INTEGER_LITERAL", 
		"BOOLEAN_LITERAL", "IDENTIFIER", "WHITESPACE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\vL\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x07\x06\x07\'\n\x07\r\x07\x0E\x07(\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b4\n\b\x03\t\x06\t7\n\t\r\t\x0E" +
		"\t8\x03\n\x03\n\x07\n=\n\n\f\n\x0E\n@\v\n\x03\v\x03\v\x05\vD\n\v\x03\f" +
		"\x06\fG\n\f\r\f\x0E\fH\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\x02\x13\x02" +
		"\x02\x15\x02\n\x17\x02\v\x03\x02\x07\x03\x022;\v\x02##%),1<<>B^^``~~\x80" +
		"\x80\x04\x02C\\c|\x07\x02))2;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02O\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x03\x19" +
		"\x03\x02\x02\x02\x05\x1B\x03\x02\x02\x02\x07\x1D\x03\x02\x02\x02\t!\x03" +
		"\x02\x02\x02\v#\x03\x02\x02\x02\r&\x03\x02\x02\x02\x0F3\x03\x02\x02\x02" +
		"\x116\x03\x02\x02\x02\x13:\x03\x02\x02\x02\x15C\x03\x02\x02\x02\x17F\x03" +
		"\x02\x02\x02\x19\x1A\x07*\x02\x02\x1A\x04\x03\x02\x02\x02\x1B\x1C\x07" +
		"+\x02\x02\x1C\x06\x03\x02\x02\x02\x1D\x1E\x07x\x02\x02\x1E\x1F\x07c\x02" +
		"\x02\x1F \x07n\x02\x02 \b\x03\x02\x02\x02!\"\x07?\x02\x02\"\n\x03\x02" +
		"\x02\x02#$\x07=\x02\x02$\f\x03\x02\x02\x02%\'\t\x02\x02\x02&%\x03\x02" +
		"\x02\x02\'(\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x0E\x03" +
		"\x02\x02\x02*+\x07v\x02\x02+,\x07t\x02\x02,-\x07w\x02\x02-4\x07g\x02\x02" +
		"./\x07h\x02\x02/0\x07c\x02\x0201\x07n\x02\x0212\x07u\x02\x0224\x07g\x02" +
		"\x023*\x03\x02\x02\x023.\x03\x02\x02\x024\x10\x03\x02\x02\x0257\t\x03" +
		"\x02\x0265\x03\x02\x02\x0278\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02" +
		"\x02\x029\x12\x03\x02\x02\x02:>\t\x04\x02\x02;=\t\x05\x02\x02<;\x03\x02" +
		"\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?\x14\x03" +
		"\x02\x02\x02@>\x03\x02\x02\x02AD\x05\x13\n\x02BD\x05\x11\t\x02CA\x03\x02" +
		"\x02\x02CB\x03\x02\x02\x02D\x16\x03\x02\x02\x02EG\t\x06\x02\x02FE\x03" +
		"\x02\x02\x02GH\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03" +
		"\x02\x02\x02JK\b\f\x02\x02K\x18\x03\x02\x02\x02\t\x02(38>CH\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

