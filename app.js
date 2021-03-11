let sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
let slider = document.getElementsByClassName('slider-parent')[0];

sliderTrigger.addEventListener("click", function () {
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
    } else { slider.classList.add("active"); }
});

console.log(getComputedStyle(sliderTrigger).display);