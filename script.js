(() => {
  const STORAGE_KEY = 'cinema-primitivo-checklist-v1';
  const cards = Array.from(document.querySelectorAll('.movie-card'));
  const checks = cards.map((card) => card.querySelector('.movie-check'));
  const progress = document.querySelector('[data-progress]');
  const resetButton = document.querySelector('[data-reset]');

  const loadState = () => {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
    } catch {
      return new Set();
    }
  };

  const saveState = () => {
    const doneIds = checks
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.dataset.id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(doneIds));
  };

  const updateProgress = () => {
    const done = checks.filter((checkbox) => checkbox.checked).length;
    progress.textContent = `${done}/${checks.length} filmes marcados`;
  };

  const setCardState = (checkbox) => {
    const card = checkbox.closest('.movie-card');
    card.classList.toggle('is-done', checkbox.checked);
    card.setAttribute('aria-checked', String(checkbox.checked));
  };

  const saved = loadState();
  checks.forEach((checkbox) => {
    checkbox.checked = saved.has(checkbox.dataset.id);
    setCardState(checkbox);
    checkbox.addEventListener('change', () => {
      setCardState(checkbox);
      saveState();
      updateProgress();
    });
  });

  resetButton.addEventListener('click', () => {
    checks.forEach((checkbox) => {
      checkbox.checked = false;
      setCardState(checkbox);
    });
    saveState();
    updateProgress();
  });

  updateProgress();
})();
