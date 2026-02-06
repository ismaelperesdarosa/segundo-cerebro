export async function loadNotes() {
  const response = await fetch("data/notes.json");
  const notes = await response.json();

  const container = document.getElementById("latest-notes");

  notes.forEach(note => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${note.title}</h3><p>${note.description}</p>`;
    container.appendChild(card);
  });
}
