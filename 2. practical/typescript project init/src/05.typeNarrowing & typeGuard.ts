let name: string = "Nil";
// Type narrowing using type guard typeof
if (typeof name === "string") {
    console.log(`Name is a string: ${name}`);
} else {
    console.log("Name is not a string.");
}

let age: number | string = 36;
if (typeof age === "number") {
    console.log(`Age is a number: ${age}`);
} else {
    console.log(`Age is a string: ${age}`);
}

function printValue(value: number | string) {
    if (typeof value === "number") {
        console.log(`Value is a number: ${value}`);
    } else {
        console.log(`Value is a string: ${value}`);
    }
}

printValue(42);
printValue("Hello, TypeScript!");

// Class based type narrowing
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    // Type narrowing using type guard instanceof
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}

const myDog = new Dog();
const myCat = new Cat();

makeSound(myDog); // Output: Woof!
makeSound(myCat); // Output: Meow!