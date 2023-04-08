import { formatResults, ResultType } from '../utils/stringify'
import { expectResult } from '../utils/testing'

///////////////////// LITERALS /////////////////////

test('Empty code returns undefined', () => {
  const expected: ResultType[] = []
  return expectResult('').toBe(formatResults(expected))
})

test('Single integer self-evaluates to itself', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: 42,
      type: 'int'
    }
  ]
  return expectResult('42;').toBe(formatResults(expected))
})

test('Single boolean self-evaluates to itself', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: true,
      type: 'bool'
    }
  ]
  return expectResult('true;').toBe(formatResults(expected))
})

test('Single real self-evaluates to itself', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: 42.5,
      type: 'real'
    }
  ]
  return expectResult('42.5;').toBe(formatResults(expected))
})

test('Single string self-evaluates to itself', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '"42"',
      type: 'string'
    }
  ]
  return expectResult('"42";').toBe(formatResults(expected))
})

test('Multiline string self-evaluates to itself', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '"1\n1"',
      type: 'string'
    }
  ]
  return expectResult(`"1\\n1";`).toBe(formatResults(expected))
})

test('Unit evaluates to undefined', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '()',
      type: 'unit'
    }
  ]
  return expectResult('();').toBe(formatResults(expected))
})

///////////////// LIST_EXPRESSION //////////////////

test('Empty list evaluates to empty list', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '[]',
      type: '? list'
    }
  ]
  return expectResult('[];').toBe(formatResults(expected))
})

test('List nil evaluates to empty list', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '[]',
      type: '? list'
    }
  ]
  return expectResult('nil;').toBe(formatResults(expected))
})

test('Integer list evaluates to list', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '[1,2,3]',
      type: 'int list'
    }
  ]
  return expectResult('[1, 2, 3];').toBe(formatResults(expected))
})

test('Boolean list evaluates to list', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '[true,false]',
      type: 'bool list'
    }
  ]
  return expectResult('[true, false];').toBe(formatResults(expected))
})

test('Real list evaluates to list', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '[1.5,2.5,3.5]',
      type: 'real list'
    }
  ]
  return expectResult('[1.5, 2.5, 3.5];').toBe(formatResults(expected))
})

test('String list evaluates to list', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '["1","2","3"]',
      type: 'string list'
    }
  ]
  return expectResult('["1", "2", "3"];').toBe(formatResults(expected))
})

test('List of lists evaluates to list', () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '[[1,2],[3,4]]',
      type: 'int list list'
    }
  ]
  return expectResult('[[1, 2], [3, 4]];').toBe(formatResults(expected))
})

test(`List of expressions evaluates to list`, () => {
  const expected: ResultType[] = [
    {
      name: 'it',
      value: '[3,7]',
      type: 'int list'
    }
  ]
  return expectResult('[1 + 2, 3 + 4];').toBe(formatResults(expected))
})

// TODO: Add test for type checking of list
