let mobileMenuOpenBtn = document.querySelector('#hamburger'),
  mobileMenuCloseBtn = document.querySelector('#close-btn'),
  mobileMenu = document.querySelector('.mobile-menu');

mobileMenuOpenBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
})
mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
})