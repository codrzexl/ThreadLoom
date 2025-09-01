'use strict';
/**
 * Mobile navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});


/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});

function handleNavigationClick(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href'); 
  const targetSection = document.querySelector(targetId); 

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' }); 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('[data-nav-link]');

  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavigationClick);
  });
});
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');

cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});