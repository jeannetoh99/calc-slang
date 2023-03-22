grammar Calc;

/*
 * Tokens (terminal)
 */
INTEGER_LITERAL: [0-9]+;
BOOLEAN_LITERAL: 'true' | 'false';

fragment SYMBOLIC_IDENTIFIER: [!%&$#+-/:<=>?@\\~'^|*]+;
fragment ALPHANUMERIC_IDENTIFIER: [a-zA-Z][a-zA-Z0-9'_]*;
IDENTIFIER: ALPHANUMERIC_IDENTIFIER | SYMBOLIC_IDENTIFIER;

WHITESPACE: [ \r\n\t]+ -> skip;

/*
 * Productions
 */

/*
 * Productions
 */

literal
   : INTEGER_LITERAL                            # Integer
   | BOOLEAN_LITERAL                            # Boolean
   ;

expression
   : literal                                    # Lit
   | IDENTIFIER                                 # Identifier
   | '(' inner=expression ')'                   # Parentheses
   ;

pattern
   : IDENTIFIER                                 # IdentifierPat
   ;

declaration
   : 'val' id=pattern '=' val=expression        # ValueDeclaration
   ;

statement
   : expr=expression ';'                        # ExpressionStatement
   | decl=declaration ';'                       # DeclarationStatement
   ;

program : statement*;