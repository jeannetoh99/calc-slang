import * as es from '../ast'
import { parse as sourceParse } from '../parser/parser'
import { Context, Value } from '../types'
import { oneLine } from '../utils/formatters'
import { vector_to_list } from './list'

class ParseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ParseError'
  }
}

function unreachable() {
  // tslint:disable-next-line:no-console
  console.error(oneLine`
    UNREACHABLE CODE REACHED!
    Please file an issue at
    https://github.com/source-academy/js-slang/issues
    if you see this.
  `)
}

// sequences of expressions of length 1
// can be represented by the element itself,
// instead of constructing a sequence

function makeSequenceIfNeeded(exs: es.Node[]) {
  return exs.length === 1
    ? transform(exs[0])
    : vector_to_list(['sequence', vector_to_list(exs.map(transform))])
}

function makeBlockIfNeeded(exs: es.Node[]) {
  return hasDeclarationAtToplevel(exs)
    ? vector_to_list(['block', makeSequenceIfNeeded(exs)])
    : makeSequenceIfNeeded(exs)
}

// checks if sequence has declaration at toplevel
// (outside of any block)
function hasDeclarationAtToplevel(exs: es.Node[]) {
  return exs.reduce((b, ex) => b, false)
}

type ASTTransformers = Map<string, (node: es.Node) => Value>

const transformers: ASTTransformers = new Map([
  [
    'Program',
    (node: es.Node) => {
      node = node as es.Program
      return makeSequenceIfNeeded(node.body)
    }
  ],

  [
    'ExpressionStatement',
    (node: es.ExpressionStatement) => {
      return transform(node.expression)
    }
  ],

  [
    'UnaryExpression',
    (node: es.UnaryExpression) => {
      return vector_to_list(['unary_operator_combination', node.operator, transform(node.argument)])
    }
  ],

  [
    'BinaryExpression',
    (node: es.BinaryExpression) => {
      return vector_to_list([
        'binary_operator_combination',
        node.operator,
        transform(node.left),
        transform(node.right)
      ])
    }
  ],

  [
    'Identifier',
    (node: es.Identifier) => {
      return vector_to_list(['name', node.name])
    }
  ],

  [
    'Literal',
    (node: es.Literal) => {
      return vector_to_list(['literal', node.value])
    }
  ]
])

function transform(node: es.Node) {
  if (transformers.has(node.type)) {
    const transformer = transformers.get(node.type) as (n: es.Node) => Value
    const transformed = transformer(node)
    // Attach location information
    if (
      transformed !== null &&
      transformed !== undefined &&
      typeof transformed === 'object' &&
      transformed.tag !== undefined
    ) {
      transformed.loc = node.loc
    }
    return transformed
  } else {
    unreachable()
    throw new ParseError('Cannot transform unknown type: ' + node.type)
  }
}

export function parse(x: string, context: Context): Value {
  const program = sourceParse(x, context)
  if (context.errors.length > 0) {
    throw new ParseError(context.errors[0].explain())
  }

  if (program !== undefined) {
    return transform(program)
  } else {
    unreachable()
    throw new ParseError('Invalid parse')
  }
}
