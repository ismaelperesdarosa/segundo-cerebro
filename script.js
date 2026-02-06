document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.classList.add("fade-in");
  });

  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("show");
    });
  }, 150);

});
