//-----------------------------------------------------------------------------------------------------------
// SLIDES
//-----------------------------------------------------------------------------------------------------------

$(document).ready(function() {
    
});



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

function goToMain() {
    window.location.href = "index.html";
}

function searchPosition(c) {
    var offset = $("."+c).offset();
    $('html, body').animate({scrollTop:offset.top}, 500);
}