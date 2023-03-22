// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { IntegerContext } from './CalcParser'
import { ParenthesesContext } from './CalcParser'
import { BinopContext } from './CalcParser'
import { StartContext } from './CalcParser'
import { ExpressionContext } from './CalcParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `Integer`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterInteger?: (ctx: IntegerContext) => void
  /**
   * Exit a parse tree produced by the `Integer`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitInteger?: (ctx: IntegerContext) => void

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
   * Enter a parse tree produced by the `Binop`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterBinop?: (ctx: BinopContext) => void
  /**
   * Exit a parse tree produced by the `Binop`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitBinop?: (ctx: BinopContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   */
  enterStart?: (ctx: StartContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.start`.
   * @param ctx the parse tree
   */
  exitStart?: (ctx: StartContext) => void

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
}
