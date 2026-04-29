// keyof T is an operator in TypeScript that takes an object type T and produces a union of its keys as string literal types. It is often used in conjunction with mapped types to create new types based on the keys of an existing type.

// Example usage of keyof T:

interface Person {
  name: string;
  age: number;
  city: string;
}

// Using keyof to get the keys of the Person interface
type PersonKeys = keyof Person; // "name" | "age" | "city"

// Using keyof in a mapped type to create a new type based on the keys of Person
type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};
// The ReadonlyPerson type will have the same keys as Person, but all properties will be readonly:
// {
//   readonly name: string;
//   readonly age: number;
//   readonly city: string;
// }

// You can also use keyof with a type that has index signatures:

interface Dictionary {
  [key: string]: number;
}

// Using keyof with an index signature will produce the type 'string'
type DictionaryKeys = keyof Dictionary; // string

// In this case, since the Dictionary interface has an index signature that allows any string as a key, the keyof operator will return 'string' as the type of the keys.