grammar Calc;

/*
 * Tokens (terminal)
 */

INTEGER_LITERAL: [0-9]+;
BOOLEAN_LITERAL: 'true' | 'false';
REAL_LITERAL: ([0-9]+[.])?[0-9]+([eE][~]?[0-9]+)?;
STRING_LITERAL:  '"' ( '\\' [btnfr"'\\] | ~[\r\n\\"] )* '"';
UNIT_LITERAL: '()';
NIL: 'nil' | '[' WHITESPACE* ']' ;

fragment SYMBOLIC_IDENTIFIER: [!%&$#+-/:<=>?@\\~'^|*]+;
fragment ALPHANUMERIC_IDENTIFIER: [a-zA-Z][a-zA-Z0-9'_]*;
IDENTIFIER: ALPHANUMERIC_IDENTIFIER | SYMBOLIC_IDENTIFIER;

WHITESPACE: [ \r\n\t]+ -> skip;

/*
 * Productions
 */

 type
   : litType= ('bool' | 'int' | 'real' | 'string' | 'unit')    # LiteralType
   | elType=type 'list'                                        # ListType
   | param=type '->' return=type                               # FunctionType
   | type ('*' type)+                                          # TupleType     
   | '(' inner=type ')'                                        # ParenthesizedType
   ;

identifier : IDENTIFIER;

literal
   : INTEGER_LITERAL                            # Integer
   | BOOLEAN_LITERAL                            # Boolean
   | REAL_LITERAL                               # Real
   | STRING_LITERAL                             # String
   | UNIT_LITERAL                               # Unit
   ;

expression
   : literal                                                                        # LiteralExpression
   | identifier                                                                     # IdentifierExpression
   | <assoc=right> expression '::' expression                                       # ListConstructionExpression
   | expression ':' type                                                            # TypedExpression
   | fn=expression args=expression                                                  # FunctionApplication
   | left=expression op=('*' | '/' | 'div' | 'mod') right=expression                # InfixApplication
   | left=expression op=('+' | '-') right=expression                                # InfixApplication
   | left=expression op=('<>' | '<' | '>' | '<=' | '>=' | '=') right=expression     # InfixApplication
   | left=expression op=('andalso' | 'orelse') right=expression                     # InfixApplication
   | left=expression op='^' right=expression                                        # InfixApplication
   | left=expression op='@' right=expression                                        # InfixApplication
   | 'if' pred=expression 'then' cons=expression 'else' alt=expression              # ConditionalExpression
   | lambda                                                                         # LambdaExpression
   | 'let' declarationList 'in' expressionList 'end'                                # LetExpression
   | '(' expression ')'                                                             # ParenthesizedExpression
   | '(' expressionList ')'                                                         # SequenceExpression
   | '(' expression (',' expression)* ')'                                           # TupleExpression
   | list                                                                           # ListExpression
   ;        

list 
   : '[' expression (',' expression)* ']'                                           # SquareBracketList
   | NIL                                                                            # EmptyList
   ;                                                        

lambda : 'fn' pattern '=>' expression;

expressionList : expression (';' expression)*;

pattern
   : literal                                    # LiteralPattern
   | identifier                                 # IdentifierPattern
   | pattern ':' type                           # TypedPattern
   | '(' pattern (',' pattern)* ')'             # TuplePattern
   | '(' pattern ')'                            # ParenthesizedPattern
   ;

declaration
   : 'val' pattern '=' expression                                       # ValueDeclaration
   | 'val' 'rec' identifier '=' lambda                                  # RecursiveDeclaration 
   | 'fun' identifier pattern '=' expression                            # FunctionDeclaration
   | 'local' local=declarationList 'in' body=declarationList 'end'      # LocalDeclaration
   ;

declarationList : declaration (';' declaration)*;

statement
   : expression ';'                             # ExpressionStatement
   | declaration ';'                            # DeclarationStatement
   ;

program : statement*;