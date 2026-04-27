// class Chai {
//     flavour: string;
//     price: number;

//     constructor(flavour: string, price: number) {
//         this.flavour = flavour;
//         this.price = price;
//     }
    
//     constructor(flavour: string) {
//         this.flavour = flavour;
//     }
// }

// const masalaChai = new Chai("Masala", 10);
// console.log(masalaChai);

// const gingerChai = new Chai("Ginger");
// console.log(gingerChai);

// Access Modifiers: public, private, protected
class Chai {
    public flavour: string;
    public price: number;
    private secretIngredient: string;
    protected shopName: string = "Chaiwala";

    constructor(flavour: string, price: number, secretIngredient: string) {
        this.flavour = flavour;
        this.price = price;
        this.secretIngredient = secretIngredient;
    }

    public getSecretIngredient(): string {
        return this.secretIngredient;
    }
}
const masalaChai = new Chai("Masala", 10, "Cardamom");
console.log(masalaChai.flavour); // Masala
console.log(masalaChai.price); // 10
// console.log(masalaChai.shopName); // Error: Property 'shopName' is protected and only accessible within class 'Chai' and its subclasses.
// console.log(masalaChai.secretIngredient); // Error: Property 'secretIngredient' is private and only accessible within class 'Chai'.
console.log(masalaChai.getSecretIngredient()); // Cardamom

// Inheritance to return shop name which is protected in parent class
class Branch extends Chai { 
    getName() {
        return this.shopName; // Accessing protected member from parent class
    }
}
const branch = new Branch("Green", 15, "Ginger");
console.log(branch.getName()); // Chaiwala

// Readonly properties
class Cup {
    readonly capacity: number;
    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

// Properties with getters and setters and private symbols for property encapsulation
class ModernChai {
    private _sugar:number;
    constructor(sugar: number) {
        this._sugar = sugar;
    }
    get sugar(): number {
        return this._sugar;
    }
    set sugar(value: number) {
        if (value < 0) {
            throw new Error("Sugar cannot be negative");
        }
        this._sugar = value;
    }
}
const modernChai = new ModernChai(5);
console.log(modernChai.sugar); // 5
modernChai.sugar = 10;
console.log(modernChai.sugar); // 10
// modernChai.sugar = -5; // Error: Sugar cannot be negative

// Static properties and methods
class EkChai {
    static shopName:string = "Ek Chai";
    constructor(public flavour: string) {}
}
console.log(EkChai.shopName); // Ek Chai

// Abstract classes and methods
abstract class Drink {
    abstract make(): void;
}
// Subclass must implement the abstract method
class ChaiDrink extends Drink {
    make(): void {
        console.log("Making a delicious chai!");
    }
}
const chaiDrink = new ChaiDrink();
chaiDrink.make(); // Making a delicious chai!

// Dependency Injection using classes
class Heater {
    heat() {}
}

// ChaiMaker depends on Heater, which is injected through the constructor (Also known as Constructor Injection OR Composition)
class ChaiMaker {
    constructor(private heater: Heater) {}
    make() {
        this.heater.heat();
    }
}