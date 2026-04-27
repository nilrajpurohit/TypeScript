// Objects as below are mutable by default, and we can assign an object with more properties to a variable of a type that has fewer properties. This is because TypeScript uses structural typing, which means that the shape of the object is what matters, not the exact type.
type Cup = {size:string};
let smallCup: Cup = {size: "200"};
let bigCup = {size: "500", material: "steel"};

smallCup = bigCup;

type Brew = {brewTime: number};
let espresso = {brewTime: 30, bean: "arabica"};
let latte:Brew = espresso;

type User = {name: string, password: string};
const u:User = {name: "Alice", password: "secret"};

// Utilities as below are used to create new types based on existing types. They are very useful for creating more specific types from general ones, or for creating types that have certain properties optional or required.

// Partial<T> makes all properties of T optional
type PartialUser = Partial<User>;
const partialUser: PartialUser = {name: "Bob"};

// Required<T> makes all properties of T required
type RequiredUser = Required<User>;
const requiredUser: RequiredUser = {name: "Charlie", password: "password123"};

// Readonly<T> makes all properties of T read-only
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = {name: "Dave", password: "passw0rd"};
// readonlyUser.name = "Eve"; // Error: Cannot assign to 'name' because it is a read-only property.

// Pick<T, K> creates a new type by picking a set of properties K from T
type UserName = Pick<User, "name">;
const userName: UserName = {name: "Frank"};

// Omit<T, K> creates a new type by omitting a set of properties K from T
type UserWithoutPassword = Omit<User, "password">;
const userWithoutPassword: UserWithoutPassword = {name: "Grace"};