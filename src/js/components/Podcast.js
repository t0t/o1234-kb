export class Podcast extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/style.css">
      <style>
        :host {
          display: block;
          background: var(--color-gray-900);
        }

        .podcast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-8);
          margin-top: var(--spacing-8);
        }

        .podcast-card {
          background: var(--color-gray-800);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .podcast-card:hover {
          transform: translateY(-5px);
        }

        .podcast-image {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
        }

        .podcast-content {
          padding: var(--spacing-6);
        }

        .podcast-title {
          font-size: var(--text-xl);
          color: var(--color-white);
          margin: 0 0 var(--spacing-2);
        }

        .podcast-description {
          color: var(--color-gray-400);
          line-height: 1.6;
          margin: 0;
        }

        .podcast-meta {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          margin-top: var(--spacing-4);
          color: var(--color-gray-400);
          font-size: var(--text-sm);
        }

        .podcast-duration {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .podcast-date {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }

        .icon {
          width: 16px;
          height: 16px;
        }

        @media (max-width: 768px) {
          .podcast-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <div class="podcast py-16">
        <div class="container">
          <div class="section-header">
            <h2>Latest Episodes</h2>
            <p class="section-description">
              Listen to our latest podcast episodes exploring the depths of the 01234 concept
            </p>
          </div>

          <div class="podcast-grid">
            <div class="podcast-card">
              <img src="/images/podcast-1.jpg" alt="Episode 1" class="podcast-image">
              <div class="podcast-content">
                <h3 class="podcast-title">Understanding the Zero Point</h3>
                <p class="podcast-description">
                  Explore the concept of zero as the foundation of all numbers and its philosophical implications.
                </p>
                <div class="podcast-meta">
                  <div class="podcast-duration">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    45 min
                  </div>
                  <div class="podcast-date">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Feb 15, 2024
                  </div>
                </div>
              </div>
            </div>

            <div class="podcast-card">
              <img src="/images/podcast-2.jpg" alt="Episode 2" class="podcast-image">
              <div class="podcast-content">
                <h3 class="podcast-title">The Power of Duality</h3>
                <p class="podcast-description">
                  Dive into the concept of duality and how it shapes our understanding of reality.
                </p>
                <div class="podcast-meta">
                  <div class="podcast-duration">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    38 min
                  </div>
                  <div class="podcast-date">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Feb 8, 2024
                  </div>
                </div>
              </div>
            </div>

            <div class="podcast-card">
              <img src="/images/podcast-3.jpg" alt="Episode 3" class="podcast-image">
              <div class="podcast-content">
                <h3 class="podcast-title">From Three to Manifestation</h3>
                <p class="podcast-description">
                  Learn how the numbers 3 and 4 complete the cycle from concept to reality.
                </p>
                <div class="podcast-meta">
                  <div class="podcast-duration">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    42 min
                  </div>
                  <div class="podcast-date">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Feb 1, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('podcast-section', Podcast);