import { cloneDeep } from 'lodash'
import { Context } from '..'
import * as es from '../ast'
import { builtinFunctionTypes } from '../ec-evaluator/builtin'
import { TypeError, TypeInferenceError } from '../errors/typeErrors'
import { boolType, functionType, listType, tupleType, variableType } from './astCreator'
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
  console.log("start")
  console.log(cloneDeep(node))
  const res = addConstraints(node, env)
  console.log(res)
  const subs = unify(res.constraints)
  console.log(subs)
  node.smlType = substitute(res.type, subs)
  console.log(cloneDeep(node))
  console.log("end")
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
      let constraints : Constraint[] = []
      let type
      for (const stmt of node.body) {
        const res = infer(stmt, env)
        type = res.type
        env = res.env
      }
      return {
        type: type ?? node.smlType,
        constraints,
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
          ...res1.constraints,
          ...res2.constraints,
          ...res3.constraints,
          new Constraint(res1.type, boolType(), node),
          new Constraint(node.smlType, res2.type, node),
          new Constraint(res2.type, res3.type, node),
        ],
        env
      }
    }
    case 'ApplicationExpression': {
      const resCallee = infer(node.callee, env)
      const resArgs = infer(node.args, env)
      const fnType = functionType(resArgs.type, node.smlType)

      if (resCallee.type.type !== 'function') {
        throw new TypeInferenceError('Function application on non-callable expression', node)
      }

      if (resCallee.type.paramType.type === 'tuple' && fnType.paramType.type === 'tuple') {
        resCallee.type.paramType.elementTypes.reverse()
        fnType.paramType.elementTypes.reverse()
      }

      const constraints = [
        ...resCallee.constraints,
        ...resArgs.constraints,
        new Constraint(resCallee.type, fnType, node),
      ]

      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'ListExpression': {
      const inferredElements = node.elements.map(elem => infer(elem, env))
      let constraints = inferredElements.flatMap(res => res.constraints)

      if (inferredElements.length !== 0) {
        for (let i = 0; i < inferredElements.length - 1; i++) {
          constraints.push(
            new Constraint(inferredElements[i].type, inferredElements[i + 1].type, node)
          )
        }
        constraints.push(new Constraint(node.smlType, listType(inferredElements[0].type), node))
      }
      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'TupleExpression': {
      const inferredElements = node.elements.map(elem => infer(elem, env))
      const inferredType = tupleType(inferredElements.map(elem => elem.type))

      return {
        type: node.smlType,
        constraints: [
          ...inferredElements.flatMap(elem => elem.constraints),
          new Constraint(node.smlType, inferredType, node),
        ],
        env
      }
    }
    case 'Identifier': {
      let type = node.smlType
      if (env.get(node.name) !== undefined) {
        type = env.get(node.name)!
      }
      return {
        type,
        constraints: [],
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
    case 'LambdaExpression':
      throw new TypeInferenceError(`Not supported yet: ${node.type}`)
    default:
      throw new TypeInferenceError(`Unknown node type: ${node.type}`)
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
 
  constructor(public  subs: Map<number, es.Type> = new Map()) {}

  insert(before: es.VariableType, after: es.Type): Substitution  {
    const id = before.id
    if (this.subs.has(id) && !isTypeEqual(this.subs.get(id)!, after)) {
      throw new TypeInferenceError('Clashing types found!')
    }
    this.subs.set(id, after)
    return this
  }
  concat(other: Substitution): Substitution  {
    for (const [id, type] of other.subs.entries()) {
      if (this.subs.has(id) && !isTypeEqual(this.subs.get(id)!, type)) {
        throw new TypeInferenceError('Clashing types found!')
      }
      this.subs.set(id, type)
    }
    return this
  }
}

/**
 * Combines two substitutions s1 and s2, and returns s3 = s2.s1, where
 * s3(x) = s2(s1(x)). i.e. s1 is applied before s2 is applied.
 */
function combine(s1: Substitution, s2: Substitution): Substitution {
  console.log("combining")
  console.log(cloneDeep(s1))
  console.log(cloneDeep(s2))
  let s3 = cloneDeep(s1)
  // apply s2 on the RHS of s1
  for (const [id, t] of s3.subs.entries()) {
    s3.subs.set(id, substitute(t, s2))
  }
  // add remaining s2 mappings that are not in s1
  for (const [id, t] of s2.subs.entries()) {
    if (!s3.subs.has(id)) {
      s3.subs.set(id, t)
    }
  }
  console.log(cloneDeep(s3))
  return s3
}

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
  } else if (t2.type === 'tuple') {
    for (let t of t2.elementTypes) {
      if (contains(t, t1)) return true
    }
    return false
  } else {
    return false
  }
}

/**
 * Unify a list of constraints
 */
function unify(C: Constraint[]): Substitution {
  console.log("unify", C)
  if (C.length === 0) {
    // If C is the empty set, then unify(C) is the empty substitution.
    return new Substitution()
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
      return combine(new Substitution().insert(t1, t2), unify(C.slice(1)))
    }

    // previous case but swap
    else if (t2.type === 'variable' && !contains(t1, t2)) {
      return combine(new Substitution().insert(t2, t1), unify(C.slice(1)))
    }

    // both are function types
    else if (t1.type === 'function' && t2.type === 'function') {
      return unify(
        [
          new Constraint(t1.returnType, t2.returnType, constraint.srcNode),
          new Constraint(t1.paramType, t2.paramType, constraint.srcNode),
          ...C.slice(1),
        ]
      )
    }

    // both are list types
    else if (t1.type === 'list' && t2.type === 'list') {
      return unify(
        [
          new Constraint(t1.elementType, t2.elementType, constraint.srcNode),
          ...C.slice(1),
        ]
      )
    }

    // both are tuple types
    else if (t1.type === 'tuple' && t2.type === 'tuple') {
      if (t1.elementTypes.length !== t2.elementTypes.length) {
        throw new TypeInferenceError(
          'Type inference error: attempting to match tuples with differing length',
          constraint.srcNode
        )
      }

      const constraints: Constraint[] = []
      for (let i = 0; i < t1.elementTypes.length; i++) {
        constraints.push(
          new Constraint(t1.elementTypes[i], t2.elementTypes[i], constraint.srcNode)
        )
      }

      return unify([...constraints, ...C.slice(1)])
    } else {
      throw new TypeInferenceError('Type inference error: unification failed', constraint.srcNode)
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
