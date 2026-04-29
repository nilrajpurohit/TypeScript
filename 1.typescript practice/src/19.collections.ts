// Collections in TypeScript

// In this example, we will explore how to use collections in TypeScript, including arrays, sets, and maps. Collections are data structures that allow us to store and manage multiple values in an organized way.

// 1. Arrays
// An array is a collection of items stored at contiguous memory locations. In TypeScript, we can define the type of elements in an array using generics or by specifying the type directly.

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ['Hello', 'World'];
const mixed: (number | string)[] = [1, 'Two', 3];

// 2. Sets
// A Set is a collection of unique values. It does not allow duplicate entries and can be useful for storing distinct items.

const uniqueNumbers: Set<number> = new Set([1, 2, 3, 4, 5]);
uniqueNumbers.add(6); // Adding a new number to the set
uniqueNumbers.add(3); // This will not be added as 3 is already in the set

console.log('Unique Numbers:', uniqueNumbers);

// 3. Maps
// A Map is a collection of key-value pairs where each key is unique. It allows us to store and retrieve values based on their keys.

const userMap: Map<number, string> = new Map();
userMap.set(1, 'Alice');
userMap.set(2, 'Bob');
userMap.set(3, 'Charlie');

console.log('User Map:', userMap);
console.log('User with ID 2:', userMap.get(2)); // Retrieve value by key

// In summary, TypeScript provides various collection types such as arrays, sets, and maps that allow us to manage and organize data effectively while ensuring type safety.

// 4. Tuples
// A Tuple is a special type of array that can hold a fixed number of elements with different types. It is useful for representing a collection of related values.

const userTuple: [number, string, boolean] = [1, 'Alice', true];
console.log('User Tuple:', userTuple);

// In this example, we have defined a tuple that contains a number (user ID), a string (user name), and a boolean (isActive). Tuples allow us to group related values together while maintaining type safety.

// 5. Objects
// An object is a collection of key-value pairs where the keys are strings (or symbols) and the values can be of any type. In TypeScript, we can define the structure of an object using interfaces or type aliases.

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const userObject: User = {
  id: 1,
  name: 'Alice',
  isActive: true
};

console.log('User Object:', userObject);

// In this example, we have defined an interface `User` that describes the structure of a user object. We then create an instance of a user object that adheres to this structure, ensuring type safety and better code readability.

// 6. Readonly Collections
// TypeScript also provides the `Readonly` utility type, which allows us to create immutable collections. This means that once a collection is created, it cannot be modified.

const readonlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// readonlyNumbers.push(6); // This will cause a compile-time error as the array is read-only

const readonlyUserMap: ReadonlyMap<number, string> = new Map([
  [1, 'Alice'],
  [2, 'Bob'],
  [3, 'Charlie']
]);
// readonlyUserMap.set(4, 'David'); // This will cause a compile-time error as the map is read-only

console.log('Readonly Numbers:', readonlyNumbers);
console.log('Readonly User Map:', readonlyUserMap);

// In this example, we have defined a read-only array and a read-only map. Attempting to modify these collections will result in compile-time errors, ensuring that the data remains unchanged throughout the program. This can be particularly useful for maintaining data integrity and preventing unintended side effects in larger applications.

// 7. Advanced Utility Types for Collections
// TypeScript provides several advanced utility types that can be used with collections to enhance type safety and flexibility. Some of these include `Partial`, `Required`, `Pick`, and `Omit`.

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}

// Using Partial to make all properties optional
type PartialProduct = Partial<Product>;
const partialProduct: PartialProduct = { name: 'Laptop' }; // Only name is provided

// Using Required to make all properties required
type RequiredProduct = Required<Product>;
const requiredProduct: RequiredProduct = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
  description: 'A high-end gaming laptop'
};

// Using Pick to create a new type with selected properties
type ProductSummary = Pick<Product, 'id' | 'name'>;
const productSummary: ProductSummary = { id: 1, name: 'Laptop' };

// Using Omit to create a new type by omitting certain properties
type ProductWithoutDescription = Omit<Product, 'description'>;
const productWithoutDescription: ProductWithoutDescription = {
  id: 1,
  name: 'Laptop',
  price: 999.99
};

// In this example, we have used various utility types to manipulate the structure of our `Product` interface. These utility types allow us to create new types based on existing ones, providing flexibility and enhancing type safety when working with collections in TypeScript.