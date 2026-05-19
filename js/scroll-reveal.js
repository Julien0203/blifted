/* ============================================================
   B.LIFTED France — Scroll Reveal v3.0
   Apparitions au scroll · Split Text (mots)
   ============================================================ */

(function () {
  'use strict';

  // Respect de prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Révèle tout directement sans animation
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('is-visible');
    });
    document.querySelectorAll('[data-split="words"]').forEach((el) => {
      el.querySelectorAll('.word-inner').forEach((w) => w.classList.add('is-visible'));
    });
    return;
  }


  /* ── SPLIT TEXT EN MOTS ─────────────────────────────────── */
  document.querySelectorAll('[data-split="words"]').forEach((el) => {
    // Récupère l'HTML pour conserver les balises <em> etc.
    const html = el.innerHTML;

    // Parser les nœuds texte et les balises inline
    function wrapWords(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        words.forEach((w) => {
          if (/^\s+$/.test(w)) {
            frag.appendChild(document.createTextNode(w));
          } else if (w) {
            const wrap = document.createElement('span');
            wrap.className = 'word-wrap';
            const inner = document.createElement('span');
            inner.className = 'word-inner';
            inner.textContent = w;
            wrap.appendChild(inner);
            frag.appendChild(wrap);
          }
        });
        node.replaceWith(frag);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.childNodes).forEach(wrapWords);
      }
    }

    Array.from(el.childNodes).forEach(wrapWords);

    // Anime les mots avec délai progressif
    let idx = 0;
    el.querySelectorAll('.word-inner').forEach((word) => {
      word.style.transitionDelay = (idx * 55) + 'ms';
      idx++;
    });
  });

  /* ── AUTO-STAGGER ───────────────────────────────────────── */
  document.querySelectorAll('[data-stagger]').forEach((parent) => {
    const children = parent.querySelectorAll('[data-reveal]');
    let delay = 0;
    children.forEach((child) => {
      if (!child.dataset.delay) {
        child.dataset.delay = delay;
      }
      delay += 100;
    });
  });


  /* ── INTERSECTION OBSERVER ──────────────────────────────── */
  const revealOpts = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOpts);

  // Observer tous les [data-reveal]
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    revealObserver.observe(el);
  });


  /* ── OBSERVER POUR SPLIT TEXT ───────────────────────────── */
  const splitObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.word-inner').forEach((w) => {
          w.classList.add('is-visible');
        });
        splitObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-split="words"]').forEach((el) => {
    splitObserver.observe(el);
  });

})();
