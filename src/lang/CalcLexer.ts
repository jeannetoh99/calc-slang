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
	public static readonly INTEGER_LITERAL = 10;
	public static readonly BOOLEAN_LITERAL = 11;
	public static readonly TYPE = 12;
	public static readonly IDENTIFIER = 13;
	public static readonly WHITESPACE = 14;

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
		"INTEGER_LITERAL", "BOOLEAN_LITERAL", "TYPE", "SYMBOLIC_IDENTIFIER", "ALPHANUMERIC_IDENTIFIER", 
		"IDENTIFIER", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'if'", "'then'", "'else'", "'('", "')'", "':'", "'val'", "'='", 
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "INTEGER_LITERAL", "BOOLEAN_LITERAL", 
		"TYPE", "IDENTIFIER", "WHITESPACE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10n\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x06\v@\n\v\r\v\x0E\v" +
		"A\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fM\n\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\rV\n\r\x03\x0E\x06\x0EY\n\x0E" +
		"\r\x0E\x0E\x0EZ\x03\x0F\x03\x0F\x07\x0F_\n\x0F\f\x0F\x0E\x0Fb\v\x0F\x03" +
		"\x10\x03\x10\x05\x10f\n\x10\x03\x11\x06\x11i\n\x11\r\x11\x0E\x11j\x03" +
		"\x11\x03\x11\x02\x02\x02\x12\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x02\x1D\x02\x02\x1F\x02\x0F!\x02\x10\x03\x02\x07" +
		"\x03\x022;\v\x02##%),1<<>B^^``~~\x80\x80\x04\x02C\\c|\x07\x02))2;C\\a" +
		"ac|\x05\x02\v\f\x0F\x0F\"\"\x02r\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x02\x19\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x03#\x03\x02\x02\x02\x05&\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t" +
		"0\x03\x02\x02\x02\v2\x03\x02\x02\x02\r4\x03\x02\x02\x02\x0F6\x03\x02\x02" +
		"\x02\x11:\x03\x02\x02\x02\x13<\x03\x02\x02\x02\x15?\x03\x02\x02\x02\x17" +
		"L\x03\x02\x02\x02\x19U\x03\x02\x02\x02\x1BX\x03\x02\x02\x02\x1D\\\x03" +
		"\x02\x02\x02\x1Fe\x03\x02\x02\x02!h\x03\x02\x02\x02#$\x07k\x02\x02$%\x07" +
		"h\x02\x02%\x04\x03\x02\x02\x02&\'\x07v\x02\x02\'(\x07j\x02\x02()\x07g" +
		"\x02\x02)*\x07p\x02\x02*\x06\x03\x02\x02\x02+,\x07g\x02\x02,-\x07n\x02" +
		"\x02-.\x07u\x02\x02./\x07g\x02\x02/\b\x03\x02\x02\x0201\x07*\x02\x021" +
		"\n\x03\x02\x02\x0223\x07+\x02\x023\f\x03\x02\x02\x0245\x07<\x02\x025\x0E" +
		"\x03\x02\x02\x0267\x07x\x02\x0278\x07c\x02\x0289\x07n\x02\x029\x10\x03" +
		"\x02\x02\x02:;\x07?\x02\x02;\x12\x03\x02\x02\x02<=\x07=\x02\x02=\x14\x03" +
		"\x02\x02\x02>@\t\x02\x02\x02?>\x03\x02\x02\x02@A\x03\x02\x02\x02A?\x03" +
		"\x02\x02\x02AB\x03\x02\x02\x02B\x16\x03\x02\x02\x02CD\x07v\x02\x02DE\x07" +
		"t\x02\x02EF\x07w\x02\x02FM\x07g\x02\x02GH\x07h\x02\x02HI\x07c\x02\x02" +
		"IJ\x07n\x02\x02JK\x07u\x02\x02KM\x07g\x02\x02LC\x03\x02\x02\x02LG\x03" +
		"\x02\x02\x02M\x18\x03\x02\x02\x02NO\x07d\x02\x02OP\x07q\x02\x02PQ\x07" +
		"q\x02\x02QV\x07n\x02\x02RS\x07k\x02\x02ST\x07p\x02\x02TV\x07v\x02\x02" +
		"UN\x03\x02\x02\x02UR\x03\x02\x02\x02V\x1A\x03\x02\x02\x02WY\t\x03\x02" +
		"\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02" +
		"\x02[\x1C\x03\x02\x02\x02\\`\t\x04\x02\x02]_\t\x05\x02\x02^]\x03\x02\x02" +
		"\x02_b\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02a\x1E\x03\x02" +
		"\x02\x02b`\x03\x02\x02\x02cf\x05\x1D\x0F\x02df\x05\x1B\x0E\x02ec\x03\x02" +
		"\x02\x02ed\x03\x02\x02\x02f \x03\x02\x02\x02gi\t\x06\x02\x02hg\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lm\b\x11\x02\x02m\"\x03\x02\x02\x02\n\x02ALUZ`ej\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

