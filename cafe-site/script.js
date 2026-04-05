const images = document.querySelectorAll(".menu-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});

s