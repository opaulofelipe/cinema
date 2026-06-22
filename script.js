const STORAGE_KEY = "cinema-primitivo-checklist";

const films = [
  {
    year: 1895,
    title: "A Chegada do Trem à Estação",
    country: "França",
    director: "Irmãos Lumière",
    description:
      "Um dos primeiros filmes já existentes. Registro do cotidiano que impressionou os primeiros espectadores."
  },
  {
    year: 1896,
    title: "Le Manoir du Diable",
    country: "França",
    director: "Georges Méliès",
    description:
      "Filme de terror e efeitos especiais. Méliès torna-se o grande mago do cinema primitivo."
  },
  {
    year: 1896,
    title: "La Fée aux Choux",
    country: "França",
    director: "Alice Guy",
    description:
      "Uma das primeiras narrativas ficcionais da história do cinema. A fada faz o bebê nascer de um repolho."
  },
  {
    year: 1897,
    title: "After the Ball",
    country: "França",
    director: "Georges Méliès",
    description:
      "Cena de dança com truques como a troca de figurinos e aparições mágicas."
  },
  {
    year: 1898,
    title: "The Four Troublesome Heads",
    country: "França",
    director: "Georges Méliès",
    description:
      "Quatro cabeças ganham vida e interagem. Efeitos simples, porém muito imaginativos."
  },
  {
    year: 1899,
    title: "Cinderella",
    country: "França",
    director: "Georges Méliès",
    description:
      "Uma das primeiras adaptações de conto de fadas para o cinema."
  },
  {
    year: 1900,
    title: "The One-Man Band",
    country: "França",
    director: "Georges Méliès",
    description:
      "Músico toca vários instrumentos ao mesmo tempo. Humor e criatividade."
  },
  {
    year: 1901,
    title: "The Big Swallow",
    country: "Reino Unido",
    director: "James Williamson",
    description:
      "Homem engole uma andorinha em um truque cômico que fez muito sucesso."
  },
  {
    year: 1902,
    title: "Viagem à Lua",
    country: "França",
    director: "Georges Méliès",
    description:
      "Ícone do cinema. Viagem fantástica em que um foguete atinge o olho da Lua."
  },
  {
    year: 1902,
    title: "Sage-femme de première classe",
    country: "França",
    director: "Alice Guy",
    description:
      "Comédia ficcional que mostra o talento de Alice Guy para personagens e situações cotidianas."
  },
  {
    year: 1903,
    title: "The Great Train Robbery",
    country: "EUA",
    director: "Edwin S. Porter",
    description:
      "Marco da narrativa e da montagem. Inclui ação, suspense e o primeiro plano americano."
  },
  {
    year: 1904,
    title: "The Wonderful Living Fan",
    country: "França",
    director: "Georges Méliès",
    description:
      "Leque ganha vida e dança. Fantasia científica com efeitos."
  },
  {
    year: 1904,
    title: "A Viagem Impossível",
    country: "França",
    director: "Georges Méliès",
    description:
      "Viagem fantástica em balão repleta de criaturas e paisagens incríveis."
  },
  {
    year: 1905,
    title: "The Kleptomaniac",
    country: "EUA",
    director: "Edwin S. Porter",
    description:
      "Comédia sobre um ladrão compulsivo. Uso criativo da câmera e da edição."
  },
  {
    year: 1906,
    title: "Les Résultats du Féminisme",
    country: "França",
    director: "Alice Guy",
    description:
      "Comédia satírica sobre inversão de papéis de gênero. Surpreendente e moderna para a época."
  },
  {
    year: 1906,
    title: "The Story of the Kelly Gang",
    country: "Austrália",
    director: "Charles Tait",
    description:
      "Primeiro longa-metragem narrativo da história. Baseado em fatos reais."
  },
  {
    year: 1906,
    title: "La Vie du Christ",
    country: "França",
    director: "Alice Guy",
    description:
      "Épico religioso com mais de 30 minutos e centenas de figurantes. Antecipa os grandes épicos do cinema."
  },
  {
    year: 1907,
    title: "Ben-Hur",
    country: "EUA",
    director: "Sidney Olcott e Frank Oakes Rose",
    description:
      "Épico bíblico de grande espetáculo e batalhas de bigas."
  },
  {
    year: 1907,
    title: "L’Enfant Prodigue",
    country: "França",
    director: "Michel Carré",
    description:
      "Drama baseado na parábola bíblica. Um dos primeiros longas europeus conservados."
  },
  {
    year: 1908,
    title: "Fantasmagorie",
    country: "França",
    director: "Émile Cohl",
    description:
      "Primeira animação desenhada do mundo. Simples e ousada."
  },
  {
    year: 1908,
    title: "O Assassinato do Duque de Guise",
    country: "França",
    director: "André Calmettes e Charles Le Bargy",
    description:
      "Reconstrução histórica de um crime político real."
  },
  {
    year: 1909,
    title: "A Corner in Wheat",
    country: "EUA",
    director: "D. W. Griffith",
    description:
      "Drama rural que mostra empatia e sensibilidade na mise-en-scène e na atuação."
  },
  {
    year: 1910,
    title: "Frankenstein",
    country: "EUA",
    director: "J. Searle Dawley",
    description:
      "Primeira adaptação cinematográfica do clássico de Mary Shelley."
  },
  {
    year: 1911,
    title: "L’Inferno",
    country: "Itália",
    director: "Francesco Bertolini, Adolfo Padovan e Giuseppe de Liguoro",
    description:
      "Primeiro filme da Divina Comédia de Dante. Ambicioso e visualmente impressionante."
  },
  {
    year: 1912,
    title: "The Musketeers of Pig Alley",
    country: "EUA",
    director: "D. W. Griffith",
    description:
      "Aventura policial com montagem avançada e perseguições empolgantes."
  },
  {
    year: 1912,
    title: "O Milagre (The Miracle)",
    country: "Reino Unido",
    director: "Michel Carré",
    description:
      "Épico em duas partes com cerca de 2 horas de duração. Grande espetáculo internacional."
  },
  {
    year: 1912,
    title: "A Fool and His Money",
    country: "EUA",
    director: "Alice Guy",
    description:
      "Um dos primeiros filmes com elenco totalmente negro conhecidos. Marco histórico de representação."
  },
  {
    year: 1913,
    title: "Fantômas",
    country: "França",
    director: "Louis Feuillade",
    description:
      "Série policial sobre o mestre do crime Fantômas. Início das narrativas seriadas no cinema."
  },
  {
    year: 1913,
    title: "Quo Vadis?",
    country: "Itália",
    director: "Enrico Guazzoni",
    description:
      "Épico histórico ambientado na Roma antiga. Luxuosos sets e grande apelo popular."
  },
  {
    year: 1914,
    title: "Cabiria",
    country: "Itália",
    director: "Giovanni Pastrone",
    description:
      "Épico monumental que elevou o cinema a um novo patamar artístico e técnico."
  },
  {
    year: 1915,
    title: "The Birth of a Nation",
    country: "EUA",
    director: "D. W. Griffith",
    description:
      "Obra controversa, mas decisiva para a linguagem do cinema: montagem paralela, escala épica e narrativa complexa."
  }
];

const filmList = document.querySelector("#filmList");
const progressRing = document.querySelector("#progressRing");
const progressPercent = document.querySelector("#progressPercent");
const progressText = document.querySelector("#progressText");
const clearButton = document.querySelector("#clearButton");
const filterButtons = document.querySelectorAll(".filter");

let currentFilter = "all";
let checkedFilms = loadCheckedFilms();

function getFilmId(film, index) {
  return `${film.year}-${index}-${film.title}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function loadCheckedFilms() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch {
    return new Set();
  }
}

function saveCheckedFilms() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...checkedFilms]));
}

function createFilmCard(film, index) {
  const id = getFilmId(film, index);
  const isChecked = checkedFilms.has(id);

  const article = document.createElement("article");
  article.className = `film-card${isChecked ? " is-complete" : ""}`;
  article.dataset.id = id;

  const year = document.createElement("div");
  year.className = "film-year";
  year.textContent = film.year;

  const content = document.createElement("div");
  content.className = "film-content";

  const title = document.createElement("h2");
  title.className = "film-title";
  title.textContent = film.title;

  const meta = document.createElement("p");
  meta.className = "film-meta";
  meta.textContent = `${film.country} · Direção: ${film.director}`;

  const description = document.createElement("p");
  description.className = "film-description";
  description.textContent = film.description;

  content.append(title, meta, description);

  const label = document.createElement("label");
  label.className = "check";
  label.setAttribute("aria-label", `Marcar ${film.title}`);

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = isChecked;

  const visual = document.createElement("span");
  visual.setAttribute("aria-hidden", "true");

  input.addEventListener("change", () => {
    if (input.checked) {
      checkedFilms.add(id);
      article.classList.add("is-complete");
    } else {
      checkedFilms.delete(id);
      article.classList.remove("is-complete");
    }

    saveCheckedFilms();
    updateProgress();
    applyFilter();
  });

  label.append(input, visual);
  article.append(year, content, label);

  return article;
}

function renderFilms() {
  filmList.innerHTML = "";

  films.forEach((film, index) => {
    filmList.appendChild(createFilmCard(film, index));
  });

  applyFilter();
  updateProgress();
}

function updateProgress() {
  const total = films.length;
  const completed = checkedFilms.size;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
  const degrees = Math.round((percent / 100) * 360);

  progressPercent.textContent = `${percent}%`;
  progressText.textContent = `${completed} de ${total} filmes marcados`;
  progressRing.style.setProperty("--progress", `${degrees}deg`);
}

function applyFilter() {
  const cards = document.querySelectorAll(".film-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const isDone = checkedFilms.has(card.dataset.id);

    const shouldShow =
      currentFilter === "all" ||
      (currentFilter === "done" && isDone) ||
      (currentFilter === "pending" && !isDone);

    card.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  showEmptyStateIfNeeded(visibleCount);
}

function showEmptyStateIfNeeded(visibleCount) {
  const oldEmptyState = document.querySelector(".empty-state");

  if (oldEmptyState) {
    oldEmptyState.remove();
  }

  if (visibleCount > 0) {
    return;
  }

  const empty = document.createElement("div");
  empty.className = "empty-state";

  if (currentFilter === "pending") {
    empty.textContent = "Todos os filmes foram marcados.";
  } else if (currentFilter === "done") {
    empty.textContent = "Nenhum filme foi marcado ainda.";
  } else {
    empty.textContent = "Nenhum filme encontrado.";
  }

  filmList.appendChild(empty);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    applyFilter();
  });
});

clearButton.addEventListener("click", () => {
  checkedFilms.clear();
  saveCheckedFilms();

  document.querySelectorAll(".film-card").forEach((card) => {
    card.classList.remove("is-complete");
    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.checked = false;
  });

  updateProgress();
  applyFilter();
});

renderFilms();