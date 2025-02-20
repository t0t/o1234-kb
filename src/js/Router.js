export class Router {
  constructor() {
    this.sections = [
      'features',
      'fundamentals',
      'info',
      'contact'
    ];

    // Handle initial route
    this.handleInitialRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  handleInitialRoute() {
    // Get the initial hash or default to features
    const initialHash = window.location.hash.slice(1) || 'features';
    this.navigateToSection(initialHash);
  }

  handleRoute() {
    const hash = window.location.hash.slice(1);
    if (this.sections.includes(hash)) {
      this.navigateToSection(hash);
    }
  }

  navigateToSection(sectionId) {
    // Dispatch navigation event
    const navigationEvent = new CustomEvent('section-navigation', {
      detail: { sectionId },
      bubbles: true,
      composed: true
    });
    window.dispatchEvent(navigationEvent);
  }
}

// Initialize router
const router = new Router();