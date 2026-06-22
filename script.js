const STORAGE_KEY = "cinema-primitivo-checklist";

const films = [
  {
    year: 1895,
    title: "A Chegada do Trem à Estação",
    country: "França",
    director: "Irmãos Lumière",
    description:
      "Um registro simples do cotidiano que revelou o poder do movimento filmado: a chegada de um trem comum podia se transformar em espetáculo."
  },
  {
    year: 1896,
    title: "Le Manoir du Diable",
    country: "França",
    director: "Georges Méliès",
    description:
      "Uma fantasia de terror feita de aparições, desaparecimentos e truques visuais. Mostra o cinema como espaço do impossível."
  },
  {
    year: 1896,
    title: "La Fée aux Choux",
    country: "França",
    director: "Alice Guy",
    description:
      "Uma pequena fábula sobre nascimento e fantasia. Ajuda a mostrar que o cinema podia criar cenas ficcionais, não apenas registrar a realidade."
  },
  {
    year: 1897,
    title: "After the Ball",
    country: "França",
    director: "Georges Méliès",
    description:
      "Explora o corpo, a troca de figurinos e a surpresa visual, aproximando o cinema dos truques de palco e da ilusão teatral."
  },
  {
    year: 1898,
    title: "The Four Troublesome Heads",
    country: "França",
    director: "Georges Méliès",
    description:
      "Méliès multiplica a própria cabeça em cena e brinca com identidade, corpo e magia, usando o corte como instrumento de transformação."
  },
  {
    year: 1899,
    title: "Cinderella",
    country: "França",
    director: "Georges Méliès",
    description:
      "Condensa o conto de fadas em quadros mágicos, transformações e aparições, mostrando a força do cinema para adaptar histórias conhecidas."
  },
  {
    year: 1900,
    title: "The One-Man Band",
    country: "França",
    director: "Georges Méliès",
    description:
      "Um músico se desdobra em vários corpos. O filme usa a repetição da imagem para transformar uma apresentação em truque cômico."
  },
  {
    year: 1901,
    title: "The Big Swallow",
    country: "Reino Unido",
    director: "James Williamson",
    description:
      "Um homem avança em direção à câmera até parecer engoli-la, brincando com a relação entre tela, espectador e ponto de vista."
  },
  {
    year: 1902,
    title: "Viagem à Lua",
    country: "França",
    director: "Georges Méliès",
    description:
      "Uma aventura fantástica que transforma ciência, sonho e espetáculo em imagens inesquecíveis. O cinema aparece como máquina de imaginação."
  },
  {
    year: 1902,
    title: "Sage-femme de première classe",
    country: "França",
    director: "Alice Guy",
    description:
      "Uma comédia sobre nascimento e vida cotidiana, revelando o interesse de Alice Guy por situações sociais, humor e personagens comuns."
  },
  {
    year: 1903,
    title: "The Great Train Robbery",
    country: "EUA",
    director: "Edwin S. Porter",
    description:
      "Organiza ação, crime e perseguição em sequência narrativa. A montagem passa a criar ritmo, suspense e continuidade espacial."
  },
  {
    year: 1904,
    title: "The Wonderful Living Fan",
    country: "França",
    director: "Georges Méliès",
    description:
      "Transforma um objeto de cena em espetáculo vivo, misturando dança, ilusão e fantasia visual típica do cinema de atrações."
  },
  {
    year: 1904,
    title: "A Viagem Impossível",
    country: "França",
    director: "Georges Méliès",
    description:
      "Uma aventura absurda e grandiosa em que a tecnologia vira delírio. O filme celebra o sonho de ir além dos limites do mundo."
  },
  {
    year: 1905,
    title: "The Kleptomaniac",
    country: "EUA",
    director: "Edwin S. Porter",
    description:
      "Contrasta crime, classe social e julgamento moral, sugerindo que a sociedade trata de forma diferente a pobreza e a riqueza."
  },
  {
    year: 1906,
    title: "Les Résultats du Féminisme",
    country: "França",
    director: "Alice Guy",
    description:
      "Inverte papéis de gênero para satirizar costumes sociais, expondo de forma cômica a rigidez das normas masculinas e femininas."
  },
  {
    year: 1906,
    title: "The Story of the Kelly Gang",
    country: "Austrália",
    director: "Charles Tait",
    description:
      "Usa a figura de um fora-da-lei real para construir uma narrativa longa, aproximando cinema, mito popular e história nacional."
  },
  {
    year: 1906,
    title: "La Vie du Christ",
    country: "França",
    director: "Alice Guy",
    description:
      "Organiza episódios religiosos em grande escala, com muitos figurantes, mostrando que o cinema podia narrar temas sagrados de forma épica."
  },
  {
    year: 1907,
    title: "Ben-Hur",
    country: "EUA",
    director: "Sidney Olcott e Frank Oakes Rose",
    description:
      "Aposta no espetáculo bíblico e na corrida de bigas, antecipando o interesse do cinema por cenas grandiosas e ação histórica."
  },
  {
    year: 1907,
    title: "L’Enfant Prodigue",
    country: "França",
    director: "Michel Carré",
    description:
      "Adapta uma parábola bíblica em forma de drama filmado, mostrando a transição entre o teatro registrado e o longa narrativo."
  },
  {
    year: 1908,
    title: "Fantasmagorie",
    country: "França",
    director: "Émile Cohl",
    description:
      "Um desenho em constante transformação, onde figuras surgem, desaparecem e mudam de forma. A animação nasce como metamorfose."
  },
  {
    year: 1908,
    title: "O Assassinato do Duque de Guise",
    country: "França",
    director: "André Calmettes e Charles Le Bargy",
    description:
      "Reconstitui um crime político com prestígio teatral, buscando afirmar o cinema como arte séria, histórica e culturalmente respeitável."
  },
  {
    year: 1909,
    title: "A Corner in Wheat",
    country: "EUA",
    director: "D. W. Griffith",
    description:
      "Contrasta especulação financeira e sofrimento popular. A montagem paralela cria uma crítica social sobre riqueza, fome e exploração."
  },
  {
    year: 1910,
    title: "Frankenstein",
    country: "EUA",
    director: "J. Searle Dawley",
    description:
      "Adapta Mary Shelley como uma história sobre criação, medo e responsabilidade, usando efeitos visuais para materializar o monstro."
  },
  {
    year: 1911,
    title: "L’Inferno",
    country: "Itália",
    director: "Francesco Bertolini, Adolfo Padovan e Giuseppe de Liguoro",
    description:
      "Transforma Dante em imagens monumentais, mostrando que o cinema podia enfrentar obras literárias complexas com ambição visual."
  },
  {
    year: 1912,
    title: "The Musketeers of Pig Alley",
    country: "EUA",
    director: "D. W. Griffith",
    description:
      "Explora o submundo urbano, o crime e a tensão social, usando montagem e encenação para construir suspense em espaços apertados."
  },
  {
    year: 1912,
    title: "O Milagre (The Miracle)",
    country: "Reino Unido",
    director: "Michel Carré",
    description:
      "Une cinema, teatro, música e espetáculo religioso, buscando criar uma experiência grandiosa, visual e emocional para o público."
  },
  {
    year: 1912,
    title: "A Fool and His Money",
    country: "EUA",
    director: "Alice Guy",
    description:
      "Uma comédia sobre desejo, dinheiro e aparência social, lembrada também por seu elenco negro em um contexto de forte exclusão."
  },
  {
    year: 1913,
    title: "Fantômas",
    country: "França",
    director: "Louis Feuillade",
    description:
      "Transforma o criminoso em figura moderna, misteriosa e recorrente, ajudando a consolidar o suspense seriado no cinema."
  },
  {
    year: 1913,
    title: "Quo Vadis?",
    country: "Itália",
    director: "Enrico Guazzoni",
    description:
      "Usa a Roma antiga para criar espetáculo histórico, conflito moral e grandiosidade visual, aproximando cinema e superprodução."
  },
  {
    year: 1914,
    title: "Cabiria",
    country: "Itália",
    director: "Giovanni Pastrone",
    description:
      "Eleva a escala do épico cinematográfico com cenários monumentais e movimentos de câmera, fazendo o cinema parecer arquitetura em movimento."
  },
  {
    year: 1915,
    title: "The Birth of a Nation",
    country: "EUA",
    director: "D. W. Griffith",
    description:
      "Filme tecnicamente influente e ideologicamente racista. Mostra a força da montagem narrativa e também o perigo político das imagens."
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

    if (checkbox) {
      checkbox.checked = false;
    }
  });

  updateProgress();
  applyFilter();
});

renderFilms();