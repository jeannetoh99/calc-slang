// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralExpressionContext } from "./CalcParser";
import { IdentifierExpressionContext } from "./CalcParser";
import { ConditionalExpressionContext } from "./CalcParser";
import { ParenthesizedExpressionContext } from "./CalcParser";
import { TypedExpressionContext } from "./CalcParser";
import { LiteralPatternContext } from "./CalcParser";
import { IdentifierPatternContext } from "./CalcParser";
import { TypedPatternContext } from "./CalcParser";
import { ParenthesizedPatternContext } from "./CalcParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `CalcParser`.
 */
export interface CalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TypedExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTypedExpression?: (ctx: TypedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypedExpression`
	 * labeled alternative in `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTypedExpression?: (ctx: TypedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterLiteralPattern?: (ctx: LiteralPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitLiteralPattern?: (ctx: LiteralPatternContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterIdentifierPattern?: (ctx: IdentifierPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitIdentifierPattern?: (ctx: IdentifierPatternContext) => void;

	/**
	 * Enter a parse tree produced by the `TypedPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterTypedPattern?: (ctx: TypedPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `TypedPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitTypedPattern?: (ctx: TypedPatternContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedPattern?: (ctx: ParenthesizedPatternContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedPattern`
	 * labeled alternative in `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedPattern?: (ctx: ParenthesizedPatternContext) => void;

	/**
	 * Enter a parse tree produced by the `ExpressionStatement`
	 * labeled alternative in `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ExpressionStatement`
	 * labeled alternative in `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `DeclarationStatement`
	 * labeled alternative in `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationStatement?: (ctx: DeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `DeclarationStatement`
	 * labeled alternative in `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationStatement?: (ctx: DeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ValueDeclaration`
	 * labeled alternative in `CalcParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterValueDeclaration?: (ctx: ValueDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `ValueDeclaration`
	 * labeled alternative in `CalcParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitValueDeclaration?: (ctx: ValueDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `Integer`
	 * labeled alternative in `CalcParser.literal`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by the `Integer`
	 * labeled alternative in `CalcParser.literal`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by the `Boolean`
	 * labeled alternative in `CalcParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `Boolean`
	 * labeled alternative in `CalcParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	enterPattern?: (ctx: PatternContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.pattern`.
	 * @param ctx the parse tree
	 */
	exitPattern?: (ctx: PatternContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CalcParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CalcParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
}

