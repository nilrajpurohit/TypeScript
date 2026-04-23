// Define a type of animal diet
type AnimalDiet = "Carnivore" | "Herbivore" | "Omnivore";

// Define an interface for animal food preferences
interface AnimalFoodPreference {
    primary: "Meat" | "Plants" | "Both";
    favoriteFoods: string[];
}

// Define an interface for animal details that extends the food preference interface
interface AnimalDetails extends AnimalFoodPreference {
    name: string;
    habitat: string;
    age: number;
    gender: "Male" | "Female";
    diet: AnimalDiet;
    primary: AnimalFoodPreference["primary"];
    favoriteFoods: AnimalFoodPreference["favoriteFoods"];
}

// Implementing the AnimalDetails interface in a class
class Animal implements AnimalDetails {
    name: string;
    habitat: string;
    age: number;
    gender: "Male" | "Female";
    diet: AnimalDiet;
    primary: AnimalFoodPreference["primary"];
    favoriteFoods: AnimalFoodPreference["favoriteFoods"];

    constructor(name: string, diet: AnimalDiet, habitat: string, gender: "Male" | "Female", age: number, primary: AnimalFoodPreference["primary"], favoriteFoods: AnimalFoodPreference["favoriteFoods"]) {
        this.name = name;
        this.habitat = habitat;
        this.age = age;
        this.gender = gender;
        this.diet = diet;
        this.primary = primary;
        this.favoriteFoods = favoriteFoods;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Habitat: ${this.habitat}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Diet: ${this.diet}`);
        console.log(`Primary Food: ${this.primary}`);
        console.log(`Favorite Foods: ${this.favoriteFoods.join(", ")}`);
    }
}

const lion = new Animal("Lion", "Carnivore", "Savannah", "Male", 8, "Meat", ["Zebras", "Wildebeests"]);
lion.displayInfo();