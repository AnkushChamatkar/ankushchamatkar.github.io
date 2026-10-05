/**
 * GSAP ANIMATIONS
 * Handles all scroll animations and interactions
 */

gsap.registerPlugin(ScrollTrigger);

class AnimationManager {
  constructor() {
    this.init();
  }

  init() {
    this.animateLoader();
    this.animateScrollElements();
    this.setupHoverEffects();
    this.setupParallax();
  }

  // ===== LOADER ANIMATION =====

  animateLoader() {
    const loader = document.getElementById('pageLoader');
    if (!loader || loader.classList.contains('hidden')) return;

    const tl = gsap.timeline({ defaults: { duration: 0.8 } });

    tl.from('.loader-icon', {
      opacity: 0,
      scale: 0.5,
      duration: 0.6
    })
    .from('.loader-name', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, 0.1)
    .from('.loader-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, 0.2)
    .from('.loader-status', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, 0.3)
    .to('.page-loader', {
      opacity: 0,
      visibility: 'hidden',
      duration: 0.8,
      delay: 1.2
    });
  }

  // ===== SCROLL ANIMATIONS =====

  animateScrollElements() {
    // Hero animations
    gsap.utils.toArray('.hero-title, .hero-subtitle, .hero-description, .hero-statement, .hero-cta').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Grid items animation
    gsap.utils.toArray('.grid-item').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.hero-visual',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // About section animations
    gsap.from('.about-text', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from('.about-stats', {
      opacity: 0,
      x: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.about',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      }
    });

    // Stat cards staggered animation
    gsap.utils.toArray('.stat-card').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Highlight items animation
    gsap.utils.toArray('.highlight-item').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: '.about-highlights',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Experience timeline animation
    gsap.utils.toArray('.experience-item').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.7,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.experience',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Achievement cards animation
    gsap.utils.toArray('.achievement-card').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.achievements',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Skills grid animation
    gsap.utils.toArray('.skill-category').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.08,
        scrollTrigger: {
          trigger: '.skills',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Automation section animations
    gsap.from('.automation-flow', {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.automation-flow',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from('.testing-pyramid', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.testing-pyramid',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.projects',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Learning cards animation
    gsap.utils.toArray('.learning-card').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.learning',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Education cards animation
    gsap.utils.toArray('.education-card').forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: '.education',
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Contact section animation
    gsap.from('.contact-info', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from('.contact-cta', {
      opacity: 0,
      x: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      }
    });

    // Section title animations
    gsap.utils.toArray('.section-title').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Section subtitle animations
    gsap.utils.toArray('.section-subtitle').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  // ===== HOVER EFFECTS =====

  setupHoverEffects() {
    // Card hover effects
    const cards = document.querySelectorAll('.experience-card, .achievement-card, .skill-category, .project-card, .learning-card, .education-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          duration: 0.3
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: 'none',
          duration: 0.3
        });
      });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          scale: 1.05,
          duration: 0.3
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.3
        });
      });
    });

    // Skill item hover effects
    const skillItems = document.querySelectorAll('.skill-item, .approach-tag, .tech-tag');
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.1,
          duration: 0.2
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.2
        });
      });
    });

    // Stat card hover
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -6,
          duration: 0.3
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3
        });
      });
    });
  }

  // ===== PARALLAX EFFECTS =====

  setupParallax() {
    // Parallax for hero visual
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
      gsap.to('.grid-item', {
        y: gsap.utils.unitize((index) => index * 10),
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          markers: false
        }
      });
    }

    // Parallax for section backgrounds
    gsap.to('.about::before', {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'bottom center',
        scrub: 2
      }
    });
  }
}

// Initialize animations when page is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
  });
} else {
  new AnimationManager();
}

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.refresh());
});
