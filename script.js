// SCROLL PELO MENU
document.querySelectorAll(".top-nav button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const id = btn.dataset.target;
    document.getElementById(id).scrollIntoView({
      behavior:"smooth"
    });
  });
});

// SEÇÕES EXPANSÍVEIS
document.querySelectorAll(".collapsible").forEach(title=>{
  title.addEventListener("click", ()=>{
    const cards = title.nextElementSibling;
    cards.classList.toggle("hidden");
  });
});

// BUSCA GLOBAL
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", ()=>{
  const value = searchInput.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card=>{
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

