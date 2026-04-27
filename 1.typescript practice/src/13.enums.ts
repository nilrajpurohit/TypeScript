// Enum is a way to define a set of named constants. It can be used to represent a collection of related values, such as directions, colors, or states.

// In TypeScript, enums can be defined using the `enum` keyword. By default, the values of the enum members are assigned numeric values starting from 0, but you can also assign custom values to the members.

// Numeric enum: This is the default behavior where the members are assigned numeric values starting from 0.
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up);   // 0
console.log(Direction.Right); // 3

// String enum: In a string enum, the members are assigned string values.
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Color.Red);   // "RED"
console.log(Color.Green); // "GREEN"

// Heterogeneous enum: This is a mix of numeric and string members, but it's generally not recommended to use this type of enum.
enum Mixed {
  No = 0,
  Yes = "YES"
}

console.log(Mixed.No);  // 0
console.log(Mixed.Yes); // "YES"

// Enums can also have computed and constant members. Constant members are those that can be evaluated at compile time, while computed members are those that require some computation to determine their value.

// Constant member: This is a member that is initialized with a constant expression.
enum FileAccess {
  Read = 1 << 1,   // 2
  Write = 1 << 2,  // 4
  ReadWrite = Read | Write, // 6
  G = "123".length // 3
}

console.log(FileAccess.Read);

// Using enum in functions
function getDirection(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "Going up!";
    case Direction.Down:
      return "Going down!";
    case Direction.Left:
      return "Going left!";
    case Direction.Right:
      return "Going right!";
    default:
      return "Unknown direction!";
  }
}

console.log(getDirection(Direction.Left)); // "Going left!"

// Reverse mapping: TypeScript provides reverse mapping for numeric enums, which allows you to get the name of an enum member from its value.
console.log(Direction[0]); // "Up"
console.log(Direction[3]); // "Right"
// Note: Reverse mapping is not available for string enums.

// Const enums: Const enums are a special kind of enum that is completely removed during compilation. They are useful for performance optimization when you don't need the enum to exist at runtime.
const enum Status {
  Active,
  Inactive,
  Pending
}

console.log(Status.Active); // 0 (but the enum itself does not exist at runtime)


// Array of enum values: You can create an array of enum values to iterate over them or to use them in a function.
const directions: Direction[] = [Direction.Up, Direction.Down, Direction.Left, Direction.Right];

directions.forEach(dir => {
  console.log(getDirection(dir));
});

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];