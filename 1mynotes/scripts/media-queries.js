// Select elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add event listener (construct: event handling + function)
menuToggle.addEventListener('click', function() {
  // Toggle class (construct: if/else logic simplified)
  navLinks.classList.toggle('show');
});
