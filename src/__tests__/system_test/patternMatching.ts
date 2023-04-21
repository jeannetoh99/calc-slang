import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    val (a,b,c,d) = (2, "s", 3.4, [1,2]);
    val (l1, l2, l3) = ([1]@[2], 2::3::nil, [if true then 1 else 2, floor(3.45)]);
`

test('pattern matching', () => {
  const expected: DecResType[] = []
  return expectResult(program).toBe(formatResults(expected))
})
