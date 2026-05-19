/* ============================================================
   B.LIFTED France — Simulateur v3.0
   Estimation de tarif en 4 étapes
   ============================================================ */

(function () {
  'use strict';

  /* ── GRILLES TARIFAIRES ─────────────────────────────────── */
  const BASE_TERRITORY = {
    provence: 680,
    riviera:  820,
    megeve:   1050,
    dubai:    900,
  };

  const SERVICE_MULTIPLIER = {
    transfert:  0.32,   // Tarif à la course — fraction de la base
    disposition: 1.0,   // Mise à dispo = base entière
    mariage:    1.75,   // Majoration événement
    sejour:     1.40,   // Séjour multi-étapes
  };

  const DURATION_MULTIPLIER = {
    half:  0.65,
    full:  1.0,
    multi: 2.20,
  };

  const PASSENGER_MULTIPLIER = {
    small:  1.0,
    medium: 1.30,
    large:  1.65,
  };


  /* ── ÉTAT ───────────────────────────────────────────────── */
  let state = {
    step:       1,
    service:    null,
    territory:  null,
    duration:   null,
    passengers: null,
  };


  /* ── ÉLÉMENTS DOM ───────────────────────────────────────── */
  const steps     = [1, 2, 3, 4];
  const panels    = {};
  const dots      = {};
  const lines     = {};

  steps.forEach((n) => {
    panels[n] = document.getElementById('sim-step-' + n);
    dots[n]   = document.querySelector(`.simulator__step-dot[data-step="${n}"]`);
  });
  lines['1-2'] = document.getElementById('line-1-2');
  lines['2-3'] = document.getElementById('line-2-3');
  lines['3-4'] = document.getElementById('line-3-4');

  const resultPanel  = document.getElementById('sim-result');
  const resultPrice  = document.getElementById('result-price');

  if (!panels[1]) return; // Pas de simulateur sur cette page


  /* ── NAVIGATION ─────────────────────────────────────────── */
  function goToStep(n) {
    // Masque tout
    steps.forEach((s) => {
      if (panels[s]) panels[s].classList.remove('is-active');
    });
    if (resultPanel) resultPanel.classList.remove('is-active');

    // Met à jour les dots
    steps.forEach((s) => {
      if (!dots[s]) return;
      dots[s].classList.remove('is-active', 'is-done');
      if (s < n)      dots[s].classList.add('is-done');
      else if (s === n) dots[s].classList.add('is-active');
    });

    // Met à jour les lignes
    if (lines['1-2']) lines['1-2'].classList.toggle('is-done', n > 1);
    if (lines['2-3']) lines['2-3'].classList.toggle('is-done', n > 2);
    if (lines['3-4']) lines['3-4'].classList.toggle('is-done', n > 3);

    // Affiche le bon panel
    if (n <= 4 && panels[n]) {
      panels[n].classList.add('is-active');
    } else if (n === 5 && resultPanel) {
      resultPanel.classList.add('is-active');
      showResult();
    }

    state.step = n;

    // Scroll vers le simulateur
    const simEl = document.querySelector('.simulator');
    if (simEl) {
      const headerH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
        10
      ) || 80;
      const top = simEl.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }


  /* ── SÉLECTION D'OPTION ─────────────────────────────────── */
  function setupOptions(containerId, stateKey, nextBtn) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.querySelectorAll('.sim-option').forEach((btn) => {
      btn.addEventListener('click', () => {
        // Désélectionne les autres
        container.querySelectorAll('.sim-option').forEach((b) =>
          b.classList.remove('is-selected')
        );
        btn.classList.add('is-selected');
        state[stateKey] = btn.dataset.value;

        // Active le bouton suivant
        if (nextBtn) nextBtn.disabled = false;
      });
    });
  }

  // Boutons suivant / retour
  function bindNext(btnId, targetStep) {
    const btn = document.getElementById(btnId);
    if (btn) btn.addEventListener('click', () => goToStep(targetStep));
  }
  function bindPrev(btnId, targetStep) {
    const btn = document.getElementById(btnId);
    if (btn) btn.addEventListener('click', () => goToStep(targetStep));
  }

  setupOptions('sim-services',   'service',    document.getElementById('sim-next-1'));
  setupOptions('sim-territories','territory',  document.getElementById('sim-next-2'));
  setupOptions('sim-durations',  'duration',   document.getElementById('sim-next-3'));
  setupOptions('sim-passengers', 'passengers', document.getElementById('sim-calculate'));

  bindNext('sim-next-1',    2);
  bindNext('sim-next-2',    3);
  bindNext('sim-next-3',    4);
  bindNext('sim-calculate', 5);

  bindPrev('sim-prev-2', 1);
  bindPrev('sim-prev-3', 2);
  bindPrev('sim-prev-4', 3);

  // Redémarrer
  const restartBtn = document.getElementById('sim-restart');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      // Reset état
      state = { step: 1, service: null, territory: null, duration: null, passengers: null };

      // Reset sélections
      document.querySelectorAll('.sim-option').forEach((b) =>
        b.classList.remove('is-selected')
      );
      // Désactive les boutons suivant
      ['sim-next-1','sim-next-2','sim-next-3','sim-calculate'].forEach((id) => {
        const btn = document.getElementById(id);
        if (btn) btn.disabled = true;
      });

      // Retire is-done des lignes / dots
      Object.values(lines).forEach((l) => l?.classList.remove('is-done'));

      goToStep(1);
    });
  }


  /* ── CALCUL ─────────────────────────────────────────────── */
  function calculatePrice() {
    const base     = BASE_TERRITORY[state.territory]     || 700;
    const svcMult  = SERVICE_MULTIPLIER[state.service]   || 1.0;
    const durMult  = DURATION_MULTIPLIER[state.duration] || 1.0;
    const pasMult  = PASSENGER_MULTIPLIER[state.passengers] || 1.0;

    return Math.round(base * svcMult * durMult * pasMult);
  }


  /* ── RÉSULTAT ───────────────────────────────────────────── */
  function showResult() {
    const price = calculatePrice();
    if (!resultPrice) return;

    // Animation compteur
    let current = 0;
    const target   = price;
    const duration = 900;
    const start    = performance.now();

    function updateCount(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      current        = Math.round(target * ease);
      resultPrice.textContent = current.toLocaleString('fr-FR');
      if (progress < 1) requestAnimationFrame(updateCount);
    }
    requestAnimationFrame(updateCount);
  }

})();
