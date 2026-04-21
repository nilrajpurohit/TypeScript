# TypeScript Learning Roadmap

## STAGE 1 : BEGINNER

### 1.1 Understanding TypeScript
- What TypeScript is — a typed superset of JavaScript that compiles to plain JS
- Why TypeScript exists — catching errors at compile time, not runtime
- How TypeScript differs from JavaScript — static types, interfaces, access modifiers
- TypeScript is structural — shape matters, not the name of the type

### 1.2 Setup & Tooling
- Install TypeScript globally via npm: `npm install -g typescript`
- Use `tsc` to compile .ts files to JavaScript
- Configure your project with tsconfig.json — set target, strict, outDir, rootDir
- Watch mode: `tsc --watch` for automatic recompilation on save
- Build mode: `tsc --build` for incremental and project-reference builds
- Use `ts-node` or `tsx` to run TypeScript directly without compiling
- Set up VS Code with the built-in TypeScript language server for IntelliSense
- Lint with ESLint + @typescript-eslint for code quality rules

### 1.3 JavaScript Primer — Types & Coercion
- JavaScript has dynamic types — a variable can hold any type at runtime
- Type coercion: JS silently converts types in operations — "5" + 1 = "51", "5" - 1 = 4
- Loose equality `==` triggers coercion; strict equality `===` does not
- TypeScript prevents coercion bugs by enforcing type consistency at compile time
- Falsy values in JS: 0, "", null, undefined, NaN, false — TypeScript narrows these correctly

### 1.4 JavaScript Primer — Functions, Arrays & Objects
- Functions: declarations, expressions, arrow functions, default and rest parameters
- Arrays: typed arrays, array methods, spread and destructuring with types
- Objects: property shorthand, computed keys, spread, rest, destructuring with types
- the `this` keyword in regular functions vs arrow functions — binding behavior

### 1.5 Basic Types
- Primitive types: `string`, `number`, `boolean`
- Special types: `any`, `unknown`, `void`, `never`, `null`, `undefined`
- Annotate variables explicitly: `let name: string = "Alice"`
- Avoid `any` — it disables type checking entirely
- Use `unknown` instead of `any` when type is not yet known — forces narrowing before use

### 1.6 Static Types in Depth
- Type widening — TypeScript widens `let x = 5` to `number`, not literal `5`
- Type narrowing — compiler refines a broad type to a specific one inside conditionals
- Excess property checking — object literals cannot have extra properties not in the type
- Structural typing — two types are compatible if their shapes match, regardless of name
- Assignability — when one type can be assigned to another based on structure

### 1.7 Type Inference
- TypeScript infers the type from the assigned value automatically
- `let x = 5` → TypeScript infers `x: number`
- Rely on inference for local variables; annotate function signatures explicitly

### 1.8 Arrays, Tuples & Objects
- Typed arrays: `string[]` or `Array<string>`
- Tuples: fixed-length arrays with specific types per index — `[string, number]`
- Named tuples (TS 4.0+): `[name: string, age: number]`
- Inline object types: `{ name: string; age: number }`
- Optional properties with `?`: `{ email?: string }`
- Readonly properties: `{ readonly id: number }`
- Object spread and rest with correct typing
- Optional chaining `?.` and nullish coalescing `??` — TypeScript enforces safe usage
- Non-null assertion `!` — tells TypeScript a value is definitely not null/undefined
- Create reusable shapes using type aliases

### 1.9 Functions
- Annotate parameter types and return types explicitly
- Use `void` for functions that return nothing
- Optional parameters: `greet(name?: string)`
- Default parameters: `greet(name = "World")`
- Rest parameters: `sum(...nums: number[]): number`
- Function overloads — define multiple signatures for one implementation
- Arrow functions: `const add = (a: number, b: number): number => a + b`

---

## STAGE 2 : INTERMEDIATE

### 2.1 Constructor Functions & Prototype Chaining
- Constructor functions predate ES6 classes — `function Person(name: string) { this.name = name }`
- TypeScript types the `this` context inside constructor functions explicitly
- `new()` signature in interfaces — `interface Constructable { new(arg: string): MyClass }`
- `typeof ClassName` refers to the constructor itself; `InstanceType<T>` extracts the instance type
- `ConstructorParameters<T>` utility type — extracts constructor parameter types
- Prototype chaining — how TypeScript understands inherited properties through the chain
- `Class extends` compiles down to prototype chaining in JavaScript

### 2.2 The this Keyword
- `this` type annotation in functions — `function greet(this: User): string`
- Arrow functions capture `this` lexically — useful in callbacks
- `ThisType<T>` utility — used in object literals and mixins to set the this context
- Avoid losing `this` by binding methods or using arrow function class properties
- `noImplicitThis` compiler flag — errors when `this` has an implicit any type

### 2.3 Classes
- Access modifiers: `public`, `private`, `protected`, `readonly`
- Shorthand constructor: `constructor(private name: string)` declares and assigns at once
- Abstract classes define a blueprint — cannot be instantiated directly
- Getters and setters with `get` / `set` keywords
- Static members with `static` keyword — belong to the class, not instances
- Class expressions and anonymous classes
- Dynamic properties — index signatures on classes: `[key: string]: number`

### 2.4 Interfaces
- Define object shapes with `interface` — preferred for public API contracts
- Extend interfaces: `interface Admin extends User { role: string }`
- Classes implement interfaces: `class Dog implements Animal`
- Declaration merging — two same-named interface blocks merge automatically
- Index signatures in interfaces: `{ [key: string]: string }` for dynamic properties
- `interface` vs `type` — interfaces are extendable and mergeable; types are more flexible

### 2.5 Union, Intersection & Type Narrowing
- Union `A | B` — value can be either type
- Intersection `A & B` — value must satisfy both types simultaneously
- Type intersections in objects merge all properties from both types
- `typeof` narrowing for primitives: `if (typeof x === "string")`
- `instanceof` narrowing for class instances
- `in` operator checks property existence to narrow union members
- Custom type guards: `function isUser(x: any): x is User`

### 2.6 Enums & Literal Types
- Numeric and string enums: `enum Direction { Up, Down }`
- `const enum` is inlined at compile time — no runtime object generated
- String literal types: `type Status = "active" | "inactive"`
- `as const` narrows array/object values to their literal types

### 2.7 Generics
- Write reusable functions with a type parameter: `function wrap<T>(val: T): T[]`
- Constrain generics: `<T extends string | number>`
- Multiple type parameters: `<T, U>` — each resolved independently
- Generic interfaces and classes follow the same syntax
- Default type parameters: `<T = string>`
- Generic inheritance — subclasses can pass or extend parent generic parameters

### 2.8 Collections
- `Map<K, V>` — key-value store with typed keys and values
- `Set<T>` — collection of unique values with a type parameter
- `WeakMap<K, V>` and `WeakSet<T>` — garbage-collectable variants; keys must be objects
- Iterating collections with `for...of` works with all built-in collection types
- Converting between arrays and collections — `Array.from(mySet)`, `new Set(myArray)`

### 2.9 Iterators & Generators
- `Iterator<T>`, `Iterable<T>`, and `IterableIterator<T>` built-in types
- Implement `[Symbol.iterator]()` to make any object iterable
- Generator functions with `function*` — return type is `Generator<YieldType, ReturnType, NextType>`
- Async generators with `async function*` — return type is `AsyncGenerator<T>`
- `for...of` works automatically with anything implementing `Iterable<T>`
- `for await...of` with `AsyncIterable<T>` for async data streams
- Useful for lazy evaluation, infinite sequences, and paginated API clients

### 2.10 Modules
- ES module syntax — `import` / `export` with full type support
- Re-exporting: `export { Foo } from "./foo"`
- Type-only imports: `import type { User } from "./types"` — erased at compile time
- Namespaces — legacy module system, still seen in older codebases and .d.ts files
- ESM vs CJS interop — `esModuleInterop` and `allowSyntheticDefaultImports` flags

### 2.11 Utility Types
- `Partial<T>` — makes all properties optional
- `Required<T>` — makes all properties required
- `Pick<T, K>` — keeps only the listed keys
- `Omit<T, K>` — removes the listed keys
- `Record<K, V>` — builds an object type from key and value types
- `Readonly<T>` — makes all properties read-only
- `ReturnType<F>`, `Parameters<F>`, `InstanceType<T>`, `ConstructorParameters<T>`
- `Awaited<T>` — unwraps a Promise type recursively

### 2.12 Decorators
- Class, method, property, and parameter decorators
- New decorator standard in TypeScript 5.0+ — different from legacy experimental decorators
- Enable with `experimentalDecorators` for legacy, or use TS 5.0+ natively
- Common use cases: logging, validation, dependency injection metadata

### 2.13 Testing & Debugging
- Unit testing with Jest + ts-jest — runs TypeScript tests directly
- Alternatively use Vitest — modern, faster, native ESM support
- Typing mocks — `jest.fn()` with generic types, `jest.mocked()`
- Source maps — enable `sourceMap: true` in tsconfig so debugger shows .ts files
- Debugging in VS Code — launch config with ts-node or source map support
- Use `tsc --noEmit` as a type-check step in CI without producing output files

---

## STAGE 3 : ADVANCED

### 3.1 Index Types
- `keyof T` — produces a union of all keys of type T
- Indexed access types: `T[K]` — gets the type of property K in T
- `keyof typeof obj` — get key union from a runtime value
- Use indexed access to enforce that a value matches a specific property type
- Combine `keyof` with generics: `<T, K extends keyof T>` for safe property access

### 3.2 Conditional Types
- Syntax: `T extends U ? X : Y`
- Used to create types that depend on other types at the type level
- `NonNullable<T>` is built using a conditional type internally
- Distributive — when T is a union, the condition applies to each member separately
- Wrap in a tuple `[T] extends [U]` to prevent distributive behavior
- `Extract<T, U>` and `Exclude<T, U>` are both built on conditional types

### 3.3 Mapped Types
- Transform every key of a type: `{ [K in keyof T]: boolean }`
- Add or remove modifiers: `+readonly`, `-readonly`, `-?`
- Key remapping with `as`: `{ [K in keyof T as NewKey]: T[K] }` (TS 4.1+)
- Filter keys using `as never` to drop certain properties during mapping
- Homomorphic vs non-homomorphic mapped types — affects how modifiers are preserved
- Recursive mapped types: `DeepReadonly<T>`, `DeepPartial<T>`
- Most built-in utility types are implemented as mapped types

### 3.4 Template Literal Types
- Compose string types: `type EventName = `on${string}``
- Built-in string helpers: `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`
- Combine with mapped types to rename keys dynamically
- Parse and validate string shapes at the type level

### 3.5 The infer Keyword
- Extract a type from within a conditional type using `infer`
- Example: `type ReturnType<T> = T extends (...args: any) => infer R ? R : never`
- Unwrap Promises, extract array element types, parse function signatures
- Multiple `infer` slots in one conditional type for destructuring complex shapes

### 3.6 Discriminated Unions & Exhaustive Checks
- Add a common literal discriminant field (e.g. `kind`) to each union member
- TypeScript narrows automatically based on the discriminant in switch/if blocks
- Use `never` in the default branch to enforce exhaustive handling at compile time
- Ideal pattern for reducers, state machines, and command handlers

### 3.7 Declaration Files & Module Augmentation
- .d.ts files describe types without any runtime code
- `@types/*` packages provide types for untyped JS libraries
- Handle untyped packages by adding `declare module "pkg-name"`
- Ambient declarations: `declare global`, `declare module`, `declare namespace`
- Augment third-party types by extending existing module declarations
- Typing JSON imports — `resolveJsonModule: true` in tsconfig

### 3.8 satisfies & as const
- `as const` freezes a value to its narrowest literal types
- `satisfies` validates a value against a type without widening the inferred type (TS 4.9+)
- Combine both for config objects that are validated and remain narrowly typed

---

## STAGE 4 : EXPERT

### 4.1 Type-Level Programming
- Write recursive types: e.g. flatten a nested array type, deeply partial types
- Encode arithmetic at the type level using tuple tricks
- Practice on type-challenges (github.com/type-challenges) to sharpen these skills
- Know when to stop — overly complex types hurt maintainability

### 4.2 TypeScript Compiler API
- Access the full AST (Abstract Syntax Tree) programmatically via `ts.createSourceFile`
- Create a `ts.Program` to analyze or transform source files
- Use the type checker API — `program.getTypeChecker()` — to resolve types at any node
- Build code generation tools, linters, or documentation generators

### 4.3 Custom Transformers
- Transformers run during compilation to rewrite the AST before emit
- Use `ts-patch` or `ttypescript` to plug custom transformers into tsc
- Common use cases: DI metadata, path aliasing, removing type assertions in output

### 4.4 Variance & Type System Theory
- Covariance — subtype can replace supertype in output (return) positions
- Contravariance — supertype can replace subtype in input (function parameter) positions
- TypeScript uses structural typing — shape compatibility, not nominal names
- `in`/`out` variance annotations (TS 4.7+) for explicit variance control on generic parameters

### 4.5 Performance & Large-Scale Projects
- Project references — split a monorepo into independently compiled subprojects
- `isolatedModules: true` ensures each file can be transpiled independently
- `skipLibCheck: true` speeds up compilation of large dependency trees
- Incremental compilation with `incremental: true` — caches previous build info
- Avoid deeply recursive types in hot paths — they slow the type checker significantly
- Profile with `tsc --diagnostics` and `--extendedDiagnostics`

---

## STAGE 5 : FRAMEWORKS & ECOSYSTEM

### 5.1 Frontend Frameworks
- React — type props with interfaces, type hooks generically, use `React.FC` or plain function syntax
- Next.js — built-in TS support; type `GetServerSideProps`, `NextApiRequest`, App Router types
- Vue 3 — full TypeScript support via `defineComponent` and `<script setup>` with `lang="ts"`

### 5.2 Backend Frameworks
- Node.js + Express — install `@types/node`, `@types/express` for full type coverage
- NestJS — decorators-first framework; TypeScript is a first-class requirement
- Fastify — built-in TypeScript support with typed request/response schemas

### 5.3 Validation & Schema Libraries
- Zod — runtime schema validation that infers TypeScript types automatically
- Valibot — lightweight alternative to Zod with a similar API
- Yup — schema validation with TypeScript inference support

### 5.4 Database & API Tooling
- Prisma — generates TypeScript types directly from your database schema
- tRPC — end-to-end type safety between server and client with no code generation step
- GraphQL Code Generator — generates TypeScript types from GraphQL schemas and queries
