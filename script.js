let tabLinks = document.getElementsByClassName('tab-links')

let tabContents = document.getElementsByClassName('tab-contents')

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link')
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}

// ------------------ABOUT------------------

// Efeito writer ⏬

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 30 * i);
    });
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const aboutP = document.getElementById("description");


//Função será acionada assim que o elemento estiver visivel
function startTypeWriterWhenVisible() {
    if (isElementInViewport(aboutP)) {
        typeWriter(aboutP);
        window.removeEventListener('scroll', startTypeWriterWhenVisible);
    }
}
// Adiciona um event listener para verificar quando o usuário rola a página
window.addEventListener('scroll', startTypeWriterWhenVisible);


// Abrir nav bar ao aparacer na tela ⏬

const introduction = document.getElementById("introduction")
const navbar = document.getElementById("navbarDesktop")

function fixedRed() {
    navbarDesktop.classList.remove("relative-navbar");
    navbarDesktop.classList.add("fixed-navbar");
}

function relativeBlue() {
    navbarDesktop.classList.remove("fixed-navbar");
    navbarDesktop.classList.add("relative-navbar");
}

function isElementAtTop(element) {
    var rect = element.getBoundingClientRect();
    console.log(rect)
    return rect.bottom < 40;
}

function checkNavbar() {
    if (isElementAtTop(introduction)) {
        fixedRed();
    } else {
        relativeBlue();
    }
}

window.addEventListener('scroll', checkNavbar);


// ------------------EFEITO FADE------------------

class Fade {
    constructor(items, delay) {
        this.items = items;
        this.delay = delay || 100;
    }

    fadeIn(el) {
        let opacity = 0;
        const timer = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.1;
                el.style.opacity = opacity;
            } else {
                clearInterval(timer);
            }
        }, this.delay);
    }

    checkFades() {
        this.items.forEach((el) => {
            const wHeight = window.innerHeight * 0.75;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < wHeight) {
                if (el.style.opacity === "" || el.style.opacity === "0") {
                    this.fadeIn(el);
                }
            }
        });
    }

    init() {
        if (this.items.length) {
            this.items.forEach((el) => {
                el.style.opacity = 0;
            });
            this.checkFades();
        }
        return this;
    }
}

const fadeInScroll = document.querySelectorAll(".fadeInScroll");

if (fadeInScroll.length) {
    const fade = new Fade(fadeInScroll);
    fade.init();

    window.addEventListener("scroll", () => {
        
        let timer;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fade.checkFades();
            timer = null;
            
        }, 200);
    });

}

// --------------------CLOSE YODA SMS------------------

const closeYodaSMS = document.getElementById("closeYodaSMS")
const containerYodaSMS = document.getElementById("containerYodaSMS")

closeYodaSMS.addEventListener("click", function(){
    containerYodaSMS.style.display = "none"
})




// -----------------BTN START
const ViewMyWork = document.getElementById("ViewMyWork")



