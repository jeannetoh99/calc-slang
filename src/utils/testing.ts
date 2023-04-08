import { default as createContext } from '../createContext'
import { parseError, Result, runInContext } from '../index'
import { Chapter, Context, SourceError, Value, Variant } from '../types'
import { stringify } from './stringify'

export interface CodeSnippetTestCase {
  name: string
  snippet: string
  value: any
  errors: SourceError[]
}

export interface TestContext extends Context {
  displayResult: string[]
  promptResult: string[]
  alertResult: string[]
  visualiseListResult: Value[]
}

interface TestBuiltins {
  [builtinName: string]: any
}

interface TestResult {
  code: string
  displayResult: string[]
  alertResult: string[]
  visualiseListResult: any[]
  errors?: SourceError[]
  numErrors: number
  parsedErrors: string
  resultStatus: string
  result: Value
}

interface TestOptions {
  context?: TestContext
  chapter?: Chapter
  variant?: Variant
  testBuiltins?: TestBuiltins
  native?: boolean
  showTranspiledCode?: boolean
  showErrorJSON?: boolean
}

export function createTestContext({
  context,
  chapter = Chapter.CALC,
  variant = Variant.DEFAULT
}: {
  context?: TestContext
  chapter?: Chapter
  variant?: Variant
  testBuiltins?: TestBuiltins
} = {}): TestContext {
  if (context !== undefined) {
    return context
  } else {
    return {
      ...createContext(variant),
      displayResult: [],
      promptResult: [],
      alertResult: [],
      visualiseListResult: []
    }
  }
}

async function testInContext(code: string, options: TestOptions): Promise<TestResult> {
  const interpretedTestContext = createTestContext(options)
  const scheduler = 'preemptive'
  const getTestResult = (context: TestContext, result: Result) => {
    const testResult = {
      code,
      displayResult: context.displayResult,
      alertResult: context.alertResult,
      visualiseListResult: context.visualiseListResult,
      numErrors: context.errors.length,
      parsedErrors: parseError(context.errors),
      resultStatus: result.status,
      result: result.status === 'finished' ? stringify(result.value) : undefined
    }
    if (options.showErrorJSON) {
      testResult['errors'] = context.errors
    }
    return testResult
  }
  const interpretedResult = getTestResult(
    interpretedTestContext,
    await runInContext(code, interpretedTestContext, {
      scheduler,
      executionMethod: 'interpreter',
      variant: options.variant
    })
  )
  return interpretedResult
}

export async function testSuccess(code: string, options: TestOptions = { native: false }) {
  const testResult = await testInContext(code, options)
  expect(testResult.parsedErrors).toBe('')
  expect(testResult.resultStatus).toBe('finished')
  return testResult
}

export async function testSuccessWithErrors(
  code: string,
  options: TestOptions = { native: false }
) {
  const testResult = await testInContext(code, options)
  expect(testResult.numErrors).not.toEqual(0)
  expect(testResult.resultStatus).toBe('finished')
  return testResult
}

export async function testFailure(code: string, options: TestOptions = { native: false }) {
  const testResult = await testInContext(code, options)
  expect(testResult.numErrors).not.toEqual(0)
  expect(testResult.resultStatus).toBe('error')
  return testResult
}

export function snapshot<T extends { [P in keyof TestResult]: any }>(
  propertyMatchers: Partial<T>,
  snapshotName?: string
): (testResult: TestResult) => TestResult
export function snapshot(
  snapshotName?: string,
  arg2?: string
): (testResult: TestResult) => TestResult
export function snapshot(arg1?: any, arg2?: any): (testResult: TestResult) => TestResult {
  if (arg2) {
    return testResult => {
      expect(testResult).toMatchSnapshot(arg1!, arg2)
      return testResult
    }
  } else if (arg1) {
    return testResult => {
      expect(testResult).toMatchSnapshot(arg1!)
      return testResult
    }
  } else {
    return testResult => {
      return testResult
    }
  }
}

export function snapshotSuccess(code: string, options: TestOptions, snapshotName?: string) {
  return testSuccess(code, options).then(snapshot(snapshotName))
}

export function snapshotWarning(code: string, options: TestOptions, snapshotName: string) {
  return testSuccessWithErrors(code, options).then(snapshot(snapshotName))
}

export function snapshotFailure(code: string, options: TestOptions, snapshotName: string) {
  return testFailure(code, options).then(snapshot(snapshotName))
}

export function expectDisplayResult(code: string, options: TestOptions = {}) {
  return expect(
    testSuccess(code, options)
      .then(snapshot('expectDisplayResult'))
      .then(testResult => testResult.displayResult!)
      .catch(e => console.log(e))
  ).resolves
}

export function expectVisualiseListResult(code: string, options: TestOptions = {}) {
  return expect(
    testSuccess(code, options)
      .then(snapshot('expectVisualiseListResult'))
      .then(testResult => testResult.visualiseListResult)
      .catch(e => console.log(e))
  ).resolves
}

// for use in concurrent testing
export async function getDisplayResult(code: string, options: TestOptions = {}) {
  return await testSuccess(code, options).then(testResult => testResult.displayResult!)
}

export function expectResult(code: string, options: TestOptions = {}) {
  return expect(
    testSuccess(code, options)
      .then(snapshot('expectResult'))
      .then(testResult => testResult.result)
  ).resolves
}

export function expectParsedErrorNoErrorSnapshot(code: string, options: TestOptions = {}) {
  options.showErrorJSON = false
  return expect(
    testFailure(code, options)
      .then(snapshot('expectParsedErrorNoErrorSnapshot'))
      .then(testResult => testResult.parsedErrors)
  ).resolves
}

export function expectParsedError(code: string, options: TestOptions = {}) {
  return expect(
    testFailure(code, options)
      .then(snapshot('expectParsedError'))
      .then(testResult => testResult.parsedErrors)
  ).resolves
}

export function expectDifferentParsedErrors(
  code1: string,
  code2: string,
  options: TestOptions = {}
) {
  return expect(
    testFailure(code1, options).then(error1 => {
      expect(
        testFailure(code2, options).then(error2 => {
          return expect(error1).not.toEqual(error2)
        })
      )
    })
  ).resolves
}

export function expectWarning(code: string, options: TestOptions = {}) {
  return expect(
    testSuccessWithErrors(code, options)
      .then(snapshot('expectWarning'))
      .then(testResult => testResult.parsedErrors)
  ).resolves
}

export function expectParsedErrorNoSnapshot(code: string, options: TestOptions = {}) {
  return expect(testFailure(code, options).then(testResult => testResult.parsedErrors)).resolves
}
