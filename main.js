const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;

const sliderNav = (manual) => {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");

  currentSlide = manual;
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  sliderNav(currentSlide);
};

// Set interval to change slide every 10 seconds (10000 milliseconds)
const sliderInterval = setInterval(nextSlide, 10000);

// Pause slider when user interacts with navigation buttons
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clearInterval(sliderInterval);
    sliderNav(i);
  });
});

// Pause slider when user hovers over the slides
slides.forEach((slide) => {
  slide.addEventListener("mouseover", () => {
    clearInterval(sliderInterval);
  });

  slide.addEventListener("mouseout", () => {
    sliderInterval = setInterval(nextSlide, 10000);
  });
});
