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


//efeito background

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let w, h, particles;
let particleDistance = 40;
let mouse = {
	x: undefined,
	y: undefined,
	radius: 100
}

function init() {
	resizeReset();
	animationLoop();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;

	particles = [];
	for (let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2; y < h; y += particleDistance) {
		for (let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2; x < w; x += particleDistance) {
			particles.push(new Particle(x, y));
		}
	}
}

function animationLoop() {
	ctx.clearRect(0, 0, w, h);
	drawScene();
	requestAnimationFrame(animationLoop);
}

function drawScene() {
	for (let i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].draw();
	}
	drawLine();
}

function drawLine() {
	for (let a = 0; a < particles.length; a++) {
		for (let b = a; b < particles.length; b++) {
			let dx = particles[a].x - particles[b].x;
			let dy = particles[a].y - particles[b].y;
			let distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < particleDistance * 1.5) {
				opacity = 1 - (distance / (particleDistance * 1.5));
				ctx.strokeStyle = "rgba(10,10,10," + opacity + ")";
				ctx.lineWidth = 2;
				ctx.beginPath();
				ctx.moveTo(particles[a].x, particles[a].y);
				ctx.lineTo(particles[b].x, particles[b].y);
				ctx.stroke();
			}
		}
	}
}

function mousemove(e) {
	mouse.x = e.x;
	mouse.y = e.y;
}

function mouseout() {
	mouse.x = undefined;
	mouse.y = undefined;
}

class Particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 4;
		this.baseX = this.x;
		this.baseY = this.y;
		this.speed = (Math.random() * 25) + 5;
	}
	draw() {
		ctx.fillStyle = "rgba(37,41,52,1)";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
	}
	update() {
		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y;
		let distance = Math.sqrt(dx * dx + dy * dy);
		let maxDistance = mouse.radius;
		let force = (maxDistance - distance) / maxDistance; // 0 ~ 1
		let forceDirectionX = dx / distance;
		let forceDirectionY = dy / distance;
		let directionX = forceDirectionX * force * this.speed;
		let directionY = forceDirectionY * force * this.speed;

		if (distance < mouse.radius) {
			this.x -= directionX;
			this.y -= directionY;
		} else {
			if (this.x !== this.baseX) {
				let dx = this.x - this.baseX;
				this.x -= dx / 10;
			}
			if (this.y !== this.baseY) {
				let dy = this.y - this.baseY;
				this.y -= dy / 10;
			}
		}
	}
}

init();
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);

// -----------------BTN START
const ViewMyWork = document.getElementById("ViewMyWork")


// ViewMyWork.addEventListener("click", function() {
//     canvas.style.display = "none"
// })
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
