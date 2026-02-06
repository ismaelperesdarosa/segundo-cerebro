export function setupTheme() {
  const btn = document.getElementById("themeToggle");

  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light");
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const mode = document.body.classList.contains("light")
      ? "light"
      : "dark";

    localStorage.setItem("theme", mode);
  });
}
