// Hamburger Menü Toggling
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Kapcsolat Űrlap Beküldés
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Itt hozzáadhatsz AJAX kérést a backendhez
    alert('Köszönöm az üzenetedet! Hamarosan válaszolok.');
    contactForm.reset();
});

// Scroll Animációk Inicializálása
AOS.init({
    duration: 1000,
    once: true
});

// Készségek Progress Bar Animáció
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        bar.style.width = bar.style.width;
    });
});
