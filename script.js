// Simple smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', evt => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      evt.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade‑in on scroll for sections and cards
const animatedItems = document.querySelectorAll(
  'section, .skill-category, .project-card, .timeline-item'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-on-scroll');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

animatedItems.forEach(item => observer.observe(item));
