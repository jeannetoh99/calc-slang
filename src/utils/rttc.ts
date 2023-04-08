import * as es from '../ast'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { ErrorSeverity, ErrorType } from '../types'

export class TypeError extends RuntimeSourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation

  constructor(node: es.Node, public side: string, public expected: string, public got: string) {
    super(node)
  }

  public explain() {
    return `Expected ${this.expected}${this.side}, got ${this.got}.`
  }

  public elaborate() {
    return this.explain()
  }
}

export const isInt = (v: es.Literal) => v.smlType.type === 'int'
export const isReal = (v: es.Literal) => v.smlType.type === 'real'
export const isNum = (v: es.Literal) => isInt(v) || isReal(v)
export const isString = (v: es.Literal) => v.smlType.type === 'string'
export const isBool = (v: es.Literal) => v.smlType.type === 'bool'
export const isUnit = (v: es.Literal) => v.smlType.type === 'unit'

export const checkIsInt = (node: es.Node, side: string, test: es.Literal) => {
  return isInt(test) ? undefined : new TypeError(node, side, 'int', test.smlType.type)
}

export const checkIsReal = (node: es.Node, side: string, test: es.Literal) => {
  return isReal(test) ? undefined : new TypeError(node, side, 'real', test.smlType.type)
}

export const checkIsNum = (node: es.Node, side: string, test: es.Literal) => {
  return isNum(test) ? undefined : new TypeError(node, side, 'real or int', test.smlType.type)
}

export const checkIsString = (node: es.Node, side: string, test: es.Literal) => {
  return isString(test) ? undefined : new TypeError(node, side, 'string', test.smlType.type)
}

export const checkIsBool = (node: es.Node, side: string, test: es.Literal) => {
  return isBool(test) ? undefined : new TypeError(node, side, 'boolean', test.smlType.type)
}

export const checkIsUnit = (node: es.Node, side: string, test: es.Literal) => {
  return isUnit(test) ? undefined : new TypeError(node, side, 'unit', test.smlType.type)
}

export const checkIsList = (node: es.Node, side: string, test: es.Literal) => {
  return isUnit(test) ? undefined : new TypeError(node, side, 'unit', test.smlType.type)
}


export const checkIsType = (node: es.Node, side: string, test: es.Literal, type: es.LiteralType) => {
  switch (type.type) {
    case 'int':
      return checkIsInt(node, side, test)
    case 'real':
      return checkIsReal(node, side, test)
    case 'string':
      return checkIsString(node, side, test)
    case 'bool':
      return checkIsBool(node, side, test)
    case 'unit':
      return checkIsUnit(node, side, test)
  }
}
