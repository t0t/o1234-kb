import './css/global.css';
import './js/components/Navbar.js';
import './js/components/Hero.js';
import './js/components/Features.js';
import './js/components/Fundamentals.js';
import './js/components/Uses.js';
import './js/components/InfoSlides.js';
import './js/components/FAQ.js';
import './js/components/Contact.js';
import './js/components/Footer.js';
import './js/components/Video.js';

// Crear el contenido principal
document.querySelector('#app').innerHTML = `
  <nav-bar></nav-bar>
  <main>
    <section id="hero">
      <hero-section></hero-section>
    </section>
    <section id="features" class="container">
      <features-section></features-section>
    </section>
    <section id="fundamentals" class="container">
      <fundamentals-section></fundamentals-section>
    </section>
    <section id="video" class="container">
      <video-section></video-section>
    </section>
    <section id="uses" class="container">
      <uses-section></uses-section>
    </section>
    <section id="info-slides" class="container">
      <info-slides-section></info-slides-section>
    </section>
    <section id="faq" class="container">
      <faq-section></faq-section>
    </section>
    <section id="contact" class="container">
      <contact-section></contact-section>
    </section>
  </main>
  <footer-section></footer-section>
`;

// Configurar IntersectionObserver para la navegación
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main > section');
  const navBar = document.querySelector('nav-bar');

  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px 0px 0px', // Ajustar por la altura del navbar
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        // Notificar al navbar qué sección está visible
        navBar.setAttribute('active-section', id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});
