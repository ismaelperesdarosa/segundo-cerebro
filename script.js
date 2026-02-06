// Fade-in ao carregar
document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(".card");

  elements.forEach(el => {
    el.classList.add("fade-in");
  });

  setTimeout(() => {
    elements.forEach(el => {
      el.classList.add("show");
    });
  }, 200);

});

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
