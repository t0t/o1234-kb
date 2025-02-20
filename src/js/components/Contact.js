export class Contact extends HTMLElement {
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

        .section-description {
          color: var(--color-gray-400);
          font-size: var(--size-lg);
          max-width: 600px;
          margin: 0 auto;
        }

        .whatsapp-button {
          text-align: center;
        }

        .whatsapp-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: #25D366;
          border-radius: 4px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .whatsapp-link:hover {
          background: #128C7E;
        }

        .whatsapp-icon {
          width: 24px;
          height: 24px;
        }

        .social-links {
          text-align: center;
        }

        .social-links h3 {
          color: var(--color-white);
          font-size: var(--size-xl);
          margin-bottom: 1.5rem;
        }

        .social-grid {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          color: var(--color-white);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: var(--color-primary);
        }

        .social-icon {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 1fr;
          }
        }
      </style>

      <section id="contact">
        <div class="container">
          <div class="section-header">
            <h2>Get in Touch</h2>
            <p class="section-description">
              Have questions about the 01234 concept? We'd love to hear from you
            </p>
            <p style="color: var(--color-gray-400); margin-top: 0.5rem;">
              ${new Date().getFullYear()} 01234 Concept. All rights reserved.
            </p>
          </div>

          <div class="contact-content">
            <div class="whatsapp-button">
              <a href="https://wa.me/your-number" class="whatsapp-link" target="_blank" rel="noopener noreferrer">
                <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact us on WhatsApp
              </a>
            </div>

            <div class="social-links">
              <h3>Connect With Us</h3>
              <div class="social-grid">
                <a href="https://www.instagram.com/cuenta.01234/" class="social-link" target="_blank" rel="noopener noreferrer">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>

                <a href="https://www.instagram.com/sergio.01234/" class="social-link" target="_blank" rel="noopener noreferrer">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>

                <a href="https://x.com/t0tinspire" class="social-link" target="_blank" rel="noopener noreferrer">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>

                <a href="https://www.youtube.com/@0-1234" class="social-link" target="_blank" rel="noopener noreferrer">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>

                <a href="https://github.com/t0t" class="social-link" target="_blank" rel="noopener noreferrer">
                  <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('contact-section', Contact);