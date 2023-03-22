grammar Calc;

/*
 * Tokens (terminal)
 */
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';

INTDIV: 'div';
MOD: 'mod';

NEQ: '<>';
LT: '<';
GT: '>';
EQ: '=';
LTE: '<=';
GTE: '>=';

INTEGER: [0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;

/*
 * Productions
 */
start : expression;

expression
   : INTEGER                                                            # Integer
   | '(' inner=expression ')'                                           # Parentheses
   | left=expression operator=(MUL|DIV|INTDIV|MOD) right=expression     # Binop
   | left=expression operator=(ADD|SUB) right=expression                # Binop
   | left=expression operator=(NEQ|LT|GT|EQ|LTE|GTE) right=expression   # Binop
   ;