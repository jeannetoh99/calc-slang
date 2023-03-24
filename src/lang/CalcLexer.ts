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
	public static readonly INTEGER_LITERAL = 7;
	public static readonly BOOLEAN_LITERAL = 8;
	public static readonly TYPE = 9;
	public static readonly IDENTIFIER = 10;
	public static readonly WHITESPACE = 11;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "INTEGER_LITERAL", "BOOLEAN_LITERAL", 
		"TYPE", "SYMBOLIC_IDENTIFIER", "ALPHANUMERIC_IDENTIFIER", "IDENTIFIER", 
		"WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "':'", "'val'", "'='", "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"INTEGER_LITERAL", "BOOLEAN_LITERAL", "TYPE", "IDENTIFIER", "WHITESPACE",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r[\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x06\b-" +
		"\n\b\r\b\x0E\b.\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t:\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nC\n\n\x03\v" +
		"\x06\vF\n\v\r\v\x0E\vG\x03\f\x03\f\x07\fL\n\f\f\f\x0E\fO\v\f\x03\r\x03" +
		"\r\x05\rS\n\r\x03\x0E\x06\x0EV\n\x0E\r\x0E\x0E\x0EW\x03\x0E\x03\x0E\x02" +
		"\x02\x02\x0F\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r" +
		"\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\x02\x17\x02\x02\x19\x02\f" +
		"\x1B\x02\r\x03\x02\x07\x03\x022;\v\x02##%),1<<>B^^``~~\x80\x80\x04\x02" +
		"C\\c|\x07\x02))2;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02_\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
		"\x02\x02\x1B\x03\x02\x02\x02\x03\x1D\x03\x02\x02\x02\x05\x1F\x03\x02\x02" +
		"\x02\x07!\x03\x02\x02\x02\t#\x03\x02\x02\x02\v\'\x03\x02\x02\x02\r)\x03" +
		"\x02\x02\x02\x0F,\x03\x02\x02\x02\x119\x03\x02\x02\x02\x13B\x03\x02\x02" +
		"\x02\x15E\x03\x02\x02\x02\x17I\x03\x02\x02\x02\x19R\x03\x02\x02\x02\x1B" +
		"U\x03\x02\x02\x02\x1D\x1E\x07*\x02\x02\x1E\x04\x03\x02\x02\x02\x1F \x07" +
		"+\x02\x02 \x06\x03\x02\x02\x02!\"\x07<\x02\x02\"\b\x03\x02\x02\x02#$\x07" +
		"x\x02\x02$%\x07c\x02\x02%&\x07n\x02\x02&\n\x03\x02\x02\x02\'(\x07?\x02" +
		"\x02(\f\x03\x02\x02\x02)*\x07=\x02\x02*\x0E\x03\x02\x02\x02+-\t\x02\x02" +
		"\x02,+\x03\x02\x02\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02" +
		"\x02/\x10\x03\x02\x02\x0201\x07v\x02\x0212\x07t\x02\x0223\x07w\x02\x02" +
		"3:\x07g\x02\x0245\x07h\x02\x0256\x07c\x02\x0267\x07n\x02\x0278\x07u\x02" +
		"\x028:\x07g\x02\x0290\x03\x02\x02\x0294\x03\x02\x02\x02:\x12\x03\x02\x02" +
		"\x02;<\x07d\x02\x02<=\x07q\x02\x02=>\x07q\x02\x02>C\x07n\x02\x02?@\x07" +
		"k\x02\x02@A\x07p\x02\x02AC\x07v\x02\x02B;\x03\x02\x02\x02B?\x03\x02\x02" +
		"\x02C\x14\x03\x02\x02\x02DF\t\x03\x02\x02ED\x03\x02\x02\x02FG\x03\x02" +
		"\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\x16\x03\x02\x02\x02IM\t" +
		"\x04\x02\x02JL\t\x05\x02\x02KJ\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03" +
		"\x02\x02\x02MN\x03\x02\x02\x02N\x18\x03\x02\x02\x02OM\x03\x02\x02\x02" +
		"PS\x05\x17\f\x02QS\x05\x15\v\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02S" +
		"\x1A\x03\x02\x02\x02TV\t\x06\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\b\x0E\x02\x02" +
		"Z\x1C\x03\x02\x02\x02\n\x02.9BGMRW\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CalcLexer.__ATN) {
			CalcLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CalcLexer._serializedATN));
		}

		return CalcLexer.__ATN;
	}

}

