import { Context } from '..'
import * as es from '../ast'
import { builtinFunctionTypes } from '../ec-evaluator/builtin'
import { TypeError, TypeInferenceError } from '../errors/typeErrors'
import { boolType, tupleType } from './astCreator'
import { isTypeEqual } from './rttc'

class TypeEnv {
  constructor(public map: { [name: string]: es.Type } = {}) {}

  get(name: any) {
    if (name in this.map) {
      return this.map[name]
    } else {
      return undefined
    }
  }

  extend(name: any, val: es.Type) {
    return new TypeEnv(Object.assign({}, this.map, { [name]: val }))
  }
}

export interface InferResult {
  type: es.Type
  constraints: Constraint[]
  env: TypeEnv
}

/**
 *  Infer the type of a node
 */
export function infer(node: es.TypedNode, env: TypeEnv): InferResult {
  console.log(node)
  const res = addConstraints(node, env)
  console.log(res)
  const subs = unify(res.constraints)
  console.log(subs)
  node.smlType = substitute(res.type, subs)
  return {
    type: node.smlType,
    constraints: [],
    env: res.env
  }
}

export function bind(pat: es.Pattern, type: es.Type, env: TypeEnv): TypeEnv {
  if (pat.type === 'TuplePattern' && type.type === 'tuple') {
    // TODO: check no duplicate identifiers in the same pat
    for (let i = 0; i < pat.elements.length; i++) {
      env = bind(pat.elements[i], type.elementTypes[i], env)
    }
    return env
  } else if (pat.type === 'Identifier') {
    return env.extend(pat.name, type)
  } else if (pat.type === 'Literal') {
    // check that literal pat type and type is the same
  }
  return env
}

export function addConstraints(node: es.Node, env: TypeEnv): InferResult {
  switch (node.type) {
    case 'Program':
    case 'BlockStatement': {
      let type
      for (const stmt of node.body) {
        const res = infer(stmt, env)
        type = res.type
        env = res.env
      }
      return {
        type: type ?? node.smlType,
        constraints: [],
        env
      }
    }
    case 'ExpressionStatement': {
      const res = infer(node.expression, env)
      return {
        type: res.type,
        constraints: [],
        env: res.env
      }
    }
    case 'ValueDeclaration':
    case 'RecValueDeclaration': {
      const res = infer(node.init, env)
      return {
        type: res.type,
        constraints: [],
        env: bind(node.pat, res.type, res.env)
      }
    }
    case 'ConditionalExpression': {
      const res1 = infer(node.pred, env)
      const res2 = infer(node.cons, env)
      const res3 = infer(node.alt, env)
      return {
        type: node.smlType,
        constraints: [
          new Constraint(res1.type, boolType(), node),
          new Constraint(node.smlType, res2.type, node),
          new Constraint(node.smlType, res3.type, node),
          ...res1.constraints,
          ...res2.constraints,
          ...res3.constraints
        ],
        env
      }
    }
    case 'ApplicationExpression': {
      const resCallee = infer(node.callee, env)
      const resArgs = node.args.map(arg => infer(arg, env))
      const resArgType = tupleType(resArgs.map(arg => arg.type))

      if (resCallee.type.type !== 'function') {
        throw new TypeInferenceError(
          "Function application on non-callable expression",
          node
        )
      }

      let constraints = [
        new Constraint(node.smlType, resCallee.type.returnType, node),
        new Constraint(resArgType, resCallee.type.paramType, node),
        ...resCallee.constraints,
        ...resArgs.flatMap(res => res.constraints)
      ]

      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'ListExpression': {
      const constraints: Constraint[] = []
      if (node.elements.length !== 0) {
        constraints.push(
          new Constraint(node.smlType.elementType, node.elements[0].smlType, node)
        )
        for (let i = 0; i < node.elements.length - 1; i++) {
          constraints.push(
            new Constraint(node.elements[i].smlType, node.elements[i + 1].smlType, node)
          )
        }
      }
      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'TupleExpression': {
      const constraints: Constraint[] = []
      for (let i = 0; i < node.elements.length; i++) {
        constraints.push(
          new Constraint(node.smlType.elementTypes[i], node.elements[i].smlType, node)
        )
      }
      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'Identifier': {
      let constraints : Constraint[] = []
      if (env.get(node.name) !== undefined) {
        constraints.push(
          new Constraint(node.smlType, env.get(node.name)!, node)
        )
      }
      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'Literal':
      return {
        type: node.smlType,
        constraints: [],
        env
      }
    case 'FunctionDeclaration':
    case 'LocalDeclaration':
    case 'DeclarationList':
    case 'LetExpression':
    case 'SequenceExpression':
      throw new Error(`Not supported yet: ${node.type}`)
    default:
      throw new Error(`Unknown node type: ${node.type}`)
  }
}

class Constraint {
  srcNode: es.Node
  from: es.Type
  to: es.Type
  constructor(from: es.Type, to: es.Type, srcNode: es.Node) {
    this.from = from
    this.to = to
  }
}

class Substitution {
  constructor(public subs: Map<number, es.Type>) {}
  insert(before: es.VariableType, after: es.Type) {
    const id = before.id
    if (id in this.subs && !isTypeEqual(this.subs[id], after)) {
      throw new TypeInferenceError("Clashing types found!")
    }
    this.subs.set(id, after)
    return this
  }
  concat(other: Substitution) {
    for (let [id, type] of other.subs.entries()) {
      if (id in this.subs && !isTypeEqual(this.subs[id], type)) {
        throw new TypeInferenceError("Clashing types found!")
      }
      this.subs.set(id, type)
    }
    return this
  }
}

/*
'a -> 'b, ['a = 'b, 'a = int]
unify(['a = 'b, 'a = int]) = { ‘b / 'a } + unify(['b = int]) = { ‘b / 'a } + { int / 'b }


'a -> 'b ({ ‘b / 'a } + { int / 'b })
*/

/**
 * Checks if a type contains another type
 */
function contains(t2: es.Type, t1: es.VariableType): boolean {
  if (t2.type === 'variable') {
    return t2.id == t1.id
  } else if (t2.type === 'function') {
    return contains(t2.paramType, t1) || contains(t2.returnType, t1)
  } else if (t2.type === 'list') {
    return contains(t2.elementType, t1)
  } else {
    return false
  }
}

/**
 * Unify a list of constraints
 */
function unify(C: Constraint[]): Substitution {
  const substitution = new Substitution(new Map())

  if (C.length === 0) {
    // If C is the empty set, then unify(C) is the empty substitution.
    return substitution
  } else {
    // If C contains at least one constraint t1 = t2
    // and possibly some other constraints C'.

    const constraint = C[0]
    const t1 = constraint.from
    const t2 = constraint.to

    // If t1 and t2 are both the same simple type — i.e. both the same type
    // variable 'x, or both int or both bool — then return unify(C'). In this
    // case, the constraint contained no useful information, so we’re tossing
    // it out and continuing.
    if (isTypeEqual(t1, t2)) {
      return unify(C.slice(1))
    }

    // If t1 is a type variable 'x and 'x does not occur in t2, then
    // let S = {t2 / 'x}, and return S; unify(C' S). In this case, we are
    // eliminating the variable 'x from the system of equations, much like
    // Gaussian elimination in solving algebraic equations.
    else if (t1.type === 'variable' && !contains(t2, t1)) {
      return substitution
        .insert(t1, t2)
        .concat(unify(C.slice(1)))
    }

    // previous case but swap
    else if (t2.type === 'variable' && !contains(t1, t2)) {
      return substitution
        .insert(t2, t1)
        .concat(unify(C.slice(1)))
    }

    // both are function types
    else if (t1.type === 'function' && t2.type === 'function') {
      return unify(
        C.slice(1)
          .concat(new Constraint(t1.paramType, t2.paramType, constraint.srcNode))
          .concat(new Constraint(t1.returnType, t2.returnType, constraint.srcNode))
      )
    }

    // both are list types
    else if (t1.type === 'list' && t2.type === 'list') {
      return unify(
        C.slice(1).concat(new Constraint(t1.elementType, t2.elementType, constraint.srcNode))
      )
    } 
    
    // both are tuple types
    else if (t1.type === 'tuple' && t2.type === 'tuple') {
      if (t1.elementTypes.length !== t2.elementTypes.length) {
        throw new TypeInferenceError(
          'Type inference error: attempting to match tuples with differing length', 
          constraint.srcNode)
      }

      let constraints : Constraint[] = []
      for (let i=0; i<t1.elementTypes.length; i++) {
        constraints.push(
          new Constraint(t1.elementTypes[i], t2.elementTypes[i], constraint.srcNode)
        )
      }

      return unify(
        C.slice(1).concat(constraints)
      )
    } 
    
    else {
      throw new TypeInferenceError(
        'Type inference error: unification failed', 
        constraint.srcNode)
    }
  }
}

function substitute(t: es.Type, S: Substitution): es.Type {
  if (t.type === 'variable') {
    for (const [id, type] of S.subs.entries()) {
      if (t.id === id) {
        return type
      }
    }
    return t // no valid substitution found, return variable type first
  } else if (t.type === 'function') {
    return {
      type: 'function',
      paramType: substitute(t.paramType, S),
      returnType: substitute(t.returnType, S)
    }
  } else if (t.type === 'list') {
    return {
      type: 'list',
      elementType: substitute(t.elementType, S)
    }
  } else if (t.type === 'tuple') {
    return {
      type: 'tuple',
      elementTypes: t.elementTypes.map(typ => substitute(typ, S))
    }
  } else {
    return t
  }
}

const GlobalEnv = new TypeEnv({ ...builtinFunctionTypes })

const runningEnv = new TypeEnv({ ...GlobalEnv.map })

export function inferProgram(node: es.Program, context: Context) {
  try {
    infer(node, runningEnv)
  } catch (error) {
    if (error instanceof TypeError) {
      context.errors.push(error)
    } else {
      throw error
    }
  }
}
