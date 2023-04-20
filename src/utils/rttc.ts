import * as es from '../ast'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { ErrorSeverity, ErrorType } from '../types'
import { extractType } from './stringify'

export class TypeError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation

  constructor(node: es.TypedNode, public side: string, public expected: string, public got: string) {
    super(node)
  }

  public explain() {
    return `Expected ${this.expected}${this.side}, got ${this.got}.`
  }

  public elaborate() {
    return this.explain()
  }
}

export const isInt = (v: es.SmlValue) => v.smlType?.type === 'int'
export const isReal = (v: es.SmlValue) => v.smlType?.type === 'real'
export const isNum = (v: es.SmlValue) => isInt(v) || isReal(v)
export const isString = (v: es.SmlValue) => v.smlType?.type === 'string'
export const isBool = (v: es.SmlValue) => v.smlType?.type === 'bool'
export const isUnit = (v: es.SmlValue) => v.smlType?.type === 'unit'
export const isList = (v: es.SmlValue) => v.smlType?.type === 'list'
export const isFunction = (v: es.SmlValue) => v.smlType?.type === 'function'
export const isTuple = (v: es.SmlValue) => v.smlType?.type === 'tuple'
export const isType = (v: es.SmlValue, t: es.TypeType) => v.smlType?.type === t

export const isTypeEqual = (a: es.RawType, b: es.RawType): boolean => {
  if (a.type !== b.type) {
    return false
  } else if (a.type === 'variable' && b.type === 'variable') {
    return a.id === b.id
  } else if (a.type === 'list' && b.type === 'list') {
    return isTypeEqual(a.elementType.getType(), b.elementType.getType())
  } else if (a.type === 'function' && b.type === 'function') {
    return isTypeEqual(a.paramType.getType(), b.paramType.getType()) 
      && isTypeEqual(a.returnType.getType(), b.returnType.getType())
  } else if (a.type === 'tuple' && b.type === 'tuple') {
    if (a.elementTypes.length !== b.elementTypes.length) {
      return false
    }
    for (let i = 0; i < a.elementTypes.length; i++) {
      if (!isTypeEqual(a.elementTypes[i].getType(), b.elementTypes[i].getType())) {
        return false
      }
    }
    return true
  }
  return true
}