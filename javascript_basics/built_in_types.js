// number
let num = 2;

// string
let stringText = "technyks";

// boolean
let isStudent = true;

// null
let text = null;

// undefined
let a;

// object
let person = {
    name: 'Nikhil', // key: value
    age: 30,
    status: true
};

let isStatus = true;
let person1 = {
    name: 'Nikhil1', // key: value
    age: 30,
    isStatus: isStatus
};


let person2 = {
    name: 'Nikhil2', // key: value
    age: 30,
    isStatus
};

person2.isStatus = false;
person2.name = 'nyk';

person2 = {
    name: 'nyk',
    age: 25,
    isStatus: false,
};


// arrays

let arr = [10, 20];

let friend1 = 'RAM';
let friend2 = 'SHYAM';
let friend3 = 'KRISHNA';
let friend4 = 'BALRAM';
let friend5 = 'RADHA';

let friends = ["RAM", 'SHYAM', 'KRISHNA', 'BALRAM', "RADHA"];
console.log(friends.length);
friends[friends.length - 1];

friends.pop();
friends.push("RADHA NEW");
friends.push("RADHA 2");
friends[3] = 'BALRAM1';

let nums = [1, 2, 5, 10];
let boolean = [true, false, true];
let persons = [
    { name: 'a', age: 20 },
    { name: 'b', age: 19 },
];

let mixed = [42, 'hello', true, { name: 'x' }];


// comments, semicolon & best practices

// single line comment
/*
    This is a 
    multi-line 
    comment
*/
