import { menuBar } from "../base/selectors";

export function linkClicked() {
  if (this.dataset.link === "true") {
    const activeLink = menuBar.querySelector(".active");
    activeLink.classList.remove("active");
    this.classList.add("active");
  }
}

// mobile toggle

export function toggleClicked() {
  this.classList.toggle("open");
  menuBar.classList.toggle("toggle-active");
}
