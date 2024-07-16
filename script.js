document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const navLinks = document.querySelector('.links');
  
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  
