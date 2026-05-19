/* ============================================================
   B.LIFTED France — Navigation v3.0
   Header sticky · Menu mobile · Liens actifs
   ============================================================ */

(function () {
  'use strict';

  const header      = document.getElementById('header');
  const burger      = document.getElementById('burger');
  const mobileMenu  = document.getElementById('mobile-menu');
  const overlay     = document.getElementById('menu-overlay');

  if (!header) return;

  /* ── HEADER STICKY ──────────────────────────────────────── */
  const SCROLL_THRESHOLD = 60;
  let lastScrollY = 0;
  let ticking     = false;

  function updateHeader() {
    const scrollY = window.scrollY;
    if (scrollY > SCROLL_THRESHOLD) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  updateHeader();


  /* ── MENU MOBILE ────────────────────────────────────────── */
  function openMenu() {
    burger.setAttribute('aria-expanded', 'true');
    burger.classList.add('is-open');
    mobileMenu.classList.add('is-open');
    overlay.classList.add('is-active');
    document.body.classList.add('no-scroll');
    mobileMenu.querySelector('a')?.focus();
  }

  function closeMenu() {
    burger.setAttribute('aria-expanded', 'false');
    burger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }

  if (burger && mobileMenu && overlay) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // Fermer sur lien
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Fermer sur Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
        burger.focus();
      }
    });

    // Focus trap dans le menu
    mobileMenu.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = mobileMenu.querySelectorAll('a, button');
      const first     = focusable[0];
      const last      = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }


  /* ── LIEN ACTIF ─────────────────────────────────────────── */
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  document.querySelectorAll('.header__nav-link').forEach((link) => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path || (href !== '/' && path.startsWith(href))) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

})();
