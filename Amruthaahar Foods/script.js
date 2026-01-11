window.addEventListener("load", () => {
  const curtain = document.getElementById("curtain");

  // Let intro breathe
  setTimeout(() => {
    curtain.classList.add("open");
  }, 1300);

  // Remove curtain after animation
  setTimeout(() => {
    curtain.style.display = "none";
  }, 3800);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
