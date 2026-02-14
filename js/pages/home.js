// On DOM ready
$(() => {
    const slideUpdater = setInterval(() => {
        if (slideIdx >= maxSlide) {
            slideIdx = 1;
        }
        else {
            slideIdx++;
        }
        // for debugging
        // console.log(slideIdx);
        updateSlideShow();
    }, durationTime);
});



//-----------------------------------------------------------------------------------------------------------
// SLIDES
//-----------------------------------------------------------------------------------------------------------

let slideIdx = 1;
const maxSlide = 3;
const durationTime = 5000;

function updateSlideShow() {
    $(".slides .img").removeClass("has-transition");
    $(".slides .img:nth-child("+slideIdx+")").addClass("has-transition");
}


