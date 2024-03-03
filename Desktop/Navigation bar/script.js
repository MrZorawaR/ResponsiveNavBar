document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
  