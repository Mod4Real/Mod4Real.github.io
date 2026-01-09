function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);
}

document.addEventListener("DOMContentLoaded", loadTheme);
