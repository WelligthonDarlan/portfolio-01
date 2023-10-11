const projects = document.getElementById("projects")
const cards = document.querySelectorAll(".card")

const animationDurations = ["0.5s", "0.9s", "1.3s", "0.9s", "1.3s", "1.7s", "1.3s", "1.7s", "2.1s"];

function addClass() {
    cards.forEach((cards, index) => {
        cards.style.animation = `fade ${animationDurations[index]} ease`;
        cards.style.opacity = "1"
    })
}

function removeClass() {
    cards.forEach(cards => {
        cards.style.animation = "";
        cards.style.opacity = "0"
    })
}

function isElementAtBottom(element) {
    var rect = element.getBoundingClientRect();
    // console.log(rect)
    return rect.bottom < 2037;
}

function checkElement() {
    if (isElementAtBottom(projects)) {
        addClass()
    } else {
        removeClass();
    }
}

window.addEventListener('scroll', checkElement);

// BTN CARD



// SLIDE CAROUSEL

const openCarouselBtn = document.querySelectorAll(".btnCard")
const carouselContainer = document.getElementById("carouselContainer")
const closeCarouselBtn = document.getElementById("carouselContainer")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const slides = document.querySelectorAll(".carouselSlide")

let slideIndex = 0

openCarouselBtn.forEach((btn) => {
    
    btn.addEventListener('click', () => {
        carouselContainer.style.display = 'block';
        });
})

closeCarouselBtn.addEventListener('click', (e) => {
    if (e.target === closeCarouselBtn) {
        carouselContainer.style.display = 'none'
    }
})

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

showSlide(slideIndex);
