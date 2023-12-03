//------------------ANIMAÇÃO APARECER CARDS--⏬⏬⏬⏬⏬⏬------------------

const projects = document.getElementById("projects");
const cards = document.querySelectorAll(".card");

const animationDurations = ["0.5s", "0.9s", "1.3s", "0.9s", "1.3s", "1.7s", "1.3s", "1.7s", "2.1s"];

function addClass() {
    cards.forEach((card, index) => {
        card.style.animation = `fade ${animationDurations[index]} ease`;
        card.style.opacity = "1";
    });
}
function removeClass() {
    cards.forEach(card => {
        card.style.animation = "";
        card.style.opacity = "0";
    });
}
function isElementAtBottom(element) {
    var rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight;
}
function checkElement() {
    if (isElementAtBottom(projects)) {
        addClass();
    } else {
        removeClass();
    }
}

window.addEventListener('scroll', checkElement);

//------------------SLIDE CAROUSEL--⏬⏬⏬⏬⏬⏬------------------

const openCarouselBtn = document.querySelectorAll(".btnCard");
const carouselContainer = document.querySelectorAll(".carouselContainer");
const closeCarouselBtn = document.querySelectorAll(".carouselBtnClose");
const prevBtn = document.querySelectorAll(".carouselBtnPrev");
const nextBtn = document.querySelectorAll(".carouselBtnNext");
const slides = document.querySelectorAll(".carouselSlide");
const contentCard = document.querySelectorAll('.contentCard')
const btnNavbar = document.querySelectorAll('.btnNavbar')

let slideIndexes = Array.from({ length: openCarouselBtn.length }, () => 0);

openCarouselBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        slideIndexes[index] = 0;
        showSlide(index, slideIndexes[index]);
        carouselContainer[index].style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.overflowX = 'hidden';
        if (window.innerWidth > 480) {
            document.getElementById('navbarDesktop').style.opacity = "0"
            btnNavbar.forEach((link) => {
                link.style.display = 'none'
            })
        } else if (window.innerWidth <= 480) {
            document.getElementById('menu-btn').style.opacity = "0"
            document.getElementById('menu-btn').style.top = "-200px"
        }

        contentCard.forEach((content) => {
            content.classList.add('opacityOn')
            content.classList.remove('opacityOff')
        })
        document.getElementById('upArrow').style.display = 'none'
        document.getElementById('iconWpp').style.opacity = '0'
    });
});

function showSlide(index, slideIndex) {
    const totalSlides = slides.length;
    const calculatedIndex = index * 3 + slideIndex;

    if (calculatedIndex >= 0 && calculatedIndex < totalSlides) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[calculatedIndex].style.display = 'block';
    } else {
        console.error('Índice de slide inválido:', calculatedIndex);
    }
}

function nextSlide(index) {
    slideIndexes[index] = (slideIndexes[index] + 1) % 3;
    showSlide(index, slideIndexes[index]);
}

function prevSlide(index) {
    slideIndexes[index] = (slideIndexes[index] - 1 + 3) % 3;
    showSlide(index, slideIndexes[index]);
}

closeCarouselBtn.forEach((out) => {
    out.addEventListener('click', (e) => {
        if (e.target === out) {
            carouselContainer.forEach((close) => {
                close.style.display = 'none';
                document.body.style.overflow = 'auto';
                document.body.style.overflowX = 'hidden';
                if (window.innerWidth > 480) {
                    document.getElementById('navbarDesktop').style.opacity = '1'
                    btnNavbar.forEach((link) => {
                        link.style.display = 'inline'
                    })
                } else if (window.innerWidth <= 480) {
                    document.getElementById('menu-btn').style.opacity = "1"
                    document.getElementById('menu-btn').style.top = "20px"
                }
                contentCard.forEach((content) => {
                    content.classList.add('opacityOff')
                    content.classList.remove('opacityOn')
                })
                document.getElementById('upArrow').style.display = 'block'
                document.getElementById('iconWpp').style.opacity = '1'
            });
        }
    });
});
carouselContainer.forEach((out) => {
    out.addEventListener('click', (e) => {
        if (e.target === out) {
            carouselContainer.forEach((close) => {
                close.style.display = 'none';
                document.body.style.overflow = 'auto';
                document.body.style.overflowX = 'hidden';
                if (window.innerWidth > 480) {
                    document.getElementById('navbarDesktop').style.opacity = '1'
                    btnNavbar.forEach((link) => {
                        link.style.display = 'inline'
                    })
                } else if (window.innerWidth <= 480) {
                    document.getElementById('menu-btn').style.opacity = "1"
                    document.getElementById('menu-btn').style.top = "20px"
                }
                contentCard.forEach((content) => {
                    content.classList.add('opacityOff')
                    content.classList.remove('opacityOn')
                })
                document.getElementById('upArrow').style.display = 'block'
                document.getElementById('iconWpp').style.opacity = '1'
            });
        }
    });
});

nextBtn.forEach((next, index) => {
    next.addEventListener('click', () => nextSlide(index));
});

prevBtn.forEach((prev, index) => {
    prev.addEventListener('click', () => prevSlide(index));
});



