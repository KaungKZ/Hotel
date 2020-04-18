import { selectOne } from "./selectors";

export function smoothScroll(target, duration) {
  const goal = selectOne(target);
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
