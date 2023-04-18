import * as es from '../ast'
import { isTypeEqual } from './rttc'

class TypeEnv {
  constructor(public map: { [name: string]: es.Type } = {}) {}

  get(name: any) {
    if (name in this.map) return this.map[name]
    throw new Error('undefined symbol: ' + name)
  }
  
  extend(name: any, val: es.Type) {
    return new TypeEnv(Object.assign({}, this.map, { [name]: val }))
  }
}

export interface InferResult {
  type: es.Type
  constraints: Constraint[]
}

/**
 *  Infer the type of a node
 */
export function infer(node: es.Node, env: TypeEnv): InferResult {
  switch (node.type) {
    case 'Program':
      // for stmt in stmt list
      // if declaration, extend env
      // if expression, infer
    case 'EmptyStatement':
    case 'BlockStatement':
    case 'ExpressionStatement':
    case 'ValueDeclaration':
    case 'RecValueDeclaration':
    case 'FunctionDeclaration':
    case 'LocalDeclaration':
    case 'DeclarationList':
    case 'ApplicationExpression':
    case 'ConditionalExpression':
      // if e1 then e2 else e3;
      // new type t
      // t1, c1 = infer(e1)
      // t2, c2 = infer(e2)
      // t3, c3 = infer(e3)
      // return {type: t, constraints: [t1, bool, t = t2, t = t3, c1, c2, c3]}
    case 'LambdaExpression':
      // if pattern is identifier, extend env
      // infer expression
    case 'LetExpression':
      //
    case 'SequenceExpression':
      //
    case 'ListExpression':
      //
    case 'Identifier':
      //
    case 'Literal':
      return {
        type: node.smlType,
        constraints: [],
      }
    default:
      throw new Error(`Unknown node type: ${node.type}`)
  }
}

class Constraint {
  from: es.Type
  to: es.Type
  constructor(from: es.Type, to: es.Type) {
    this.from = from
    this.to = to
  }
}

class Substitution {
  before: es.VariableType
  after: es.Type
  constructor(before: es.VariableType, after: es.Type) {
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
 * Checks if a type contains another type
 */
function contains(t2: es.Type, t1: es.VariableType): boolean {
  if (t2.type === 'variable') {
    return t2.id == t1.id;
  } else if (t2.type === 'function') {
    return contains(t2.paramType, t1) || contains(t2.returnType, t1);
  } else if (t2.type === 'list') {
    return contains(t2.elementType, t1);
  } else {
    return false;
  }
}
 
/**
 * Unify a list of constraints
 */
function unify(C: Constraint[]): Substitution[] {
  const substitutions = []
  
  if (C.length === 0) {
    // If C is the empty set, then unify(C) is the empty substitution.
    return []
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
      substitutions.push(new Substitution(t1, t2))
      return substitutions.concat(unify(C.slice(1)))
    }

    // previous case but swap
    else if (t2.type === 'variable' && !contains(t1, t2)) {
      substitutions.push(new Substitution(t2, t1))
      
      return substitutions.concat(unify(C.slice(1)))
    }

    // both are function types
    else if (t1.type === 'function' && t2.type === 'function') {
      return unify(
        C
          .slice(1)
          .concat(new Constraint(t1.paramType, t2.paramType))
          .concat(new Constraint(t1.returnType, t2.returnType))
      )
    }

    // both are list types
    else if (t1.type === 'list') {
      if (t2.type !== 'list') {
        throw new Error('Unification failed: List type expected')
      }
      return unify(C.slice(1)
        .concat(new Constraint(t1.elementType, t2.elementType)))
    } else throw new Error('Unification failed')
  }
}

function substitute(t: es.Type, S: Substitution[]) : es.Type {
  if (t.type === 'variable') {
    for (let sub of S) {
      if (t.id === sub.before.id) {
        return sub.after
      }
    }
    return t // no valid substitution found, return variable type first
  } else if (t.type === 'function') {
    return {
      type: 'function',
      paramType: substitute(t.paramType, S),
      returnType: substitute(t.returnType, S),
    }
  } else if (t.type === 'list') {
    return {
      type: 'list',
      elementType: substitute(t.elementType, S),
    }
  } else {
    return t
  }
}

const GlobalEnv = new TypeEnv({})

const runningEnv = new TypeEnv({ ...GlobalEnv.map })

export function inferProgram(node: es.Program) {
  let res = infer(node, runningEnv)
  let subs = unify(res.constraints)
  node.smlType = substitute(res.type, subs)
}
