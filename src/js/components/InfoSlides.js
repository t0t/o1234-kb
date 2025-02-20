export class InfoSlides extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentSlide = 0;
    this.animations = [];
    this.fps = 30; 
    this.fpsInterval = 1000 / this.fps;
    this.lastTime = 0;
  }

  connectedCallback() {
    this.render();
    this.setupSlides();
    this.setupCanvasAnimations();
    
    document.addEventListener('scrollToSection', (event) => {
      if (event.detail.sectionId === 'info') {
        const section = this.shadowRoot.querySelector('#info-slides');
        if (section) {
          const navbarHeight = document.querySelector('nav-bar').offsetHeight;
          const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/style.css">
      <style>
        :host {
          display: block;
          background: var(--color-gray-800);
        }

        .container {
          max-width: var(--container-xl);
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        h2 {
          font-size: var(--size-4xl);
          color: var(--color-white);
          margin: 0 0 1rem;
        }

        .info-slides {
        }

        .section-description {
          color: var(--color-gray-400);
          font-size: var(--size-lg);
          max-width: 600px;
          margin: 0 auto;
        }

        .slides-container {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          margin-top: 2rem;
        }

        .slides {
          display: flex;
          transition: transform 0.5s ease;
        }

        .slide {
          flex: 0 0 100%;
          padding: 3rem;
          box-sizing: border-box;
        }

        .slide-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }

        .slide-content {
          text-align: left;
        }

        .slide-canvas {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 8px;
        }

        .slide-title {
          font-size: var(--size-4xl);
          color: var(--color-white);
          margin: 0 0 1.5rem;
        }

        .slide-description {
          font-size: var(--size-lg);
          color: var(--color-gray-400);
          line-height: 1.6;
          margin: 0;
        }

        .slide-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .slide-nav-button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid var(--color-primary);
          background: none;
          cursor: pointer;
          padding: 0;
          transition: background-color 0.3s ease;
        }

        .slide-nav-button.active {
          background: var(--color-primary);
        }

        .slide-arrows {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 1rem;
          pointer-events: none;
        }

        .arrow-button {
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
          transition: background-color 0.3s ease;
        }

        .arrow-button:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        @media (max-width: 768px) {
          .slide-inner {
            grid-template-columns: 1fr;
          }

          .slide-content {
            text-align: center;
          }
        }
      </style>

      <div class="info-slides">
          <div class="section-header">
            <h2>Explore the Concept</h2>
            <p class="section-description">
              Dive deeper into the 01234 concept through our comprehensive guide
            </p>
          </div>

          <div class="slides-container">
            <div class="slides">
              <div class="slide">
                <div class="slide-inner">
                  <canvas class="slide-canvas" width="400" height="400"></canvas>
                  <div class="slide-content">
                    <h3 class="slide-title">Understanding the Basics</h3>
                    <p class="slide-description">
                      The 01234 concept provides a framework for understanding how systems and ideas evolve from their most basic form to their full manifestation.
                    </p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="slide-inner">
                  <canvas class="slide-canvas" width="400" height="400"></canvas>
                  <div class="slide-content">
                    <h3 class="slide-title">Practical Applications</h3>
                    <p class="slide-description">
                      Learn how to apply the 01234 concept in various fields, from personal development to organizational structure and scientific research.
                    </p>
                  </div>
                </div>
              </div>

              <div class="slide">
                <div class="slide-inner">
                  <canvas class="slide-canvas" width="400" height="400"></canvas>
                  <div class="slide-content">
                    <h3 class="slide-title">Advanced Concepts</h3>
                    <p class="slide-description">
                      Explore advanced applications and interconnections within the 01234 framework, discovering deeper layers of understanding and insight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="slide-arrows">
              <button class="arrow-button prev" aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              <button class="arrow-button next" aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </div>

            <div class="slide-nav"></div>
        </div>
      </div>
    `;
  }

  setupSlides() {
    const slidesContainer = this.shadowRoot.querySelector('.slides');
    const slides = this.shadowRoot.querySelectorAll('.slide');
    const prevButton = this.shadowRoot.querySelector('.prev');
    const nextButton = this.shadowRoot.querySelector('.next');
    const slideNav = this.shadowRoot.querySelector('.slide-nav');

    slides.forEach((_, index) => {
      const button = document.createElement('button');
      button.classList.add('slide-nav-button');
      button.setAttribute('aria-label', `Go to slide ${index + 1}`);
      button.addEventListener('click', () => this.goToSlide(index));
      slideNav.appendChild(button);
    });

    this.updateNavigation();

    prevButton.addEventListener('click', () => this.previousSlide());
    nextButton.addEventListener('click', () => this.nextSlide());
  }

  setupCanvasAnimations() {
    const canvases = this.shadowRoot.querySelectorAll('.slide-canvas');

    canvases.forEach((canvas, index) => {
      const ctx = canvas.getContext('2d');
      canvas.width = 400;
      canvas.height = 400;
      let isVisible = true;
      let animationId;

      // Intersection Observer para pausar cuando no es visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            if (!animationId) animate();
          } else {
            if (animationId) {
              cancelAnimationFrame(animationId);
              animationId = null;
            }
          }
        });
      }, { threshold: 0.1 });

      observer.observe(canvas);

      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;
      let particles = [];
      let time = 0;

      switch(index) {
        case 0: 
          for(let i = 0; i < 8; i++) { 
            const angle = (i / 8) * Math.PI * 2;
            particles.push({
              x: centerX + Math.cos(angle) * 100,
              y: centerY + Math.sin(angle) * 100,
              baseX: centerX + Math.cos(angle) * 100,
              baseY: centerY + Math.sin(angle) * 100,
              size: 4, 
              angle: angle,
              speed: 0.015 
            });
          }
          break;

        case 1: 
          for(let i = 0; i < 6; i++) { 
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: 4, 
              speedX: (Math.random() - 0.5) * 1.0, 
              speedY: (Math.random() - 0.5) * 1.0  
            });
          }
          break;

        case 2: 
          for(let i = 0; i < 16; i++) { 
            const radius = 120 + Math.random() * 30; 
            const angle = (i / 16) * Math.PI * 2;
            particles.push({
              x: centerX + Math.cos(angle) * radius,
              y: centerY + Math.sin(angle) * radius,
              size: 3, 
              angle: angle,
              radius: radius,
              speed: 0.015 + Math.random() * 0.01, 
              phase: Math.random() * Math.PI * 2
            });
          }
          break;
      }

      const animate = () => {
        if (!isVisible) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        switch(index) {
          case 0: 
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.beginPath();
            particles.forEach((p, i) => {
              const radius = 100 + Math.sin(time * 1.5 + p.angle) * 15; 
              p.x = centerX + Math.cos(p.angle + time * p.speed) * radius;
              p.y = centerY + Math.sin(p.angle + time * p.speed) * radius;
              
              if (i === 0) {
                ctx.moveTo(p.x, p.y);
              } else {
                ctx.lineTo(p.x, p.y);
              }
            });
            ctx.closePath();
            ctx.stroke();

            particles.forEach(p => {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fill();
            });
            break;

          case 1: 
            particles.forEach(p => {
              p.x += p.speedX;
              p.y += p.speedY;

              if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
              if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fill();
            });

            particles.forEach((p1, i) => {
              particles.slice(i + 1).forEach(p2 => {
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) { 
                  const pulse = Math.sin(time * 2) * 0.15 + 0.7; 
                  const alpha = (1 - distance / 120) * pulse;
                  ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                  ctx.beginPath();
                  ctx.moveTo(p1.x, p1.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.stroke();
                }
              });
            });
            break;

          case 2: 
            particles.forEach(p => {
              const wave = Math.sin(time * 1.5 + p.phase) * 15; 
              p.x = centerX + Math.cos(p.angle + time * p.speed) * (p.radius + wave);
              p.y = centerY + Math.sin(p.angle + time * p.speed) * (p.radius + wave);

              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fill();

              particles.forEach(p2 => {
                const distance = Math.hypot(p2.x - p.x, p2.y - p.y);
                if (distance < 60) { 
                  const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
                  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                  ctx.strokeStyle = gradient;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.stroke();
                }
              });
            });
            break;
        }
        time += 0.016;

        animationId = requestAnimationFrame(animate);
      };

      animate();
    });
  }

  disconnectedCallback() {
    this.animations.forEach(id => clearInterval(id));
  }

  goToSlide(index) {
    const slides = this.shadowRoot.querySelector('.slides');
    this.currentSlide = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    this.updateNavigation();
  }

  previousSlide() {
    const totalSlides = this.shadowRoot.querySelectorAll('.slide').length;
    this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
    this.goToSlide(this.currentSlide);
  }

  nextSlide() {
    const totalSlides = this.shadowRoot.querySelectorAll('.slide').length;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
    this.goToSlide(this.currentSlide);
  }

  updateNavigation() {
    const navButtons = this.shadowRoot.querySelectorAll('.slide-nav-button');
    navButtons.forEach((button, index) => {
      button.classList.toggle('active', index === this.currentSlide);
    });
  }
}

customElements.define('info-slides-section', InfoSlides);