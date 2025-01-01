// Problem 1 - filter students by grade
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];

const topStudents = students.filter(
    (student) => student.grade === "A"
);

console.log(topStudents);

// problem 2 - destructure personal information
const person = { name1: "John", age: 28, city: "New York" };
const { name1, city } = person;
console.log(name1);
console.log(city);

// problem 3 - Use map to create a new array to double the element value of original array
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
