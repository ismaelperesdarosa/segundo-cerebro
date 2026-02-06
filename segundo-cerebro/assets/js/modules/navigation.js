export function setActiveNav() {
  const links = document.querySelectorAll(".main-nav a");
  const current = window.location.pathname;

  links.forEach(link => {
    if (current.includes(link.getAttribute("href"))) {
      link.style.color = "var(--accent)";
    }
  });
}
