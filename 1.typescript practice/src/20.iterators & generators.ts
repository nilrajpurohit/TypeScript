// Iterators and Generators in TypeScript

// An iterator is an object that defines a sequence and potentially a return value upon its termination. 
// It implements the Iterator protocol by having a next() method that returns an object with two properties: 
// value (the next value in the sequence) and done (a boolean indicating whether the sequence has ended).

// Example of an iterator
class NumberIterator {
    private current: number = 0;
    private end: number;

    constructor(end: number) {
        this.end = end;
    }

    next() {
        if (this.current < this.end) {
            return { value: this.current++, done: false };
        } else {
            return { value: null, done: true };
        }
    }
}

const iterator = new NumberIterator(5);
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: null, done: true }

// A generator is a special type of function that can be paused and resumed. 
// It is defined using the function* syntax and uses the yield keyword to produce a sequence of values.

function* numberGenerator(end: number) {
    for (let i = 0; i < end; i++) {
        yield i;
    }
}

const gen = numberGenerator(5);
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generators can also be used to create iterators. 
// When a generator function is called, it returns an iterator that can be used to iterate through the values produced by the generator.

const genIterator = numberGenerator(3);
for (const value of genIterator) {
    console.log(value); // 0, 1, 2
}
