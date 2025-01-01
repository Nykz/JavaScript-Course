// Problem 1: Change the background color of a div when a button is clicked.

const btn = document.getElementById('changeColorBtn');
const box = document.getElementById('colorBox');

btn.addEventListener('click', () => {
    box.style.backgroundColor = 'blue';
});