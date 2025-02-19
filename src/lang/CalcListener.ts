// Generated from ./src/lang/Calc.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { LiteralExpressionContext } from './CalcParser'
import { IdentifierExpressionContext } from './CalcParser'
import { ListConstructionExpressionContext } from './CalcParser'
import { TypedExpressionContext } from './CalcParser'
import { FunctionApplicationContext } from './CalcParser'
import { InfixApplicationContext } from './CalcParser'
import { ConditionalExpressionContext } from './CalcParser'
import { LambdaExpressionContext } from './CalcParser'
import { LetExpressionContext } from './CalcParser'
import { ParenthesizedExpressionContext } from './CalcParser'
import { SequenceExpressionContext } from './CalcParser'
import { TupleExpressionContext } from './CalcParser'
import { ListExpressionContext } from './CalcParser'
import { WildcardPatternContext } from './CalcParser'
import { LiteralPatternContext } from './CalcParser'
import { IdentifierPatternContext } from './CalcParser'
import { TypedPatternContext } from './CalcParser'
import { TuplePatternContext } from './CalcParser'
import { ParenthesizedPatternContext } from './CalcParser'
import { ExpressionStatementContext } from './CalcParser'
import { DeclarationStatementContext } from './CalcParser'
import { LiteralTypeContext } from './CalcParser'
import { ListTypeContext } from './CalcParser'
import { FunctionTypeContext } from './CalcParser'
import { TupleTypeContext } from './CalcParser'
import { ParenthesizedTypeContext } from './CalcParser'
import { SquareBracketListContext } from './CalcParser'
import { EmptyListContext } from './CalcParser'
import { ValueDeclarationContext } from './CalcParser'
import { RecursiveDeclarationContext } from './CalcParser'
import { FunctionDeclarationContext } from './CalcParser'
import { LocalDeclarationContext } from './CalcParser'
import { IntegerContext } from './CalcParser'
import { BooleanContext } from './CalcParser'
import { RealContext } from './CalcParser'
import { StringContext } from './CalcParser'
import { UnitContext } from './CalcParser'
import { TypeContext } from './CalcParser'
import { IdentifierContext } from './CalcParser'
import { LiteralContext } from './CalcParser'
import { ExpressionContext } from './CalcParser'
import { ListContext } from './CalcParser'
import { LambdaContext } from './CalcParser'
import { ExpressionListContext } from './CalcParser'
import { PatternContext } from './CalcParser'
import { DeclarationContext } from './CalcParser'
import { DeclarationListContext } from './CalcParser'
import { StatementContext } from './CalcParser'
import { ProgramContext } from './CalcParser'

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
  enterLiteralExpression?: (ctx: LiteralExpressionContext) => void
  /**
   * Exit a parse tree produced by the `LiteralExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLiteralExpression?: (ctx: LiteralExpressionContext) => void

  /**
   * Enter a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void
  /**
   * Exit a parse tree produced by the `IdentifierExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ListConstructionExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterListConstructionExpression?: (ctx: ListConstructionExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ListConstructionExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitListConstructionExpression?: (ctx: ListConstructionExpressionContext) => void

  /**
   * Enter a parse tree produced by the `TypedExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterTypedExpression?: (ctx: TypedExpressionContext) => void
  /**
   * Exit a parse tree produced by the `TypedExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitTypedExpression?: (ctx: TypedExpressionContext) => void

  /**
   * Enter a parse tree produced by the `FunctionApplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterFunctionApplication?: (ctx: FunctionApplicationContext) => void
  /**
   * Exit a parse tree produced by the `FunctionApplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitFunctionApplication?: (ctx: FunctionApplicationContext) => void

  /**
   * Enter a parse tree produced by the `InfixApplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterInfixApplication?: (ctx: InfixApplicationContext) => void
  /**
   * Exit a parse tree produced by the `InfixApplication`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitInfixApplication?: (ctx: InfixApplicationContext) => void

  /**
   * Enter a parse tree produced by the `ConditionalExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ConditionalExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void

  /**
   * Enter a parse tree produced by the `LambdaExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterLambdaExpression?: (ctx: LambdaExpressionContext) => void
  /**
   * Exit a parse tree produced by the `LambdaExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLambdaExpression?: (ctx: LambdaExpressionContext) => void

  /**
   * Enter a parse tree produced by the `LetExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterLetExpression?: (ctx: LetExpressionContext) => void
  /**
   * Exit a parse tree produced by the `LetExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitLetExpression?: (ctx: LetExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ParenthesizedExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ParenthesizedExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void

  /**
   * Enter a parse tree produced by the `SequenceExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterSequenceExpression?: (ctx: SequenceExpressionContext) => void
  /**
   * Exit a parse tree produced by the `SequenceExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitSequenceExpression?: (ctx: SequenceExpressionContext) => void

  /**
   * Enter a parse tree produced by the `TupleExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterTupleExpression?: (ctx: TupleExpressionContext) => void
  /**
   * Exit a parse tree produced by the `TupleExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitTupleExpression?: (ctx: TupleExpressionContext) => void

  /**
   * Enter a parse tree produced by the `ListExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  enterListExpression?: (ctx: ListExpressionContext) => void
  /**
   * Exit a parse tree produced by the `ListExpression`
   * labeled alternative in `CalcParser.expression`.
   * @param ctx the parse tree
   */
  exitListExpression?: (ctx: ListExpressionContext) => void

  /**
   * Enter a parse tree produced by the `WildcardPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterWildcardPattern?: (ctx: WildcardPatternContext) => void
  /**
   * Exit a parse tree produced by the `WildcardPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitWildcardPattern?: (ctx: WildcardPatternContext) => void

  /**
   * Enter a parse tree produced by the `LiteralPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterLiteralPattern?: (ctx: LiteralPatternContext) => void
  /**
   * Exit a parse tree produced by the `LiteralPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitLiteralPattern?: (ctx: LiteralPatternContext) => void

  /**
   * Enter a parse tree produced by the `IdentifierPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterIdentifierPattern?: (ctx: IdentifierPatternContext) => void
  /**
   * Exit a parse tree produced by the `IdentifierPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitIdentifierPattern?: (ctx: IdentifierPatternContext) => void

  /**
   * Enter a parse tree produced by the `TypedPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterTypedPattern?: (ctx: TypedPatternContext) => void
  /**
   * Exit a parse tree produced by the `TypedPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitTypedPattern?: (ctx: TypedPatternContext) => void

  /**
   * Enter a parse tree produced by the `TuplePattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterTuplePattern?: (ctx: TuplePatternContext) => void
  /**
   * Exit a parse tree produced by the `TuplePattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitTuplePattern?: (ctx: TuplePatternContext) => void

  /**
   * Enter a parse tree produced by the `ParenthesizedPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  enterParenthesizedPattern?: (ctx: ParenthesizedPatternContext) => void
  /**
   * Exit a parse tree produced by the `ParenthesizedPattern`
   * labeled alternative in `CalcParser.pattern`.
   * @param ctx the parse tree
   */
  exitParenthesizedPattern?: (ctx: ParenthesizedPatternContext) => void

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
   * Enter a parse tree produced by the `LiteralType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  enterLiteralType?: (ctx: LiteralTypeContext) => void
  /**
   * Exit a parse tree produced by the `LiteralType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  exitLiteralType?: (ctx: LiteralTypeContext) => void

  /**
   * Enter a parse tree produced by the `ListType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  enterListType?: (ctx: ListTypeContext) => void
  /**
   * Exit a parse tree produced by the `ListType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  exitListType?: (ctx: ListTypeContext) => void

  /**
   * Enter a parse tree produced by the `FunctionType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  enterFunctionType?: (ctx: FunctionTypeContext) => void
  /**
   * Exit a parse tree produced by the `FunctionType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  exitFunctionType?: (ctx: FunctionTypeContext) => void

  /**
   * Enter a parse tree produced by the `TupleType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  enterTupleType?: (ctx: TupleTypeContext) => void
  /**
   * Exit a parse tree produced by the `TupleType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  exitTupleType?: (ctx: TupleTypeContext) => void

  /**
   * Enter a parse tree produced by the `ParenthesizedType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void
  /**
   * Exit a parse tree produced by the `ParenthesizedType`
   * labeled alternative in `CalcParser.type`.
   * @param ctx the parse tree
   */
  exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void

  /**
   * Enter a parse tree produced by the `SquareBracketList`
   * labeled alternative in `CalcParser.list`.
   * @param ctx the parse tree
   */
  enterSquareBracketList?: (ctx: SquareBracketListContext) => void
  /**
   * Exit a parse tree produced by the `SquareBracketList`
   * labeled alternative in `CalcParser.list`.
   * @param ctx the parse tree
   */
  exitSquareBracketList?: (ctx: SquareBracketListContext) => void

  /**
   * Enter a parse tree produced by the `EmptyList`
   * labeled alternative in `CalcParser.list`.
   * @param ctx the parse tree
   */
  enterEmptyList?: (ctx: EmptyListContext) => void
  /**
   * Exit a parse tree produced by the `EmptyList`
   * labeled alternative in `CalcParser.list`.
   * @param ctx the parse tree
   */
  exitEmptyList?: (ctx: EmptyListContext) => void

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
   * Enter a parse tree produced by the `RecursiveDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  enterRecursiveDeclaration?: (ctx: RecursiveDeclarationContext) => void
  /**
   * Exit a parse tree produced by the `RecursiveDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  exitRecursiveDeclaration?: (ctx: RecursiveDeclarationContext) => void

  /**
   * Enter a parse tree produced by the `FunctionDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void
  /**
   * Exit a parse tree produced by the `FunctionDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void

  /**
   * Enter a parse tree produced by the `LocalDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  enterLocalDeclaration?: (ctx: LocalDeclarationContext) => void
  /**
   * Exit a parse tree produced by the `LocalDeclaration`
   * labeled alternative in `CalcParser.declaration`.
   * @param ctx the parse tree
   */
  exitLocalDeclaration?: (ctx: LocalDeclarationContext) => void

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
   * Enter a parse tree produced by the `Real`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  enterReal?: (ctx: RealContext) => void
  /**
   * Exit a parse tree produced by the `Real`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  exitReal?: (ctx: RealContext) => void

  /**
   * Enter a parse tree produced by the `String`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  enterString?: (ctx: StringContext) => void
  /**
   * Exit a parse tree produced by the `String`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  exitString?: (ctx: StringContext) => void

  /**
   * Enter a parse tree produced by the `Unit`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  enterUnit?: (ctx: UnitContext) => void
  /**
   * Exit a parse tree produced by the `Unit`
   * labeled alternative in `CalcParser.literal`.
   * @param ctx the parse tree
   */
  exitUnit?: (ctx: UnitContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.type`.
   * @param ctx the parse tree
   */
  enterType?: (ctx: TypeContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.type`.
   * @param ctx the parse tree
   */
  exitType?: (ctx: TypeContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void

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
   * Enter a parse tree produced by `CalcParser.list`.
   * @param ctx the parse tree
   */
  enterList?: (ctx: ListContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.list`.
   * @param ctx the parse tree
   */
  exitList?: (ctx: ListContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.lambda`.
   * @param ctx the parse tree
   */
  enterLambda?: (ctx: LambdaContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.lambda`.
   * @param ctx the parse tree
   */
  exitLambda?: (ctx: LambdaContext) => void

  /**
   * Enter a parse tree produced by `CalcParser.expressionList`.
   * @param ctx the parse tree
   */
  enterExpressionList?: (ctx: ExpressionListContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.expressionList`.
   * @param ctx the parse tree
   */
  exitExpressionList?: (ctx: ExpressionListContext) => void

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
   * Enter a parse tree produced by `CalcParser.declarationList`.
   * @param ctx the parse tree
   */
  enterDeclarationList?: (ctx: DeclarationListContext) => void
  /**
   * Exit a parse tree produced by `CalcParser.declarationList`.
   * @param ctx the parse tree
   */
  exitDeclarationList?: (ctx: DeclarationListContext) => void

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
