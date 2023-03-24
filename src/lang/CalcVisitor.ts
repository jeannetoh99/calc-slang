// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

import { LitContext } from './CalcParser'
import { IdentifierContext } from './CalcParser'
import { ParenthesesContext } from './CalcParser'
import { ExpressionStatementContext } from './CalcParser'
import { DeclarationStatementContext } from './CalcParser'
import { ValueDeclarationContext } from './CalcParser'
import { IntegerContext } from './CalcParser'
import { BooleanContext } from './CalcParser'
import { LiteralContext } from './CalcParser'
import { ExpressionContext } from './CalcParser'
import { DeclarationContext } from './CalcParser'
import { StatementContext } from './CalcParser'
import { ProgramContext } from './CalcParser'

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `Lit`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLit?: (ctx: LitContext) => Result

  /**
   * Visit a parse tree produced by the `Identifier`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdentifier?: (ctx: IdentifierContext) => Result

  /**
   * Visit a parse tree produced by the `Parentheses`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParentheses?: (ctx: ParenthesesContext) => Result

  /**
   * Visit a parse tree produced by the `ExpressionStatement`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result

  /**
   * Visit a parse tree produced by the `DeclarationStatement`
   * labeled alternative in `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result

  /**
   * Visit a parse tree produced by the `ValueDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValueDeclaration?: (ctx: ValueDeclarationContext) => Result

  /**
   * Visit a parse tree produced by the `Integer`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInteger?: (ctx: IntegerContext) => Result

  /**
   * Visit a parse tree produced by the `Boolean`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBoolean?: (ctx: BooleanContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.literal`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLiteral?: (ctx: LiteralContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result

  /**
   * Visit a parse tree produced by `CalcParser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgram?: (ctx: ProgramContext) => Result
}
