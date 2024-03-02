const rollOutButton = document.querySelector('#roll-out-button')
const nav = document.querySelector('#nav')
const allLiMenu = document.querySelectorAll('nav ul li')
//rollout button
rollOutButton.addEventListener('click', () => {
	nav.classList.toggle('lg:w-[200px]')
	document.querySelector('nav > button > i').classList.toggle('rotate-180')
})

allLiMenu.forEach((li) => {
	li.addEventListener('click', () => {
		nav.classList.remove('lg:w-[200px]')
		document.querySelector('nav > button > i').classList.toggle('rotate-180')
	})
})

//Typing
const typingDiv = document.querySelector('#typing-text')
const typingArray = "Hello 😄 I'm Frontend Developer"

function typingText(element, text, i = 0) {
	if (i === 0) {
		element.textContent = ''
	}
	element.textContent += text[i]
	if (i === text.length - 1) {
		return
	}

	setTimeout(() => {
		typingText(typingDiv, typingArray, i + 1)
	}, 150)
}

typingText(typingArray, typingDiv)

const interval = setInterval(() => {
	typingDiv.textContent = 'H'
	typingText(typingArray, typingDiv)
}, 11000)
