// ================================ Menu clicks ===========================
const menuBar = document.querySelector(".menu-bar");
const links = menuBar.querySelectorAll("a");

function linkClicked(e) {
  if (this.dataset.link === "true") {
    const activeLink = menuBar.querySelector(".active");
    activeLink.classList.remove("active");
    this.classList.add("active");
  }
  // console.log(this);
}

links.forEach(link => link.addEventListener("click", linkClicked));
