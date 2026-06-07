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

document.documentElement.classList.add('js-ready');
