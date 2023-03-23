// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { LitContext } from './CalcParser'
import { IdentifierContext } from './CalcParser'
import { ParenthesesContext } from './CalcParser'
import { IdentifierPatContext } from './CalcParser'
import { ExpressionStatementContext } from './CalcParser'
import { DeclarationStatementContext } from './CalcParser'
import { ValueDeclarationContext } from './CalcParser'
import { IntegerContext } from './CalcParser'
import { BooleanContext } from './CalcParser'
import { LiteralContext } from './CalcParser'
import { ExpressionContext } from './CalcParser'
import { PatternContext } from './CalcParser'
import { DeclarationContext } from './CalcParser'
import { StatementContext } from './CalcParser'
import { ProgramContext } from './CalcParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `Lit`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterLit?: (ctx: LitContext) => void
  /**
   * Exit a parse tree produced by the `Lit`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLit?: (ctx: LitContext) => void

  /**
   * Enter a parse tree produced by the `Identifier`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Exit a parse tree produced by the `Identifier`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void

  /**
   * Enter a parse tree produced by the `Parentheses`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterParentheses?: (ctx: ParenthesesContext) => void
  /**
   * Exit a parse tree produced by the `Parentheses`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitParentheses?: (ctx: ParenthesesContext) => void

  /**
   * Enter a parse tree produced by the `IdentifierPat`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterIdentifierPat?: (ctx: IdentifierPatContext) => void
  /**
   * Exit a parse tree produced by the `IdentifierPat`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitIdentifierPat?: (ctx: IdentifierPatContext) => void

  /**
   * Enter a parse tree produced by the `ExpressionStatement`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterExpressionStatement?: (ctx: ExpressionStatementContext) => void
  /**
   * Exit a parse tree produced by the `ExpressionStatement`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitExpressionStatement?: (ctx: ExpressionStatementContext) => void

  /**
   * Enter a parse tree produced by the `DeclarationStatement`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterDeclarationStatement?: (ctx: DeclarationStatementContext) => void
  /**
   * Exit a parse tree produced by the `DeclarationStatement`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitDeclarationStatement?: (ctx: DeclarationStatementContext) => void

  /**
   * Enter a parse tree produced by the `ValueDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  enterValueDeclaration?: (ctx: ValueDeclarationContext) => void
  /**
   * Exit a parse tree produced by the `ValueDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  exitValueDeclaration?: (ctx: ValueDeclarationContext) => void

  /**
   * Enter a parse tree produced by the `Integer`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  enterInteger?: (ctx: IntegerContext) => void
  /**
   * Exit a parse tree produced by the `Integer`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  exitInteger?: (ctx: IntegerContext) => void

  /**
   * Enter a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  enterBoolean?: (ctx: BooleanContext) => void
  /**
   * Exit a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  exitBoolean?: (ctx: BooleanContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.literal`.
   * @param ctx the parse tree
   */
  enterLiteral?: (ctx: LiteralContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.literal`.
   * @param ctx the parse tree
   */
  exitLiteral?: (ctx: LiteralContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterPattern?: (ctx: PatternContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitPattern?: (ctx: PatternContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclaration?: (ctx: DeclarationContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclaration?: (ctx: DeclarationContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void
}
