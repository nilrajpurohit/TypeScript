// Implemented readonly properties in TypeScript
type Person = {
    readonly name: string;
    readonly age: number;
}

const person: Person = {
    name: "Alice",
    age: 30
};

// Attempting to modify readonly properties will result in a compile-time error
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
// person.age = 35; // Error: Cannot assign to 'age' because it is a read-only property.

console.log(person);