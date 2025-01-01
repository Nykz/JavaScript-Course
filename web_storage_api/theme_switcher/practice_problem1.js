// Practice Problem 1: User Preferences (Theme Switcher)
// Problem: Implement a light/dark mode theme switcher for a webpage. The user's theme preference should be saved in localStorage so that it persists even after the user refreshes the page or reopens the browser.
// Steps:
// * Create a simple webpage with a button that toggles between light and dark modes.
// * Save the user's theme choice (light or dark) in localStorage.
// * On page load, check localStorage for the saved theme and apply it.

const body = document.getElementById('body');
const toggleBtn = document.getElementById('toggleBtn');

function applyTheme(theme) {
    if(theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
}

// On page load, apply the stored theme from localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme) {
    applyTheme(savedTheme);
} else {
    // default to light mode if no theme is stored
    applyTheme('light'); 
}

// toggle theme on button click
toggleBtn.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // save the theme to localstorage
    localStorage.setItem('theme', newTheme);

    // apply the new theme
    applyTheme(newTheme);
});