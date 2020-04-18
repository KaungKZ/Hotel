import { blogSlides, blogImages } from "../base/selectors";

export function nextBlog() {
  const currentSlide = blogSlides.querySelector(".up");
  currentSlide.classList.remove("up");

  if (currentSlide.nextElementSibling) {
    currentSlide.nextElementSibling.classList.add("up");
  } else {
    blogImages[0].classList.add("up");
  }
}
export function prevBlog() {
  const currentSlide = blogSlides.querySelector(".up");
  currentSlide.classList.remove("up");

  if (currentSlide.previousElementSibling) {
    currentSlide.previousElementSibling.classList.add("up");
  } else {
    blogImages[blogImages.length - 1].classList.add("up");
  }
}
