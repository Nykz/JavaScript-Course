/* 
ES6+ Features:
ES6 (ECMAScript 2015) introduced new syntax and features to JavaScript to make it more modern and developer-friendly. Later updates (ES7, ES8, etc.) added even more features.
*/

// Let and Const (vs var):

// Block-scoped variable declarations.
// Replaced var for better scope management.
let x = 10; // Can be reassigned
const y = 20; // Cannot be reassigned

// Arrow Functions:
// Concise syntax for writing functions.
// Does not have its own this.
const greet = () => console.log("Hello, ES6+");

// Template Literals:
// Multi-line strings and string interpolation.
const name23 = "Nikhil";
console.log(`Hello, ${name23}!`);

// Destructuring:
// Extract values from arrays/objects into variables.
const [a, b] = [1, 2];
const { x1, y1 } = { x1: 10, y1: 20 };

// Default Parameters:
// Assign default values to function parameters.
const multiply = (a, b = 1) => a * b;

// Spread and Rest Operators:

// Spread (...): Expands arrays or objects.
// Rest (...): Collects arguments into an array.
const arr = [1, 2, 3];
const copy = [...arr];
const sum = (...args) => args.reduce((a, b) => a + b);

// Classes:
// Introduced in ES6 for Object-Oriented Programming.
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

// Promises and Async/Await: For asynchronous operations.
const fetchData = async () => {
    const data = await fetch('https://api.example.com');
    console.log(data);
};

// Modules - Use import and export for modular programming.
export const greet1 = () => console.log("Hello!");

// Symbol Data Type - 
// Unique and immutable primitive data type
// Created using Symbol() function
// Guaranteed to be unique, even with the same description
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1.description, sym2.description);
console.log(sym1 == sym2);

// Use cases
const ID = Symbol('id');
const user = {
    name: 'John',
    [ID]: 123  // Using Symbol as a unique identifier
    // Uses the value of ID (a Symbol) as the key
};

console.log(user.name);
console.log(user['name']);

console.log(user.ID); // undefined (no property named 'ID')
console.log(user[ID]); // 123 (accesses the property with the Symbol key)

/*
Key Characteristics

Cannot be accidentally created
Used as unique object keys
Not enumerable in for...in loops
Helpful for creating non-string property keys

Practical Applications

Creating unique object keys
Defining "hidden" properties
Creating non-string property keys
Preventing property name collisions
*/


// Map & Set Data Structures
/*
Map

Key-value collection
Keys can be of any type
Maintains insertion order
Efficient key lookups 
*/

// creating a map
const userRoles = new Map();

// adding entries
userRoles.set('Nikhil', 'Admin');
userRoles.set('Diya', 'User');

// checking & retrieving
console.log(userRoles.has('Nikhil')); // true
console.log(userRoles.get('Diya')); // User

// Iterating
for(const [user, role] of userRoles) {
    console.log(`${user}: ${role}`);
}

// map size & deletion
console.log(userRoles.size); // 2
userRoles.delete('Diya');
console.log(userRoles);

/*
Set

Unique value collection
No duplicate values allowed
Fast lookup and removal
 */

// creating a set
const uniqueNums = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(uniqueNums);

// adding & checking
uniqueNums.add(6);
console.log(uniqueNums);
console.log(uniqueNums.has(3)); // true

// removing
uniqueNums.delete(2);
console.log(uniqueNums);

// set operations
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// union
const union12 = new Set([...set1, ...set2]);
console.log(union12);

const union1 = set1.union(set2);
console.log(union1);

// intersection
const intersection21 = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection21);

const intersection1 = set1.intersection(set2);
console.log(intersection1);


// Best Practices
// Use Symbols for unique, non-string property keys
// Maps for key-value storage with complex keys
// Sets for unique value collections


// Special features

// exponential operator **
console.log(2 ** 3); // 8

// includes()
console.log([1, 2, 3].includes(2)); // true

// Object methods
// Object.values() & Object.entries() & Object.key()
const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
console.log(Object.keys(obj)); // ['a', 'b']

// Flat method
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]
// depth: An optional parameter specifying how deep the flat() method should go while flattening the nested array. The default value is 1.

// Optional Chaining
const user12 = {};
console.log(user12?.address?.street); // undefined (no error)

// Nullish Coalescing (??)
const count = null;
console.log(count ?? 42); // 42

console.log(count || 42); // 42

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

let xy = 1;

xy ||= 5;
// Purpose: Assigns 5 to xy if xy is falsy.
// Falsy Values: In JavaScript, false, 0, '' (empty string), null, undefined, and NaN are considered falsy.
console.log(xy);

// equivalent code
if(!xy) {
    xy = 5;
}

xy &&= 10;
// Purpose: Assigns 10 to x if x is truthy.
// Truthy Values: Any value that is not falsy is considered truthy.
console.log(xy);

//equivalent code
if(xy) {
    xy = 10;
}

// Numeric Separators
const billion = 1_000_000_000; // More readable
console.log(billion);

// Finding last element
const array = [1, 2, 3, 4, 5];
console.log(array.findLast(x => x < 4)); // 3


// array-copy methods
// toSorted() - Returns a sorted copy of the array.
const arr3 = [3, 1, 2];
const sortedArr = arr3.toSorted();
const sortedArr1 = arr3.toSorted((a, b) => b - a);
console.log(sortedArr); // [1, 2, 3]
console.log(arr3);       // [3, 1, 2] (unchanged)

// toReversed() - Returns a reversed copy of the array.
const reversedArr = arr3.toReversed();
console.log(reversedArr);

// toSpliced()
// The toSpliced() method is a non-mutating version of the splice() method. It allows you to create a new array with the specified changes while leaving the original array unchanged.

// array.toSpliced(start, deleteCount, ...itemsToAdd)

const arr12 = [1, 2, 3, 4, 5];
const newArr = arr12.toSpliced(2, 2); // [1,2,5]
console.log(newArr);
console.log(arr12);

const newArr1 = arr12.toSpliced(1, 1, 'a', 'b');
console.log(newArr1);

arr12.splice(2, 2);
console.log(arr12);
