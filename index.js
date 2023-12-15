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

 
  var welcomeSection = document.getElementById('home'); 
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

document.addEventListener('DOMContentLoaded', function() {
 
  showSection('home');

 
  document.querySelectorAll('.navbar-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var targetSectionId = link.getAttribute('href').substring(1);
      showSection(targetSectionId);
    });
  });
});
