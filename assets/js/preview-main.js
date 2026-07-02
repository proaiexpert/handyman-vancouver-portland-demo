const chips = document.querySelectorAll('.service-chip:not(.hybrid-chip)');
const selected = document.querySelector('#selected-service');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('is-active'));
    chip.classList.add('is-active');
    if (selected) selected.textContent = chip.dataset.service || chip.textContent.trim();
  });
});

const hybridStage = document.querySelector('[data-rotating-stage]');
const hybridChips = [...document.querySelectorAll('.hybrid-chip')];
const hybridTitle = document.querySelector('[data-rotate-title]');
const hybridMessage = document.querySelector('[data-rotate-message]');
const hybridPhoto = document.querySelector('[data-rotate-photo]');
let hybridIndex = 0;
let hybridTouched = false;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setHybridPreview(chip) {
  hybridChips.forEach((item) => item.classList.remove('is-active'));
  chip.classList.add('is-active');
  if (hybridTitle) hybridTitle.textContent = chip.dataset.hybridTitle || chip.textContent.trim();
  if (hybridMessage) hybridMessage.textContent = chip.dataset.hybridMessage || '';
  if (hybridPhoto) hybridPhoto.textContent = chip.dataset.hybridPhoto || '';
  hybridIndex = Math.max(0, hybridChips.indexOf(chip));
}

hybridChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    hybridTouched = true;
    setHybridPreview(chip);
  });
});

if (hybridStage && hybridChips.length && !reduceMotion) {
  let paused = false;
  hybridStage.addEventListener('mouseenter', () => { paused = true; });
  hybridStage.addEventListener('mouseleave', () => { paused = false; });
  window.setInterval(() => {
    if (paused || hybridTouched) return;
    hybridIndex = (hybridIndex + 1) % hybridChips.length;
    setHybridPreview(hybridChips[hybridIndex]);
  }, 5000);
}

const transformVisual = document.querySelector('[data-transform-visual]');
const transformToggles = [...document.querySelectorAll('.transform-toggle')];
const transformTabs = [...document.querySelectorAll('.transform-tab')];
const transformTitle = document.querySelector('[data-transform-title]');
const transformAfterTitle = document.querySelector('[data-transform-after-title]');

transformToggles.forEach((button) => {
  button.addEventListener('click', () => {
    transformToggles.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    if (transformVisual) {
      transformVisual.classList.toggle('is-before', button.dataset.transformView === 'before');
      transformVisual.classList.toggle('is-after', button.dataset.transformView === 'after');
    }
  });
});

transformTabs.forEach((button) => {
  button.addEventListener('click', () => {
    transformTabs.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    if (transformTitle) transformTitle.textContent = button.dataset.transformCategory || button.textContent.trim();
    if (transformAfterTitle) transformAfterTitle.textContent = button.dataset.transformAfter || 'Cleaner repair area';
  });
});

const scopeVisual = document.querySelector('[data-scope-visual]');
const scopeToggles = [...document.querySelectorAll('.scope-toggle-btn')];
const scopeChips = [...document.querySelectorAll('.scope-chip')];
const scopeProblemTitle = document.querySelector('[data-scope-problem-title]');
const scopeImprovedTitle = document.querySelector('[data-scope-improved-title]');
const scopeProblemCopy = document.querySelector('[data-scope-problem-copy]');
const scopeCardType = document.querySelector('[data-scope-card-type]');
const scopeCardNote = document.querySelector('[data-scope-card-note]');

scopeToggles.forEach((button) => {
  button.addEventListener('click', () => {
    scopeToggles.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    if (scopeVisual) {
      scopeVisual.classList.toggle('is-problem', button.dataset.scopeView === 'problem');
      scopeVisual.classList.toggle('is-improved', button.dataset.scopeView === 'improved');
    }
  });
});

scopeChips.forEach((button) => {
  button.addEventListener('click', () => {
    scopeChips.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const type = button.dataset.scopeType || button.textContent.trim();
    if (scopeProblemTitle) scopeProblemTitle.textContent = type;
    if (scopeImprovedTitle) scopeImprovedTitle.textContent = button.dataset.scopeImproved || 'Reviewed repair scope';
    if (scopeProblemCopy) scopeProblemCopy.textContent = button.dataset.scopeProblem || 'Repair area ready for scope review.';
    if (scopeCardType) scopeCardType.textContent = type;
    if (scopeCardNote) scopeCardNote.textContent = button.dataset.scopeNote || 'Add photos and project details.';
  });
});

const finalServiceChips = [...document.querySelectorAll('.final-service-chip')];

finalServiceChips.forEach((button) => {
  button.addEventListener('click', () => {
    finalServiceChips.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
  });
});

const finalMenuButton = document.querySelector('.final-menu-button');
const finalMobileMenu = document.querySelector('#final-mobile-menu');
const finalMenuBackdrop = document.querySelector('.final-menu-backdrop');
const finalMenuCloseItems = [...document.querySelectorAll('[data-final-menu-close]')];
const finalSiteHeader = document.querySelector('.final-site-header');
let finalLastScrollY = window.scrollY;

function finalMenuIsMobile() {
  return window.matchMedia('(max-width: 900px)').matches;
}

function showFinalHeader() {
  finalSiteHeader?.classList.remove('site-header--hidden');
}

function setFinalMenu(open) {
  if (!finalMenuButton || !finalMobileMenu || !finalMenuBackdrop) return;
  finalMenuButton.setAttribute('aria-expanded', String(open));
  finalMenuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  finalMobileMenu.hidden = !open;
  finalMenuBackdrop.hidden = !open;
  document.body.classList.toggle('final-menu-open', open);
  if (open) showFinalHeader();
  if (open) {
    finalMobileMenu.querySelector('a, button')?.focus();
  } else {
    finalMenuButton.focus();
  }
}

finalMenuButton?.addEventListener('click', () => {
  setFinalMenu(finalMenuButton.getAttribute('aria-expanded') !== 'true');
});

finalMenuCloseItems.forEach((item) => {
  item.addEventListener('click', () => setFinalMenu(false));
});

finalMobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setFinalMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && finalMenuButton?.getAttribute('aria-expanded') === 'true') {
    setFinalMenu(false);
  }
});

window.addEventListener('resize', () => {
  if (!finalMenuIsMobile() && finalMenuButton?.getAttribute('aria-expanded') === 'true') {
    setFinalMenu(false);
  }
  if (!finalMenuIsMobile()) showFinalHeader();
  finalLastScrollY = window.scrollY;
});

window.addEventListener('scroll', () => {
  if (!finalMenuIsMobile() || !finalSiteHeader) return;
  if (finalMenuButton?.getAttribute('aria-expanded') === 'true') {
    showFinalHeader();
    finalLastScrollY = window.scrollY;
    return;
  }

  const currentScrollY = window.scrollY;
  const delta = currentScrollY - finalLastScrollY;
  if (currentScrollY <= 80) {
    showFinalHeader();
  } else if (delta > 8) {
    finalSiteHeader.classList.add('site-header--hidden');
  } else if (delta < 0) {
    showFinalHeader();
  }
  finalLastScrollY = currentScrollY;
}, { passive: true });

document.documentElement.classList.add('js-ready');


// ── Scroll reveal (prefers-reduced-motion safe, fail-open) ───────────────────
(function () {
  // Mark html as JS-capable so reveal CSS can safely hide-then-reveal.
  document.documentElement.classList.add('js');

  var revealAll = function () {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  };

  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Reduced motion, no IntersectionObserver, or mobile → show everything now.
  if (mq.matches || !('IntersectionObserver' in window) || window.innerWidth <= 768) {
    revealAll();
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  // Hard safety fallback: reveal everything after 1200ms no matter what.
  setTimeout(revealAll, 1200);
})();
