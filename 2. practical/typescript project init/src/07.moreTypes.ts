let response: any = "40";
let numericResponse: number = (response as string).length; // Type assertion to treat response as a string and get its length
console.log(`Numeric Response: ${numericResponse}`);

type Book = {
    name: string;
}
let book = '{ name: "TypeScript Handbook" }';
let bookObj = JSON.parse(book) as Book; // Type assertion to treat parsed JSON as a Book object
console.log(`Book Name: ${bookObj.name}`);

// Using 'any' type
let value:any;
value = 42; // value can be a number
value = "Hello"; // value can also be a string
value = { name: "TypeScript" }; // value can also be an object
value = [1, 2, 3]; // value can also be an array
value.toUpperCase(); // This will cause a runtime error if value is not a string, demonstrating the risks of using 'any' type

// Using 'unknown' type
let newVlaue:unknown;
newVlaue = 42;
newVlaue = "Hello";
newVlaue = { name: "TypeScript" };
newVlaue = [1, 2, 3];
if(typeof newVlaue === "string") {
    console.log(newVlaue.toUpperCase()); // This is safe because we checked the type before using it
}

try {}
catch (error) {
    if (error instanceof Error) {
        console.error(`Error message: ${error.message}`);
    }
}

// Using 'void' type
type Role = "admin" | "user" | "guest";
function getPermissions(role: Role): void {
    switch (role) {
        case "admin":
            console.log("Full access for role:" + role);
            break;
        case "user":
            console.log("Limited access for role:" + role);
            break;
        default:
            role;
    }
}

// Using 'never' type
function throwError(message: string): never {
    throw new Error(message);
}