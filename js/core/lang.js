// On DOM ready
$(() => { 
    if (!hasCookie) {
        setLang("fr-FR");
    }
});

function detectLang() {
    const browserLang = navigator.language;
}

function setLang(lang) {
    setCookie("lang", lang, 1);
    updateLang(lang);
}

function updateLang(lang) {
    $.each(TXTS_CORE[lang], (id, value) => {
        const element = $('#' + id);
        if (element.length) {
            element.html(value);
        }
    });
}