/* Condition statements
Conditional statements are used to perform different actions based on different conditions. They help control the flow of your code based on conditions that evaluate to true or false.
*/

/* if statement
syntax: if(condition) {
// code to execute if condition is true
}
*/

let age = 65;

if (age >= 18) {
  console.log("You are eligible to vote");
  console.log(age);
}

// if(age >= 18) console.log('You are eligible to vote');

// if...else statement
if (age >= 18) {
  console.log("You are eligible to vote");

  // if(age > 64) {
  //     return; // return statement
  // }

  console.log(age);
} else {
  console.log("You are not eligible to vote");
}

// if...else if...else statement
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 30) {
  console.log("Grade C");
} else {
  console.log("fail");
}

// Ternary operator (conditional operator)
// a shorthand for if...else

// syntax: condition ? expression1 : expression2;
let age1 = 10;
let message = age1 >= 18 ? "You can vote" : "You cannot vote";
console.log("message: ", message);

// switch statement
// used for testing a variable against multiple values (cases).

/* syntax: switch(expression) {
case val1: // code to execute; break;
case val2: // code to execute; break;
default: // code to execute;
}
*/

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    console.log("it is");
    break;
  case 2:
    console.log("Tuesday");
    console.log("it is");
    break;

  case 3:
    console.log("Wednesday");
    console.log("it is");
    break;

  default:
    console.log("invalid day");
}

score = -1;
switch (true) {
  case score >= 90 && score <= 100:
    console.log("Grade: A");
    break;
  case score >= 75 && score < 90:
    console.log("Grade: B");
    break;
  case score >= 0 && score < 75:
    console.log("Grade: C");
    break;
  default:
    console.log("Invalid Score");
}

age = 19;
// nested if else
let hasId = true;
if (age >= 18 && age <= 64) {
  console.log("You are eligible to vote");

  if (hasId) {
    console.log("You can enter the voting booth");
  } else {
    console.log("ID required");
  }

  console.log(age);
} else {
  console.log("You are not eligible to vote");
}
