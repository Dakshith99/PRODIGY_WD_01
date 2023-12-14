const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

function showSection(sectionId) {
  var sections = document.querySelectorAll('.content-section');
  sections.forEach(function (section) {
    section.style.display = 'none';
    section.classList.remove('active-section');
  });

  // Handle the special case for the "welcome" section
  var welcomeSection = document.getElementById('home'); // Update this ID
  if (sectionId === 'home') {
    welcomeSection.style.display = 'block';
    welcomeSection.classList.add('active-section');
  } else {
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
      selectedSection.classList.add('active-section');
    }
  }
}

document.querySelectorAll('.navbar-link').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetSectionId = link.getAttribute('href').substring(1);
    showSection(targetSectionId);
  });
});
// ... (your existing JavaScript code)

// Add this at the end of your JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Show the home section by default when the page loads
  showSection('default');

  // Add event listeners to each navbar link
  document.querySelectorAll('.navbar-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetSectionId = link.getAttribute('href').substring(1);
      showSection(targetSectionId);
    });
  });
});
