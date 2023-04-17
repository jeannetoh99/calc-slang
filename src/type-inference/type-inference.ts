import * as es from '../ast'
import {
FunctionType,
ListType,
LiteralType,
sameType,
Type,
TypeVariable,
} from '../ast'

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
    // infer all declarations
    // update pattern type in env
    case 'LambdaExpression':
    // infer expression
    // update pattern type in env
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
 * Unify a list of constraints and return a list of substitutions
 */
function unify(constraints: Constraint[]): Substitution[] {
  const substitutions: Substitution[] = []
  if (constraints.length === 0) return substitutions
  else {
    const constraint = constraints[0]
    const t1 = constraint.from
    const t2 = constraint.to

    // t1 and t2 same type
    if (sameType(t1, t2)) {
      return unify(constraints.slice(1))
    }

    // t1 is type variable
    else if (t1.type === 'typeVariable') {  
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
    else if (t2.type === 'typeVariable') {
      const temp = constraint.from
      constraints[0].from = constraint.to
      constraints[0].to = temp
      return unify(constraints)
    }

    // both are function types
    else if (t1.type === 'function' && t2.type === 'function') {
        const newConstraints = []
        if (t1.paramType !== null) {
            if (t2.paramType === null) {
                throw new Error('Unification failed: Function param type expected')
            }
          newConstraints.push(new Constraint(t1.paramType!, t2.paramType!))
        }
        if (t1.returnType !== null) {
            if (t2.returnType === null) {
                throw new Error('Unification failed: Function return type expected')
            }
            newConstraints.push(new Constraint(t1.returnType!, t2.returnType!))
        }
      return unify(
        constraints
          .slice(1)
          .concat(newConstraints)
      )
    }

    // both are list types
    else if (t1.type === 'list') {
      if (t2.type !== 'list') {
        throw new Error('Unification failed: List type expected')
      }
      if (t1.elementType === null) {
        if (t2.elementType !== null) {
          throw new Error('Unification failed: Empty list expected')
        }
      } else if (t2.elementType === null) {
        throw new Error('Unification failed: Non-empty list expected')
      } else {
      return unify(constraints.slice(1).concat(new Constraint(t1.elementType!, t2.elementType!)))
      }

    } else throw new Error('Unification failed')
  }
}

/**
 * Substitute a type variable with a certian id with a specific type
 * or substitute a function that includes the type variable
 */
function substitute(variable: Type, id: Number, sub: Type): Type {
  if (variable.type === 'typeVariable') {
    if (variable.id === id) return sub
    else return variable
  } else if (variable.type === 'function') {
    if (variable.paramType !== null) {
      variable.paramType = substitute(variable.paramType!, id, sub)
    }
    if (variable.returnType !== null) {
      variable.returnType = substitute(variable.returnType!, id, sub)
    }
    return {type: 'function', paramType: variable.paramType, returnType: variable.returnType}
  } else {
    return variable
  }
}

const GlobalEnv = new TypeEnv({})

const runningEnv = new TypeEnv({ ...GlobalEnv.map })

export function inferProgram(node: es.Node) {
  infer(node, runningEnv)
}
