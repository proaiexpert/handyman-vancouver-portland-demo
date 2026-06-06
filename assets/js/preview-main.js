const chips = document.querySelectorAll('.service-chip');
const selected = document.querySelector('#selected-service');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('is-active'));
    chip.classList.add('is-active');
    if (selected) selected.textContent = chip.dataset.service || chip.textContent.trim();
  });
});

document.documentElement.classList.add('js-ready');
