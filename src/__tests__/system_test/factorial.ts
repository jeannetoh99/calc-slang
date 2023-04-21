import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    fun factorial n =
            if n = 1 then n
            else n * factorial(n-1);

    factorial 10;
`

test('factorial', () => {
  const expected: DecResType[] = [
    {
      name: 'factorial',
      value: 'fn',
      type: 'int -> int'
    },
    {
      name: 'it',
      value: '3628800',
      type: 'int'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
