grammar Calc;

/*
 * Tokens (terminal)
 */
INTEGER_LITERAL: [0-9]+;
BOOLEAN_LITERAL: 'true' | 'false';
REAL_LITERAL: ([0-9]+[.])?[0-9]+([eE][~]?[0-9]+)?;
STRING_LITERAL:  '"' ('\\' ["\\] | ~["\\\r\n])* '"' ;

TYPE: 'bool' | 'int' | 'real' | 'string';

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
   | REAL_LITERAL                               # Real
   | STRING_LITERAL                             # String
   ;

expression
   : literal                                                            # LiteralExpression
   | identifier                                                         # IdentifierExpression
   | expression ':' TYPE                                                # TypedExpression
   | 'if' pred=expression 'then' cons=expression 'else' alt=expression  # ConditionalExpression
   | 'fn' pattern '=>' expression                                       # LambdaExpression
   | fn=expression args=expression                                      # FunctionApplication
   | '(' expression ')'                                                 # ParenthesizedExpression
   ;

pattern
   : literal                                    # LiteralPattern
   | identifier                                 # IdentifierPattern
   | pattern ':' TYPE                           # TypedPattern
   | '(' pattern ')'                            # ParenthesizedPattern
   ;

declaration
   : 'val' pattern '=' expression               # ValueDeclaration
   | 'fun' identifier pattern '=' expression    # FunctionDeclaration
   ;

statement
   : expression ';'                             # ExpressionStatement
   | declaration ';'                            # DeclarationStatement
   ;

program : statement*;