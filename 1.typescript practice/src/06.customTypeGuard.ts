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

// Creating a custom type guard
function isAnimalDog(obj:any): obj is Dog {
    return (
        typeof obj === "object" &&
        obj !== null &&
        "bark" in obj &&
        typeof obj.bark === "function"
    )
}
// Using the custom type guard
function makeSoundWithGuard(animal: Dog) {
    if (isAnimalDog(animal)) {
        animal.bark();
    }
}

const myDog = new Dog();
makeSoundWithGuard(myDog);