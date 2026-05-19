/* ============================================================
   B.LIFTED France — Formulaire de contact v2.0
   ============================================================ */

(function () {
  'use strict';


  /* ── Formulaire multi-étapes (page contact — #booking-form) ── */
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    let currentStep = 1;
    const steps         = Array.from(bookingForm.querySelectorAll('.form-step'));
    const progressSteps = Array.from(document.querySelectorAll('.form-progress__step'));
    const successPanel  = document.getElementById('form-success');

    function showStep(n) {
      steps.forEach(s => s.classList.remove('is-active'));
      const target = bookingForm.querySelector(`[data-step="${n}"]`);
      if (target) target.classList.add('is-active');

      progressSteps.forEach((p, i) => {
        p.classList.remove('is-active', 'is-done');
        if (i + 1 < n)  p.classList.add('is-done');
        if (i + 1 === n) p.classList.add('is-active');
      });

      currentStep = n;
    }

    // Boutons suivant
    bookingForm.querySelectorAll('[data-next]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentStep < steps.length) showStep(currentStep + 1);
      });
    });

    // Boutons retour
    bookingForm.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (currentStep > 1) showStep(currentStep - 1);
      });
    });

    // Sélection d'un choix
    bookingForm.querySelectorAll('.form-choices').forEach(group => {
      group.querySelectorAll('.form-choice').forEach(choice => {
        choice.addEventListener('click', () => {
          group.querySelectorAll('.form-choice').forEach(c => c.classList.remove('is-selected'));
          choice.classList.add('is-selected');
        });
      });
    });

    // Soumission
    bookingForm.addEventListener('submit', async e => {
      e.preventDefault();
      const submitBtn = bookingForm.querySelector('[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Envoi en cours…'; }

      try {
        const action = bookingForm.getAttribute('action');
        if (action) {
          const res = await fetch(action, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(bookingForm)
          });
          if (!res.ok) throw new Error('Erreur serveur');
        }
        // Succès
        steps.forEach(s => s.classList.remove('is-active'));
        progressSteps.forEach(p => { p.classList.remove('is-active'); p.classList.add('is-done'); });
        if (successPanel) { successPanel.style.display = 'flex'; successPanel.classList.add('is-visible'); }
      } catch {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Envoyer'; }
      }
    });

    showStep(1);
    return; // Fin du formulaire booking — pas besoin du simple form ci-dessous
  }


  /* ── Formulaire simple (id="contact-form") ── */
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn    = form.querySelector('[type="submit"]');
  const successMsg   = document.getElementById('form-success');
  const errorMsg     = document.getElementById('form-error');

  /* ── Validation live ─────────────────────────────────────── */
  form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('is-error')) validateField(field);
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    const required = field.hasAttribute('required');
    let valid = true;

    if (required && !value) {
      valid = false;
    } else if (field.type === 'email' && value) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    } else if (field.type === 'tel' && value) {
      valid = /^[\d\s\+\-\(\)]{6,20}$/.test(value);
    }

    field.classList.toggle('is-error', !valid && (required || value !== ''));
    field.classList.toggle('is-valid', valid && value !== '');
    return valid;
  }

  /* ── Soumission ──────────────────────────────────────────── */
  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Valider tous les champs
    let allValid = true;
    form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) return;

    // État chargement
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours…';
    }

    try {
      const formData = new FormData(form);
      const res = await fetch(form.action || '/', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (res.ok) {
        form.style.display = 'none';
        successMsg?.classList.add('is-active');
      } else {
        throw new Error('Réponse serveur invalide');
      }
    } catch (err) {
      // Afficher message d'erreur mais ne pas bloquer
      errorMsg?.classList.add('is-active');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Envoyer votre demande';
      }
    }
  });

})();
