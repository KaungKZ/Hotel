export const toggle = selectOne(".toggle-bar");
export const menuBar = selectOne(".menu-bar");
export const carousel = selectOne(".slider");
export const slides = selectAll(".slide");
export const blogSlides = selectOne(".slider-blog");
export const blogImages = selectAll(".blogBox");
export const topButton = selectOne(".click-to-top");
export const nextBtn = selectOne("#nextBtn");
export const prevBtn = selectOne("#prevBtn");
export const links = selectAll(".menu-bar a");
export const containerForsmooth = selectOne(
  ".header-bg-services .box-for-services"
);

export function selectOne(selector) {
  return document.querySelector(selector);
}

function selectAll(selector) {
  return document.querySelectorAll(selector);
}
