const movies = [
  {
    id: "1895-chegada-trem",
    year: 1895,
    title: "A Chegada do Trem à Estação",
    director: "Irmãos Lumière",
    description:
      "Um dos primeiros filmes já existentes. Registro do cotidiano que impressionou os primeiros espectadores."
  },
  {
    id: "1896-manoir-diable",
    year: 1896,
    title: "Le Manoir du Diable",
    director: "Georges Méliès",
    description:
      "Filme de terror e efeitos especiais. Méliès torna-se o grande mago do cinema primitivo."
  },
  {
    id: "1896-fee-aux-choux",
    year: 1896,
    title: "La Fée aux Choux",
    director: "Alice Guy",
    description:
      "Uma das primeiras narrativas ficcionais da história do cinema. A fada faz o bebê nascer de um repolho."
  },
  {
    id: "1897-after-the-ball",
    year: 1897,
    title: "After the Ball",
    director: "Georges Méliès",
    description:
      "Cena de dança com truques, troca de figurinos e aparições mágicas."
  },
  {
    id: "1898-four-troublesome-heads",
    year: 1898,
    title: "The Four Troublesome Heads",
    director: "Georges Méliès",
    description:
      "Quatro cabeças ganham vida e interagem. Efeitos simples, porém muito imaginativos."
  },
  {
    id: "1899-cinderella",
    year: 1899,
    title: "Cinderella",
    director: "Georges Méliès",
    description:
      "Uma das primeiras adaptações de conto de fadas para o cinema."
  },
  {
    id: "1900-one-man-band",
    year: 1900,
    title: "The One-Man Band",
    director: "Georges Méliès",
    description:
      "Músico toca vários instrumentos ao mesmo tempo. Humor, truque visual e criatividade."
  },
  {
    id: "1901-big-swallow",
    year: 1901,
    title: "The Big Swallow",
    director: "James Williamson",
    description:
      "Homem engole uma andorinha em um truque cômico que fez muito sucesso."
  },
  {
    id: "1902-viagem-lua",
    year: 1902,
    title: "Viagem à Lua",
    director: "Georges Méliès",
    description:
      "Ícone do cinema fantástico. Um foguete atinge o olho da Lua em uma das imagens mais famosas do cinema."
  },
  {
    id: "1902-sage-femme",
    year: 1902,
    title: "Sage-femme de première classe",
    director: "Alice Guy",
    description:
      "Comédia ficcional que mostra o talento de Alice Guy para personagens e situações cotidianas."
  },
  {
    id: "1903-great-train-robbery",
    year: 1903,
    title: "The Great Train Robbery",
    director: "Edwin S. Porter",
    description:
      "Marco da narrativa e da montagem. Inclui ação, suspense e o célebre plano americano."
  },
  {
    id: "1904-wonderful-living-fan",
    year: 1904,
    title: "The Wonderful Living Fan",
    director: "Georges Méliès",
    description:
      "Leque ganha vida e dança. Fantasia visual construída com truques e efeitos."
  },
  {
    id: "1904-viagem-impossivel",
    year: 1904,
    title: "A Viagem Impossível",
    director: "Georges Méliès",
    description:
      "Viagem fantástica repleta de máquinas, criaturas, paisagens impossíveis e imaginação técnica."
  },
  {
    id: "1905-kleptomaniac",
    year: 1905,
    title: "The Kleptomaniac",
    director: "Edwin S. Porter",
    description:
      "Comédia sobre um ladrão compulsivo. Uso criativo da câmera e da edição."
  },
  {
    id: "1906-resultats-feminisme",
    year: 1906,
    title: "Les Résultats du Féminisme",
    director: "Alice Guy",
    description:
      "Comédia satírica sobre inversão de papéis de gênero. Surpreendente e moderna para a época."
  },
  {
    id: "1906-kelly-gang",
    year: 1906,
    title: "The Story of the Kelly Gang",
    director: "Charles Tait",
    description:
      "Primeiro longa-metragem narrativo da história. Baseado em fatos reais."
  },
  {
    id: "1906-vie-du-christ",
    year: 1906,
    title: "La Vie du Christ",
    director: "Alice Guy",
    description:
      "Épico religioso com mais de 30 minutos e centenas de figurantes. Antecipa os grandes épicos do cinema."
  },
  {
    id: "1907-ben-hur",
    year: 1907,
    title: "Ben-Hur",
    director: "Sidney Olcott e Frank Oakes Rose",
    description:
      "Épico bíblico de grande espetáculo, lembrado por suas cenas de bigas."
  },
  {
    id: "1907-enfant-prodigue",
    year: 1907,
    title: "L’Enfant Prodigue",
    director: "Michel Carré",
    description:
      "Drama baseado na parábola bíblica. Um dos primeiros longas europeus conservados."
  },
  {
    id: "1908-fantasmagorie",
    year: 1908,
    title: "Fantasmagorie",
    director: "Émile Cohl",
    description:
      "Primeira animação desenhada do mundo. Simples, experimental e ousada."
  },
  {
    id: "1908-duque-guise",
    year: 1908,
    title: "O Assassinato do Duque de Guise",
    director: "André Calmettes e Charles Le Bargy",
    description:
      "Reconstrução histórica de um crime político real, associada ao prestígio teatral do Film d’Art."
  },
  {
    id: "1909-corner-wheat",
    year: 1909,
    title: "A Corner in Wheat",
    director: "D. W. Griffith",
    description:
      "Drama rural que mostra empatia, contraste social e sensibilidade na mise-en-scène."
  },
  {
    id: "1910-frankenstein",
    year: 1910,
    title: "Frankenstein",
    director: "J. Searle Dawley",
    description:
      "Primeira adaptação cinematográfica conhecida do clássico de Mary Shelley."
  },
  {
    id: "1911-inferno",
    year: 1911,
    title: "L’Inferno",
    director: "Francesco Bertolini, Adolfo Padovan e Giuseppe de Liguoro",
    description:
      "Primeiro filme da Divina Comédia de Dante. Ambicioso e visualmente impressionante."
  },
  {
    id: "1912-musketeers-pig-alley",
    year: 1912,
    title: "The Musketeers of Pig Alley",
    director: "D. W. Griffith",
    description:
      "Aventura policial com montagem avançada, perseguições e atmosfera urbana."
  },
  {
    id: "1912-miracle",
    year: 1912,
    title: "O Milagre (The Miracle)",
    director: "Michel Carré",
    description:
      "Épico de grande escala, associado a espetáculo internacional e apresentação monumental."
  },
  {
    id: "1912-fool-money",
    year: 1912,
    title: "A Fool and His Money",
    director: "Alice Guy-Blaché",
    description:
      "Um dos primeiros filmes conhecidos com elenco totalmente negro. Marco histórico de representação."
  },
  {
    id: "1913-fantomas",
    year: 1913,
    title: "Fantômas",
    director: "Louis Feuillade",
    description:
      "Série policial sobre o mestre do crime Fantômas. Início das narrativas seriadas no cinema."
  },
  {
    id: "1913-quo-vadis",
    year: 1913,
    title: "Quo Vadis?",
    director: "Enrico Guazzoni",
    description:
      "Épico histórico ambientado na Roma antiga. Luxuosos sets e grande apelo popular."
  },
  {
    id: "1914-cabiria",
    year: 1914,
    title: "Cabiria",
    director: "Giovanni Pastrone",
    description:
      "Épico monumental que elevou o cinema a um novo patamar artístico e técnico."
  },
  {
    id: "1915-birth-nation",
    year: 1915,
    title: "The Birth of a Nation",
    director: "D. W. Griffith",
    description:
      "Obra controversa, mas decisiva para a linguagem do cinema: montagem paralela, escala épica e narrativa complexa."
  }
];

const STORAGE_KEY = "cinema-primitivo-checklist-v2";

const list = document.querySelector("#lista");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const progressText = document.querySelector("#progressText");
const progressPercent = document.querySelector("#progressPercent");
const progressFill = document.querySelector("#progressFill");
const resetButton = document.querySelector("#resetButton");

let activeFilter = "all";
let checkedIds = loadProgress();

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
}

function isChecked(id) {
  return checkedIds.includes(id);
}

function toggleMovie(id) {
  if (isChecked(id)) {
    checkedIds = checkedIds.filter((itemId) => itemId !== id);
  } else {
    checkedIds.push(id);
  }

  saveProgress();
  renderMovies();
  updateProgress();
}

function getEraLabel(year) {
  if (year <= 1900) return "Experimentos";
  if (year <= 1906) return "Narrativa";
  if (year <= 1911) return "Expansão";
  return "Grandes formas";
}

function createMovieCard(movie) {
  const article = document.createElement("article");
  article.className = `movie-card ${isChecked(movie.id) ? "is-checked" : ""}`;
  article.dataset.id = movie.id;

  const checkbox = document.createElement("input");
  checkbox.className = "movie-check";
  checkbox.type = "checkbox";
  checkbox.checked = isChecked(movie.id);
  checkbox.setAttribute("aria-label", `Marcar ${movie.title} como visto`);

  checkbox.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMovie(movie.id);
  });

  const content = document.createElement("div");
  content.className = "movie-content";

  content.innerHTML = `
    <div class="movie-topline">
      <span class="movie-year">${movie.year}</span>
      <span class="movie-era">${getEraLabel(movie.year)}</span>
    </div>

    <h2 class="movie-title">${movie.title}</h2>

    <p class="movie-director">
      Direção: ${movie.director}
    </p>

    <p class="movie-description">
      ${movie.description}
    </p>
  `;

  article.appendChild(checkbox);
  article.appendChild(content);

  article.addEventListener("click", () => {
    toggleMovie(movie.id);
  });

  return article;
}

function getFilteredMovies() {
  const query = searchInput.value.trim().toLowerCase();

  return movies.filter((movie) => {
    const text = `${movie.year} ${movie.title} ${movie.director} ${movie.description}`.toLowerCase();
    const matchesSearch = text.includes(query);

    const checked = isChecked(movie.id);
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "done" && checked) ||
      (activeFilter === "pending" && !checked);

    return matchesSearch && matchesFilter;
  });
}

function renderMovies() {
  list.innerHTML = "";

  const filteredMovies = getFilteredMovies();

  if (filteredMovies.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Nenhum filme encontrado com esse filtro.";
    list.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  filteredMovies.forEach((movie) => {
    fragment.appendChild(createMovieCard(movie));
  });

  list.appendChild(fragment);
}

function updateProgress() {
  const total = movies.length;
  const done = checkedIds.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  progressText.textContent = `${done} de ${total} marcados`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

searchInput.addEventListener("input", renderMovies);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    activeFilter = button.dataset.filter;
    renderMovies();
  });
});

resetButton.addEventListener("click", () => {
  const confirmed = window.confirm("Deseja limpar todo o progresso do checklist?");

  if (!confirmed) return;

  checkedIds = [];
  saveProgress();
  renderMovies();
  updateProgress();
});

renderMovies();
updateProgress();