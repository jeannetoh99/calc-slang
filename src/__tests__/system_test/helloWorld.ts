import { DecResType, formatResults } from '../../utils/stringify'
import { expectResult } from '../../utils/testing'

const program = `
    val sayHi = "hello " ^ "world";
    sayHi ^ " jeanne";
    size sayHi;
`

test('hello world', () => {
  const expected: DecResType[] = [
    {
      name: 'sayHi',
      value: '"hello world"',
      type: 'string'
    },
    {
      name: 'it',
      value: '"hello world jeanne"',
      type: 'string'
    },
    {
      name: 'it',
      value: '11',
      type: 'int'
    }
  ]
  return expectResult(program).toBe(formatResults(expected))
})
