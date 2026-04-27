// Define a type for a male
type Male = {
    name: string;
    age: number;
}
// Define a type for a female
type Female = {
    name: string;
    age: number;
}
// Define a type for a person that can be either male or female
type Person = Male | Female;
// Example usage
const person1: Person = {
    name: "John",
    age: 25
};

const person2: Person = {
    name: "Jane",
    age: 30
};

console.log(person1);
console.log(person2);