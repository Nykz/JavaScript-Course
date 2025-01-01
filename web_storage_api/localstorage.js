// localstorage CRUD

// store data in localStorage
localStorage.setItem('username', 'Nikhil');

const userData12 = {
    name: 'Nikhil',
    country: 'India'
};
localStorage.setItem('userData', JSON.stringify(userData12));

// retrieve data from localStorage
let user = localStorage.getItem('username');
console.log(user);

let userDataString = localStorage.getItem('userData');
console.log(userDataString);
let userData = JSON.parse(userDataString);
console.log(userData);

// remove a specific item
localStorage.removeItem('username');

// clear all data
localStorage.clear();

// update item
localStorage.setItem('username', 'Nikhil1');