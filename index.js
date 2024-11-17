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

// Changes the active class to whichever tab is clicked
function changeActiveTab(event) {
    // Get all the navigation links
    let home = document.getElementById("_home");
    let services = document.getElementById("_services");
    let contact = document.getElementById("_contact");

    // Remove active class from all links first
    home.classList.remove("active");
    services.classList.remove("active");
    contact.classList.remove("active");

    // Add active class to the clicked tab
    event.target.classList.add("active");
}

// Hides hamburger menu when clicked
function hideHamburgerMenu (event) {
    let menu = document.getElementById("hamburger-menu");

    menu.style.display = "none"; // Hide the menu
}

// Shows hamburger menu when nav-links is closed
function showHamburgerMenu (event) {
    let menu = document.getElementById("hamburger-menu");
    
    menu.style.display = "block"; // Show the menu
}

// Function to handle scroll event and update the active class
function updateActiveTabOnScroll() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("#nav-links a");
    
    // Check each section's position relative to the viewport
    sections.forEach((section, index) => {
        let rect = section.getBoundingClientRect();
        let navLink = navLinks[index];
        
        // If the section is in the viewport, add the active class
        if (rect.top <= 0 && rect.bottom >= 0) {
            navLinks.forEach(link => link.classList.remove("active")); // Remove active from all links
            navLink.classList.add("active"); // Add active to the current section's link
        }
    });
}

// Add scroll event listener
window.addEventListener("scroll", updateActiveTabOnScroll);

// Initial call to set the active class on page load (in case user lands in the middle of the page)
updateActiveTabOnScroll();
