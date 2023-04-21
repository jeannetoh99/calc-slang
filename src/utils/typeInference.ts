import { cloneDeep } from 'lodash'

import { Context } from '..'
import * as es from '../ast'
import { builtinFunctionTypes } from '../ec-evaluator/builtin'
import { TypeError, TypeInferenceError } from '../errors/typeErrors'
import { boolType, functionType, listType, tupleType, variableType } from './astCreator'

export const isType = (v: es.SmlValue, t: es.TypeType) => v.smlType?.type === t

export const isTypeEqual = (a: es.Type, b: es.Type): boolean => {
  if (a.type !== b.type) {
    return false
  } else if (a.type === 'variable' && b.type === 'variable') {
    return a.id === b.id
  } else if (a.type === 'list' && b.type === 'list') {
    return isTypeEqual(a.elementType, b.elementType)
  } else if (a.type === 'function' && b.type === 'function') {
    return isTypeEqual(a.paramType, b.paramType) && isTypeEqual(a.returnType, b.returnType)
  } else if (a.type === 'tuple' && b.type === 'tuple') {
    if (a.elementTypes.length !== b.elementTypes.length) return false
    for (let i = 0; i < a.elementTypes.length; i++) {
      if (!isTypeEqual(a.elementTypes[i], b.elementTypes[i])) return false
    }
    return true
  }
  return true
}

class TypeEnv {
  constructor(public map: { [name: string]: es.Type } = {}) {}

  get(name: any) {
    if (name in this.map) {
      return this.map[name]
    } else {
      throw new TypeInferenceError('Unbounded name ' + name)
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
export function inferUnifySub(node: es.TypedNode, env: TypeEnv): InferResult {
  const res = infer(node, env)
  const subs = unify(res.constraints)
  node.smlType = substitute(res.type, subs)
  return {
    type: node.smlType,
    constraints: [],
    env: res.env
  }
}

export function bind(pat: es.Pattern, type: es.Type, env: TypeEnv): TypeEnv {
  console.log('binding')
  console.log(pat)
  console.log(type)
  if (pat.type === 'TuplePattern' && type.type === 'tuple') {
    // TODO: check no duplicate identifiers in the same pat
    if (pat.elements.length != type.elementTypes.length) {
      throw new TypeInferenceError('Mismatched lengths in pattern matching')
    }
    for (let i = 0; i < pat.elements.length; i++) {
      env = bind(pat.elements[i], type.elementTypes[i], env)
    }
  } else if (pat.type === 'Identifier') {
    env = env.extend(pat.name, type)
  } else if (pat.type === 'Wildcard') {
    env = env.extend('_', type)
  } else if (pat.type === 'Literal') {
    // check that literal pat type and type is the same
  }
  return env
}

export function infer(node: es.Node, env: TypeEnv): InferResult {
  console.log(node)
  switch (node.type) {
    case 'Program':
    case 'BlockStatement': {
      const types = []
      for (const stmt of node.body) {
        const res = inferUnifySub(stmt, env)
        types.push(cloneDeep(res.type))
        switch (stmt.type) {
          case 'ValueDeclaration':
          case 'RecValueDeclaration':
          case 'FunctionDeclaration':
            env = bind(stmt.pat, res.type, env)
          case 'DeclarationList':
          case 'LocalDeclaration':
          // TODO
          case 'EmptyStatement':
          // No binding required
          case 'BlockStatement':
          case 'ExpressionStatement':
          // Not possible
        }
      }
      return {
        type: tupleType(types),
        constraints: [],
        env
      }
    }
    case 'ExpressionStatement': {
      // Will not reach here since all expression statement are implictly
      // casted to ValueDeclaration
      return infer(node.expression, env)
    }
    case 'ValueDeclaration':
    case 'RecValueDeclaration': {
      const initRes = infer(node.init, env)
      const patRes = infer(node.pat, env)

      const constraints = [
        ...initRes.constraints,
        ...patRes.constraints,
        new Constraint(initRes.type, patRes.type, node)
      ]

      console.log('ValueDeclaration', constraints)

      return {
        type: initRes.type,
        constraints,
        env
      }
    }
    case 'FunctionDeclaration': {
      const resPat = infer(node.pat, env)
      let extendedEnv = bind(node.param, node.param.smlType, env)
      extendedEnv = bind(node.pat, node.smlType, extendedEnv)
      const resBody = infer(node.body, extendedEnv)

      const constraints = [
        ...resBody.constraints,
        ...resPat.constraints,
        new Constraint(resBody.type, resPat.type, node)
      ]

      if (node.body.annotatedType) {
        constraints.push(new Constraint(node.body.smlType, node.body.annotatedType, node))
      }

      console.log('FunctionDeclaration', constraints)

      return {
        type: functionType(node.param.smlType, resBody.type),
        constraints: [
          ...resBody.constraints,
          ...resPat.constraints,
          new Constraint(resBody.type, resPat.type, node)
        ],
        env
      }
    }
    case 'LocalDeclaration':
    case 'DeclarationList': {
      // TODO
      return {
        type: node.smlType,
        constraints: [],
        env
      }
    }
    case 'ConditionalExpression': {
      const res1 = infer(node.pred, env)
      const res2 = infer(node.cons, env)
      const res3 = infer(node.alt, env)

      const constraints = [
        ...res1.constraints,
        ...res2.constraints,
        ...res3.constraints,
        new Constraint(res1.type, boolType(), node),
        new Constraint(node.smlType, res2.type, node),
        new Constraint(node.smlType, res3.type, node)
      ]

      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('ConditionalExpression', constraints)

      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'LambdaExpression': {
      let extendedEnv = bind(node.param, node.param.smlType, env)
      if (node.recursiveId) {
        extendedEnv = bind(node.recursiveId, node.smlType, extendedEnv)
      }
      const resBody = infer(node.body, extendedEnv)
      const constraints = [...resBody.constraints]

      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('LambdaExpression', constraints)

      return {
        type: functionType(node.param.smlType, resBody.type),
        constraints,
        env
      }
    }
    case 'ApplicationExpression': {
      const resCallee = infer(node.callee, env)
      const resArgs = infer(node.args, env)
      const fnType = functionType(resArgs.type, node.smlType)

      const constraints = [
        ...resCallee.constraints,
        ...resArgs.constraints,
        new Constraint(resCallee.type, fnType, node)
      ]

      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('ApplicationExpression', constraints)

      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'ListExpression': {
      const inferredElements = node.elements.map(elem => infer(elem, env))
      const constraints = inferredElements.flatMap(res => res.constraints)

      if (inferredElements.length !== 0) {
        for (let i = 0; i < inferredElements.length - 1; i++) {
          constraints.push(
            new Constraint(inferredElements[i].type, inferredElements[i + 1].type, node)
          )
        }
      }

      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('ListExpression', constraints)

      return {
        type: listType(inferredElements[0].type),
        constraints,
        env
      }
    }
    case 'TupleExpression': {
      const inferredElements = node.elements.map(elem => infer(elem, env))
      const inferredType = tupleType(inferredElements.map(elem => elem.type))
      const constraints = [...inferredElements.flatMap(elem => elem.constraints)]

      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('TupleExpression', constraints)

      return {
        type: inferredType,
        constraints,
        env
      }
    }
    case 'TuplePattern': {
      const inferredPats = node.elements.map(pat => infer(pat, env))
      const inferredType = tupleType(inferredPats.map(pat => pat.type))
      const constraints = [
        ...inferredPats.flatMap(pat => pat.constraints),
        new Constraint(node.smlType, inferredType, node)
      ]

      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('TuplePattern', constraints)

      return {
        type: node.smlType,
        constraints,
        env
      }
    }
    case 'Wildcard': {
      const constraints: Constraint[] = []
      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('Wildcard', constraints)

      return {
        type: env.get('_'),
        constraints,
        env
      }
    }
    case 'Identifier': {
      const constraints = []
      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('Identifier', constraints)

      return {
        type: node.isPat ? node.smlType : env.get(node.name),
        constraints,
        env
      }
    }
    case 'LetExpression':
    case 'SequenceExpression':
    // TODO
    case 'Literal':
      const constraints = []
      if (node.annotatedType) {
        constraints.push(new Constraint(node.smlType, node.annotatedType, node))
      }

      console.log('Literal', constraints)

      return {
        type: node.smlType,
        constraints,
        env
      }
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
  constructor(public subs: Map<number, es.Type> = new Map()) {}

  insert(before: es.VariableType, after: es.Type): Substitution {
    const id = before.id
    if (this.subs.has(id) && !isTypeEqual(this.subs.get(id)!, after)) {
      throw new TypeInferenceError('Clashing types found!')
    }
    this.subs.set(id, after)
    return this
  }
  concat(other: Substitution): Substitution {
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
  const s3 = cloneDeep(s1)
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
  return s3
}

function apply(S: Substitution, C: Constraint[]) {
  for (const constraint of C) {
    constraint.from = substitute(constraint.from, S)
    constraint.to = substitute(constraint.to, S)
  }
  return C
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
    for (const t of t2.elementTypes) {
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
      const S = new Substitution().insert(t1, t2)
      return combine(S, unify(apply(S, C.slice(1))))
    }

    // previous case but swap
    else if (t2.type === 'variable' && !contains(t1, t2)) {
      const S = new Substitution().insert(t2, t1)
      return combine(S, unify(apply(S, C.slice(1))))
    }

    // both are function types
    else if (t1.type === 'function' && t2.type === 'function') {
      return unify([
        new Constraint(t1.returnType, t2.returnType, constraint.srcNode),
        new Constraint(t1.paramType, t2.paramType, constraint.srcNode),
        ...C.slice(1)
      ])
    }

    // both are list types
    else if (t1.type === 'list' && t2.type === 'list') {
      return unify([
        new Constraint(t1.elementType, t2.elementType, constraint.srcNode),
        ...C.slice(1)
      ])
    }

    // both are tuple types
    else if (t1.type === 'tuple' && t2.type === 'tuple') {
      if (t1.elementTypes.length !== t2.elementTypes.length) {
        console.log(t1, t2)
        throw new TypeInferenceError(
          'Attempting to match tuples with differing length',
          constraint.srcNode
        )
      }

      const constraints: Constraint[] = []
      for (let i = 0; i < t1.elementTypes.length; i++) {
        constraints.push(new Constraint(t1.elementTypes[i], t2.elementTypes[i], constraint.srcNode))
      }

      return unify([...constraints, ...C.slice(1)])
    } else {
      throw new TypeInferenceError('Unification failed', constraint.srcNode)
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

export function inferProgram(node: es.Program, context: Context): es.Type[] {
  try {
    const res = inferUnifySub(node, runningEnv)
    console.log(res)
    return (res.type as es.TupleType).elementTypes
  } catch (error) {
    if (error instanceof TypeError) {
      context.errors.push(error)
    } else {
      throw error
    }
    return []
  }
}
