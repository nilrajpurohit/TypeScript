// Intersection Types in TypeScript
type Person = {
    name: "Alice",
    age: 30
}

type Employee = {
    employeeId: "E123",
    department: "HR"
}

// Intersection type combining Person and Employee
type Staff = Person & Employee;

const staffMember: Staff = {
    name: "Alice",
    age: 30,
    employeeId: "E123",
    department: "HR"
}

console.log(staffMember);