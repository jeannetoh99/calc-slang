import { ConstAssignment } from '../errors/errors'
import * as es from '../estree'
import { Context, NodeWithInferredType } from '../types'
import { ancestor } from '../utils/walkers'

class Declaration {
  public accessedBeforeDeclaration: boolean = false
  constructor(public isConstant: boolean) {}
}

export function validateAndAnnotate(
  program: es.Program,
  context: Context
): NodeWithInferredType<es.Program> {
  const accessedBeforeDeclarationMap = new Map<es.Node, Map<string, Declaration>>()
  const scopeHasCallExpressionMap = new Map<es.Node, boolean>()
  function processBlock(node: es.Program) {
    const initialisedIdentifiers = new Map<string, Declaration>()
    scopeHasCallExpressionMap.set(node, false)
    accessedBeforeDeclarationMap.set(node, initialisedIdentifiers)
  }

  // initialise scope of variables
  ancestor(program as es.Node, {
    Program: processBlock,
    BlockStatement: processBlock
  })

  function validateIdentifier(id: es.Identifier, ancestors: es.Node[]) {
    const name = id.name
    const lastAncestor: es.Node = ancestors[ancestors.length - 2]
    for (let i = ancestors.length - 1; i >= 0; i--) {
      const a = ancestors[i]
      const map = accessedBeforeDeclarationMap.get(a)
      if (map?.has(name)) {
        map.get(name)!.accessedBeforeDeclaration = true
        if (lastAncestor.type === 'AssignmentExpression' && lastAncestor.left === id) {
          if (map.get(name)!.isConstant) {
            context.errors.push(new ConstAssignment(lastAncestor, name))
          }
        }
        break
      }
    }
  }
  ancestor(
    program,
    {
      Identifier: validateIdentifier,
      Pattern(node: es.Pattern, ancestors: es.Node[]) {
        if (node.type === 'Identifier') {
          validateIdentifier(node, ancestors)
        }
      },
      CallExpression(call: es.CallExpression, ancestors: es.Node[]) {
        for (let i = ancestors.length - 1; i >= 0; i--) {
          const a = ancestors[i]
          if (scopeHasCallExpressionMap.has(a)) {
            scopeHasCallExpressionMap.set(a, true)
            break
          }
        }
      }
    },
  )

  /*
  simple(program, {
    VariableDeclaration(node: TypeAnnotatedNode<es.VariableDeclaration>) {
      console.log(getVariableDecarationName(node) + " " + node.typability);
    },
    FunctionDeclaration(node: TypeAnnotatedNode<es.FunctionDeclaration>) {
      console.log(node.id!.name + " " + node.typability);
    }
  })

   */
  return program
}
