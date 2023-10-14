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


// BTN CARD



// SLIDE CAROUSEL

const openCarouselBtn = document.querySelectorAll(".btnCard")
const carouselContainer = document.querySelectorAll(".carouselContainer")
const closeCarouselBtn = document.querySelectorAll(".carouselContainer")
const prevBtn = document.querySelectorAll(".carouselBtnPrev")
const nextBtn = document.querySelectorAll(".carouselBtnNext")
const slides = document.querySelectorAll(".carouselSlide")

let slideIndexes = Array.from({ length: openCarouselBtn.length }, () => 0);

openCarouselBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        slideIndexes[index] = 0;
        showSlide(index, slideIndexes[index]);
        carouselContainer[index].style.display = 'block';
    });
});

function showSlide(index, slideIndex) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index * 3 + slideIndex].style.display = 'block';
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
                close.style.display = 'none'
            })
        }
    })
})
nextBtn.forEach((next, index) => {
    next.addEventListener('click', () => nextSlide(index));
});

prevBtn.forEach((prev, index) => {
    prev.addEventListener('click', () => prevSlide(index));
});

const carouselBtnClose = document.querySelectorAll(".carouselBtnClose")
carouselBtnClose.forEach((out) => {
    out.addEventListener('click', (e) => {
        if (e.target === out) {
            carouselContainer.forEach((close) => {
                close.style.display = 'none'
            })
        }
    })
})

showSlide(slideIndexes);



