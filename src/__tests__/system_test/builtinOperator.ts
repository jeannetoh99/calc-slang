import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    val a = 100;\
    val math = fn b => b + 5;\
    val x = a div math 20;\

    val c = 1;\
    val math = fn d => d * c;\
    val y = math 5;\

    val l = if x > y then 1::2::nil\
            else if x = y then [3,4,5]\
            else 33::[10,22];\

    if x > 1 andalso y > 2 then l @ [0,0,0,0]\
        else if x < 1 orelse y < 2 then l @ [1,1,1,1]\
        else l @ [2,2,2,2];\
`

test('bulit in operators', () => {
  const expected: DecResType[] = [
    {
      name: 'a',
      value: '100',
      type: 'int'
    },
    {
      name: 'math',
      value: 'fn',
      type: 'int -> int'
    },
    {
      name: 'x',
      value: '4',
      type: 'int'
    },
    {
      name: 'c',
      value: '1',
      type: 'int'
    },
    {
      name: 'math',
      value: 'fn',
      type: 'int -> int'
    },
    {
      name: 'y',
      value: '5',
      type: 'int'
    },
    {
      name: 'l',
      value: '[33,10,22]',
      type: 'int list'
    },
    {
      name: 'it',
      value: '[33,10,22,0,0,0,0]',
      type: 'int list'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
