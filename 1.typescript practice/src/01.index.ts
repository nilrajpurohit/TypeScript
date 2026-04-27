function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

const userName: string = "Nil";
const message: string = greet(userName);
console.log(message);