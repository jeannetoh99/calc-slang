import * as es from '../ast'
import { UNKNOWN_LOCATION } from '../constants'
import { ErrorSeverity, ErrorType, SourceError } from '../types'

export class TypeError implements SourceError {
  public type = ErrorType.TYPE
  public severity = ErrorSeverity.ERROR
  public location: es.SourceLocation

  constructor(node?: es.Node) {
    this.location = node ? node.loc! : UNKNOWN_LOCATION
  }

  public explain() {
    return ''
  }

  public elaborate() {
    return this.explain()
  }
}

export class TypeInferenceError extends TypeError {
  public type = ErrorType.TYPE
  public severity = ErrorSeverity.ERROR

  constructor(public errorMsg: string, public node?: es.Node) {
    super(node)
  }

  public explain() {
    return this.errorMsg
  }

  public elaborate() {
    return 'Type inference error'
  }
}
