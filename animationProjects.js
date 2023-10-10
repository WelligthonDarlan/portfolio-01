const projects = document.getElementById("projects")
const card = document.querySelectorAll(".card")

const animationDurations = ["0.5s", "0.9s", "1.3s", "0.9s", "1.3s", "1.7s", "1.3s", "1.7s", "2.1s"];

function addClass() {
    card.forEach((card, index) => {
        card.style.animation = `fade ${animationDurations[index]} ease`;
        card.style.opacity = "1"
    })
}

function removeClass() {
    card.forEach(card => {
        card.style.animation = "";
        card.style.opacity = "0"
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

//Ao selecionar uma classe com querySelector, a constante retorna uma NodeList, por isso tenho que usar o forEach para tratar cada elemento
const cardClass = document.querySelector('.card')
const cardContent = document.querySelector('.cardContent')
const btnCard = document.querySelector('.btnCard')

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const cardContent = card.querySelector('.cardContent');
    const btnCard = card.querySelector('.btnCard');

    card.addEventListener('mouseenter', () => {
        cardContent.style.display = 'flex';
        btnCard.style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
        cardContent.style.display = 'none';
        btnCard.style.display = 'none';
    });
});

// const card1 = document.getElementById('card1')
// const cardClass = document.querySelectorAll('.card')

// const btnCard = document.getElementById('btnCard1')
// const cardContent = document.querySelector('.cardContent')

// card1.addEventListener('mouseenter', () => {
//     btnCard.style.display = 'block'
//     cardContent.style.display = 'flex'
// })

// card1.addEventListener('mouseleave', () => {
//     btnCard.style.display = 'none'
//     cardContent.style.display = 'none'
// })
