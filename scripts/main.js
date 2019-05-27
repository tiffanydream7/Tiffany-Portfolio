// About page image swap
const aboutImage = document.querySelector(".about-image");
const aboutImageBack = document.querySelector(".about-image-back");

function swapPhoto() {
  setTimeout(function swap() {
    aboutImage.classList.toggle("hide");
    aboutImageBack.classList.toggle("hide");
  }, 250);
}

if (aboutImage) {
  aboutImage.addEventListener("mouseenter", swapPhoto);
}

if (aboutImageBack) {
  aboutImageBack.addEventListener("mouseleave", swapPhoto);
}
