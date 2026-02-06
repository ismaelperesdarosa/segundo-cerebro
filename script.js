// SIDEBAR SCROLL
document.querySelectorAll(".nav-item").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const id = btn.dataset.target;
    document.getElementById(id).scrollIntoView({
      behavior:"smooth"
    });
  });
});

// COLLAPSIBLE SECTIONS
document.querySelectorAll(".collapsible").forEach(title=>{
  title.addEventListener("click", ()=>{
    const cards = title.nextElementSibling;
    cards.classList.toggle("hidden");
  });
});

// SEARCH FILTER
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", ()=>{
  const value = searchInput.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card=>{
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

