// Generics are a powerful feature in TypeScript that allow you to create reusable components and functions that can work with a variety of types. They provide a way to define a function, class, or interface that can operate on different types without sacrificing type safety.

// Here's an example of a generic function that takes any type of value and return in array:

function wrapInArray<T>(value: T): T[] {
    return [value];
}

const numberArray = wrapInArray(42); // Type of numberArray is number[]
const stringArray = wrapInArray("Hello"); // Type of stringArray is string[]
const booleanArray = wrapInArray(true); // Type of booleanArray is boolean[]

// In this example, the function wrapInArray is defined with a generic type parameter T. When you call the function, you can specify the type you want to use, and TypeScript will infer the type based on the argument you pass in. This allows you to create a single function that can work with any type while still maintaining type safety.

// Generics can also be used with classes and interfaces. Here's an example of a generic class that represents a stack data structure:

class Stack<T> {
    private items: T[] = [];
    
    push(item: T): void {
        this.items.push(item);
    }
    
    pop(): T | undefined {
        return this.items.pop();
    }
    
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

// You can create instances of the Stack class with different types:

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.peek()); // 2

const stringStack = new Stack<string>();
stringStack.push('a');
stringStack.push('b');
console.log(stringStack.peek()); // 'b'

// Generics provide a way to create flexible and reusable code while maintaining type safety, making it easier to work with different types without sacrificing the benefits of static typing.


// Generics can also be used with interfaces to define a contract for a type that can work with different types. Here's an example of a generic interface for a repository pattern:

interface Repository<T> {
    getById(id: number): T;
    save(item: T): void;
}

interface User {
    id: number;
    name: string;
}

class UserRepository implements Repository<User> {
    private users: User[] = [];
    
    getById(id: number): User {
        return this.users.find(user => user.id === id)!;
    }
    
    save(user: User): void {
        this.users.push(user);
    }
}

const userRepository = new UserRepository();
userRepository.save({ id: 1, name: 'Alice' });
console.log(userRepository.getById(1)); // { id: 1, name: 'Alice' }

// In this example, the Repository interface is defined with a generic type parameter T. The UserRepository class implements the Repository interface for the User type, allowing it to work with User objects while still adhering to the contract defined by the Repository interface.