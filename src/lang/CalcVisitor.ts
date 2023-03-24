// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LiteralExpressionContext } from "./CalcParser";
import { IdentifierExpressionContext } from "./CalcParser";
import { ConditionalExpressionContext } from "./CalcParser";
import { ParenthesizedExpressionContext } from "./CalcParser";
import { TypedExpressionContext } from "./CalcParser";
import { LiteralPatternContext } from "./CalcParser";
import { IdentifierPatternContext } from "./CalcParser";
import { TypedPatternContext } from "./CalcParser";
import { ExpressionStatementContext } from "./CalcParser";
import { DeclarationStatementContext } from "./CalcParser";
import { ValueDeclarationContext } from "./CalcParser";
import { IntegerContext } from "./CalcParser";
import { BooleanContext } from "./CalcParser";
import { IdentifierContext } from "./CalcParser";
import { LiteralContext } from "./CalcParser";
import { ExpressionContext } from "./CalcParser";
import { PatternContext } from "./CalcParser";
import { DeclarationContext } from "./CalcParser";
import { StatementContext } from "./CalcParser";
import { ProgramContext } from "./CalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypedExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedExpression?: (ctx: TypedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPattern?: (ctx: LiteralPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPattern?: (ctx: IdentifierPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypedPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedPattern?: (ctx: TypedPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpressionStatement`
	 * labeled alternative in `CalcParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `DeclarationStatement`
	 * labeled alternative in `CalcParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationStatement?: (ctx: DeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ValueDeclaration`
	 * labeled alternative in `CalcParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueDeclaration?: (ctx: ValueDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Integer`
	 * labeled alternative in `CalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by the `Boolean`
	 * labeled alternative in `CalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CalcParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
}

