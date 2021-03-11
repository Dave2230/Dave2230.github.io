let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".mySlides");
    console.log(slides)
    let dots = document.querySelectorAll(".dot");

    //loops to first picture when pressing next arrow on last picture
    if (n > slides.length) {
        slideIndex = 1
    }
    //loops to last picture when pressing prev arrow on first picture
    if (n < 1) {
        slideIndex = slides.length
    }
    console.log(slideIndex)


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    console.log(slideIndex)
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}