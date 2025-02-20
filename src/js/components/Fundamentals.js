export class Fundamentals extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Listen for section navigation events
    window.addEventListener('section-navigation', (event) => {
      if (event.detail.sectionId === 'fundamentals') {
        const navbarHeight = document.querySelector('nav-bar').offsetHeight || 0;
        const targetPosition = this.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="src/css/styles.css">
      <style>
        :host {
          display: block;
          background: var(--color-gray-900);
          max-width: var(--container-lg);
          margin: 0 auto;
        }

        .fundamentals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-6);
          margin-top: var(--spacing-8);
        }

        .fundamental-card {
          background: var(--color-gray-800);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          gap: var(--spacing-3);
          transition: transform 0.3s ease;
        }

        .fundamental-card:hover {
          transform: translateY(-5px);
        }

        .number {
          font-size: var(--text-4xl);
          font-weight: bold;
          color: var(--color-primary);
          line-height: 1;
        }

        .content {
          flex: 1;
        }

        .fundamental-title {
          font-size: var(--text-xl);
          color: var(--color-white);
          margin: 0 0 var(--spacing-2);
        }

        .fundamental-description {
          color: var(--color-gray-400);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .fundamentals-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="fundamentals py-16">
          <div class="section-header">
            <h2>Fundamentals</h2>
            <p class="section-description">
              Understanding the five fundamental numbers that form the basis of the 01234 concept
            </p>
          </div>

          <div class="fundamentals-grid">
            <div class="fundamental-card">
              <div class="number">0</div>
              <div class="content">
                <h3 class="fundamental-title">The Origin</h3>
                <p class="fundamental-description">
                  Represents the source, void, or starting point. It's the foundation from which all other numbers emerge.
                </p>
              </div>
            </div>

            <div class="fundamental-card">
              <div class="number">1</div>
              <div class="content">
                <h3 class="fundamental-title">Unity</h3>
                <p class="fundamental-description">
                  Symbolizes singularity, individuality, and the first manifestation of form from the void.
                </p>
              </div>
            </div>

            <div class="fundamental-card">
              <div class="number">2</div>
              <div class="content">
                <h3 class="fundamental-title">Duality</h3>
                <p class="fundamental-description">
                  Represents polarity, contrast, and the interaction between opposing forces.
                </p>
              </div>
            </div>

            <div class="fundamental-card">
              <div class="number">3</div>
              <div class="content">
                <h3 class="fundamental-title">Creation</h3>
                <p class="fundamental-description">
                  Embodies synthesis, creativity, and the emergence of new possibilities from duality.
                </p>
              </div>
            </div>

            <div class="fundamental-card">
              <div class="number">4</div>
              <div class="content">
                <h3 class="fundamental-title">Manifestation</h3>
                <p class="fundamental-description">
                  Signifies stability, structure, and the complete manifestation of potential into reality.
                </p>
              </div>
            </div>
          </div>
      </div>
    `;
  }
}

customElements.define('fundamentals-section', Fundamentals);