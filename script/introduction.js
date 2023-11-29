const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Definindo variáveis globais
let w, h, particles;
let particleDistance = 40; //Distancia entre as particulas(Tamanho dos quadrados)
let mouse = {
	x: undefined,
	y: undefined,
	radius: 90,//Distancia que as particulas ficam do mouse
	color: "#7b71ffcc"
};

// Função para inicializar o códig

function init() {
	// Redimensiona o canvas e inicia a animação
	resizeReset();
	animationLoop();
}

// Redimensiona o canvas para o tamanho da janela
function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;

	// Inicializa as partículas com base na distância definida
	particles = [];
	for (let y = (((h - particleDistance) % particleDistance) + particleDistance) / 2; y < h; y += particleDistance) {
		for (let x = (((w - particleDistance) % particleDistance) + particleDistance) / 2; x < w; x += particleDistance) {
			particles.push(new Particle(x, y));
		}
	}
}

// Função para realizar a animação
function animationLoop() {
	// Limpa o canvas e desenha as partículas e as linhas
	ctx.clearRect(0, 0, w, h);
	drawScene();
	requestAnimationFrame(animationLoop);
}

// Desenha as partículas e as linhas de conexão
function drawScene() {
	for (let i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].draw();
	}
	drawLine();
}

// Desenha as linhas de conexão entre as partículas
function drawLine() {
	for (let a = 0; a < particles.length; a++) {
		for (let b = a; b < particles.length; b++) {
			let dx = particles[a].x - particles[b].x;
			let dy = particles[a].y - particles[b].y;
			let distance = Math.sqrt(dx * dx + dy * dy);
			let changeColorDistance = 39.9;//Distancia da mudança de cor ao passar o mouse

			if (distance < particleDistance * 1.5) {
				let opacity = 1 - (distance / (particleDistance * 1.5));
				ctx.strokeStyle = `rgba(10,10,10,${opacity})`;
				ctx.lineWidth = 1.5; //Espessura da linha
				ctx.beginPath();
				ctx.moveTo(particles[a].x, particles[a].y);
				ctx.lineTo(particles[b].x, particles[b].y);
				ctx.stroke();

				if (distance < changeColorDistance) {
					ctx.strokeStyle = mouse.color;
					ctx.beginPath();
					ctx.moveTo(particles[a].x, particles[a].y);
					ctx.lineTo(particles[b].x, particles[b].y);
					ctx.stroke();
				}
			}
		}
	}
}

// Função para lidar com o movimento do mouse
function handleMouseMove(e) {
	mouse.x = e.x;
	mouse.y = e.y;
}

// Função para lidar com o evento de saída do mouse
function handleMouseOut() {
	mouse.x = undefined;
	mouse.y = undefined;
}

// Classe para representar uma partícula
class Particle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = 1;
		this.baseX = this.x;
		this.baseY = this.y;
		this.color = "rgba(37,41,52,1)";
		this.speed = (Math.random() * 25) + 5;
	}

	// Método para desenhar a partícula
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
	}

	// Método para atualizar a posição da partícula com base na posição do mouse
	update() {
		let dx = mouse.x - this.x;
		let dy = mouse.y - this.y;
		let distance = Math.sqrt(dx * dx + dy * dy);
		let changeColorDistance = 130;//Distancia da mudança de cor das particulas ao passar o mouse

		// Altera a cor da partícula se estiver perto o suficiente do mouse
		this.color = distance < changeColorDistance ? mouse.color : "rgba(37,41,52,1)";

		let maxDistance = mouse.radius;
		let force = (maxDistance - distance) / maxDistance;
		let forceDirectionX = dx / distance;
		let forceDirectionY = dy / distance;
		let directionX = forceDirectionX * force * this.speed;
		let directionY = forceDirectionY * force * this.speed;

		// Move a partícula em direção ao mouse se estiver dentro da distância máxima
		if (distance < maxDistance) {
			this.x -= directionX;
			this.y -= directionY;
		} else {
			// Retorna a partícula à sua posição original se estiver fora da distância máxima
			if (this.x !== this.baseX) {
				let dx = this.x - this.baseX;
				this.x -= dx / 3;//Regula o tempo de retorno a cor original
			}
			if (this.y !== this.baseY) {
				let dy = this.y - this.baseY;
				this.y -= dy / 3;//Regula o tempo de retorno a cor original
			}
		}
	}
}

// Inicializa o código e adiciona os ouvintes de eventos
if (window.innerWidth > 3200 ) {
	console.log("A largura da janela é maior que 3200px. O script foi interrompido para evitar possivel travamento da pagina.");
} else {
	window.addEventListener("mousemove", handleMouseMove);
	window.addEventListener("mouseout", handleMouseOut);
}
init();
window.addEventListener("resize", resizeReset);

