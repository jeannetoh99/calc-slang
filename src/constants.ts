import * as es from './ast'
import { Chapter, Language, Variant } from './types'

export const CUT = 'cut' // cut operator for Source 4.3
export const TRY_AGAIN = 'retry' // command for Source 4.3
export const GLOBAL = typeof window === 'undefined' ? global : window
export const NATIVE_STORAGE_ID = 'nativeStorage'
export const MODULE_PARAMS_ID = 'moduleParams'
export const MODULE_CONTEXTS_ID = 'moduleContexts'
export const MAX_LIST_DISPLAY_LENGTH = 100
export const UNKNOWN_LOCATION: es.SourceLocation = {
  start: {
    line: -1,
    column: -1
  },
  end: {
    line: -1,
    column: -1
  }
}
export const JSSLANG_PROPERTIES = {
  maxExecTime: 1000,
  factorToIncreaseBy: 10
}

export const sourceLanguages: Language[] = [{ chapter: Chapter.CALC, variant: Variant.DEFAULT }]
