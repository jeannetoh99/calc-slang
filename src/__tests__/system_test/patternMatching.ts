import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    val (a,b,c,d) = (2, "s", 3.4, [1,2]);
    val (l1, l2, l3) = ([1]@[2], 2::3::nil, [if true then 1 else 2, floor(3.45)]);
`

test('pattern matching', () => {
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
    },
    {
      name: 'l1',
      value: '[1,2]',
      type: 'int list'
    },
    {
      name: 'l2',
      value: '[2,3]',
      type: 'int list'
    },
    {
      name: 'l3',
      value: '[1,3]',
      type: 'int list'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
