/* ============================================================
   B.LIFTED France — FAQ Accordéon v1.0
   ============================================================ */

(function () {
  'use strict';

  document.querySelectorAll('.faq__question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item    = btn.closest('.faq__item');
      const answer  = item.querySelector('.faq__answer');
      const isOpen  = btn.getAttribute('aria-expanded') === 'true';

      // Ferme tous les autres
      document.querySelectorAll('.faq__item').forEach((other) => {
        if (other !== item) {
          other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq__answer').classList.remove('is-open');
        }
      });

      // Toggle courant
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.classList.toggle('is-open', !isOpen);
    });
  });

})();
