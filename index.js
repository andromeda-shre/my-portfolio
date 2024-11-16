const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const navbar = document.querySelector('header');

// Check if user preference exists in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Store user preference in local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add('is-sticky');
    } else {
        navbar.classList.remove('is-sticky');
    }
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Function to download resume
function downloadFile() {
    const link = document.createElement('a');
    link.href = 'files/Andromeda Person Resume.pdf';
    link.download = 'Andromeda Person Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Get the hamburger menu, nav links, and close button
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

// When the hamburger menu is clicked, toggle the 'active' class to show the navbar
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// When the close button (X) is clicked, remove the 'active' class to hide the navbar
closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

