/* ============================================================
   B.LIFTED France — Main JS v3.0
   Rideau de page · Curseur · Scroll Progress · Compteurs
   ============================================================ */

(function () {
  'use strict';

  /* ── RIDEAU DE PAGE ─────────────────────────────────────── */
  const curtain = document.getElementById('pageCurtain');

  function revealPage(instant) {
    document.body.classList.remove('no-scroll');
    if (curtain) {
      curtain.classList.remove('is-leaving');
      if (instant) {
        curtain.style.transition = 'none';
        curtain.classList.add('is-hidden');
        // Double rAF garantit que le navigateur a peint avant de restaurer la transition
        requestAnimationFrame(() => requestAnimationFrame(() => { curtain.style.transition = ''; }));
      } else {
        curtain.classList.add('is-hidden');
      }
    }
  }

  // Navigation directe ou retour arrière → révèle instantanément
  // Navigation via nos liens internes (forward) → révèle avec animation
  const isForwardNav = sessionStorage.getItem('bl-nav') === '1';
  sessionStorage.removeItem('bl-nav');

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => revealPage(!isForwardNav), isForwardNav ? 200 : 0);
    });
  } else {
    setTimeout(() => revealPage(!isForwardNav), isForwardNav ? 200 : 0);
  }

  // Fix bfcache : révèle instantanément lors du retour arrière navigateur
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) revealPage(true);
  });

  // Transition sortante sur les liens internes
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
        href.startsWith('tel:') || href.startsWith('http') ||
        link.target === '_blank') return;

    e.preventDefault();
    sessionStorage.setItem('bl-nav', '1'); // Marque comme navigation forward
    if (curtain) {
      curtain.classList.remove('is-hidden');
      curtain.classList.add('is-leaving');
    }
    setTimeout(() => { window.location.href = href; }, 480);
  });


  /* ── BARRE DE PROGRESSION SCROLL ───────────────────────── */
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    function updateProgress() {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      const pct      = total > 0 ? (scrolled / total) * 100 : 0;
      progressBar.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }


  /* ── COMPTEURS ANIMÉS ───────────────────────────────────── */
  function animateCounter(el, target, duration = 1200) {
    const start    = performance.now();
    const startVal = 0;

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = Math.round(startVal + (target - startVal) * ease);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // Observer pour déclencher les compteurs
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseInt(entry.target.dataset.count, 10);
        animateCounter(entry.target, target, 1400);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach((el) => {
    counterObserver.observe(el);
  });


  /* ── FOOTER ANNÉE ───────────────────────────────────────── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ── MAGNETIC BUTTONS ───────────────────────────────────── */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.btn-primary, .btn-outline').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect   = btn.getBoundingClientRect();
        const x      = e.clientX - rect.left - rect.width  / 2;
        const y      = e.clientY - rect.top  - rect.height / 2;
        const factor = 0.18;
        btn.style.transform = `translate(${x * factor}px, ${y * factor}px) translateY(-2px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }


  /* ── SMOOTH ANCHOR ──────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
        10
      ) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── CURSEUR PERSONNALISÉ ────────────────────────────────── */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const ring = document.createElement('div');
    ring.className = 'cursor-ring is-out';
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(ring);
    document.body.appendChild(dot);

    let mx = -200, my = -200, rx = -200, ry = -200;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
      ring.classList.remove('is-out');
    });
    document.addEventListener('mouseleave', () => ring.classList.add('is-out'));
    document.addEventListener('mouseenter', () => ring.classList.remove('is-out'));

    const hoverSel = 'a, button, [role="button"], .btn, label, select, input, .gallery-strip__item';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(hoverSel)) ring.classList.add('is-hovering');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(hoverSel)) ring.classList.remove('is-hovering');
    });

    (function animRing() {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    })();
  }

  /* ── WHATSAPP WIDGET ─────────────────────────────────────── */
  const waToggle = document.getElementById('whatsapp-toggle');
  const waPopup  = document.getElementById('whatsapp-popup');
  const waClose  = document.getElementById('whatsapp-close');

  if (waToggle && waPopup) {
    waToggle.addEventListener('click', () => {
      const open = waPopup.classList.toggle('is-open');
      waPopup.setAttribute('aria-hidden', String(!open));
    });
    if (waClose) {
      waClose.addEventListener('click', () => {
        waPopup.classList.remove('is-open');
        waPopup.setAttribute('aria-hidden', 'true');
      });
    }
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.whatsapp-widget')) {
        waPopup.classList.remove('is-open');
        waPopup.setAttribute('aria-hidden', 'true');
      }
    });
  }

})();
