const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const particlesArray = []

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const randomColor = () => {
	let color = ''
	color += '#' + Math.random().toString(16).slice(2, 8).toUpperCase()
	return color
}

class Particle {
	constructor() {
		this.x = Math.random() * canvas.width
		this.y = Math.random() * canvas.height
		this.size = Math.random() * 15 + 1
		this.speedX = Math.random() * 3 - 1.5 // w ktora stoen ma sie poruszac , x= 0 y =1 oznacza ze bedzie sie poruszal w prawo
		this.speedY = Math.random() * 3 - 1.5
		this.color = randomColor()
	}
	update() {
		this.x += this.speedX
		this.y += this.speedY

		if (this.x >= canvas.width) {
			this.color = randomColor()
			this.speedX = -(Math.random() * 3)
		} else if (this.x <= 0) {
			this.color = randomColor()
			this.speedX = Math.random() * 3
		}

		if (this.y >= canvas.height) {
			this.color = randomColor()
			this.speedY = -(Math.random() * 3)
		} else if (this.y <= 0) {
			this.color = randomColor()
			this.speedY = Math.random() * 3
		}
	}
	draw() {
		ctx.fillStyle = this.color // zmienia kolor wnętrza koła
		ctx.beginPath() // rysowanie nowej sciezki
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2) // tworzenie kola , Math.PI *2 = 360 stopni
		ctx.fill() // wywolanie koloru wnetrza kola
	}
}

function handleParticles() {
	for (let i = 0; i < particlesArray.length; i++) {
		particlesArray[i].update()
		particlesArray[i].draw()

		for (let j = i; j < particlesArray.length; j++) {
			const dx = particlesArray[i].x - particlesArray[j].x
			const dy = particlesArray[i].y - particlesArray[j].y
			const distance = Math.sqrt(dx * dx + dy * dy)
			if (distance < 100) {
				ctx.beginPath()
				ctx.strokeStyle = particlesArray[i].color
				ctx.lineWidth = 0.8
				ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
				ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
				ctx.stroke()
			}
		}
	}
}

for (let i = 0; i < 50; i++) {
	particlesArray.push(new Particle())
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height) // czysci ctx, od lewego gorengo rokgu 0,0 dod prawego dolnego canvas.width, canvas.height
	handleParticles()

	requestAnimationFrame(animate) // wywoluje ta funkcje, w tym przyadku calky czas bedzie czyscic background
}

animate()
