let links = document.querySelectorAll('.links');

function openTab(tabname) {
    links.forEach(tabLink => tabLink.classList.remove('active-link'));
    document.querySelectorAll('.contentLinks').forEach(tabContent => tabContent.classList.remove('active-tab'));
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

const aboutP = document.querySelector("#description");

//Função será acionada assim que o elemento estiver visivel
function startTypeWriterWhenVisible() {
    if (isElementInViewport(aboutP)) {
        typeWriter(aboutP);
        window.removeEventListener('scroll', startTypeWriterWhenVisible);
    }
}
// Adiciona um event listener para verificar quando o usuário rola a página
window.addEventListener('scroll', startTypeWriterWhenVisible);

//------------------ABRIR NAVBAR DESKTOP AO APARECER NA TELA--⏬⏬⏬⏬⏬⏬------------------

const introduction = document.querySelector("#introduction");
const navbar = document.querySelector("#navbarDesktop")

function fixed() {
    navbarDesktop.classList.remove("relative-navbar");
    navbarDesktop.classList.add("fixed-navbar");
}

function relative() {
    navbarDesktop.classList.remove("fixed-navbar");
    navbarDesktop.classList.add("relative-navbar");
}

function isElementAtTop(element) {
    var rect = element.getBoundingClientRect();
    return rect.bottom < 40;
}
function checkNavbar() {
    if (isElementAtTop(introduction)) {
        fixed();
    } else {
        relative();
    }
}

window.addEventListener('scroll', checkNavbar);


//------------------CLOSE YODA SMS--⏬⏬⏬⏬⏬⏬------------------


const closeYodaSMS = document.querySelector("#closeYodaSMS")
const containerYodaSMS = document.querySelector("#containerYodaSMS")

closeYodaSMS.addEventListener("click", () => {
    containerYodaSMS.style.display = "none"
})

//------------------NAVBAR MOBILE--⏬⏬⏬⏬⏬⏬------------------
const body = document.body
const linkNavbarMobile = document.querySelectorAll('.linkNavbarMobile')
const menuBtn = document.querySelector('#menuBtn')
const classNavbarMobile = document.querySelector('.navbar')
const upArrow = document.querySelector('#upArrow')
const iconWpp = document.querySelector('#iconWpp')

if (window.innerWidth <= 480) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open')
        classNavbarMobile.classList.toggle('active')
        upArrow.classList.toggle('navDisplayOff')
        iconWpp.classList.toggle('navOpacityOff')
        body.classList.toggle('overflowOff')
        body.classList.toggle('overflowOn')
    })

    function remove() {
        menuBtn.classList.remove('open')
        classNavbarMobile.classList.remove('active')
        upArrow.classList.remove('navDisplayOff')
        iconWpp.classList.remove('navOpacityOff')

    }

    linkNavbarMobile.forEach((element) => {
        element.addEventListener('click', () => {
            body.classList.add('overflowOn')
            body.classList.remove('overflowOff')
        })
    })
}

//------------------copyright--⏬⏬⏬⏬⏬⏬------------------

function copyrightOn () {
    const iconWppImg = document.querySelector('.iconWpp')
    const copyright = document.querySelector('.copyright')
    if (isCopyrightInViewport(copyright)){
        console.log(`copyright está a  vista`)
        iconWppImg.classList.add('copyrightWppImg')
        containerYodaSMS.classList.add('copyrightWppContainer')
    } else {
        iconWppImg.classList.remove('copyrightWppImg')
        containerYodaSMS.classList.remove('copyrightWppContainer')
    }
}

function isCopyrightInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (((window.innerHeight || document.documentElement.clientHeight) / 3 ) * 4 ) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('scroll', copyrightOn)