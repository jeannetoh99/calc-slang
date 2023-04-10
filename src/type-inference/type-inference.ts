import * as es from '../ast'
import { RealContext } from '../lang/CalcParser'
import {
  areSameType,
  FunctionType,
  ListType,
  LiteralType,
  Type,
  TypeVariable
} from '../type-inference/types'

class TypeEnv {
  constructor(public map: { [name: string]: Type } = {}) {}
  get(name: any) {
    if (name in this.map) return this.map[name]
    throw new Error('undefined symbol: ' + name)
  }
  extend(name: any, val: Type) {
    return new TypeEnv(Object.assign({}, this.map, { [name]: val }))
  }
}

export interface InferResult {
  type: Type
  constraints: Constraint[]
}

/**
 *  Infer the type of a node
 */
export function infer(node: es.Node, env: TypeEnv): InferResult {
  console.log(node)
  switch (node.type) {
    case 'Program':
    // for stmt in stmt list
    // if declaration, extend env
    // if expression, infer
    case 'LambdaExpression':
    // if pattern is identifier, extend env
    // infer expression
    case 'ListExpression':
    //
    case 'ConditionalExpression':
    // if e1 then e2 else e3;
    // new type t
    // t1, c1 = infer(e1)
    // t2, c2 = infer(e2)
    // t3, c3 = infer(e3)
    // return {type: t, constraints: [t1, bool, t = t2, t = t3, c1, c2, c3]}
    case 'ApplicationExpression':
    case 'LetExpression':
    //
    default:
      throw new Error(`Unknown node type: ${node.type}`)
  }
}

class Constraint {
  from: Type
  to: Type
  constructor(from: Type, to: Type) {
    this.from = from
    this.to = to
  }
}

class Substitution {
  before: Type
  after: Type
  constructor(before: Type, after: Type) {
    this.before = before
    this.after = after
  }
}

/*
'a -> 'b, ['a = 'b, 'a = int]
unify(['a = 'b, 'a = int]) = { ‘b / 'a } + unify(['b = int]) = { ‘b / 'a } + { int / 'b }


'a -> 'b ({ ‘b / 'a } + { int / 'b })
*/

/**
 * Unify a list of constraints
 */
function unify(constraints: Constraint[]): Substitution[] {
  const substitutions = []
  if (constraints.length === 0) return []
  else {
    const constraint = constraints[0]
    const t1 = constraint.from
    const t2 = constraint.to

    // t1 and t2 same type
    if (areSameType(t1, t2)) {
      return unify(constraints.slice(1))
    }

    // t1 is type variable
    else if (t1 instanceof TypeVariable) {
      // new sub found
      substitutions.push(new Substitution(t2, t1))

      // replace all type variable that has the same id as t1 with t2 in the remaining constraints
      // run recursively in case of function type
      const id = t1.id
      for (let j = 1 + 1; j < constraints.length; j++) {
        const m1 = constraints[j].from
        const m2 = constraints[j].to
        constraint[j].from = substitute(m1, id, t2)
        constraint[j].to = substitute(m2, id, t2)
      }
      return substitutions.concat(unify(constraints))
    }

    // previous case but swap
    else if (t2 instanceof TypeVariable) {
      const temp = constraint.from
      constraints[0].from = constraint.to
      constraints[0].to = temp
      return unify(constraints)
    }

    // both are function types
    else if (t1 instanceof FunctionType && t2 instanceof FunctionType) {
      return unify(
        constraints
          .slice(1)
          .concat(new Constraint(t1.from, t2.from))
          .concat(new Constraint(t1.to, t2.to))
      )
    }

    // both are list types
    else if (t1 instanceof ListType) {
      if (!(t2 instanceof ListType)) {
        throw new Error('Unification failed: List type expected')
      }
      return unify(constraints.slice(1).concat(new Constraint(t1.elementType, t2.elementType)))
    } else throw new Error('Unification failed')
  }
}

function substitute(variable: Type, id: Number, sub: Type): Type {
  if (variable instanceof TypeVariable) {
    if (variable.id === id) return sub
    else return variable
  } else if (variable instanceof FunctionType) {
    return new FunctionType(substitute(variable.from, id, sub), substitute(variable.to, id, sub))
  } else {
    return variable
  }
}

const GlobalEnv = new TypeEnv({})

const runningEnv = new TypeEnv({ ...GlobalEnv.map })

export function inferProgram(node: es.Node) {
  infer(node, runningEnv)
}
