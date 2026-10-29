document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeNav = () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (mobileClose) mobileClose.addEventListener('click', closeNav);
    mobileLinks.forEach(link => link.addEventListener('click', closeNav));
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) closeNav();
    });
  }

  // Schedule Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const scheduleDays = document.querySelectorAll('.schedule-day');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetDay = btn.getAttribute('data-day');
      scheduleDays.forEach(day => {
        if (targetDay === 'all' || day.getAttribute('data-day') === targetDay) {
          day.style.display = 'block';
        } else {
          day.style.display = 'none';
        }
      });
    });
  });

  // Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

