//-----------------------------------------------------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------------------------------------------------

// Coloring
const BLACK = 0;
const WHITE = 1;
const DIFF = 2;
let headerColor = 0;
let stopColoring = false;
let removeBorderBottom = false;

// Menu
let mobileMenuOpened = false;



//-----------------------------------------------------------------------------------------------------------
// SCROLL MANAGEMENTS
//-----------------------------------------------------------------------------------------------------------

// START
$(() => {
    scrollManager();
});

// UPDATE
$(window).on('scroll', function () {
    scrollManager();
});

function scrollManager() {
    let scrollTop = $(document).scrollTop(); 
    console.log(scrollTop);
    
    // Switches color
    if (mobileMenuOpened == false && stopColoring == false) {
        if (scrollTop < window.innerHeight - 32) {
            color(WHITE);
        }
        else if (scrollTop >= window.innerHeight - 32) {
            color(BLACK);
        }
    }
    
    // Fades in or out of border-bottom
    checkBorderBottom(scrollTop);
}

function scrollAnchors() {
    $('.full-height').css('height', $(window).height());
}

function color(col) {
    if (col == WHITE) {
        headerColor = WHITE;
        $("header .logo > img").css("filter", "invert(100%) sepia(2%) saturate(80%) hue-rotate(152deg) brightness(117%) contrast(90%)");
        $("header ul li a").css("color", "#f2f2f2");
        $("header ul li").css("color", "#f2f2f2");
        $("header ul a").css("text-shadow",
            "-1px 0px rgba(0, 0, 0, 0.25), 0px 1px rgba(0, 0, 0, 0.25), 1px 0px rgba(0, 0, 0, 0.25), 0px -1px rgba(0, 0, 0, 0.25)"
        );
        $("header .hamburger > img").css("filter", "invert(100%) sepia(2%) saturate(80%) hue-rotate(152deg) brightness(117%) contrast(90%)");
    }
    else if (col == BLACK) {
        headerColor = BLACK;
        $("header .logo > img").css("filter", "invert(0%) sepia(3%) saturate(5%) hue-rotate(334deg) brightness(98%) contrast(100%)");
        $("header ul li a").css("color", "#000000");
        $("header ul li").css("color", "#000000");
        $("header ul a").css("text-shadow",
        "-1px 0px rgba(242, 242, 242, 0.25), 0px 1px rgba(242, 242, 242, 0.25), 1px 0px rgba(242, 242, 242, 0.25), 0px -1px rgba(242, 242, 242, 0.25)"
        );
        $("header .hamburger > img").css("filter", "invert(0%) sepia(3%) saturate(5%) hue-rotate(334deg) brightness(98%) contrast(100%)");
    }
}



//-----------------------------------------------------------------------------------------------------------
// HEADER
//-----------------------------------------------------------------------------------------------------------

function checkBorderBottom(scrollTop) {
    if (mobileMenuOpened == false && removeBorderBottom == false) {
        if (scrollTop > 10) {
            if (headerColor == BLACK) {
                $("header").css("border-bottom", "1px solid rgba(0, 0, 0, 0)");
            }
            else if (headerColor == WHITE) {
                $("header").css("border-bottom", "1px solid rgba(242, 242, 242, 0)");
            }
        }
        else if (removeBorderBottom == false) {
            if (headerColor == BLACK) {
                $("header").css("border-bottom", "1px solid rgba(0, 0, 0, 0.5)");
            }
            else if (headerColor == WHITE) {
                $("header").css("border-bottom", "1px solid rgba(242, 242, 242, 0.5)");
            }
        }
        else if (removeBorderBottom) {
            $("header").css("transition", "'0s'");
            $("header").css("border-bottom", "0px solid rgba(0, 0, 0, 0)");
        }
    }
    else if (mobileMenuOpened) {
        if (headerColor == BLACK) {
            $("header").css("border-bottom", "1px solid rgba(0, 0, 0, 0)");
        }
        else if (headerColor == WHITE) {
            $("header").css("border-bottom", "1px solid rgba(242, 242, 242, 0)");
        }
    }
}

function goToMain() {
    const pathname = window.location.pathname;
    const pathnameSplit = pathname.split("/");
    const page = pathnameSplit[pathnameSplit.length-1];
    if (page == "index.html") {
        if (mobileMenuOpened) {
            return
        }
        window.scroll({
            top: -window.scrollY,
            left: 0,
            behavior: 'smooth'
        });
    }
    else {
        window.location.href = "index.html";
    }
}

function goTo(page) {
    if (page == "main") {
        page = "index";
    }
    window.location.href = page+".html";
}

function openMobileMenu() {
    if (mobileMenuOpened == true) {
        mobileMenuOpened = false;
        $(".menu-formobile").css("opacity", "0");
        $("header .hamburger").html('<img src="images/Hamburger.svg" class="undraggable" onclick="openMobileMenu()">');
        scrollManager();
        $(".menu-formobile").addClass("scrollToTop");
        $(".menu-formobile").removeClass("scrollToBottom");
    }
    else if (mobileMenuOpened == false) {
        mobileMenuOpened = true;
        $(".menu-formobile").css("opacity", "1");
        $("header .hamburger").html('<img src="images/Back.svg" class="undraggable" onclick="openMobileMenu()">');
        color(BLACK);
        checkBorderBottom(0);
        $(".menu-formobile").addClass("scrollToBottom");
        $(".menu-formobile").removeClass("scrollToTop");
    }
}



//-----------------------------------------------------------------------------------------------------------
// ANIMATIONS
//-----------------------------------------------------------------------------------------------------------

function zoomIn(event) {
    event.target.style.transform = "scale(1.03)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.2s";
}

function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.2s";
}



//-----------------------------------------------------------------------------------------------------------
// USEFUL FUNCTIONS
//-----------------------------------------------------------------------------------------------------------

function updateLanguage(lang) {
    $.each(langResource[lang], function(key, value) {
        const element = $('#' + key);
        if (element.length) {
            element.text(value);
        }
    });
}

function searchPosition(c) {
    var offset = $("."+c).offset();
    $('html, body').animate({scrollTop:offset.top}, 500);
}