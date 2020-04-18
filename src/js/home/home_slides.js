import { carousel, slides } from "../base/selectors";

export function nextSlide() {
  const currentSlide = carousel.querySelector(".current");
  currentSlide.classList.remove("current");

  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
}
