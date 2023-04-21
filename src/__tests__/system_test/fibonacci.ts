import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    fun fibonacci n =
        if n = 0 then 0
        else if (n = 1 orelse n = 2) then 1
        else fibonacci(n-1) + fibonacci(n-2);

    fibonacci 8;
`

test('fibonacci', () => {
  const expected: DecResType[] = [
    {
      name: 'fibonacci',
      value: 'fn',
      type: 'int -> int'
    },
    {
      name: 'it',
      value: '21',
      type: 'int'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
