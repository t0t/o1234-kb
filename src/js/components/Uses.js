export class Uses extends HTMLElement {
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
          background: var(--color-gray-900);
          padding: var(--spacing-16) 0;
          max-width: var(--container-md);
          margin: 0 auto;
        }

        .uses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-8);
          margin-top: var(--spacing-8);
        }

        .use-case {
          background: var(--color-gray-800);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          transition: transform 0.3s ease;
        }

        .use-case:hover {
          transform: translateY(-5px);
        }

        .use-case-icon {
          width: 48px;
          height: 48px;
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
        }

        .use-case-title {
          font-size: var(--text-xl);
          color: var(--color-white);
          margin: 0 0 var(--spacing-2);
        }

        .use-case-description {
          color: var(--color-gray-400);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .uses-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="uses">
          <div class="section-header">
            <h2>Use Cases</h2>
            <p class="section-description">
              Discover how the 01234 concept can be applied across different fields
            </p>
          </div>

          <div class="uses-grid">
            <div class="use-case">
              <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <h3 class="use-case-title">Education</h3>
              <p class="use-case-description">
                Structure learning materials and curriculum development using the 01234 framework for better comprehension.
              </p>
            </div>

            <div class="use-case">
              <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <h3 class="use-case-title">Project Management</h3>
              <p class="use-case-description">
                Apply the concept to project planning and execution, ensuring systematic progress through each stage.
              </p>
            </div>

            <div class="use-case">
              <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <h3 class="use-case-title">Research & Development</h3>
              <p class="use-case-description">
                Guide research processes from initial concept to final implementation using the structured approach.
              </p>
            </div>

            <div class="use-case">
              <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16 8a4 4 0 0 0-8 0v2h8V8z"></path>
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
              </svg>
              <h3 class="use-case-title">Personal Development</h3>
              <p class="use-case-description">
                Track personal growth and skill development through the five stages of mastery.
              </p>
            </div>

            <div class="use-case">
              <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 class="use-case-title">Team Management</h3>
              <p class="use-case-description">
                Improve team dynamics and collaboration by understanding different levels of interaction.
              </p>
            </div>

            <div class="use-case">
              <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <h3 class="use-case-title">Business Strategy</h3>
              <p class="use-case-description">
                Develop and implement business strategies using the systematic progression of the 01234 framework.
              </p>
            </div>
          </div>
      </div>
    `;
  }
}

customElements.define('uses-section', Uses);