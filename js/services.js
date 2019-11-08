// =================================== Toggle ========================================
const toggle = document.querySelector(".toggle-bar");
const menuBar = document.querySelector(".menu-bar");

function toggleClicked() {
  this.classList.toggle("active-toggle");
  menuBar.classList.toggle("toggle-active");
}

toggle.addEventListener("click", toggleClicked);

// ============================= Smooth Scroll links ========================================

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
    // console.log(run);
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
const containerForsmooth = document.querySelector(
  ".header-bg .box-for-services"
);
const smoothToTransportation = containerForsmooth.querySelector(
  ".transportation"
);
const smoothToBreakfast = containerForsmooth.querySelector(".breakfast");
const smoothToGym = containerForsmooth.querySelector(".gym");
const smoothToOthers = containerForsmooth.querySelector(".others");

smoothToTransportation.addEventListener("click", function() {
  smoothScroll(".content-1", 1000);
});
smoothToBreakfast.addEventListener("click", function() {
  smoothScroll(".content-2", 1000);
});
smoothToGym.addEventListener("click", function() {
  smoothScroll(".content-3", 1000);
});
smoothToOthers.addEventListener("click", function() {
  smoothScroll(".content-4", 1000);
});
