document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');

  // Sicherstellen, dass der Event-Listener korrekt registriert wird
  burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    console.log('Burger-Menü geklickt'); // Zum Debuggen
  });

  // Menü beim Klicken auf einen Link schließen (optional)
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.add('hidden');
    });
  });
});

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // Toggle zwischen sichtbar und unsichtbar
});

