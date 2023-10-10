const projects = document.getElementById("projects")
const card = document.querySelectorAll(".card")

const animationDurations = ["0.5s", "0.9s", "1.3s", "0.9s", "1.3s", "1.7s", "1.3s", "1.7s", "2.1s"];


function addClass() {
    // projects.style.background = "red"
    card.forEach((card, index) => {
        card.style.animation = `fade ${animationDurations[index]} ease`;
        card.style.opacity = "1"
    })
}

function removeClass() {
    // projects.style.background = "blue"
    card.forEach(card => {
        card.style.animation = "";
        card.style.opacity = "0"
    })
}

function isElementAtTop(element) {
    var rect = element.getBoundingClientRect();
    console.log(rect)
    return rect.bottom < 1240;
}

function checkElement() {
    if (isElementAtTop(projects)) {
        addClass()
    } else {
        removeClass();
    }
}

window.addEventListener('scroll', checkElement);

// BTN CARD

const card1 = document.getElementById('card1')
const btnCard = document.getElementById('btnCard1')

card1.addEventListener('mouseenter', () => {
    btnCard.style.display = 'block'
})

card1.addEventListener('mouseleave', () => {
    btnCard.style.display = 'none'
})
