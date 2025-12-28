//-----------------------------------------------------------------------------------------------------------
// HEADER COLORING
//-----------------------------------------------------------------------------------------------------------

$(() => {
    scrollManager();
});

$(window).on('scroll', function () {
    scrollManager();
});

function scrollManager() {
    let scrollTop = $(document).scrollTop(); 
    console.log(scrollTop);

    if (scrollTop < 868) {
        color("white");
    }
    else if (scrollTop >= 868) {
        color("black");
    }
}

function scrollAnchors() {
    $('.full-height').css('height', $(window).height());
}

function color(col) {
    if (col == "#000000" || col == "black") {
        $("header .logo").css("filter", "invert(0%) sepia(3%) saturate(5%) hue-rotate(334deg) brightness(98%) contrast(100%)");
        $("header ul li a").css("color", "#000000");
        $("header ul li").css("color", "#000000");
        $("header ul a").css("text-shadow",
            "-1px 0px rgba(242, 242, 242, 0.25), 0px 1px rgba(242, 242, 242, 0.25), 1px 0px rgba(242, 242, 242, 0.25), 0px -1px rgba(242, 242, 242, 0.25)"
        );
        $("header .hamburger").css("filter", "invert(0%) sepia(3%) saturate(5%) hue-rotate(334deg) brightness(98%) contrast(100%)");
    }
    else if (col == "#f2f2f2" || col == "white") {
        $("header .logo").css("filter", "invert(100%) sepia(2%) saturate(80%) hue-rotate(152deg) brightness(117%) contrast(90%)");
        $("header ul li a").css("color", "#f2f2f2");
        $("header ul li").css("color", "#f2f2f2");
        $("header ul a").css("text-shadow",
            "-1px 0px rgba(0, 0, 0, 0.25), 0px 1px rgba(0, 0, 0, 0.25), 1px 0px rgba(0, 0, 0, 0.25), 0px -1px rgba(0, 0, 0, 0.25)"
        );
        $("header .hamburger").css("filter", "invert(100%) sepia(2%) saturate(80%) hue-rotate(152deg) brightness(117%) contrast(90%)");
    }
}



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
