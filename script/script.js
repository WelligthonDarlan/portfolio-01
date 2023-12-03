let links = document.getElementsByClassName('links')
let contentLinks = document.getElementsByClassName('contentLinks')

function openTab(tabname){
    for(tabLink of links){
        tabLink.classList.remove('active-link')
    }
    for(tabContent of contentLinks){
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add("active-tab")
}

//------------------EFEITO WRITER--⏬⏬⏬⏬⏬⏬------------------

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

//------------------ABRIR NAVBAR AO APARECER NA TELA--⏬⏬⏬⏬⏬⏬------------------

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


//------------------CLOSE YODA SMS--⏬⏬⏬⏬⏬⏬------------------

const closeYodaSMS = document.getElementById("closeYodaSMS")
const containerYodaSMS = document.getElementById("containerYodaSMS")

closeYodaSMS.addEventListener("click", function(){
    containerYodaSMS.style.display = "none"
})

//------------------CLOSE NAVBAR--⏬⏬⏬⏬⏬⏬------------------

document.querySelector('#menu-btn').onclick = () => {
    document.querySelector('#menu-btn').classList.toggle('fa-times')
    document.querySelector('.navbar').classList.toggle('active')
    document.getElementById('upArrow').classList.toggle('navDisplayOff')
    document.getElementById('iconWpp').classList.toggle('navOpacityOff')
}
function remove(){
    document.querySelector('#menu-btn').classList.remove('fa-times')
    document.querySelector('.navbar').classList.remove('active')
    document.getElementById('upArrow').classList.remove('navDisplayOff')
    document.getElementById('iconWpp').classList.remove('navOpacityOff')
}