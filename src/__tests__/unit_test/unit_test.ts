import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

///////////////////// LITERALS /////////////////////

test('Empty code returns undefined', () => {
  const expected: DecResType[] = []
  return expectResult('').toBe(formatResults(expected))
})

test('Single integer self-evaluates to itself', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: 42,
      type: 'int'
    }
  ]
  return expectResult('42;').toBe(formatResults(expected))
})

test('Single boolean self-evaluates to itself', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: true,
      type: 'bool'
    }
  ]
  return expectResult('true;').toBe(formatResults(expected))
})

test('Single real self-evaluates to itself', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: 42.5,
      type: 'real'
    }
  ]
  return expectResult('42.5;').toBe(formatResults(expected))
})

test('Single string self-evaluates to itself', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '"42"',
      type: 'string'
    }
  ]
  return expectResult('"42";').toBe(formatResults(expected))
})

test('Multiline string self-evaluates to itself', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '"1\n1"',
      type: 'string'
    }
  ]
  return expectResult(`"1\\n1";`).toBe(formatResults(expected))
})

test('Unit evaluates to undefined', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '()',
      type: 'unit'
    }
  ]
  return expectResult('();').toBe(formatResults(expected))
})

///////////////// LIST_EXPRESSION //////////////////

test('Integer list evaluates to list', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '[1,2,3]',
      type: 'int list'
    }
  ]
  return expectResult('[1, 2, 3];').toBe(formatResults(expected))
})

test('Boolean list evaluates to list', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '[true,false]',
      type: 'bool list'
    }
  ]
  return expectResult('[true, false];').toBe(formatResults(expected))
})

test('Real list evaluates to list', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '[1.5,2.5,3.5]',
      type: 'real list'
    }
  ]
  return expectResult('[1.5, 2.5, 3.5];').toBe(formatResults(expected))
})

test('String list evaluates to list', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '["1","2","3"]',
      type: 'string list'
    }
  ]
  return expectResult('["1", "2", "3"];').toBe(formatResults(expected))
})

test('List of lists evaluates to list', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '[[1,2],[3,4]]',
      type: 'int list list'
    }
  ]
  return expectResult('[[1, 2], [3, 4]];').toBe(formatResults(expected))
})

test(`List of expressions evaluates to list`, () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '[3,7]',
      type: 'int list'
    }
  ]
  return expectResult('[1 + 2, 3 + 4];').toBe(formatResults(expected))
})

///////////////// CONDITIONAL_EXPRESSION //////////////////
test('If expression evaluates to then branch', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '"a"',
      type: 'string'
    }
  ]
  return expectResult('if true then "a" else "b";').toBe(formatResults(expected))
})

///////////////// LAMBDA_EXPRESSION //////////////////
test('Lambda expression evaluates to function', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: 'fn',
      type: 'int -> int'
    }
  ]
  return expectResult('fn x => x + 1;').toBe(formatResults(expected))
})

///////////////// VALUE_DECLARATION //////////////////
test('Value declaration evaluates to value', () => {
  const expected: DecResType[] = [
    {
      name: 'x',
      value: '1',
      type: 'int'
    }
  ]
  return expectResult('val x = 1;').toBe(formatResults(expected))
})

///////////////// APPLICATION_EXPRESSION //////////////////
test('Application expression evaluates to function application', () => {
  const expected: DecResType[] = [
    {
      name: 'n',
      value: 'fn',
      type: 'int -> int'
    },
    {
      name: 'it',
      value: '2',
      type: 'int'
    }
  ]
  return expectResult('val n = fn x => x + 1; \n n 1;').toBe(formatResults(expected))
})

///////////////// EXPRESSION_STATEMENT //////////////////
test('Expression statement evaluates to unit', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '()',
      type: 'unit'
    }
  ]
  return expectResult('();').toBe(formatResults(expected))
})

///////////////// TUPLE //////////////////
test('Tuple evaluates to tuple', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '("a",1,1.0)',
      type: 'string * int * real'
    }
  ]
  return expectResult('("a", 1, 1.0);').toBe(formatResults(expected))
})

///////////////// PATTERN_MATCHING //////////////////
test('Pattern matching evaluates evaluates pairwise values', () => {
  const expected: DecResType[] = [
    {
      name: 'a',
      value: '2',
      type: 'int'
    },
    {
      name: 'b',
      value: '"s"',
      type: 'string'
    },
    {
      name: 'c',
      value: '3.4',
      type: 'real'
    },
    {
      name: 'd',
      value: '[1,2]',
      type: 'int list'
    }
  ]
  return expectResult('val (a,b,c,d) = (2, "s", 3.4, [1,2]);').toBe(formatResults(expected))
})

///////////////// FUNCTION_DECLARATION //////////////////
test('Function declaration evaluates to function', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: 'fn',
      type: 'int -> int'
    }
  ]
  return expectResult('fn x => x+1;').toBe(formatResults(expected))
})

///////////////// RECURSIVE_VALUE_DECLARATION //////////////////
test('Recursive value declaration', () => {
  const expected: DecResType[] = [
    {
      name: 'fact',
      value: 'fn',
      type: 'int -> int'
    }
  ]
  return expectResult('val rec fact = fn n => if n=0 then 1 else n*fact(n-1);').toBe(
    formatResults(expected)
  )
})

///////////////// TYPE_DECLARATION //////////////////
test('Type declaration evaluates to type', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '100',
      type: 'int'
    }
  ]
  return expectResult('100: int;').toBe(formatResults(expected))
})

///////////////// SEQUENCE_EXPRESSION //////////////////
test('Sequence expression evaluates to last expression', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '"ab"',
      type: 'string'
    }
  ]
  return expectResult('( 1 + 2; "a"^"b" );').toBe(formatResults(expected))
})

///////////////// LET_EXPRESSION //////////////////
test('Let expression', () => {
  const expected: DecResType[] = [
    {
      name: 'it',
      value: '0',
      type: 'int'
    }
  ]
  return expectResult('let val x=0 in if x=0 then 0 else 100 div x end;').toBe(
    formatResults(expected)
  )
})
