/* ============================================================
   B.LIFTED France — Cookie Banner RGPD
   ============================================================ */

(function () {
  'use strict';

  var KEY    = 'blf_cookies_v1';
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;

  // Déjà accepté / refusé : on ne montre pas
  if (localStorage.getItem(KEY)) {
    banner.remove();
    return;
  }

  // Afficher après un court délai
  setTimeout(function () {
    banner.classList.add('is-visible');
  }, 800);

  function dismiss(choice) {
    localStorage.setItem(KEY, choice);
    banner.classList.remove('is-visible');
    setTimeout(function () { banner.remove(); }, 500);
  }

  var btnAccept  = document.getElementById('cookie-accept');
  var btnDecline = document.getElementById('cookie-decline');

  if (btnAccept)  btnAccept.addEventListener('click',  function () { dismiss('accepted'); });
  if (btnDecline) btnDecline.addEventListener('click', function () { dismiss('declined'); });

})();
