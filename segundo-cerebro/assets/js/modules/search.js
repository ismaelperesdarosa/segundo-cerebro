async function fetchNotes() {
  const response = await fetch("../../data/notes.json");
  return response.json();
}

function createCard(note) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.description}</p>
  `;
  return card;
}

async function renderNotes(containerId) {
  const notes = await fetchNotes();
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = "";

  notes.forEach(note => {
    container.appendChild(createCard(note));
  });
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  input.addEventListener("input", async () => {
    const term = input.value.toLowerCase();
    const notes = await fetchNotes();
    const container = document.getElementById("notes-container");

    container.innerHTML = "";

    notes
      .filter(n => n.title.toLowerCase().includes(term))
      .forEach(n => container.appendChild(createCard(n)));
  });
}

/* AUTO INIT */

renderNotes("latest-notes");
renderNotes("notes-container");
setupSearch();
