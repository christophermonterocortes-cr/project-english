/* ============================================================
   CTP La Carpio — main.js (Bulletproofed)
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme Toggle (with safe localStorage) ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  // Safely check localStorage (prevents crashes on local file viewing)
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('ctp-theme');
  } catch (e) {
    console.warn('localStorage is blocked. Theme will not persist.');
  }

  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    updateThemeIcon(root.getAttribute('data-theme') || 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('ctp-theme', next);
      } catch (e) { /* ignore */ }
      updateThemeIcon(next);
    });
  }

  /* ---------- Mobile Hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  }

  /* ---------- Navbar shadow on scroll ---------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 6px 30px rgba(0,0,0,0.18)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Active nav highlight ---------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  /* ---------- AOS Init (with fallback) ---------- */
  if (typeof AOS !== 'undefined' && window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  } else {
    // Fallback: If AOS fails to load, force all elements to be visible
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  /* ---------- Particle Background (Hero only) ---------- */
  const canvas = document.getElementById('particles');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h, animationId;
    const PARTICLE_COUNT = window.innerWidth < 768 ? 35 : 70;
    const COLORS = ['#368564', '#7dd5ba', '#251e16', '#ffffff'];

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2.2 + 0.6,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.6 + 0.2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(54, 133, 100, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(draw);
    }

    function start() {
      resize();
      createParticles();
      cancelAnimationFrame(animationId);
      draw();
    }

    start();
    window.addEventListener('resize', () => {
      clearTimeout(window.__particleResize);
      window.__particleResize = setTimeout(start, 200);
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        draw();
      }
    });
  }

})();