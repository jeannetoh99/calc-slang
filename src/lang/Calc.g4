grammar Calc;

/*
 * Tokens (terminal)
 */
INTEGER_LITERAL: [0-9]+;
BOOLEAN_LITERAL: 'true' | 'false';

TYPE: 'bool' | 'int';

fragment SYMBOLIC_IDENTIFIER: [!%&$#+-/:<=>?@\\~'^|*]+;
fragment ALPHANUMERIC_IDENTIFIER: [a-zA-Z][a-zA-Z0-9'_]*;
IDENTIFIER: ALPHANUMERIC_IDENTIFIER | SYMBOLIC_IDENTIFIER;

WHITESPACE: [ \r\n\t]+ -> skip;

/*
 * Productions
 */

identifier : IDENTIFIER;

literal
   : INTEGER_LITERAL                            # Integer
   | BOOLEAN_LITERAL                            # Boolean
   ;

expression
   : literal                                                            # LiteralExpression
   | identifier                                                         # IdentifierExpression
   | 'if' pred=expression 'then' cons=expression 'else' alt=expression  # ConditionalExpression
   | '(' expression ')'                                                 # ParenthesizedExpression
   | expression ':' TYPE                                                # TypedExpression
   ;

pattern
   : literal                                    # LiteralPattern
   | identifier                                 # IdentifierPattern
   | pattern ':' TYPE                           # TypedPattern
   | '(' pattern ')'                            # ParenthesizedPattern
   ;

declaration
   : 'val' pattern '=' expression               # ValueDeclaration
   ;

statement
   : expression ';'                             # ExpressionStatement
   | declaration ';'                            # DeclarationStatement
   ;

program : statement*;