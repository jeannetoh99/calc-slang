import { cloneDeep } from 'lodash'

import { Context } from '..'
import * as es from '../ast'
import { builtinFunctionTypes } from '../ec-evaluator/builtin'
import { TypeError, TypeInferenceError } from '../errors/typeErrors'
import { boolType, functionType, listType, tupleType } from './astCreator'
import { isTypeEqual } from './rttc'

class TypeEnv {
  constructor(public map: { [name: string]: es.Type } = {}) {}

  get(name: any) {
    if (name in this.map) {
      return this.map[name]
    } else {
      throw new TypeInferenceError("Unbounded name " + name)
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
  console.log('start')
  console.log(cloneDeep(node))
  const res = addConstraints(node, env)
  console.log(res)
  const subs = unify(res.constraints)
  console.log(subs)
  node.smlType.setType(substitute(res.type, subs))
  console.log(cloneDeep(node))
  console.log('end')
  return {
    type: node.smlType,
    constraints: [],
    env: res.env
  }
}

export function bind(pat: es.Pattern, type: es.Type, env: TypeEnv): TypeEnv {
  console.log("binding")
  console.log(cloneDeep(pat))
  console.log(cloneDeep(type))
  if (pat.type === 'TuplePattern' && type.type === 'tuple') {
    const tupType = type.getType() as es.TupleType
    // TODO: check no duplicate identifiers in the same pat
    for (let i = 0; i < pat.elements.length; i++) {
      env = bind(pat.elements[i], tupType.elementTypes[i], env)
    }
    return env
  } else if (pat.type === 'Identifier') {
    return env.extend(pat.name, type)
  } else if (pat.type === 'Literal') {
    // check that literal pat type and type is the same
  }
  console.log(cloneDeep(env))
  return env
}

export function addConstraints(node: es.TypedNode, env: TypeEnv): InferResult {
  switch (node.type) {
    case 'Program':
    case 'BlockStatement': {
      const constraints: Constraint[] = []
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
          new Constraint(node.smlType, res3.type, node)
        ],
        env
      }
    }
    case 'LambdaExpression': {
      let extendedEnv = bind(node.param, node.param.smlType, env)
      const resBody = infer(node.body, extendedEnv)
      node.smlType.setType(functionType(node.param.smlType, resBody.type))

      return {
        type: node.smlType,
        constraints: resBody.constraints,
        env
      }
    }
    case 'ApplicationExpression': {
      const resCallee = infer(node.callee, env)
      const resArgs = infer(node.args, env)
      const resType = functionType(resArgs.type, node.smlType)

      if (resCallee.type.type !== 'function') {
        throw new TypeInferenceError('Function application on non-callable expression', node)
      }

      const resCalleeType = resCallee.type.getType() as es.FunctionType
      const fnType = resType.getType() as es.FunctionType
      if (resCalleeType.paramType.type === 'tuple' && fnType.paramType.type === 'tuple') {
        const resCalleeParams = resCalleeType.paramType.getType() as es.TupleType
        const fnParams = fnType.paramType.getType() as es.TupleType
        resCalleeParams.elementTypes.reverse()
        fnParams.elementTypes.reverse()
      }

      const constraints = [
        ...resCallee.constraints,
        ...resArgs.constraints,
        new Constraint(resCallee.type, resType, node)
      ]

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
        constraints.push(
          new Constraint(
            node.smlType, 
            listType(inferredElements[0].type), 
            node
          )
        )
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
          new Constraint(node.smlType, inferredType, node)
        ],
        env
      }
    }
    case 'Identifier': {
      return {
        type: env.get(node.name),
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
  constructor(public subs: Map<number, es.Type> = new Map()) {}

  insert(before: es.Type, after: es.Type): Substitution {
    if (before.type !== 'variable') return this
    const varType = before.getType() as es.VariableType
    const id = varType.id
    if (this.subs.has(id) && 
      !isTypeEqual(this.subs.get(id)?.getType()!, after.getType())) {
      throw new TypeInferenceError('Clashing types found!')
    }
    this.subs.set(id, after)
    return this
  }
  concat(other: Substitution): Substitution {
    for (const [id, type] of other.subs.entries()) {
      if (this.subs.has(id) 
        && !isTypeEqual(this.subs.get(id)?.getType()!, type.getType())) {
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
  console.log('combining')
  console.log(cloneDeep(s1))
  console.log(cloneDeep(s2))
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
  console.log(cloneDeep(s3))
  return s3
}

/**
 * Checks if a type contains another type
 */
function contains(t2: es.RawType, t1: es.RawType): boolean {
  if (t1.type !== 'variable') return false

  if (t2.type === 'variable') {
    return t2.id == t1.id
  } else if (t2.type === 'function') {
    return contains(t2.paramType.getType(), t1) || contains(t2.returnType.getType(), t1)
  } else if (t2.type === 'list') {
    return contains(t2.elementType.getType(), t1)
  } else if (t2.type === 'tuple') {
    for (const t of t2.elementTypes) {
      if (contains(t.getType(), t1)) return true
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
  console.log('unify', C)
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
    if (isTypeEqual(t1.getType(), t2.getType())) {
      return unify(C.slice(1))
    }

    // If t1 is a type variable 'x and 'x does not occur in t2, then
    // let S = {t2 / 'x}, and return S; unify(C' S). In this case, we are
    // eliminating the variable 'x from the system of equations, much like
    // Gaussian elimination in solving algebraic equations.
    else if (t1.type === 'variable' && !contains(t2.getType(), t1.getType())) {
      return combine(new Substitution().insert(t1, t2), unify(C.slice(1)))
    }

    // previous case but swap
    else if (t2.type === 'variable' && !contains(t1.getType(), t2.getType())) {
      return combine(new Substitution().insert(t2, t1), unify(C.slice(1)))
    }

    // both are function types
    else if (t1.type === 'function' && t2.type === 'function') {
      let t1Type = t1.getType() as es.FunctionType
      let t2Type = t2.getType() as es.FunctionType
      return unify([
        new Constraint(t1Type.paramType, t2Type.paramType, constraint.srcNode),
        new Constraint(t1Type.returnType, t2Type.returnType, constraint.srcNode),
        ...C.slice(1)
      ])
    }

    // both are list types
    else if (t1.type === 'list' && t2.type === 'list') {
      let t1Type = t1.getType() as es.ListType
      let t2Type = t2.getType() as es.ListType
      return unify([
        new Constraint(t1Type.elementType, t2Type.elementType, constraint.srcNode),
        ...C.slice(1)
      ])
    }

    // both are tuple types
    else if (t1.type === 'tuple' && t2.type === 'tuple') {
      let t1Type = t1.getType() as es.TupleType
      let t2Type = t2.getType() as es.TupleType
      if (t1Type.elementTypes.length !== t2Type.elementTypes.length) {
        throw new TypeInferenceError(
          'Type inference error: attempting to match tuples with differing length',
          constraint.srcNode
        )
      }

      const constraints: Constraint[] = []
      for (let i = 0; i < t1Type.elementTypes.length; i++) {
        constraints.push(
          new Constraint(
            t1Type.elementTypes[i], 
            t2Type.elementTypes[i], 
            constraint.srcNode
          )
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
    let ttype = t.getType() as es.VariableType
    for (const [id, type] of S.subs.entries()) {
      if (ttype.id === id) {
        return type
      }
    }
    return t // no valid substitution found, return variable type first
  } else if (t.type === 'function') {
    let ttype = t.getType() as es.FunctionType
    return new es.Type({
      type: 'function',
      paramType: substitute(ttype.paramType, S),
      returnType: substitute(ttype.returnType, S)
    })
  } else if (t.type === 'list') {
    let ttype = t.getType() as es.ListType
    return new es.Type({
      type: 'list',
      elementType: substitute(ttype.elementType, S)
    })
  } else if (t.type === 'tuple') {
    let ttype = t.getType() as es.TupleType
    return new es.Type({
      type: 'tuple',
      elementTypes: ttype.elementTypes.map(typ => substitute(typ, S))
    })
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
