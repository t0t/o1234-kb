class FAQ extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupAccordion();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/style.css">
      <style>
        :host {
          display: block;
          padding: var(--spacing-8);
          max-width: var(--container-sm);
          margin: 0 auto;
        }

        p {
          color: var(--color-black);
        }

        .faq-grid {
          display: grid;
          gap: var(--spacing-4);
          margin-top: var(--spacing-8);
        }

        .faq-item {
          background: var(--color-gray-700);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .faq-question {
          padding: var(--spacing-4) var(--spacing-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          color: var(--color-white);
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .faq-question:hover {
          background: var(--color-gray-600);
        }

        .faq-icon {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          padding: 0 var(--spacing-6);
          max-height: 0;
          overflow: hidden;
          color: var(--color-gray-100);
          transition: all 0.3s ease;
          background: var(--color-gray-300);
        }

        .faq-answer p {
          margin: 0;
          padding: var(--spacing-4) 0;
        }

        .faq-item.active .faq-question {
          background: var(--color-gray-600);
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
        }

        .faq-item.active .faq-answer {
          max-height: 300px;
        }

        @media (min-width: 768px) {
          .faq-grid {
            gap: var(--spacing-6);
          }
        }
      </style>

      <div class="faq">
          <div class="section-header">
            <h2>Frequently Asked Questions</h2>
            <p class="section-description">
              Common questions about the 01234 concept and its applications
            </p>
          </div>

          <div class="faq-grid">
            <div class="faq-item">
              <div class="faq-question">
                <span>What is the 01234 concept?</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="faq-answer">
                <p>The 01234 concept is a systematic approach to understanding and mastering any subject or skill. It breaks down progression into five distinct levels, from foundational knowledge (0) to complete mastery (4), providing a clear framework for learning and development.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span>How long does it take to progress through all levels?</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="faq-answer">
                <p>The time required varies depending on the subject matter and individual dedication. Some may progress quickly through early levels but spend more time mastering advanced concepts. The key is consistent practice and application of knowledge at each level.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span>Can I skip levels in the progression?</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="faq-answer">
                <p>While it's possible to have varying levels of competency across different aspects of a subject, the 01234 concept emphasizes building a strong foundation. Skipping levels may leave gaps in understanding that could hinder long-term progress.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span>How do I know when I've reached the next level?</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="faq-answer">
                <p>Each level has specific indicators of mastery. These might include the ability to explain concepts to others, solve complex problems, or create innovative solutions. Regular self-assessment and feedback from mentors can help track progress.</p>
              </div>
            </div>

            <div class="faq-item">
              <div class="faq-question">
                <span>Can the concept be applied to any field?</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="faq-answer">
                <p>Yes, the 01234 concept is designed to be universally applicable. Whether you're learning a new language, developing professional skills, or pursuing artistic endeavors, the framework can be adapted to structure your learning journey.</p>
              </div>
            </div>
          </div>
      </div>
    `;
  }

  setupAccordion() {
    const faqItems = this.shadowRoot.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
}

customElements.define('faq-section', FAQ);