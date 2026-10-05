/**
 * MAIN APPLICATION LOGIC
 * Renders portfolio data and manages core functionality
 */

class PortfolioApp {
  constructor() {
    this.data = portfolioData;
    this.init();
  }

  init() {
    this.renderHero();
    this.renderAbout();
    this.renderExperience();
    this.renderAchievements();
    this.renderSkills();
    this.renderProjects();
    this.renderLearning();
    this.renderEducation();
    this.renderContact();
    this.setupNavigation();
    this.setupScrollBehavior();
    this.hideLoader();
  }

  // ===== RENDER METHODS =====

  renderHero() {
    const heroStatement = document.getElementById('heroStatement');
    if (heroStatement) {
      heroStatement.textContent = this.data.heroStatement;
    }
  }

  renderAbout() {
    const aboutDesc = document.getElementById('aboutDescription');
    if (aboutDesc) {
      aboutDesc.textContent = this.data.about.description;
    }

    const highlights = document.getElementById('aboutHighlights');
    if (highlights) {
      highlights.innerHTML = this.data.about.highlights
        .map(h => `<div class="highlight-item">${this.escapeHtml(h)}</div>`)
        .join('');
    }

    // Render stats
    document.getElementById('statExp').textContent = this.data.statistics.yearsExperience;
    document.getElementById('statProjects').textContent = this.data.statistics.projectsDelivered;
    document.getElementById('statCompanies').textContent = this.data.statistics.companiesWorked;
    document.getElementById('statTestCases').textContent = this.data.statistics.testCasesCreated;
  }

  renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline) return;

    timeline.innerHTML = this.data.experience
      .map(exp => `
        <div class="experience-item">
          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-company">${this.escapeHtml(exp.company)}</div>
              <div class="experience-role">${this.escapeHtml(exp.role)}</div>
              <div class="experience-duration">${this.escapeHtml(exp.duration)}</div>
              <div class="experience-location">📍 ${this.escapeHtml(exp.location)}</div>
            </div>

            <div class="experience-description">
              ${this.escapeHtml(exp.description)}
            </div>

            <div class="experience-responsibilities">
              <h4>Key Responsibilities</h4>
              ${exp.responsibilities.map(r => `<div class="responsibility-item">${this.escapeHtml(r)}</div>`).join('')}
            </div>

            <div class="experience-achievements">
              <h4>Achievements</h4>
              ${exp.achievements.map(a => `<div class="achievement-item">${this.escapeHtml(a)}</div>`).join('')}
            </div>

            <div class="experience-tech">
              ${exp.technologies.map(tech => `<span class="tech-tag">${this.escapeHtml(tech)}</span>`).join('')}
            </div>
          </div>
        </div>
      `)
      .join('');
  }

  renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;

    grid.innerHTML = this.data.achievements
      .map((achievement, index) => `
        <div class="achievement-card" style="animation-delay: ${index * 0.1}s">
          <div class="achievement-icon">🎯</div>
          <h3 class="achievement-title">${this.escapeHtml(achievement.title)}</h3>
          <p class="achievement-description">${this.escapeHtml(achievement.description)}</p>
          <span class="achievement-category">${this.escapeHtml(achievement.category)}</span>
        </div>
      `)
      .join('');
  }

  renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    const skills = [
      this.data.skills.automation,
      this.data.skills.programming,
      this.data.skills.apiTesting,
      this.data.skills.functionalTesting,
      this.data.skills.specializedTesting,
      this.data.skills.cicd,
      this.data.skills.database,
      this.data.skills.methodologies
    ];

    grid.innerHTML = skills
      .map(skill => `
        <div class="skill-category">
          <h3 class="skill-title">${this.escapeHtml(skill.title)}</h3>
          <span class="skill-level">${this.escapeHtml(skill.level)}</span>
          <div class="skill-items">
            ${skill.items.map(item => `<span class="skill-item">${this.escapeHtml(item)}</span>`).join('')}
          </div>
        </div>
      `)
      .join('');
  }

  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = this.data.projects
      .map(project => `
        <div class="project-card">
          <div class="project-header">
            <h3 class="project-name">${this.escapeHtml(project.name)}</h3>
            <span class="project-domain">${this.escapeHtml(project.domain)}</span>
          </div>

          <div class="project-body">
            <p class="project-description">${this.escapeHtml(project.description)}</p>

            <div class="project-approach">
              <label class="project-approach-label">Testing Approach</label>
              <div class="approach-items">
                ${project.testingApproach.map(t => `<span class="approach-tag">${this.escapeHtml(t)}</span>`).join('')}
              </div>
            </div>

            <div class="project-approach">
              <label class="project-approach-label">Automation</label>
              <div class="approach-items">
                ${project.automationApproach.map(a => `<span class="approach-tag">${this.escapeHtml(a)}</span>`).join('')}
              </div>
            </div>

            <div class="project-tech">
              ${project.technologies.map(tech => `<span class="tech-tag">${this.escapeHtml(tech)}</span>`).join('')}
            </div>
          </div>
        </div>
      `)
      .join('');
  }

  renderLearning() {
    const grid = document.getElementById('learningGrid');
    if (!grid) return;

    grid.innerHTML = this.data.learning
      .map(learning => {
        const statusClass = learning.status === 'Currently Learning' ? 'learning' : 'professional';
        return `
          <div class="learning-card">
            <div class="learning-header">
              <h3 class="learning-name">${this.escapeHtml(learning.name)}</h3>
              <span class="learning-status ${statusClass}">${this.escapeHtml(learning.status)}</span>
            </div>

            <p class="learning-description">${this.escapeHtml(learning.description)}</p>

            ${learning.technologies && learning.technologies.length > 0 ? `
              <div class="learning-tech">
                ${learning.technologies.map(t => `<span class="tech-tag">${this.escapeHtml(t)}</span>`).join('')}
              </div>
            ` : ''}

            ${learning.keyPoints && learning.keyPoints.length > 0 ? `
              <div class="learning-keypoints">
                ${learning.keyPoints.map(kp => `<div class="keypoint-item">${this.escapeHtml(kp)}</div>`).join('')}
              </div>
            ` : ''}

            ${learning.experience ? `<div class="learning-experience">Experience: ${this.escapeHtml(learning.experience)}</div>` : ''}
          </div>
        `;
      })
      .join('');
  }

  renderEducation() {
    const grid = document.getElementById('educationGrid');
    if (!grid) return;

    grid.innerHTML = this.data.education
      .map(edu => `
        <div class="education-card">
          <div class="education-degree">${this.escapeHtml(edu.degree)}</div>
          <div class="education-field">${this.escapeHtml(edu.field)}</div>
          <div class="education-institution">${this.escapeHtml(edu.institution)}</div>
          <div class="education-duration">${this.escapeHtml(edu.duration)}</div>
        </div>
      `)
      .join('');
  }

  renderContact() {
    const contactInfo = document.getElementById('contactInfo');
    if (!contactInfo) return;

    const items = [
      { icon: '✉️', label: 'Email', value: this.data.personal.email, href: `mailto:${this.data.personal.email}` },
      { icon: '📍', label: 'Location', value: this.data.personal.location },
      { icon: '📱', label: 'Phone', value: this.data.personal.phone, href: `tel:${this.data.personal.phone}` },
      { icon: '🔗', label: 'LinkedIn', value: 'Connect on LinkedIn', href: this.data.personal.linkedin }
    ];

    contactInfo.innerHTML = items
      .map(item => `
        <div class="contact-item">
          <div class="contact-icon">${item.icon}</div>
          <div class="contact-details">
            <h3>${this.escapeHtml(item.label)}</h3>
            ${item.href ?
              `<a href="${item.href}" target="_blank" rel="noopener">${this.escapeHtml(item.value)}</a>` :
              `<p>${this.escapeHtml(item.value)}</p>`
            }
          </div>
        </div>
      `)
      .join('');
  }

  // ===== NAVIGATION & SCROLL =====

  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');
        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
        }

        this.updateActiveNav();
      });
    });

    // Hamburger menu toggle
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-controls') && !e.target.closest('.nav-menu')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });

    // Update active nav on scroll
    window.addEventListener('scroll', () => this.updateActiveNav());
  }

  updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }

  setupScrollBehavior() {
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ===== LOADER =====

  hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 1800);
    }
  }

  // ===== UTILITIES =====

  escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
  });
} else {
  new PortfolioApp();
}
