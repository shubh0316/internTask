
const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1; //-200

let current = 0;

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1; ///1  > -200   c =-100
    } else {
        current = current < 0 ? current + 100 : maxLeft;
    }

    slides.style.left = current + "%";
}



document.querySelector(".next-slide").addEventListener("click", function () {
    changeSlide();

});

document.querySelector(".prev-slide").addEventListener("click", function () {
    changeSlide(false);
});