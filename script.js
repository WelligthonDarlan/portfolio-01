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

document.querySelector('#menu-btn').onclick = () => {
    document.querySelector('#menu-btn').classList.toggle('fa-times')
    document.querySelector('.navbar').classList.toggle('active')
}


function remove(){
    document.querySelector('#menu-btn').classList.remove('fa-times')
    document.querySelector('.navbar').classList.remove('active')
}
// ------------------EFEITO write------------------

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

function startTypeWriterWhenVisible() {
    if (isElementInViewport(aboutP)) {
        typeWriter(aboutP);
        window.removeEventListener('scroll', startTypeWriterWhenVisible);
    }
}

// Adiciona um event listener para verificar quando o usuário rola a página
window.addEventListener('scroll', startTypeWriterWhenVisible);


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

// ------------------VER MAIS------------------

const projectsList = document.getElementById("projectList")
const btnVerMais = document.getElementById("btnVerMais")

function verMais() {
    if (projectsList.style.height === "50vh"){

        projectsList.style.height = "100%"
        btnVerMais.innerText = "VER MENOS"
    }else {
        projectsList.style.height = "50vh"
        btnVerMais.innerText = "VER MAIS..."
    
    }
}
// --------------------CLOSE YODA SMS------------------

const closeYodaSMS = document.getElementById("closeYodaSMS")
const containerYodaSMS = document.getElementById("containerYodaSMS")

closeYodaSMS.addEventListener("click", function(){
    containerYodaSMS.style.display = "none"
})

// efeito maquina de escrever no sobre


// function typeWriter (element) {
//     const textArray = element.innerHTML.split('')
//     element.innerHTML = ''
//     textArray.forEach((letra, i) => {
//     setTimeout(() => element.innerHTML += letra, 30 * i)
//     })
// }


// const aboutP = document.getElementById("description")
// typeWriter(aboutP)






// const project = document.getElementById("projects")
// const project = document.getElementById("projects")
// const btnVerMais = document.getElementById("btnVerMais")

//     function verMais() {
//         if (project.style.height < "1300px"){
//         project.style.height = "3000px"
//         btnVerMais.innerText = "VER MENOS"
//     }else {
//         project.style.height = "1200px"
//         btnVerMais.innerText = "VER MAIS"
//     }
// }
