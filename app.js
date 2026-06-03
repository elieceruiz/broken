const startBtn = document.getElementById("startBtn");
const cubeBtn = document.getElementById("cubeBtn");
const hintText = document.getElementById("hintText");

const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");
const screen3 = document.getElementById("screen-3");

let tries = 0;

function showScreen(screen) {
  [screen1, screen2, screen3].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

startBtn.addEventListener("click", () => {
  showScreen(screen2);
});

cubeBtn.addEventListener("click", () => {
  tries += 1;

  if (tries === 1) {
    cubeBtn.style.transform = "translate(26px, -10px)";
    hintText.textContent = "Uy... le dio pena.";
    return;
  }

  if (tries === 2) {
    cubeBtn.style.transform = "translate(-22px, 14px)";
    hintText.textContent = "Todavía está muy frío esto.";
    return;
  }

  hintText.textContent = "Bueno, ahora sí.";
  setTimeout(() => {
    showScreen(screen3);
  }, 700);
});
