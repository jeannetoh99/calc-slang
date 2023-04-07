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
