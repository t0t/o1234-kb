class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Observar el componente Hero para cambiar el estilo de la navbar
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.shadowRoot.host.classList.add('nav-transparent');
          this.shadowRoot.host.classList.remove('nav-scrolled');
        } else {
          this.shadowRoot.host.classList.remove('nav-transparent');
          this.shadowRoot.host.classList.add('nav-scrolled');
        }
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px' // Ajustar según la altura de la navbar
      }
    );

    // Esperar a que el Hero esté en el DOM
    requestAnimationFrame(() => {
      const hero = document.querySelector('#hero');
      if (hero) {
        observer.observe(hero);
        // Establecer estado inicial
        this.shadowRoot.host.classList.add('nav-transparent');
      }
    });

    this.render();
    this.setupEventListeners();
  }

  static get observedAttributes() {
    return ['active-section'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'active-section' && oldValue !== newValue) {
      this.updateActiveLink(newValue);
    }
  }

  setActiveSection(sectionId) {
    this.setAttribute('active-section', sectionId);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
        }

        :host(.nav-transparent) {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
        }

        :host(.nav-scrolled) {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        nav {
          max-width: var(--max-width);
          margin: 0 auto;
          padding: var(--spacing-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-color-light);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--color-white);
        }

        .logo svg {
          width: 40px;
          height: 40px;
          color: var(--color-white);
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

        .logo .circle {
          stroke-width: 1;
        }

        .logo:hover svg {
          color: var(--color-primary-500);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.3s;
          cursor: pointer;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary-color);
        }

        .menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        dialog {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-color);
          border: none;
          padding: 2rem;
          margin: 0;
          max-height: 100vh;
          overscroll-behavior: contain;
        }

        dialog::backdrop {
          background: rgba(0, 0, 0, 0.5);
        }

        dialog .nav-links {
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        dialog .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-color);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-button {
            display: block;
          }
        }
      </style>

      <nav>
        <a href="#hero" class="logo">
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
        </a>
        <ul class="nav-links">
          <li><a href="#features">Características</a></li>
          <li><a href="#fundamentals">Fundamentos</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#uses">Usos</a></li>
          <li><a href="#info-slides">Info</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <button class="menu-button" aria-label="Abrir menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <dialog>
        <button class="close-button" aria-label="Cerrar menú">×</button>
        <ul class="nav-links">
          <li><a href="#features">Características</a></li>
          <li><a href="#fundamentals">Fundamentos</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#uses">Usos</a></li>
          <li><a href="#info-slides">Info</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </dialog>
    `;
  }

  setupEventListeners() {
    const menuButton = this.shadowRoot.querySelector('.menu-button');
    const dialog = this.shadowRoot.querySelector('dialog');
    const closeButton = this.shadowRoot.querySelector('.close-button');
    const links = this.shadowRoot.querySelectorAll('a[href^="#"]');

    menuButton.addEventListener('click', () => {
      dialog.showModal();
    });

    closeButton.addEventListener('click', () => {
      dialog.close();
    });

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          if (dialog.open) {
            dialog.close();
          }
        }
      });
    });
  }

  updateActiveLink(sectionId) {
    // Actualizar enlaces en ambos menús (móvil y desktop)
    const allLinks = this.shadowRoot.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      if (href === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

customElements.define('nav-bar', Navbar);