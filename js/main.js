/* ============================================================
   CTP La Carpio — main.js (All-in-One · Cloudflare Safe)
   ============================================================ */

// 1. Translation Dictionary (Declared outside so it's always accessible)
const translations = {
  en: {
    "nav.home": "Home", "nav.mv": "Mission & Vision", "nav.subareas": "Subareas",
    "nav.qr": "QR", "nav.video": "Video", "nav.contact": "Contact",
    "hero.eyebrow": "Professional Technical College · MEP · Costa Rica",
    "hero.desc": "We train full-stack developers with critical thinking, entrepreneurial vision, and technical mastery to face the challenges of the digital world.",
    "hero.cta1": "Explore Subareas", "hero.cta2": "Mission & Vision",
    "stat.subareas": "Subareas", "stat.years": "Years", "stat.mep": "MEP",
    "index.explore.kicker": "Welcome", "index.explore.title": "Discover Our Specialty",
    "index.explore.sub": "A tour through the pillars that define the technical profile of the Web Development student at CTP La Carpio.",
    "exp.mv.title": "Mission & Vision", "exp.mv.desc": "Our educational commitment to the La Carpio community.",
    "exp.sub.title": "Subareas", "exp.sub.desc": "6 specialized modules covering the entire tech stack.",
    "exp.qr.title": "MEP Documents", "exp.qr.desc": "Access official program records via QR codes.",
    "exp.video.title": "Info Video", "exp.video.desc": "Discover the benefits of Technical English in our specialty.",
    "exp.see": "See more",
    "index.tech.kicker": "Tech Stack", "index.tech.title": "Technologies You Will Master",
    "mv.kicker": "Our Horizon", "mv.title": "Mission <span class='accent'>&</span> Vision",
    "mv.sub": "The institutional principles that guide the training of future web developers at CTP La Carpio.",
    "mv.mission.title": "Mission", "mv.vision.title": "Vision",
    "mv.mission.text": "An educational center of excellence that provides the student population with opportunities for comprehensive training and professional growth, stimulating entrepreneurship and insertion into the labor market.",
    "mv.vision.text": "To be an institution that provides well-being to students through a quality educational system, promoting excellence and a culture of peace, in order to achieve transformation in the comprehensive development of the educational community.",
    "mv.values.title": "Institutional Values",
    "val.excel": "Excellence", "val.integrity": "Integrity", "val.emp": "Entrepreneurship",
    "val.inc": "Inclusion", "val.innov": "Innovation", "val.peace": "Culture of Peace",
    "sub.kicker": "Curriculum", "sub.title": "Subareas of the <span class='accent'>Specialty</span>",
    "sub.sub": "Six formative pillars that structure the profile of the Web Development student.",
    "sub1.title": "Information Technologies", "sub1.desc": "IT fundamentals, networks, operating systems and hardware. The technical base upon which the entire specialty is built.",
    "sub2.title": "Entrepreneurship & Innovation", "sub2.desc": "Agile methodologies, project management and creative thinking to transform ideas into real tech products.",
    "sub3.title": "Web Programming", "sub3.desc": "HTML, CSS, JavaScript, Python, PHP and C#. Frontend, Backend and Full-Stack development with a practical approach to real projects.",
    "sub4.title": "Software Design", "sub4.desc": "Systems architecture, UI/UX principles and database modeling to build robust and scalable applications.",
    "sub5.title": "IT Support", "sub5.desc": "Preventive and corrective maintenance, LAN/WLAN network configuration and professional technical incident response.",
    "sub6.title": "English Oriented to Web Dev", "sub6.desc": "Technical vocabulary, reading official documentation and professional communication in English for the web development environment.",
    "qr.kicker": "Official Access", "qr.title": "QR <span class='accent'>Codes</span>",
    "qr.sub": "Scan each code to access official information about the MEP Web Development program.",
    "qr1.title": "Study Program", "qr1.note": "Link to the official MEP syllabus for the Web Development specialty, with the full curriculum and learning objectives.",
    "qr2.title": "Technical Education", "qr2.note": "Portal of the Directorate of Technical Education of the MEP, with info on technical colleges and their specialties nationwide.",
    "qr3.title": "Student Profile", "qr3.note": "Official document with the graduation profile, competencies and skills acquired by students during the specialty.",
    "qr4.title": "CTP La Carpio", "qr4.note": "Institutional information of the Professional Technical College La Carpio: location, educational services and current academic offer.",
    "qr.open": "Open link",
    "qr.info": "To scan the QR codes, use your phone's camera or any QR reader app. All links direct to official websites of the Ministry of Public Education of Costa Rica.",
    "vid.kicker": "Multimedia", "vid.title": "Info <span class='accent'>Video</span>",
    "vid.sub": "Learn more about the Technical English subarea and its impact on the professional profile.",
    "vid.info.title": "Technical English Subarea — Benefits & Profile",
    "vid.info.p1": "The <strong>English Oriented to Web Development</strong> subarea is a key component of the Web Development specialty at CTP La Carpio. It equips students with the technical vocabulary, reading comprehension skills, and professional communication strategies required to thrive in an international tech environment.",
    "vid.info.p2": "Throughout this subarea, students learn to read and interpret official documentation, collaborate on platforms such as GitHub, participate in stand-up meetings, and present technical projects confidently in English. The goal is to prepare graduates who can work seamlessly in remote teams, freelance for international clients, and pursue continuous learning through global tech resources.",
    "vid.b1": "Technical documentation reading", "vid.b2": "Professional communication",
    "vid.b3": "Global job market readiness", "vid.b4": "Remote team collaboration",
    "cont.kicker": "About Us", "cont.title": "Contact <span class='accent'>& Location</span>",
    "cont.sub": "Institutional information for CTP La Carpio and the Web Development specialty.",
    "cont.role": "Professional Technical College", "cont.spec": "Specialty: Web Development",
    "cont.address": "Address", "cont.address_val": "La Carpio, San José, Costa Rica",
    "cont.inst": "Institution", "cont.inst_val": "Ministry of Public Education (MEP)",
    "cont.mod": "Modality", "cont.mod_val": "Professional Technical Education · In-person",
    "cont.sched": "Schedule", "cont.sched_val": "Monday to Friday · 7:00 a.m. – 4:00 p.m.",
    "cont.about.title": "About the Specialty",
    "cont.about.p1": "The <strong>Web Development</strong> specialty at CTP La Carpio is part of the academic offering of Technical Education by the MEP. It is designed to prepare students with technical, humanistic, and entrepreneurial skills that allow them to enter the labor market or continue their higher education.",
    "cont.about.p2": "Our institution is located in <strong>La Carpio, San José</strong>, and serves a diverse and entrepreneurial community. The teaching staff is committed to academic excellence and the comprehensive well-being of the student body.",
    "cont.f1.title": "Technical Labs", "cont.f1.desc": "Updated equipment for development and IT support practice.",
    "cont.f2.title": "Corporate Linkage", "cont.f2.desc": "Internships and real projects with the Costa Rican productive sector.",
    "cont.f3.title": "MEP Degree", "cont.f3.desc": "Graduates with an official degree as a Mid-Level Technician in Web Development.",
    "footer.sub": "Web Development Specialty · MEP", "footer.mep": "Ministry of Public Education", "footer.copy": "All rights reserved."
  },
  es: {
    "nav.home": "Inicio", "nav.mv": "Misión y Visión", "nav.subareas": "Subáreas",
    "nav.qr": "QR", "nav.video": "Video", "nav.contact": "Contacto",
    "hero.eyebrow": "Colegio Técnico Profesional · MEP · Costa Rica",
    "hero.desc": "Formamos desarrolladores full-stack con pensamiento crítico, visión emprendedora y dominio técnico para enfrentar los retos del mundo digital.",
    "hero.cta1": "Explorar subáreas", "hero.cta2": "Misión y Visión",
    "stat.subareas": "Subáreas", "stat.years": "Años", "stat.mep": "MEP",
    "index.explore.kicker": "Bienvenido", "index.explore.title": "Conoce nuestra especialidad",
    "index.explore.sub": "Un recorrido por los pilares que definen el perfil técnico del estudiante de Desarrollo Web del CTP La Carpio.",
    "exp.mv.title": "Misión y Visión", "exp.mv.desc": "Nuestro compromiso educativo con la comunidad de La Carpio.",
    "exp.sub.title": "Subáreas", "exp.sub.desc": "6 módulos especializados que cubren todo el stack tecnológico.",
    "exp.qr.title": "Documentos MEP", "exp.qr.desc": "Accede mediante QR a los registros oficiales del programa.",
    "exp.video.title": "Video Informativo", "exp.video.desc": "Conoce los beneficios del Inglés Técnico en la especialidad.",
    "exp.see": "Ver más",
    "index.tech.kicker": "Stack Tecnológico", "index.tech.title": "Tecnologías que dominarás",
    "mv.kicker": "Nuestro horizonte", "mv.title": "Misión <span class='accent'>&</span> Visión",
    "mv.sub": "Los principios institucionales que guían la formación de los futuros desarrolladores web del CTP La Carpio.",
    "mv.mission.title": "Misión", "mv.vision.title": "Visión",
    "mv.mission.text": "Un centro educativo de excelencia que brinda a la población estudiantil oportunidades de formación integral y crecimiento profesional, estimulando el emprendedurismo y la inserción al mercado laboral.",
    "mv.vision.text": "Ser una institución que brinda bienestar a los estudiantes a través de un sistema educativo de calidad, promoviendo la excelencia y una cultura de paz, con el fin de lograr la transformación en el desarrollo integral de la comunidad educativa.",
    "mv.values.title": "Valores institucionales",
    "val.excel": "Excelencia", "val.integrity": "Integridad", "val.emp": "Emprendimiento",
    "val.inc": "Inclusión", "val.innov": "Innovación", "val.peace": "Cultura de paz",
    "sub.kicker": "Plan de estudios", "sub.title": "Subáreas de la <span class='accent'>Especialidad</span>",
    "sub.sub": "Seis pilares formativos que estructuran el perfil del estudiante de Desarrollo Web.",
    "sub1.title": "Tecnologías de la Información", "sub1.desc": "Fundamentos de TI, redes, sistemas operativos y hardware. La base técnica sobre la que se construye toda la especialidad.",
    "sub2.title": "Emprendimiento e Innovación", "sub2.desc": "Metodologías ágiles, gestión de proyectos y pensamiento creativo para transformar ideas en productos tecnológicos reales.",
    "sub3.title": "Programación para Web", "sub3.desc": "HTML, CSS, JavaScript, Python, PHP y C#. Desarrollo Frontend, Backend y Full-Stack con enfoque práctico en proyectos reales.",
    "sub4.title": "Diseño de Software", "sub4.desc": "Arquitectura de sistemas, principios de UI/UX y modelado de bases de datos para construir aplicaciones robustas y escalables.",
    "sub5.title": "Soporte TI", "sub5.desc": "Mantenimiento preventivo y correctivo, configuración de redes LAN/WLAN y atención profesional de incidencias técnicas.",
    "sub6.title": "English Oriented to Web Dev", "sub6.desc": "Vocabulario técnico, lectura de documentación oficial y comunicación profesional en inglés para el entorno del desarrollo web.",
    "qr.kicker": "Accesos oficiales", "qr.title": "Códigos <span class='accent'>QR</span>",
    "qr.sub": "Escanea cada código para acceder a la información oficial del programa de Desarrollo Web del MEP.",
    "qr1.title": "Programa de Estudio", "qr1.note": "Enlace al programa oficial de la especialidad Desarrollo Web del MEP, con el plan de estudios completo y los objetivos de aprendizaje.",
    "qr2.title": "Educación Técnica", "qr2.note": "Portal de la Dirección de Educación Técnica del MEP, con información sobre los colegios técnicos y sus especialidades a nivel nacional.",
    "qr3.title": "Perfil del Estudiante", "qr3.note": "Documento oficial con el perfil de egreso, competencias y habilidades que el estudiante de Desarrollo Web adquiere durante la especialidad.",
    "qr4.title": "CTP La Carpio", "qr4.note": "Información institucional del Colegio Técnico Profesional La Carpio: ubicación, servicios educativos y oferta académica vigente.",
    "qr.open": "Abrir enlace",
    "qr.info": "Para escanear los códigos QR, utiliza la cámara de tu teléfono o cualquier aplicación lectora de QR. Todos los enlaces dirigen a sitios oficiales del Ministerio de Educación Pública de Costa Rica.",
    "vid.kicker": "Multimedia", "vid.title": "Video <span class='accent'>Informativo</span>",
    "vid.sub": "Conoce más sobre la subárea de Inglés Técnico y su impacto en el perfil profesional.",
    "vid.info.title": "Technical English Subarea — Benefits & Profile",
    "vid.info.p1": "The <strong>English Oriented to Web Development</strong> subarea is a key component of the Web Development specialty at CTP La Carpio. It equips students with the technical vocabulary, reading comprehension skills, and professional communication strategies required to thrive in an international tech environment.",
    "vid.info.p2": "Throughout this subarea, students learn to read and interpret official documentation, collaborate on platforms such as GitHub, participate in stand-up meetings, and present technical projects confidently in English. The goal is to prepare graduates who can work seamlessly in remote teams, freelance for international clients, and pursue continuous learning through global tech resources.",
    "vid.b1": "Technical documentation reading", "vid.b2": "Professional communication",
    "vid.b3": "Global job market readiness", "vid.b4": "Remote team collaboration",
    "cont.kicker": "Sobre nosotros", "cont.title": "Contacto <span class='accent'>& Ubicación</span>",
    "cont.sub": "Información institucional del CTP La Carpio y la especialidad de Desarrollo Web.",
    "cont.role": "Colegio Técnico Profesional", "cont.spec": "Especialidad: Desarrollo Web",
    "cont.address": "Dirección", "cont.address_val": "La Carpio, San José, Costa Rica",
    "cont.inst": "Institución", "cont.inst_val": "Ministerio de Educación Pública (MEP)",
    "cont.mod": "Modalidad", "cont.mod_val": "Educación Técnica Profesional · Presencial",
    "cont.sched": "Horario", "cont.sched_val": "Lunes a Viernes · 7:00 a.m. – 4:00 p.m.",
    "cont.about.title": "Sobre la especialidad",
    "cont.about.p1": "La especialidad de <strong>Desarrollo Web</strong> del CTP La Carpio forma parte de la oferta académica de Educación Técnica del MEP. Está diseñada para preparar a estudiantes con competencias técnicas, humanísticas y emprendedoras que les permitan insertarse en el mercado laboral o continuar estudios superiores.",
    "cont.about.p2": "Nuestra institución se encuentra ubicada en <strong>La Carpio, San José</strong>, y atiende a una comunidad diversa y emprendedora. El cuerpo docente está comprometido con la excelencia académica y el bienestar integral del estudiantado.",
    "cont.f1.title": "Laboratorios técnicos", "cont.f1.desc": "Equipamiento actualizado para la práctica de desarrollo y soporte TI.",
    "cont.f2.title": "Vinculación con empresas", "cont.f2.desc": "Pasantías y proyectos reales con el sector productivo costarricense.",
    "cont.f3.title": "Título MEP", "cont.f3.desc": "Graduados con título oficial de Técnico Medio en Desarrollo Web.",
    "footer.sub": "Especialidad Desarrollo Web · MEP", "footer.mep": "Ministerio de Educación Pública", "footer.copy": "Todos los derechos reservados."
  }
};

/* ============================================================
   2. Main Initialization (Wrapped in DOMContentLoaded)
   This ensures Cloudflare Rocket Loader waits for the DOM
   to be fully built before querying for data-i18n elements.
   ============================================================ */

function initializeApp() {
  'use strict';

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme Toggle (Dark/Light) ---------- */
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

  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('ctp-theme');
  } catch (e) {}

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
      try { localStorage.setItem('ctp-theme', next); } catch (e) {}
      updateThemeIcon(next);
    });
  }

  /* ---------- Language Toggle (EN/ES) ---------- */
  const langToggle = document.getElementById('langToggle');
  const langText = langToggle ? langToggle.querySelector('span') : null;

  function setLanguage(lang) {
    if (!translations[lang]) return;

    // Now the DOM is guaranteed to be ready, so this will find all elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = translations[lang][key];
      if (translation) {
        element.innerHTML = translation;
      }
    });

    if (langText) {
      langText.textContent = lang === 'en' ? 'ES' : 'EN';
    }

    document.documentElement.lang = lang;
    try { localStorage.setItem('ctp-lang', lang); } catch (e) {}
  }

  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('ctp-lang') || 'en';
  } catch (e) {}
  
  // Initialize language on load
  setLanguage(savedLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === 'en' ? 'es' : 'en';
      setLanguage(newLang);
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
}

/* ============================================================
   3. Safe Execution Listener
   If DOM is already loaded, run immediately. 
   Otherwise, wait for DOMContentLoaded.
   ============================================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already ready (or Rocket Loader delayed us until it was)
  initializeApp();
}