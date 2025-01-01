// addEventListener() - Binds an event to an element
const button = document.getElementById('myButton');

// Event types

// click events
button.addEventListener('click', () => {
    alert('Button clicked');
});

// mouse events
button.addEventListener('mouseover', () => {
    console.log('Mouse hovered over the Button');
});

// keyboard events HTML
const input = document.getElementById('name');
input.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Form events HTML
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted', event);

    // Create a FormData object from the form
    const formData = new FormData(form);
    console.log('username', formData.get('username'));


    // Iterate through the form data
    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
});
