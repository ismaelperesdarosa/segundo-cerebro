const navButtons = document.querySelectorAll(".top-nav button");
const sections = document.querySelectorAll("main section[id]");

function setActiveNav(targetId) {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.target === targetId);
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);
    if (!target) return;

    setActiveNav(button.dataset.target);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveNav(visible.target.id);
    }
  },
  {
    threshold: 0.35,
    rootMargin: "-15% 0px -50% 0px",
  }
);

sections.forEach((section) => observer.observe(section));
