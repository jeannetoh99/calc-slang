export const builtinInfixFunctions = {
    '+': (x: any, y: any) => x + y,
    '-': (x: any, y: any) => x - y,
    '*': (x: any, y: any) => x * y,
    'div': (x: any, y: any) => x / y,
    'mod': (x: any, y: any) => x % y,
    '<>': (x: any, y: any) => x != y,
    '<': (x: any, y: any) => x < y,
    '>': (x: any, y: any) => x > y,
    '=': (x: any, y: any) => x === y,
    '<=': (x: any, y: any) => x <= y,
    '>=': (x: any, y: any) => x >= y,
    'andalso': (x: boolean, y: boolean) => x && y,
    'orelse': (x: boolean, y: boolean) => x || y,
}

export const builtinFunctions = {
    '~': (x: any) => -x,
    'not': (x: boolean) => !x,
}

export const builtinMapping = {
    ...builtinInfixFunctions,
    ...builtinFunctions
}

export const applyBuiltin = (op: string, args: any) => 
    builtinMapping[op](...args)

