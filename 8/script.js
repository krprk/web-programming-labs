let offset =0;
const sliderRow = document.querySelector(".slider-row");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");

sliderNext.addEventListener("click", function() {
    offset = offset + 470;
    if (offset >1880){
        offset = 0;
    }
    sliderRow.style.left = -offset + "px";
})

sliderPrev.addEventListener("click", function() {
    offset = offset - 470;
    if (offset <0){
        offset = 1880;
    }
    sliderRow.style.left = -offset + "px";
})
const autoSlide = setInterval(() => {sliderNext.click()}, 3000);

