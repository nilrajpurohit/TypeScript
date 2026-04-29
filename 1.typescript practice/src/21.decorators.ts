// Decorators are a powerful feature in TypeScript that allow you to modify the behavior of classes, methods, properties, and parameters. They are often used in frameworks like Angular to add metadata and enhance functionality.

// Here's an example of a class decorator that adds a static property to a class:

function AddStaticProperty(propertyName: string, value: any) {
    return function (constructor: Function) {
        (constructor as any)[propertyName] = value;
    };
}

@AddStaticProperty('version', '1.0.0')
class MyClass {
    // Class implementation
}

console.log((MyClass as any).version); // Output: 1.0.0

// Method decorators can be used to modify the behavior of methods. Here's an example of a method decorator that logs the execution time of a method:

function LogExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`${propertyKey} executed in ${end - start} milliseconds`);
        return result;
    };

    return descriptor;
}

class AnotherClass {
    @LogExecutionTime
    someMethod() {
        // Simulate a time-consuming operation
        for (let i = 0; i < 1e6; i++) {}
    }
}

const instance = new AnotherClass();
instance.someMethod(); // Output: someMethod executed in X milliseconds

// Property decorators can be used to add metadata to properties. Here's an example of a property decorator that marks a property as required:

function Required(target: any, propertyKey: string) {
    if (!target.constructor.requiredProperties) {
        target.constructor.requiredProperties = [];
    }
    target.constructor.requiredProperties.push(propertyKey);
}

class User {
    static requiredProperties: string[] = [];

    @Required
    name!: string;

    @Required
    email!: string;
}

console.log(User.requiredProperties); // Output: ['name', 'email']

// Parameter decorators can be used to add metadata to parameters. Here's an example of a parameter decorator that marks a parameter as required:

function RequiredParam(target: any, propertyKey: string, parameterIndex: number) {
    if (!target.constructor.requiredParams) {
        target.constructor.requiredParams = {};
    }
    if (!target.constructor.requiredParams[propertyKey]) {
        target.constructor.requiredParams[propertyKey] = [];
    }
    target.constructor.requiredParams[propertyKey].push(parameterIndex);
}

class Service {
    static requiredParams: { [key: string]: number[] } = {};

    someMethod(@RequiredParam param1: string, @RequiredParam param2: number) {
        // Method implementation
    }
}

console.log(Service.requiredParams); // Output: { someMethod: [0, 1] }

// Decorators can be combined and used in various ways to enhance the functionality of your classes and methods. They provide a powerful way to add metadata and modify behavior without changing the underlying code structure.

// Accessor decorators can be used to modify the behavior of getters and setters. Here's an example of an accessor decorator that logs when a property is accessed or modified:

function LogAccess(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;

    if (originalGet) {
        descriptor.get = function () {
            console.log(`Getting value of ${propertyKey}`);
            return originalGet.apply(this);
        };
    }

    if (originalSet) {
        descriptor.set = function (value: any) {
            console.log(`Setting value of ${propertyKey} to ${value}`);
            originalSet.apply(this, [value]);
        };
    }

    return descriptor;
}

class Product {
    private _price: number = 0;

    @LogAccess
    get price() {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}

const product = new Product();
product.price = 100; // Output: Setting value of price to 100
console.log(product.price); // Output: Getting value of price, then 100

// In summary, decorators in TypeScript provide a powerful way to add metadata and modify the behavior of classes, methods, properties, and parameters. They can be used to enhance functionality, enforce constraints, and improve code readability.