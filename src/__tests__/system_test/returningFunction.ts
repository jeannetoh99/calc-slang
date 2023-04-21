import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    val a = (fn x => fn y => fn z => x + y * z);
    a 2;
    a 1;
    [a 1 2 3, 1];
`

test('returning function', () => {
  const expected: DecResType[] = [
    {
      name: 'a',
      value: 'fn',
      type: 'int -> int -> int -> int'
    },
    {
      name: 'it',
      value: 'fn',
      type: 'int -> int -> int'
    },
    {
      name: 'it',
      value: 'fn',
      type: 'int -> int -> int'
    },
    {
      name: 'it',
      value: '[7,1]',
      type: 'int list'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
