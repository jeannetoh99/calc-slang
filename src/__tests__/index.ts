import { expectResult } from '../utils/testing'

///////////////////// LITERALS /////////////////////

test('Empty code returns undefined', () => {
  return expectResult('').toBe(undefined)
})

test('Single integer self-evaluates to itself', () => {
  return expectResult('42;').toBe(42)
})

test('Single boolean self-evaluates to itself', () => {
  return expectResult('true;').toBe(true)
})

test('Single real self-evaluates to itself', () => {
  return expectResult('42.5;').toBe(42.5)
})

test('Single string self-evaluates to itself', () => {
  return expectResult('"42";').toBe('42')
})

test('Multiline string self-evaluates to itself', () => {
  return expectResult(`"1\\n1";`).toBe(`1
1`)
})

test('Unit evaluates to undefined', () => {
  return expectResult('();').toBe(undefined)
})

///////////////// LIST_EXPRESSION //////////////////

test('Empty list evaluates to empty list', () => {
  return expectResult('[];').toEqual([])
})

test('List nil evaluates to empty list', () => {
  return expectResult('nil;').toEqual([])
})

test('List evaluates to list', () => {
  return expectResult('[1, 2, 3];').toEqual([1, 2, 3])
})

// TODO: Add test for type checking of list
