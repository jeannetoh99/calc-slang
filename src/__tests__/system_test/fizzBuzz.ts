import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    val fizz = "Fizz";\
    val buzz = "Buzz";\

    val fizzBuzz = fn n =>
            if n mod 15 = 0 then
                fizz ^ buzz
            else if n mod 3 = 0 then
                fizz
            else if n mod 5 = 0 then
                fizz
            else
                "";\
                
    fizzBuzz 100;\
`

test('Fizz buzz', () => {
  const expected: DecResType[] = [
    {
      name: 'fizz',
      value: '"Fizz"',
      type: 'string'
    },
    {
      name: 'buzz',
      value: '"Buzz"',
      type: 'string'
    },
    {
      name: 'fizzBuzz',
      value: 'fn',
      type: 'int -> string'
    },
    {
      name: 'it',
      value: '"Fizz"',
      type: 'string'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
