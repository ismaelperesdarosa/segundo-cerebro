let allNotes = [];
let activeTag = null;

/* ------------------------ */

async function fetchNotes() {
  const response = await fetch("/segundo-cerebro/data/notes.json");
  return response.json();
}

/* ------------------------ */

function createTagElement(tag) {
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = `#${tag}`;

  span.addEventListener("click", () => {
    if (activeTag === tag) {
      activeTag = null;
    } else {
      activeTag = tag;
    }

    applyFilters();
    updateActiveTags();
  });

  return span;
}

/* ------------------------ */

function updateActiveTags() {
  document.querySelectorAll(".tag").forEach(tagEl => {
    if (tagEl.textContent === `#${activeTag}`) {
      tagEl.classList.add("tag--active");
    } else {
      tagEl.classList.remove("tag--active");
    }
  });
}

/* ------------------------ */

function createCard(note) {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = note.title;

  const desc = document.createElement("p");
  desc.textContent = note.description;

  const tagsContainer = document.createElement("div");
  tagsContainer.className = "tags";

  note.tags.forEach(tag => {
    tagsContainer.appendChild(createTagElement(tag));
  });

  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(tagsContainer);

  return card;
}

/* ------------------------ */

function render(containerId, notes) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  notes.forEach(note => container.appendChild(createCard(note)));
}

/* ------------------------ */

function applyFilters() {
  const input = document.getElementById("searchInput");
  const term = input ? input.value.toLowerCase() : "";

  let filtered = allNotes;

  if (term) {
    filtered = filtered.filter(n =>
      n.title.toLowerCase().includes(term)
    );
  }

  if (activeTag) {
    filtered = filtered.filter(n =>
      n.tags.includes(activeTag)
    );
  }

  render("notes-container", filtered);
  render("latest-notes", filtered.slice(0, 6));
}

/* ------------------------ */

function setupSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  input.addEventListener("input", applyFilters);
}

/* ------------------------ */

async function init() {
  allNotes = await fetchNotes();

  render("latest-notes", allNotes.slice(0, 6));
  render("notes-container", allNotes);

  setupSearch();
}

init();
