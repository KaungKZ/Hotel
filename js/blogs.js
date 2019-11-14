// =================================== Toggle ========================================
const toggle = document.querySelector(".toggle-bar");
const menuBar = document.querySelector(".menu-bar");

function toggleClicked() {
  this.classList.toggle("active-toggle");
  menuBar.classList.toggle("toggle-active");
}

toggle.addEventListener("click", toggleClicked);
