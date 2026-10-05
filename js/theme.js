/**
 * THEME MANAGEMENT
 * Handles dark/light mode switching and persistence
 */

class ThemeManager {
  constructor() {
    this.storageKey = 'portfolio-theme';
    this.darkClass = 'dark';
    this.lightClass = 'light';
    this.init();
  }

  init() {
    // Get stored theme or use system preference
    const storedTheme = localStorage.getItem(this.storageKey);
    const systemPreference = this.getSystemTheme();
    const theme = storedTheme || systemPreference || this.darkClass;

    this.setTheme(theme);

    // Listen for theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.setTheme(e.matches ? this.darkClass : this.lightClass);
      }
    });
  }

  getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return this.darkClass;
    }
    return this.lightClass;
  }

  setTheme(theme) {
    const root = document.documentElement;

    // Remove both classes and add the new one
    root.classList.remove(this.darkClass, this.lightClass);
    root.setAttribute('data-theme', theme);

    // Store preference if not system default
    if (theme !== this.getSystemTheme()) {
      localStorage.setItem(this.storageKey, theme);
    } else {
      localStorage.removeItem(this.storageKey);
    }

    this.updateThemeIcon(theme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === this.darkClass ? this.lightClass : this.darkClass;
    this.setTheme(newTheme);
  }

  updateThemeIcon(theme) {
    const icon = document.getElementById('themeToggle');
    if (icon) {
      // Icon updates via CSS can be handled, but for now we leave it visual only
      icon.setAttribute('aria-label', `Switch to ${theme === this.darkClass ? 'light' : 'dark'} mode`);
    }
  }

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }
}

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
  });
} else {
  new ThemeManager();
}
