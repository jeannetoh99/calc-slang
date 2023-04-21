import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    val b = 1;
    val a = 2;
    val c = 3;
    val n = 4;

    let
    val ab = b-a;
    val bc = c-b;
    val r1 = b div a;
    val r2 = c div b;
    fun guess n = n - a - b - c;
    fun arith n = arith (n-1) + ab;
    fun geom n = geom (n-1) * r1
    in
    if ab=bc then arith else if r1=r2 then geom else guess
    end;
`

test('let expression', () => {
  const expected: DecResType[] = [
    {
      name: 'b',
      value: '1',
      type: 'int'
    },
    {
      name: 'a',
      value: '2',
      type: 'int'
    },
    {
      name: 'c',
      value: '3',
      type: 'int'
    },
    {
      name: 'n',
      value: '4',
      type: 'int'
    },
    {
      name: 'it',
      value: 'fn',
      type: 'int -> int'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
