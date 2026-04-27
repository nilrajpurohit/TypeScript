// Tuples are a special type of array that can hold a fixed number of elements of different types. They are defined using square brackets [] and can contain any combination of types.

// Defining a tuple
let person: [string, number] = ["Alice", 30];

// Accessing tuple elements
console.log(person[0]); // "Alice"
console.log(person[1]); // 30

// Tuples can also have optional elements and rest elements. Optional elements are denoted by a question mark ?, while rest elements are denoted by three dots ... followed by the type of the rest elements.

// Tuple with optional element
let employee: [string, number, string?] = ["Bob", 25];

// Tuple with rest element
let coordinates: [number, number, ...number[]] = [10, 20, 30, 40];

// Destructuring tuples
let [name, age] = person;
console.log(name); // "Alice"
console.log(age);  // 30

// Tuples can also be used in function parameters and return types to specify the types of multiple values that a function can accept or return.

// Function that returns a tuple
function getUserInfo(): [string, number] {
  return ["Charlie", 28];
}

let userInfo = getUserInfo();
console.log(userInfo); // ["Charlie", 28]

// Function that accepts a tuple as a parameter
function printCoordinates(coords: [number, number]) {
  console.log(`X: ${coords[0]}, Y: ${coords[1]}`);
}

printCoordinates([15, 25]); // "X: 15, Y: 25"

// Tuples can also be used with rest parameters to allow for a variable number of elements in the tuple.
function logMessages(...messages: [string, ...string[]]) {
  messages.forEach(message => console.log(message));
}

logMessages("Hello", "World", "This is a tuple example!"); // Logs each message to the console