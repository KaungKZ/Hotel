import "./css/global.scss";
import "./css/home.scss";
import "./css/rooms.scss";
import "./css/services.scss";
import "./css/blogs.scss";

// =================================== Toggle ========================================
const toggle = document.querySelector(".toggle-bar");
const menuBar = document.querySelector(".menu-bar");

function toggleClicked() {
  this.classList.toggle("open");
  menuBar.classList.toggle("toggle-active");
}

toggle.addEventListener("click", toggleClicked);
// ================================== Carousel =====================================
const carousel = document.querySelector(".slider");

const slides = carousel.querySelectorAll(".slide");
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

// ============================= Smooth click-to-top button ========================================
function smoothScroll(target, duration) {
  const goal = document.querySelector(target);
  const targetPosition = goal.getBoundingClientRect().top;

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  var startTime = null;

  function Scrollanimation(time) {
    if (startTime === null) {
      startTime = time;
    }
    const timeElapsed = time - startTime;
    const run = calculation(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(Scrollanimation);
    }
  }
  function calculation(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }
  requestAnimationFrame(Scrollanimation);
}

const topButton = document.querySelector(".click-to-top");
window.addEventListener("scroll", () => {
  const height = document.body.scrollHeight;

  if (window.pageYOffset > height / 2) {
    topButton.classList.add("btn-active");
  } else {
    topButton.classList.remove("btn-active");
  }
});
topButton.addEventListener("click", function() {
  smoothScroll(".header", 2000);
});