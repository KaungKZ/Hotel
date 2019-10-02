// function test(num) {
//   if (num <= 0) return 1;
//   else return num * test(num - 1);
// }

// console.log(test(10));
const carousel = document.querySelector(".slider");
const slides = carousel.querySelectorAll(".slide");

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
