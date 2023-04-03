/* tslint:disable: max-classes-per-file */
/* tslint:disable:max-line-length */
import { baseGenerator, generate } from 'astring'

import * as es from '../ast'
import { ErrorSeverity, ErrorType, SourceError, Value } from '../types'
import { stringify } from '../utils/stringify'
import { RuntimeSourceError } from './runtimeSourceError'

export class InterruptedError extends RuntimeSourceError {
  constructor(node: es.Node) {
    super(node)
  }

  public explain() {
    return 'Execution aborted by user.'
  }

  public elaborate() {
    return 'TODO'
  }
}

export class ExceptionError implements SourceError {
  public type = ErrorType.RUNTIME
  public severity = ErrorSeverity.ERROR

  constructor(public error: Error, public location: es.SourceLocation) {}

  public explain() {
    return this.error.toString()
  }

  public elaborate() {
    return 'TODO'
  }
}

export class MaximumStackLimitExceeded extends RuntimeSourceError {
  public static MAX_CALLS_TO_SHOW = 3

  private customGenerator = {
    ...baseGenerator,
    CallExpression(node: any, state: any) {
      state.write(generate(node.callee))
      state.write('(')
      const argsRepr = node.arguments.map((arg: any) => stringify(arg.value))
      state.write(argsRepr.join(', '))
      state.write(')')
    }
  }

  constructor(node: es.Node, private calls: es.ApplicationExpression[]) {
    super(node)
  }

  public explain() {
    const repr = (call: es.ApplicationExpression) => generate(call, { generator: this.customGenerator })
    return (
      'Maximum call stack size exceeded\n  ' + this.calls.map(call => repr(call) + '..').join('  ')
    )
  }

  public elaborate() {
    return 'TODO'
  }
}

export class CallingNonFunctionValue extends RuntimeSourceError {
  constructor(private callee: Value, private node: es.Node) {
    super(node)
  }

  public explain() {
    return `Calling non-function value ${stringify(this.callee)}.`
  }

  public elaborate() {
    const calleeVal = this.callee
    const calleeStr = stringify(calleeVal)
    let argStr = ''

    const callArgs = (this.node as es.ApplicationExpression).args

    argStr = callArgs.map(generate).join(', ')

    const elabStr = `Because ${calleeStr} is not a function, you cannot run ${calleeStr}(${argStr}).`
    const multStr = `If you were planning to perform multiplication by ${calleeStr}, you need to use the * operator.`

    if (Number.isFinite(calleeVal)) {
      return `${elabStr} ${multStr}`
    } else {
      return elabStr
    }
  }
}

export class UndefinedVariable extends RuntimeSourceError {
  constructor(public name: string, node: es.Node) {
    super(node)
  }

  public explain() {
    return `Name ${this.name} not declared.`
  }

  public elaborate() {
    return `Before you can read the value of ${this.name}, you need to declare it as a variable or a constant. You can do this using the let or const keywords.`
  }
}

export class UnassignedVariable extends RuntimeSourceError {
  constructor(public name: string, node: es.Node) {
    super(node)
  }

  public explain() {
    return `Name ${this.name} declared later in current scope but not yet assigned`
  }

  public elaborate() {
    return `If you're trying to access the value of ${this.name} from an outer scope, please rename the inner ${this.name}. An easy way to avoid this issue in future would be to avoid declaring any variables or constants with the name ${this.name} in the same scope.`
  }
}

export class ReservedKeywordVariable extends RuntimeSourceError {
  constructor(private node: es.Node, private name: string, private reservedType: string) {
    super(node)
  }

  public explain() {
    return `Declaring name that clashes with reserved keyword ${this.name}.`
  }

  public elaborate() {
    return `${this.name} keyword is reserved for ${this.reservedType}.`
  }
}

export class InvalidNumberOfArguments extends RuntimeSourceError {
  private calleeStr: string

  constructor(node: es.Node, private expected: number, private got: number) {
    super(node)
    this.calleeStr = generate((node as es.ApplicationExpression).callee)
  }

  public explain() {
    return `Expected ${this.expected} arguments, but got ${this.got}.`
  }

  public elaborate() {
    const calleeStr = this.calleeStr
    const pluralS = this.expected === 1 ? '' : 's'

    return `Try calling function ${calleeStr} again, but with ${this.expected} argument${pluralS} instead. Remember that arguments are separated by a ',' (comma).`
  }
}

export class DivisionByZeroError extends RuntimeSourceError {
  constructor(node: es.Node) {
    super(node)
  }

  public explain() {
    return `Division by zero.`
  }

  public elaborate() {
    return `Division by zero is not allowed.`
  }
}
