/* Self-contained mobile menu toggle. Depth-independent, defensive. */
(function () {
  'use strict';
  function init() {
    var btn = document.querySelector('.final-menu-button');
    var menu = document.querySelector('#final-mobile-menu');
    var backdrop = document.querySelector('.final-menu-backdrop');
    if (!btn || !menu || !backdrop) return;

    function isMobile() {
      return window.matchMedia('(max-width: 900px)').matches;
    }
    function setMenu(open) {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.hidden = !open;
      backdrop.hidden = !open;
      document.body.classList.toggle('final-menu-open', open);
      if (open) {
        var first = menu.querySelector('a, button');
        if (first) first.focus();
      }
    }
    // Force closed on init, regardless of HTML markup state.
    setMenu(false);

    btn.addEventListener('click', function () {
      setMenu(btn.getAttribute('aria-expanded') !== 'true');
    });
    backdrop.addEventListener('click', function () { setMenu(false); });
    var closers = document.querySelectorAll('[data-final-menu-close], .final-menu-close');
    for (var i = 0; i < closers.length; i++) {
      closers[i].addEventListener('click', function () { setMenu(false); });
    }
    var links = menu.querySelectorAll('a');
    for (var j = 0; j < links.length; j++) {
      links[j].addEventListener('click', function () { setMenu(false); });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') setMenu(false);
    });
    window.addEventListener('resize', function () {
      if (!isMobile() && btn.getAttribute('aria-expanded') === 'true') setMenu(false);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
