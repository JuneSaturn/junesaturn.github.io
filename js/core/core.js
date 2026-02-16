//-----------------------------------------------------------------------------------------------------------
// COMMON VARIABLES
//-----------------------------------------------------------------------------------------------------------

// Coloring
const BLACK = 0;
const WHITE = 1;
const DIFF = 2;
let headerColor = 0;
let isHeaderColoringStopped = false;
let isHeaderBorderRemoved = false;

// Menu
let isMobileMenuOpened = false;

// Scroll
let scrollSnap = false;



//-----------------------------------------------------------------------------------------------------------
// GLOBAL EVENT HANDLERS
//-----------------------------------------------------------------------------------------------------------

// On DOM ready
$(() => { 
    init();
    scrollManager();
});

// On window scroll
$(window).on('scroll', () => { 
    scrollManager();
});



//-----------------------------------------------------------------------------------------------------------
// INITIALIZATION
//-----------------------------------------------------------------------------------------------------------

function init() {
    const scrollTop = $(document).scrollTop();
    if (scrollTop <= window.innerHeight) {
        
    }
}



//-----------------------------------------------------------------------------------------------------------
// SCROLL MANAGEMENT
//-----------------------------------------------------------------------------------------------------------

function scrollManager() {
    const scrollTop = $(document).scrollTop();
    const page = getCurrentPage();
    
    // For debugging
    // console.log(scrollTop);
    
    // Switches color
    if (!(isMobileMenuOpened || isHeaderColoringStopped)) {
        switch(page) {
            case "index":
                if (scrollTop < window.innerHeight - 32) {
                    color(WHITE);
                }
                else if (scrollTop >= window.innerHeight - 14) {
                    color(DIFF);
                }
            break;
            default:
                color(BLACK);
            break;
        }
    }
    
    // Fades the header border-bottom in or out
    if (!isMobileMenuOpened) {
        checkHeaderBorder(scrollTop);
    }
}

function scrollAnchors() {
    $('.full-height').css('height', $(window).height());
}

const svgFilterStrings = [
    // BLACK
    "invert(0%) sepia(3%) saturate(5%) hue-rotate(334deg) brightness(98%) contrast(100%)",
    
    // WHITE
    "invert(100%) sepia(2%) saturate(80%) hue-rotate(152deg) brightness(117%) contrast(90%)"
];

const shadowStrings = [
    // bright (for BLACK text)
    "-1px 0px rgba(0, 0, 0, 0.25), 0px 1px rgba(0, 0, 0, 0.25), 1px 0px rgba(0, 0, 0, 0.25), 0px -1px rgba(0, 0, 0, 0.25)",

    // dark (for WHITE text)
    "-1px 0px rgba(242, 242, 242, 0.25), 0px 1px rgba(242, 242, 242, 0.25), 1px 0px rgba(242, 242, 242, 0.25), 0px -1px rgba(242, 242, 242, 0.25)"
];

/*
const cssColorPresets = [
    { // BLACK
        "header": {"mix-blend-mode": "normal"},
        "header ul li a": {"color": "#000000"},
        "header ul li": {"color": "#000000"},
        "header ul a": {"text-shadow": shadowStrings[BLACK]},
        "header .logo > img": {"filter": svgFilterStrings[BLACK]},
        "header .hamburger > img": {"filter": svgFilterStrings[BLACK]}
    },
    { // WHITE
        {"mix-blend-mode": "normal"}
        {"color": "#f2f2f2"}
        {"filter": svgFilterStrings[WHITE]}
        {"text-shadow": shadowStrings[WHITE]}
    },
    { // DIFF
        {"mix-blend-mode": "difference"}
        {"color": "#f2f2f2"}
        {"filter": svgFilterStrings[WHITE]}
        {"text-shadow": shadowStrings[WHITE]}
    }
];
*/

function color(col) {
    if (col == WHITE) {
        headerColor = WHITE;
        $("header").css("mix-blend-mode", "normal");
        $("header .logo > img").css("filter", svgFilterStrings[WHITE]);
        $("header ul li a").css("color", "#f2f2f2");
        $("header ul li").css("color", "#f2f2f2");
        $("header ul a").css("text-shadow", shadowStrings[WHITE]);
        $("header .hamburger > img").css("filter", svgFilterStrings[WHITE]);
    }
    else if (col == BLACK) {
        headerColor = BLACK;
        $("header").css("mix-blend-mode", "normal");
        $("header .logo > img").css("filter", svgFilterStrings[BLACK]);
        $("header ul li a").css("color", "#000000");
        $("header ul li").css("color", "#000000");
        $("header ul a").css("text-shadow", shadowStrings[BLACK]);
        $("header .hamburger > img").css("filter", svgFilterStrings[BLACK]);
    }
    else if (col == DIFF) {
        headerColor = DIFF;
        $("header").css("mix-blend-mode", "difference");
        $("header .logo > img").css("filter", svgFilterStrings[WHITE]);
        $("header ul li a").css("color", "#f2f2f2");
        $("header ul li").css("color", "#f2f2f2");
        $("header ul a").css("text-shadow", shadowStrings[WHITE]);
        $("header .hamburger > img").css("filter", svgFilterStrings[WHITE]);
    }
}

function checkHeaderBorder(scrollTop) {
    if (!(isMobileMenuOpened && isHeaderBorderRemoved)) {
        if (scrollTop > 5) {
            if (headerColor == BLACK) {
                $("header").css("border-bottom", "1px solid rgba(0, 0, 0, 0)");
            }
            else if (headerColor == WHITE) {
                $("header").css("border-bottom", "1px solid rgba(242, 242, 242, 0)");
            }
        }
        else if (!isHeaderBorderRemoved) {
            if (headerColor == BLACK) {
                $("header").css("border-bottom", "1px solid rgba(0, 0, 0, 0.5)");
            }
            else if (headerColor == WHITE) {
                $("header").css("border-bottom", "1px solid rgba(242, 242, 242, 0.5)");
            }
        }
        else if (isHeaderBorderRemoved) {
            $("header").css("transition", "'0s'");
            $("header").css("border-bottom", "0px solid rgba(0, 0, 0, 0)");
        }
    }
    else if (isMobileMenuOpened) {
        if (headerColor == BLACK) {
            $("header").css("border-bottom", "1px solid rgba(0, 0, 0, 0)");
        }
        else { // WHITE or DIFF
            $("header").css("border-bottom", "1px solid rgba(242, 242, 242, 0)");
        }
    }
}



//-----------------------------------------------------------------------------------------------------------
// GO TO... & OPEN...
//-----------------------------------------------------------------------------------------------------------

function goToMain() {
    const page = getCurrentPage();
    if (page === "index") {
        if (isMobileMenuOpened) {
            return
        }
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
    else {
        window.location.href = "index.html";
    }
}

function goTo(page) {
    if (page == "home") {
        page = "index";
    }
    window.location.href = page+".html";
}

function openGitHubPage() {
    window.open("https://github.com/JuneSaturn/junesaturn.github.io");
}

function openMobileMenu() {
    if (isMobileMenuOpened) {
        isMobileMenuOpened = false;
        $(".mobilemenu").css("opacity", "0");
        scrollManager();
        $(".mobilemenu").addClass("scrollToRight");
        $(".mobilemenu").removeClass("scrollToLeft");
    }
    else if (!isMobileMenuOpened) {
        isMobileMenuOpened = true;
        $(".mobilemenu").css("opacity", "1");
        color(BLACK);
        checkHeaderBorder(10);
        $(".mobilemenu").addClass("scrollToLeft");
        $(".mobilemenu").removeClass("scrollToRight");
    }
}

function openLangMenu() {
    if ($('footer .lang .list').css('display') === 'block') {
        $("footer .lang .list").css("display", "none");
        $("footer .lang .list").css("width", "0%");
    }
    else {
        $("footer .lang .list").css("display", "block");
        $("footer .lang .list").css("width", "100%");
    }
}



//-----------------------------------------------------------------------------------------------------------
// JS ANIMATIONS
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
// COOKIE MANAGEMENT
//-----------------------------------------------------------------------------------------------------------

function setCookie(name, value, exp) {
    document.cookie = name+"="+value+"; path=/; max-age=3600; Secure";
}

function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name+"=; expires=Thu, 01 Jan 1999 00:00:10 GMT;"
}

function hasCookie(name) {
    return document.cookie.split("; ").some(cookie => cookie.startsWith(name+"="));
}





//-----------------------------------------------------------------------------------------------------------
// USEFUL FUNCTIONS
//-----------------------------------------------------------------------------------------------------------

function getCurrentPage() {
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter(Boolean);
    let page = segments[segments.length-1] || "index";
    page = page.replace(/\.html$/, "");
    return page;
}

function getPosByClass(className) {
    const offset = $("."+className).offset();
    return offset;
}

function scrollToPos(offset) {
    $('html, body').animate({scrollTop:offset.top}, 500);
}