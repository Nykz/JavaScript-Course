// Arithmetic operators: +, -, *, /, %

// Addition (+)
let op1 = 5 + 2; // 7

// Subtraction (-)
let op2 = 5 - 2; // 3

// Multiplication (*)
let op3 = 5 * 2; // 10

// Division (/)
let op4 = 4 / 2; // 2

// Modulus (Remainder %)
let op5 = 5 % 2; // 1

console.log('Arithmetic operators: ', op1, op2, op3, op4, op5);


// Comparison operators

// == (equal to means value only)
let isEqual = 5 == '5'; // true (loose comparison)

// === (strict equal to means value + type)
let isStrictEqual = 5 === '5'; // false (strict comparison)

// not equal to (!=) - value only
let isNotEqual = 5 != '5'; // false (loose comparison)

// !== (strict not equal to means value + type)
// let a = 5;
let isStrictNotEqual = 5 !== '5'; // true (strict comparison)
console.log('Comparison operators: ', isEqual, isStrictEqual, isNotEqual, isStrictNotEqual);

// Logical operators

// && (AND)
let lop1 = true && false; // false - 1 * 0 = 0, 1 * 1 = 1 otherwise always 0

// || (OR)
let lop2 = true || false; // true - 1 + 0 = 1, 0 + 0 = 0 otherwise always 1

// ! (NOT) inverts the value - true becomes false, & vice versa
let lop3 = !true; // false

console.log('Logical operators: ', lop1, lop2, lop3);


/*
Define a variable to check if a person's age is between 18 - 64 or not
*/
// combining multiple conditions
let age = 35;
let isAdult = (age >= 18) && (age < 65); // true age is between 18 & 64

/*
---------------- Increment (++) and Decrement (--) Operators --------------------

Increment Operator (++)
    The ++ operator increases the value of a variable by 1. x++ = x + 1, ++x = x + 1

    Syntax:
        Pre-increment: ++variable
        Post-increment: variable++

        Pre-increment: Increments the value of the variable before it is used in the expression.
        Post-increment: Increments the value of the variable after it is used in the expression.
 */

        let x = 5;

        // pre-increment
        console.log(++x); // 6 (x is incremented before being logged)
        console.log(x); // 6

        // post-increment
        x = 5; // reset x
        console.log(x++); // 5 (x is logged first, then incremented)
        console.log(x); // 6 (x is now incremented)

        
/*
Decrement Operator (--)
    The -- operator decreases the value of a variable by 1. x-- = x - 1, --x = x - 1

    Syntax:
        Pre-decrement: --variable
        Post-decrement: variable--
        
        Pre-decrement: Decrements the value of the variable before it is used in the expression.
        Post-decrement: Decrements the value of the variable after it is used in the expression.
*/

let y = 5;

// pre-decrement
console.log(--y); // 4
console.log(y); // 4

// post-decrement
y = 5;
console.log(y--); // 5
console.log(y); // 4

// examples

// increment
let a = 3;
let b = ++a + 2; // pre-increment - a becomes 4, b = 4 + 2
console.log(a); // 4
console.log(b); // 6

a = 3;
let c = a++ + 2; // post-increment - c = 3 + 2, then a becomes 4
console.log(a); // 4
console.log(c); // 5

// decrement
let p = 3;
let q = --p + 2; // pre-decrement - p becomes 2, q = 2 + 2
console.log(p); // 2
console.log(q); // 4

p = 3;
let r = p-- + 2; // post-decrement - r = 3 + 2, then p becomes 2
console.log(p); // 2
console.log(r); // 5


/*
Edge cases

Increment/Decrement on Non-Numeric Values
JavaScript automatically converts non-numeric values to numbers when using ++ or --.
 */
let str = "5";
str++;
console.log(str); // 6 (string "5" is converted to number 5)

let bool = true;
bool++;
console.log(bool); // 2 (true is converted to 1, then incremented)

let notNumber = "hello";
notNumber++;
console.log(notNumber); // NaN ("hello" cannot be converted to a number)

// Increment/Decrement with undefined or null:
let val;
val++; 
console.log(val); // NaN (undefined becomes NaN)

val = null;
val++;
console.log(val); // 1 (null is treated as 0)

// Combining with Other Operators
let x1 = 5;
// x1 += 5 // x1 = x1 + 5
x1 += ++x1; // 6, then x1 + 6 = 11
console.log(x1); // 11

x1 = 5;
x1 += x1++; // x1 + 5 = 10
console.log(x1); // 10


// Real world apps

// managing counters
let cartItems = 0;

// add items to cart
cartItems++;
console.log(cartItems); // 1

// remove items from cart 
cartItems--;
console.log(cartItems); // 0

// array indexing
let fruits = ['Apple', 'Banana', 'Cherry'];
let index = 0;

// access the first fruit, & then move to the next
console.log(fruits[index++]); // 'Apple
console.log(fruits[index]); // 'Banana

/*
Best Practices
Use pre-increment or pre-decrement when you want to update the value before using it in an expression.
Use post-increment or post-decrement when you need to use the original value in an expression before updating it.
Avoid combining increment/decrement operators with other complex expressions to improve code readability.
*/