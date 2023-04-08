import * as es from '../ast'
import { RuntimeSourceError } from '../errors/runtimeSourceError'
import { ErrorSeverity, ErrorType } from '../types'
import { extractType } from './stringify'

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

export const isInt = (v: es.SmlValue) => v.smlType?.type === 'int'
export const isReal = (v: es.SmlValue) => v.smlType?.type === 'real'
export const isNum = (v: es.SmlValue) => isInt(v) || isReal(v)
export const isString = (v: es.SmlValue) => v.smlType?.type === 'string'
export const isBool = (v: es.SmlValue) => v.smlType?.type === 'bool'
export const isUnit = (v: es.SmlValue) => v.smlType?.type === 'unit'
export const isList = (v: es.SmlValue) => v.smlType?.type === 'list'
export const isFunction = (v: es.SmlValue) => v.smlType?.type === 'function'
export const isTypeEqual = (a: es.Type | undefined, b: es.Type | undefined): boolean => {
  if (a === undefined) return b === undefined
  if (b === undefined) return a === undefined
  if (a.type !== b.type) return false
  if (a.type === 'list' && b.type === 'list') {
    return isTypeEqual(a.elementType, b.elementType)
  }
  if (a.type === 'function' && b.type === 'function') {
    return isTypeEqual(a.paramType, b.paramType) && isTypeEqual(a.returnType, b.returnType)
  }
  return true
}

export const checkIsTypeEqual = (node: es.Node, side: string, a: es.Type, b: es.Type) => {
  return isTypeEqual(a, b) ? undefined : new TypeError(node, side, extractType(a), extractType(b))
}

export const checkIsInt = (node: es.Node, side: string, test: es.SmlValue) => {
  return isInt(test) ? undefined : new TypeError(node, side, 'int', test.smlType?.type ?? 'unknown')
}

export const checkIsReal = (node: es.Node, side: string, test: es.SmlValue) => {
  return isReal(test)
    ? undefined
    : new TypeError(node, side, 'real', test.smlType?.type ?? 'unknown')
}

export const checkIsNum = (node: es.Node, side: string, test: es.SmlValue) => {
  return isNum(test)
    ? undefined
    : new TypeError(node, side, 'real or int', test.smlType?.type ?? 'unknown')
}

export const checkIsString = (node: es.Node, side: string, test: es.SmlValue) => {
  return isString(test)
    ? undefined
    : new TypeError(node, side, 'string', test.smlType?.type ?? 'unknown')
}

export const checkIsBool = (node: es.Node, side: string, test: es.SmlValue) => {
  return isBool(test)
    ? undefined
    : new TypeError(node, side, 'boolean', test.smlType?.type ?? 'unknown')
}

export const checkIsUnit = (node: es.Node, side: string, test: es.SmlValue) => {
  return isUnit(test)
    ? undefined
    : new TypeError(node, side, 'unit', test.smlType?.type ?? 'unknown')
}

export const checkIsList = (node: es.Node, side: string, test: es.SmlValue) => {
  return isList(test)
    ? undefined
    : new TypeError(node, side, 'list', test.smlType?.type ?? 'unknown')
}

export const checkIsFunction = (node: es.Node, side: string, test: es.SmlValue) => {
  return isFunction(test)
    ? undefined
    : new TypeError(node, side, 'function', test.smlType?.type ?? 'unknown')
}

export const checkIsType = (node: es.Node, side: string, test: es.SmlValue, type: es.Type) => {
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
    case 'list':
      return checkIsList(node, side, test)
    case 'function':
      return checkIsFunction(node, side, test)
  }
}
