const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

function activateTab(targetId){
  tabButtons.forEach((button)=>{
    const isActive = button.dataset.target === targetId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel)=>{
    const isActive = panel.id === targetId;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

tabButtons.forEach((button)=>{
  button.addEventListener("click", ()=>{
    activateTab(button.dataset.target);
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
