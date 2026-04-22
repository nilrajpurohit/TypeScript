function greetUser(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

const message: string = greetUser("User");
console.log(message);