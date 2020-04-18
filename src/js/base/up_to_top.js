import { topButton } from "../base/selectors";

export function upToTop() {
  const height = document.body.scrollHeight;

  if (window.pageYOffset > height / 2) {
    topButton.classList.add("btn-active");
  } else {
    topButton.classList.remove("btn-active");
  }
}
