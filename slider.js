
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 600}px)`;
    slideNumber++;
}

const previousSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

right.addEventListener("click", () => {
    slideNumber < images.length ? nextSlide() : previousSlide();

});


