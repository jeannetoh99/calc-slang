// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { CharStream } from 'antlr4ts/CharStream'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { Lexer } from 'antlr4ts/Lexer'
import * as Utils from 'antlr4ts/misc/Utils'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

export class CalcLexer extends Lexer {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly MUL = 3
  public static readonly DIV = 4
  public static readonly ADD = 5
  public static readonly SUB = 6
  public static readonly INTDIV = 7
  public static readonly MOD = 8
  public static readonly INTEGER = 9
  public static readonly WHITESPACE = 10

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE']

  public static readonly ruleNames: string[] = [
    'T__0',
    'T__1',
    'MUL',
    'DIV',
    'ADD',
    'SUB',
    'INTDIV',
    'MOD',
    'INTEGER',
    'WHITESPACE'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'('",
    "')'",
    "'*'",
    "'/'",
    "'+'",
    "'-'",
    "'div'",
    "'mod'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    'MUL',
    'DIV',
    'ADD',
    'SUB',
    'INTDIV',
    'MOD',
    'INTEGER',
    'WHITESPACE'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    CalcLexer._LITERAL_NAMES,
    CalcLexer._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return CalcLexer.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input)
    this._interp = new LexerATNSimulator(CalcLexer._ATN, this)
  }

  // @Override
  public get grammarFileName(): string {
    return 'Calc.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return CalcLexer.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return CalcLexer._serializedATN
  }

  // @Override
  public get channelNames(): string[] {
    return CalcLexer.channelNames
  }

  // @Override
  public get modeNames(): string[] {
    return CalcLexer.modeNames
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\f7\b\x01\x04' +
    '\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
    '\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03' +
    '\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03' +
    '\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x06\n-\n\n' +
    '\r\n\x0E\n.\x03\v\x06\v2\n\v\r\v\x0E\v3\x03\v\x03\v\x02\x02\x02\f\x03' +
    '\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t' +
    '\x11\x02\n\x13\x02\v\x15\x02\f\x03\x02\x04\x03\x022;\x05\x02\v\f\x0F\x0F' +
    '""\x028\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03' +
    '\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02' +
    '\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02' +
    '\x02\x02\x02\x15\x03\x02\x02\x02\x03\x17\x03\x02\x02\x02\x05\x19\x03\x02' +
    '\x02\x02\x07\x1B\x03\x02\x02\x02\t\x1D\x03\x02\x02\x02\v\x1F\x03\x02\x02' +
    "\x02\r!\x03\x02\x02\x02\x0F#\x03\x02\x02\x02\x11'\x03\x02\x02\x02\x13" +
    ',\x03\x02\x02\x02\x151\x03\x02\x02\x02\x17\x18\x07*\x02\x02\x18\x04\x03' +
    '\x02\x02\x02\x19\x1A\x07+\x02\x02\x1A\x06\x03\x02\x02\x02\x1B\x1C\x07' +
    ',\x02\x02\x1C\b\x03\x02\x02\x02\x1D\x1E\x071\x02\x02\x1E\n\x03\x02\x02' +
    '\x02\x1F \x07-\x02\x02 \f\x03\x02\x02\x02!"\x07/\x02\x02"\x0E\x03\x02' +
    '\x02\x02#$\x07f\x02\x02$%\x07k\x02\x02%&\x07x\x02\x02&\x10\x03\x02\x02' +
    "\x02'(\x07o\x02\x02()\x07q\x02\x02)*\x07f\x02\x02*\x12\x03\x02\x02\x02" +
    '+-\t\x02\x02\x02,+\x03\x02\x02\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02' +
    './\x03\x02\x02\x02/\x14\x03\x02\x02\x0202\t\x03\x02\x0210\x03\x02\x02' +
    '\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02' +
    '\x0256\b\v\x02\x026\x16\x03\x02\x02\x02\x05\x02.3\x03\b\x02\x02'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!CalcLexer.__ATN) {
      CalcLexer.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(CalcLexer._serializedATN)
      )
    }

    return CalcLexer.__ATN
  }
}
