export class Video extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/css/components.css">
      <style>
        :host {
          display: block;
          background: var(--color-gray-900);
          max-width: var(--container-sm);
          margin: 0 auto;
        }
        
        .video-wrapper {
          margin: 0 auto;
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          overflow: hidden;
          margin-top: var(--spacing-8);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-description {
          margin-top: var(--spacing-6);
          color: var(--color-gray-400);
          text-align: center;
          font-size: var(--text-lg);
          line-height: 1.6;
        }
      </style>

      <div class="video py-16">
        <div class="container">
          <div class="section-header">
            <h2>Watch & Learn</h2>
            <p class="section-description">
              Get a visual introduction to the 01234 concept through our comprehensive video guide
            </p>
          </div>

          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/Dto8UDHcw9I" 
              title="01234 Concept Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

          <p class="video-description">
            This introductory video explains the core principles of the 01234 concept and how you can apply it in your daily life.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('video-section', Video);