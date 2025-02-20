export class Features extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
          max-width: var(--container-lg);
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-8);
          margin-top: var(--spacing-8);
        }

        .feature-card {
          background: var(--color-gray-800);
          padding: var(--spacing-6);
          border-radius: var(--radius-lg);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          margin-bottom: var(--spacing-3);
          color: var(--color-primary);
        }

        .feature-title {
          font-size: var(--text-xl);
          color: var(--color-white);
          margin: 0 0 var(--spacing-2);
        }

        .feature-description {
          color: var(--color-gray-400);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="features">
          <div class="section-header">
            <h2>Key Features</h2>
            <p class="section-description">
              Discover how the 01234 concept helps you understand and navigate complex systems
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4M12 8h.01"></path>
              </svg>
              <h3 class="feature-title">Simple Yet Powerful</h3>
              <p class="feature-description">
                Based on just five numbers (0-4), providing an intuitive framework for understanding complex relationships.
              </p>
            </div>

            <div class="feature-card">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <h3 class="feature-title">Universal Application</h3>
              <p class="feature-description">
                Applicable across various fields including science, philosophy, business, and personal development.
              </p>
            </div>

            <div class="feature-card">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"></path>
              </svg>
              <h3 class="feature-title">Structured Learning</h3>
              <p class="feature-description">
                Organized framework that helps you understand and remember complex concepts more effectively.
              </p>
            </div>

            <div class="feature-card">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13.8 12H3"></path>
              </svg>
              <h3 class="feature-title">Easy Integration</h3>
              <p class="feature-description">
                Seamlessly integrates with existing knowledge systems and learning methodologies.
              </p>
            </div>

            <div class="feature-card">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h3 class="feature-title">Layered Understanding</h3>
              <p class="feature-description">
                Provides multiple levels of depth, allowing for both basic and advanced understanding of concepts.
              </p>
            </div>

            <div class="feature-card">
              <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
              </svg>
              <h3 class="feature-title">Community Driven</h3>
              <p class="feature-description">
                Growing community of practitioners sharing insights and applications across different domains.
              </p>
            </div>
          </div>
      </div>
    `;
  }
}

customElements.define('features-section', Features);