import { IOptions, Result } from '..'
import * as es from '../ast'
import { ECEResultPromise, evaluate as ECEvaluate } from '../ec-evaluator/interpreter'
import { CannotFindModuleError } from '../errors/localImportErrors'
import { parse } from '../parser/parser'
import { inferProgram } from '../type-inference/type-inference'
import { Context, Variant } from '../types'
import { validateAndAnnotate } from '../validator/validator'
import { determineVariant, resolvedErrorPromise } from './utils'

const DEFAULT_SOURCE_OPTIONS: IOptions = {
  scheduler: 'async',
  steps: 1000,
  stepLimit: 1000,
  executionMethod: 'auto',
  variant: Variant.DEFAULT,
  originalMaxExecTime: 1000,
  useSubst: false,
  isPrelude: false,
  throwInfiniteLoops: true
}

function runECEvaluator(program: es.Program, context: Context, options: IOptions): Promise<Result> {
  const value = ECEvaluate(program, context)
  return ECEResultPromise(context, value)
}

export async function sourceRunner(
  code: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  const theOptions: IOptions = { ...DEFAULT_SOURCE_OPTIONS, ...options }
  context.variant = determineVariant(context, options)
  context.errors = []

  // Parse and validate
  const program: es.Program | undefined = parse(code, context)
  if (!program) {
    return resolvedErrorPromise
  }

  // TODO: Fix validateAndAnnotate and modify/add type checking
  // validateAndAnnotate(program, context)
  //inferProgram(program)
  context.unTypecheckedCode.push(code)

  if (context.errors.length > 0) {
    return resolvedErrorPromise
  }

  console.log('Program:', program)
  return runECEvaluator(program, context, theOptions)
}

export async function sourceFilesRunner(
  files: Partial<Record<string, string>>,
  entrypointFilePath: string,
  context: Context,
  options: Partial<IOptions> = {}
): Promise<Result> {
  const entrypointCode = files[entrypointFilePath]
  if (entrypointCode === undefined) {
    context.errors.push(new CannotFindModuleError(entrypointFilePath))
    return resolvedErrorPromise
  }

  context.variant = determineVariant(context, options)
  // TODO: Make use of the preprocessed program AST after refactoring runners.
  // const preprocessedProgram = preprocessFileImports(files, entrypointFilePath, context)
  // if (!preprocessedProgram) {
  //   return resolvedErrorPromise
  // }

  return sourceRunner(entrypointCode, context, options)
}
