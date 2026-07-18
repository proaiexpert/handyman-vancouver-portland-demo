/* Local Repair Pro — shared interaction controller. No dependencies. */
(function () {
  'use strict';

  document.documentElement.classList.add('js');
  var siteScript = document.currentScript;

  /* Load the shared premium-recovery layer from the same base path as this script.
     Base UI remains complete when JavaScript is unavailable. */
  (function loadPremiumLayer() {
    var script = siteScript;
    if (!script || !script.src || document.querySelector('link[data-premium-recovery]')) return;
    var href = script.src.replace(/assets\/js\/site-v1\.js(?:\?.*)?$/, 'assets/css/premium-recovery-v1.css');
    if (href === script.src) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-premium-recovery', '');
    document.head.appendChild(link);
  }());

  /* Signature hero family. The source page remains complete without JavaScript;
     this layer adds only art-directed media, registration marks and short labels. */
  (function buildSignatureHero() {
    var hero = document.querySelector('.page-hero');
    if (!hero || !siteScript || !siteScript.src) return;

    var path = window.location.pathname.toLowerCase();
    var assets = siteScript.src.replace(/assets\/js\/site-v1\.js(?:\?.*)?$/, 'assets/');
    if (assets === siteScript.src) return;

    var type = '';
    var variant = '';
    var visual = document.createElement('div');
    visual.className = 'signature-hero-visual';
    visual.setAttribute('aria-hidden', 'true');

    function image(file) {
      return '<img src="' + assets + 'img/' + file + '" alt="" width="1200" height="900" loading="lazy" decoding="async">';
    }

    if (/\/request\/?$/.test(path)) {
      type = 'photo-path';
      visual.innerHTML =
        '<div class="signature-photo-main">' + image('hero-finished-pnw-1536.webp') + '<span>01 / WIDE VIEW</span></div>' +
        '<div class="signature-photo-detail">' + image('hero-finished-pnw-1536.webp') + '<span>02 / USEFUL DETAIL</span></div>' +
        '<div class="signature-intents"><span>Repair request</span><span>Quick question</span><span>Photo guidance</span></div>' +
        '<ol class="signature-sequence"><li><b>01</b>Describe</li><li><b>02</b>Add context</li><li><b>03</b>Review scope</li></ol>';
    } else if (/\/(examples|services)\/?$/.test(path)) {
      type = 'contact-sheet';
      variant = /\/services\/?$/.test(path) ? 'services' : 'examples';
      if (variant === 'services') {
        visual.innerHTML =
          '<div class="signature-contact-main">' + image('scenarios/01-trim-baseboard-refresh.webp') + '<span>FINISH DETAIL / SCOPE 01</span></div>' +
          '<ol class="signature-service-index"><li>01 / Finish repair</li><li>02 / Doors &amp; trim</li><li>03 / Small installs</li><li>04 / Fixture review</li><li>05 / Punch-lists</li></ol>';
      } else {
        visual.innerHTML =
          '<div class="signature-contact-main">' + image('scenarios/05-entry-door-exterior-trim.webp') + '<span>COMMON PROJECT TYPES</span></div>' +
          '<div class="signature-contact-support">' + image('scenarios/01-trim-baseboard-refresh.webp') + image('scenarios/03-door-hardware-details.webp') + image('scenarios/04-bathroom-detail-touchup.webp') + '</div>' +
          '<p>CONCEPT IMAGES / CATEGORY REFERENCE</p>';
      }
    } else if (/\/areas(?:\/|$)/.test(path)) {
      type = 'regional';
      variant = /\/portland-or\/?$/.test(path) ? 'portland' : (/\/vancouver-wa\/?$/.test(path) ? 'vancouver' : (/\/areas\/?$/.test(path) ? 'hub' : 'clark'));
      visual.innerHTML =
        '<div class="signature-map">' + image('service-area-vancouver-portland-map.webp') + '</div>' +
        '<div class="signature-region-register"><span>VANCOUVER / PRIMARY</span><span>CLARK COUNTY / CONTEXT</span><span>PORTLAND / SCOPE REVIEW</span></div>' +
        '<p>REGIONAL ORIENTATION / NO FIXED RADIUS</p>';
    } else if (/\/(pricing|guides|about|faq)\/?$/.test(path)) {
      type = 'editorial';
      var key = path.match(/\/(pricing|guides|about|faq)\/?$/)[1];
      variant = key;
      var editorial = {
        pricing: ['ACCESS', 'MATERIALS', 'CONDITION', 'COMPLEXITY', 'GROUPED TASKS', 'LOCATION'],
        guides: ['01 / PHOTOS', '02 / PUNCH-LIST', '03 / ACCESS', '04 / PRODUCTS', '05 / BOUNDARIES'],
        about: ['01 / NOTICE', '02 / SHOW', '03 / CLARIFY'],
        faq: ['REQUEST', 'SCOPE', 'PRICING', 'AREAS']
      };
      var title = { pricing: 'WHAT SHAPES SCOPE', guides: 'PRACTICAL FIELD NOTES', about: 'THE SERVICE METHOD', faq: 'QUESTION ORIENTATION' }[key];
      visual.innerHTML =
        '<div class="signature-editorial-heading"><span>LOCAL REPAIR PRO / FIELD 0' + (key === 'pricing' ? '1' : key === 'guides' ? '2' : key === 'about' ? '3' : '4') + '</span><strong>' + title + '</strong></div>' +
        '<ol class="signature-matrix">' + editorial[key].map(function (item, index) { return '<li><b>' + String(index + 1).padStart(2, '0') + '</b><span>' + item + '</span></li>'; }).join('') + '</ol>' +
        '<div class="signature-material-strip">' + image('scenarios/01-trim-baseboard-refresh.webp') + '<span>DETAIL / CONTEXT / NEXT STEP</span></div>';
    }

    if (!type) return;
    hero.classList.add('signature-hero', 'signature-hero--' + type);
    if (variant) hero.classList.add('signature-hero--' + variant);
    var container = hero.querySelector(':scope > .container');
    if (!container) return;
    var shell = document.createElement('div');
    shell.className = 'signature-hero-shell';
    hero.insertBefore(shell, container);
    shell.appendChild(container);
    shell.appendChild(visual);
    window.requestAnimationFrame(function () { hero.classList.add('is-set'); });
  }());

  var header = document.querySelector('[data-site-header]');
  var menuButton = document.querySelector('[data-menu-button]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  var menuBackdrop = document.querySelector('[data-menu-backdrop]');
  var menuClose = document.querySelector('[data-menu-close]');
  var stickyActions = document.querySelector('[data-sticky-actions]');
  var footer = document.querySelector('[data-site-footer]');
  var lastFocused = null;

  function focusable(container) {
    return Array.prototype.slice.call(container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(function (item) {
      return !item.hasAttribute('hidden') && item.offsetParent !== null;
    });
  }

  function setMenu(open) {
    if (!menuButton || !mobileMenu || !menuBackdrop) return;
    if (open) lastFocused = document.activeElement;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
    menuBackdrop.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (stickyActions) stickyActions.classList.toggle('is-visible', !open && shouldShowSticky());
    if (open) {
      var targets = focusable(mobileMenu);
      if (targets.length) targets[0].focus();
    } else if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  if (menuButton && mobileMenu && menuBackdrop) {
    menuButton.addEventListener('click', function () {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    if (menuClose) menuClose.addEventListener('click', function () { setMenu(false); });
    menuBackdrop.addEventListener('click', function () { setMenu(false); });
    mobileMenu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
      if (event.key === 'Tab' && menuButton.getAttribute('aria-expanded') === 'true') {
        var targets = focusable(mobileMenu);
        if (!targets.length) return;
        var first = targets[0];
        var last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1180 && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false);
    });
  }

  var lastY = window.scrollY;
  var headerTicking = false;
  function updateHeader() {
    headerTicking = false;
    if (!header) return;
    var y = window.scrollY;
    var menuOpen = menuButton && menuButton.getAttribute('aria-expanded') === 'true';
    if (menuOpen || y < 80 || window.innerWidth > 1180) header.classList.remove('is-hidden');
    else if (y > lastY + 8) header.classList.add('is-hidden');
    else if (y < lastY - 8) header.classList.remove('is-hidden');
    lastY = y;
  }
  window.addEventListener('scroll', function () {
    if (!headerTicking) {
      headerTicking = true;
      window.requestAnimationFrame(updateHeader);
    }
  }, { passive: true });

  function footerVisible() {
    if (!footer) return false;
    return footer.getBoundingClientRect().top < window.innerHeight - 40;
  }
  function shouldShowSticky() {
    if (!stickyActions || window.innerWidth > 900) return false;
    if (menuButton && menuButton.getAttribute('aria-expanded') === 'true') return false;
    return window.scrollY > 260 && !footerVisible();
  }
  var stickyTicking = false;
  function updateSticky() {
    stickyTicking = false;
    if (stickyActions) stickyActions.classList.toggle('is-visible', shouldShowSticky());
  }
  if (stickyActions) {
    document.body.classList.add('has-sticky-actions');
    ['scroll', 'resize'].forEach(function (type) {
      window.addEventListener(type, function () {
        if (!stickyTicking) {
          stickyTicking = true;
          window.requestAnimationFrame(updateSticky);
        }
      }, { passive: true });
    });
    updateSticky();
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  revealItems.forEach(function (item) { item.classList.add('is-visible'); });

  /* Restored scenario rail: desktop auto-loop only while visible; mobile and
     reduced-motion users receive a normal swipeable horizontal rail. */
  var scenarioRail = document.querySelector('[data-scenario-rail]');
  if (scenarioRail) {
    var railInView = false;
    function railCanPlay() {
      return railInView && window.innerWidth > 680 && window.innerHeight > 500 && !reduceMotion.matches;
    }
    function updateRail() {
      scenarioRail.classList.toggle('is-playing', railCanPlay());
    }
    if ('IntersectionObserver' in window) {
      var railObserver = new IntersectionObserver(function (entries) {
        railInView = entries.some(function (entry) { return entry.isIntersecting; });
        updateRail();
      }, { rootMargin: '80px 0px 80px 0px', threshold: .08 });
      railObserver.observe(scenarioRail);
    } else {
      railInView = true;
      updateRail();
    }
    window.addEventListener('resize', updateRail, { passive: true });
    if (typeof reduceMotion.addEventListener === 'function') reduceMotion.addEventListener('change', updateRail);
  }

  var requestForm = document.querySelector('[data-request-form]');
  var intentButtons = Array.prototype.slice.call(document.querySelectorAll('[data-intent]'));
  var modeFields = Array.prototype.slice.call(document.querySelectorAll('[data-mode-field]'));
  var status = document.querySelector('[data-form-status]');
  var submitLabel = document.querySelector('[data-submit-label]');
  var submitButton = document.querySelector('[data-submit-button]');
  var currentIntent = 'repair';

  function normalizeIntent(value) {
    if (value === 'photos') return 'photos';
    if (value === 'question') return 'question';
    return 'repair';
  }

  function setIntent(intent, moveFocus) {
    currentIntent = normalizeIntent(intent);
    intentButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-intent') === currentIntent));
    });
    modeFields.forEach(function (group) {
      var modes = (group.getAttribute('data-mode-field') || '').split(' ');
      var visible = modes.indexOf(currentIntent) !== -1 || modes.indexOf('all') !== -1;
      group.hidden = !visible;
      group.querySelectorAll('input, select, textarea').forEach(function (control) {
        if (control.hasAttribute('data-required-for')) {
          var requiredModes = control.getAttribute('data-required-for').split(' ');
          control.required = visible && requiredModes.indexOf(currentIntent) !== -1;
        }
      });
    });
    if (submitLabel) {
      submitLabel.textContent = currentIntent === 'question' ? 'Preview Quick Question' :
        currentIntent === 'photos' ? 'Preview Photo Request' : 'Preview Repair Request';
    }
    if (status) {
      status.classList.remove('is-visible');
      status.textContent = '';
    }
    if (moveFocus && requestForm) {
      requestForm.scrollIntoView({ block: 'start', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      var firstControl = requestForm.querySelector('input:not([hidden]), select:not([hidden]), textarea:not([hidden])');
      if (firstControl) window.setTimeout(function () { firstControl.focus(); }, 250);
    }
  }

  if (intentButtons.length) {
    intentButtons.forEach(function (button) {
      button.addEventListener('click', function () { setIntent(button.getAttribute('data-intent'), false); });
    });
    var params = new URLSearchParams(window.location.search);
    setIntent(params.get('intent'), params.has('intent'));
  }

  function showFieldError(control, message) {
    var error = document.querySelector('[data-error-for="' + control.id + '"]');
    control.setAttribute('aria-invalid', 'true');
    if (error) error.textContent = message;
  }
  function clearFieldError(control) {
    var error = document.querySelector('[data-error-for="' + control.id + '"]');
    control.removeAttribute('aria-invalid');
    if (error) error.textContent = '';
  }

  if (requestForm) {
    requestForm.setAttribute('novalidate', '');
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-disabled');
    }
    requestForm.addEventListener('input', function (event) {
      if (event.target.matches('input, select, textarea')) clearFieldError(event.target);
    });
    requestForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var controls = Array.prototype.slice.call(requestForm.querySelectorAll('input, select, textarea'))
        .filter(function (control) { return !control.closest('[hidden]') && control.required; });
      var firstInvalid = null;
      controls.forEach(function (control) {
        clearFieldError(control);
        if (!String(control.value || '').trim()) {
          showFieldError(control, 'Please complete this field for the concept preview.');
          if (!firstInvalid) firstInvalid = control;
        }
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }
      if (status) {
        status.textContent = 'Preview complete — no request was sent. This concept form does not collect or transmit personal information.';
        status.classList.add('is-visible');
        try { status.focus({ preventScroll: true }); } catch (error) { status.focus(); }
      }
    });
  }
}());
