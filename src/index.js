import "./css/style_h.scss";

import {
  topButton,
  nextBtn,
  prevBtn,
  links,
  toggle,
} from "./js/base/selectors";
import { toggleClicked, linkClicked } from "./js/base/menu_links";
import { nextBlog, prevBlog } from "./js/home/blog_slides";
import { smoothScroll } from "./js/base/smoothScroll";
import { upToTop } from "./js/base/up_to_top";
import { nextSlide } from "./js/home/home_slides";

links.forEach((link) => link.addEventListener("click", linkClicked));
toggle.addEventListener("click", toggleClicked);
nextBtn.addEventListener("click", nextBlog);
prevBtn.addEventListener("click", prevBlog);
window.addEventListener("scroll", upToTop);
topButton.addEventListener("click", () => {
  smoothScroll(".header", 2000);
});
setInterval(nextSlide, 5000);
