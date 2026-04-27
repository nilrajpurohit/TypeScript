// Functions in TypeScript can be defined in several ways, including function declarations, function expressions, and arrow functions. They can also have optional parameters, default parameters, and rest parameters.

// Function declaration: A function declaration is a named function that is defined using the `function` keyword. It can be called before it is defined in the code due to hoisting.
function add(a: number, b: number): number {
    return a + b;
}

// Function expression: A function expression is a function that is assigned to a variable. It can be anonymous or named.
const subtract = function(a: number, b: number): number {
    return a - b;
};

// Arrow function: Arrow functions provide a more concise syntax for writing functions and also have lexical scoping of the `this` keyword.
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Optional parameters: In TypeScript, you can mark parameters as optional by using the `?` symbol. Optional parameters must come after all required parameters.
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

// Default parameters: You can also provide default values for parameters. If the caller does not provide a value for that parameter, the default value will be used.
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// Rest parameters: Rest parameters allow a function to accept an arbitrary number of arguments as an array.
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function overloading allows us to define multiple function signatures for a single function implementation. This is useful when we want to provide different ways to call a function based on the types of the arguments.

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}