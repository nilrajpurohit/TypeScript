let name:string = "Nil";
let age:number = 26;
let isStudent:boolean = false;
console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}`);

let hobbies:string[] = ["Reading", "Traveling", "Cooking"];
console.log(`Hobbies: ${hobbies.join(", ")}`);

interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

let person: Person = {
    name: "Nil",
    age: 26,
    isStudent: false
};
console.log(`Person: ${JSON.stringify(person)}`);

function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

const message: string = greet(person.name);
console.log(message);