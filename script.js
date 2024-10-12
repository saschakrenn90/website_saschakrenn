const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

// Toggle Menü beim Klick
burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
