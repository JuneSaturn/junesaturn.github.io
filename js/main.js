//-----------------------------------------------------------------------------------------------------------
// SLIDES
//-----------------------------------------------------------------------------------------------------------

let slideIndex = 1;

$(() => {
    slideIndex = 1;
    showSlides(slideIndex);
});

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}



//-----------------------------------------------------------------------------------------------------------
// HEADER COLORING
//-----------------------------------------------------------------------------------------------------------

