import "../../css/style_s.scss";

import { toggle, containerForsmooth } from "../base/selectors";
import { smoothScroll } from "../base/smoothScroll";
import { toggleClicked } from "../base/menu_links";

const smoothToTransportation = containerForsmooth.querySelector(
  ".transportation"
);
const smoothToBreakfast = containerForsmooth.querySelector(".breakfast");
const smoothToGym = containerForsmooth.querySelector(".gym");
const smoothToOthers = containerForsmooth.querySelector(".others");

toggle.addEventListener("click", toggleClicked);

smoothToTransportation.addEventListener("click", () => {
  smoothScroll(".content-1", 1000);
});
smoothToBreakfast.addEventListener("click", () => {
  smoothScroll(".content-2", 1000);
});
smoothToGym.addEventListener("click", () => {
  smoothScroll(".content-3", 1000);
});
smoothToOthers.addEventListener("click", () => {
  smoothScroll(".content-4", 1000);
});
