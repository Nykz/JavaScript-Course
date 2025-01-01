// changing content
const message = document.getElementById('message');
message.textContent = 'New Message'; // changes text

message.innerHTML = '<b>New Message 1</b>'; // adds html

// Updating Attributes
const image = document.getElementById('image');
image.setAttribute('alt', 'New Image');
image.setAttribute('src', 'new.jpg');

console.log(image.getAttribute('src'));

// Manipulating styles
// use the style property to change inline styles
const styled = document.getElementById('styled');
styled.style.color = 'blue';
styled.style.fontSize = '20px';

// Adding / Removing classes
// use classList to add, remove or toggle classes.
const box = document.getElementById('box');
box.classList.add('shadow'); // adds 'shadow' class

box.classList.remove('red-box'); // removes 'red-box' class

box.classList.toggle('highlight'); // toggles 'highlight' class


// Adding & Removing Elements
// use appendChild, removeChild, innerHTML, etc...

const list = document.getElementById('list');
const newItem = document.createElement('li'); // creates a new element
newItem.textContent = 'Item 2';
list.appendChild(newItem); // adds a new item

list.removeChild(list.firstElementChild); // removes 'Item 1'

// list.innerHTML = '<li>Item 1</li><li>Item 3</li>';

const newItem3 = document.createElement('li'); // creates a new element
newItem3.textContent = 'Item 3';
list.insertBefore(newItem3, list.firstChild); // inserts 'Item 3' before 'Item 2'

// remove()
// removes an element directly
list.remove(); // removes the ul