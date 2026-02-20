// Sticky shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}
