const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const galleryImages = document.querySelectorAll(".js-lightbox");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("active");
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
  }
});