// objects - collection of key-value pairs

const student = {
    name: 'Abc',
    age: 25,
    grade: 'A'
};

console.log(student.name); // abc

// object methods & this keyword

// object methods - Functions defined inside objects.They can operate on the object’s properties.
const person = {
    firstName: 'Krishna',
    lastName: 'Kumar',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); // Krishna Kumar

// this keyword - refers to the object that is calling the method. in above example this.firstName refers to person.firstName

console.log(this);

/* 
What is this?

It’s a reference to the object that the function 
is currently attached to or being called from.
Its value depends on how a function is called, not where it's written.

Why is this Important?

It allows functions to be flexible and reusable across different objects.
It helps in accessing properties or methods of the object 
that is calling the function.
*/

// Arrow functions don’t have their own this. Instead, they inherit this from the surrounding (lexical) scope.
const person1 = {
    firstName: 'Krishna',
    lastName: 'Kumar',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`; // 'this' refers to the outer scope, not the person1 object
    }
};
console.log(person1.fullName()); // Krishna Kumar

// Lexical scope refers to the fact that the value of this (or any variable) in a function is determined by where the function is defined, not where it is called