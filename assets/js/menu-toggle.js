/* Local Repair Pro — mobile header, menu, and sticky CTA controller.
   Self-contained, depth-independent, defensive. Loaded on every public page.
   Safe no-ops if any target element is absent. */
(function () {
  'use strict';

  function isMobile() {
    // Treat narrow viewports AND short landscape phones as mobile so the
    // compact hamburger header is used (prevents desktop-action overflow).
    return window.matchMedia('(max-width: 900px)').matches ||
           window.matchMedia('(min-width: 901px) and (max-height: 500px)').matches;
  }
  function reducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function initMenu() {
    var btn = document.querySelector('.final-menu-button');
    var menu = document.querySelector('#final-mobile-menu');
    var backdrop = document.querySelector('.final-menu-backdrop');
    if (!btn || !menu || !backdrop) return null;

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
    return { btn: btn, setMenu: setMenu };
  }

  function initHeaderAutoHide(menuApi) {
    var header = document.querySelector('.final-site-header');
    if (!header) return;
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      ticking = false;
      // Never hide the header while the mobile menu is open.
      if (menuApi && menuApi.btn && menuApi.btn.getAttribute('aria-expanded') === 'true') {
        header.classList.remove('site-header--hidden');
        lastY = window.scrollY;
        return;
      }
      if (!isMobile()) {
        header.classList.remove('site-header--hidden');
        lastY = window.scrollY;
        return;
      }
      var y = window.scrollY;
      var delta = y - lastY;
      if (y <= 80) {
        header.classList.remove('site-header--hidden');
      } else if (delta > 8) {
        header.classList.add('site-header--hidden');
      } else if (delta < -8) {
        header.classList.remove('site-header--hidden');
      }
      lastY = y;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', function () {
      if (!isMobile()) header.classList.remove('site-header--hidden');
      lastY = window.scrollY;
    }, { passive: true });
  }

  function initStickyCta(menuApi) {
    var bar = document.getElementById('sticky-cta-bar');
    if (!bar) return;
    var footer = document.getElementById('footer');
    var ticking = false;

    function update() {
      ticking = false;
      if (!isMobile()) {
        bar.classList.remove('is-visible');
        document.body.classList.remove('sticky-active');
        return;
      }
      // Never show over an open mobile menu.
      if (menuApi && menuApi.btn && menuApi.btn.getAttribute('aria-expanded') === 'true') {
        bar.classList.remove('is-visible');
        document.body.classList.remove('sticky-active');
        return;
      }
      var y = window.scrollY;
      // Hide the CTA once the footer scrolls into view so it never overlaps
      // footer links and never leaves body padding below the footer.
      var footerInView = false;
      if (footer) {
        footerInView = footer.getBoundingClientRect().top < window.innerHeight;
      }
      var show = y > 260 && !footerInView;
      bar.classList.toggle('is-visible', show);
      document.body.classList.toggle('sticky-active', show);
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  function init() {
    var menuApi = initMenu();
    initHeaderAutoHide(menuApi);
    initStickyCta(menuApi);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
