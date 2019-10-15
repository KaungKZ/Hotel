const carousel = document.querySelector(".slider");
const slides = carousel.querySelectorAll(".slide");
const next = document.querySelector("#nextBtn");
const prev = document.querySelector("#prevBtn");
const blogSlides = document.querySelector(".slider-blog");
const blogImages = blogSlides.querySelectorAll(".blogBox");

const nextSlide = () => {
  const currentSlide = carousel.querySelector(".current");
  currentSlide.classList.remove("current");

  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};
setInterval(nextSlide, 5000);

const nextBlog = () => {
  const currentSlide = blogSlides.querySelector(".up");
  currentSlide.classList.remove("up");

  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("up");
  } else {
    blogImages[0].classList.add("up");
  }
};
const prevBlog = () => {
  const currentSlide = blogSlides.querySelector(".up");
  currentSlide.classList.remove("up");

  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add("up");
  } else {
    blogImages[blogImages.length - 1].classList.add("up");
  }
};

nextBtn.addEventListener("click", () => {
  nextBlog();
});

prevBtn.addEventListener("click", () => {
  prevBlog();
});

const toggle = document.querySelector(".toggle-bar");
const menuBar = document.querySelector(".menu-bar");

function toggleClicked() {
  this.classList.toggle("active-toggle");
  menuBar.classList.toggle("toggle-active");
}

toggle.addEventListener("click", toggleClicked);
