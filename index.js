const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -410,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: 410,
    behavior: "smooth",
  });
});
