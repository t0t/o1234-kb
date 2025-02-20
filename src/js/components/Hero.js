class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.lastTime = 0;
    this.fps = 30; // Limit FPS to 30 for better performance
    this.fpsInterval = 1000 / this.fps;
  }

  connectedCallback() {
    this.render();
    this.setupCanvas();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          min-height: 100vh;
          position: relative;
          overflow: visible;
          background: var(--color-gray-900);
        }

        canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: var(--z-0);
          pointer-events: none;
          overflow: hidden;
        }

        .content {
          position: relative;
          z-index: var(--z-10);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: var(--spacing-4);
        }

        .logo {
          width: 120px;
          height: 120px;
          margin-bottom: var(--spacing-8);
          color: var(--color-white);
        }

        .logo path {
          fill: var(--color-primary-500);
        }

        .logo:hover {
          color: var(--color-primary-500);
        }

        .logo .number {
          paint-order: stroke;
        }

        .logo .number-text {
          fill: var(--color-white);
          font-size: 10px;
          font-weight: 700;
        }

        .logo .number-stroke {
          stroke: var(--color-gray-900);
          stroke-width: 6px;
        }

        .external-link-icon {
          width: 1em;
          height: 1em;
          margin-left: 0.5em;
          vertical-align: middle;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          justify-content: center;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          text-align: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .button-primary {
          border: none;
          color: var(--color-white);
          background-color: var(--color-gray-600);
        }

        .button-primary:hover {
          background-color: var(--color-gray-700);
          transform: translateY(-2px);
        }

        .button-outline {
          background: transparent;
          color: var(--color-white);
          border: 1px solid var(--color-white);
        }

        .button-outline:hover {
          background: var(--color-white);
          color: var(--color-gray-900);
        }

        @media (min-width: 768px) {
          .logo {
            width: 160px;
            height: 160px;
          }

          h1 {
            font-size: var(--size-5xl);
          }
        }
      </style>

      <canvas></canvas>
      <div class="content">
        <svg class="logo" viewBox="0 0 40 40">
          <g transform="matrix(0.79707,0,0,0.79707,4.26536,4.67272)">
            <circle class="circle" cx="10" cy="20" r="9.5" fill="none" stroke="currentColor" />
          </g>
          <g transform="matrix(0.79707,0,0,0.79707,3.56175,4.67272)">
            <circle class="circle" cx="30" cy="20" r="9.5" fill="none" stroke="currentColor" />
          </g>
          <g transform="matrix(0.779859,0,0,0.779859,4.27397,4.68132)">
            <circle class="circle" cx="20" cy="20" r="19.5" fill="none" stroke="currentColor" />
          </g>
          <g transform="matrix(0.779859,0,0,0.779859,4.27397,4.68132)">
            <text class="number number-text number-stroke" x="-2" y="25">0</text>
            <text class="number number-text number-stroke" x="18" y="25">1</text>
            <text class="number number-text number-stroke" x="17" y="42">2</text>
            <text class="number number-text number-stroke" x="17" y="4">3</text>
            <text class="number number-text number-stroke" x="35" y="25">4</text>
          </g>
        </svg>

        <h1>Los 5 símbolos que se me ocurren en todo</h1>
        <p>Descubre una forma insultántemente elemental de percibir el mundo.</p>

        <div class="buttons">
          <button class="button button-primary" href="https://t0t.github.io/o1234-dev/" target="_blank">
            Agente IA te responde
            <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </button>
          <button class="button button-outline" href="/assets/pdf/o4-document.pdf" download>Download PDF</button>
        </div>
      </div>
    `;
  }

  setupCanvas() {
    const canvas = this.shadowRoot.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let isVisible = true;

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

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      // Reduce particle count by increasing divisor
      const particleCount = Math.floor(canvas.width * canvas.height / 20000);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5, // Reduce particle size
          speedX: (Math.random() - 0.5) * 0.3, // Reduce speed
          speedY: (Math.random() - 0.5) * 0.3  // Reduce speed
        });
      }
    };

    const animate = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const computedStyle = getComputedStyle(this);
      const particleColor = computedStyle.getPropertyValue('--color-particle') || 'rgba(255, 255, 255, 0.6)';
      ctx.fillStyle = particleColor;

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  disconnectedCallback() {
    if (this.cleanup) {
      this.cleanup();
    }
  }
}

customElements.define('hero-section', Hero);