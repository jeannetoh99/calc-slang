import * as es from '../ast'
import { Context, NodeWithInferredType } from '../types'
import { getValueDeclarationName } from '../utils/astCreator'
import { ancestor, base, FullWalkerCallback } from '../utils/walkers'

class Declaration {
  public accessedBeforeDeclaration: boolean = false
  constructor() {}
}

export function validateAndAnnotate(
  program: es.Program,
  context: Context
): NodeWithInferredType<es.Program> {
  const accessedBeforeDeclarationMap = new Map<es.Node, Map<string, Declaration>>()
  const scopeHasCallExpressionMap = new Map<es.Node, boolean>()

  function processBlock(node: es.Program) {
    const initialisedIdentifiers = new Map<string, Declaration>()
    for (const statement of node.body) {
      if (statement.type === 'ValueDeclaration') {
        initialisedIdentifiers.set(getValueDeclarationName(statement), new Declaration())
      }
    }
    scopeHasCallExpressionMap.set(node, false)
    accessedBeforeDeclarationMap.set(node, initialisedIdentifiers)
  }

  // initialise scope of variables
  ancestor(program as es.Node, {
    Program: processBlock
  })

  function validateIdentifier(id: es.Identifier, ancestors: es.Node[]) {
    const name = id.name
    const lastAncestor: es.Node = ancestors[ancestors.length - 2]
    for (let i = ancestors.length - 1; i >= 0; i--) {
      const a = ancestors[i]
      const map = accessedBeforeDeclarationMap.get(a)
      if (map?.has(name)) {
        map.get(name)!.accessedBeforeDeclaration = true
        break
      }
    }
  }
  const customWalker = {
    ...base,
    ValueDeclaration(node: es.ValueDeclaration, st: never, c: FullWalkerCallback<never>) {
      // don't visit the id
      if (node.init) {
        c(node.init, st, 'Expression')
      }
    }
  }
  ancestor(
    program,
    {
      ValueDeclaration(node: NodeWithInferredType<es.ValueDeclaration>, ancestors: es.Node[]) {
        const lastAncestor = ancestors[ancestors.length - 2]
        const name = getValueDeclarationName(node)
        const accessedBeforeDeclaration = accessedBeforeDeclarationMap
          .get(lastAncestor)!
          .get(name)!.accessedBeforeDeclaration
        node.typability = accessedBeforeDeclaration ? 'Untypable' : 'NotYetTyped'
      },
      Identifier: validateIdentifier
    },
    customWalker
  )

  // simple(program, {
  //   VariableDeclaration(node: NodeWithInferredType<es.ValueDeclaration>) {
  //     console.log(getValueDeclarationName(node) + " " + node.typability);
  //   },
  // })

  return program
}
