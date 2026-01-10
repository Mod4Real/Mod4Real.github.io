// WHISPER EFFECT
document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".whisper");

  setInterval(() => {
    const w = words[Math.floor(Math.random() * words.length)];
    w.style.animation = "whisperGlitch 0.4s";
    setTimeout(() => w.style.animation = "", 400);
  }, 2500);
});

// PAGE TRANSITION
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const screen = document.getElementById("transition");
    screen.style.animation = "staticFlash 0.6s";

    setTimeout(() => {
      window.location.href = link.href;
    }, 600);
  });
});
