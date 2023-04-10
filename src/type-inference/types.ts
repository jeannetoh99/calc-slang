// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Type {}

export class LiteralType implements Type {
  constructor(public primitiveType: Type) {}
}

export class ListType implements Type {
  constructor(public elementType: Type) {}
}

export class FunctionType implements Type {
  constructor(public from: Type, public to: Type) {}
}

export class TypeVariable implements Type {
  constructor(public id: Number) {}
}

export function areSameType(type1: Type, type2: Type): boolean {
  if (type1 instanceof LiteralType && type2 instanceof LiteralType) {
    return type1.primitiveType === type2.primitiveType
  } else if (type1 instanceof ListType && type2 instanceof ListType) {
    return areSameType(type1.elementType, type2.elementType)
  } else if (type1 instanceof FunctionType && type2 instanceof FunctionType) {
    return areSameType(type1.from, type2.from) && areSameType(type1.to, type2.to)
  } else if (type1 instanceof TypeVariable && type2 instanceof TypeVariable) {
    return type1.id === type2.id
  } else {
    return false
  }
}
