
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");

const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 600}px)`;
    slideNumber++;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getPrevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 600}px)`;
    slideNumber--;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 600}px)`;
    slideNumber = length;
};

right.addEventListener("click", () => {
    slideNumber < images.length ? nextSlide() : getFirstSlide();

});

left.addEventListener('click', () => {
    slideNumber > 1 ? getPrevSlide() : getLastSlide();
});

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button")          //important** use buttons here not at the beginning of the file becasue it not going to work

buttons[0].style.backgroundColor = "white";     //color to fill the btns

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent";    //removing white from btn
    });
};



buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 600}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "white";

    })
})