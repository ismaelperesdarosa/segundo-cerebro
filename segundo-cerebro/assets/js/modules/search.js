let allNotes = [];
let activeTag = null;

async function fetchNotes() {
  const res = await fetch("/segundo-cerebro/data/notes.json");
  return res.json();
}

function createCard(note) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <span class="category">${note.category}</span>
    <h3>${note.title}</h3>
    <p>${note.description}</p>
  `;

  const tags = document.createElement("div");
  tags.className = "tags";

  note.tags.forEach(tag => {
    const t = document.createElement("span");
    t.className = "tag";
    t.textContent = "#" + tag;
    t.onclick = () => {
      activeTag = tag;
      applyFilters();
    };
    tags.appendChild(t);
  });

  card.appendChild(tags);
  return card;
}

function render(id, notes) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = "";
  notes.forEach(n => el.appendChild(createCard(n)));
}

function applyFilters() {
  let notes = allNotes;

  if (activeTag) {
    notes = notes.filter(n => n.tags.includes(activeTag));
  }

  render("notes-container", notes);
  render("latest-notes", notes.slice(0,6));
}

(async function init(){
  allNotes = await fetchNotes();
  render("latest-notes", allNotes.slice(0,6));
  render("notes-container", allNotes);
})();
