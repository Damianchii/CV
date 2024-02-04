const chatMessages = [
	{
		name: 'me',
		message: "Hello I'm Damian Czerwiński, a passionate Front-end Developer based in Kielce Poland. I'm 23 years old.",
		align: 'right',
	},
	{
		name: 'me',
		message: 'I want to express my interests in a position at your company',
		align: 'right',
	},
	{
		name: 'chef',
		message: 'Okey?... What you can do ?',
		align: 'left',
	},
	{
		name: 'me',
		message: 'I know Front-end technologies as like HTML5 CSS3 JavaScript React SCC and few more',
		align: 'right',
	},
	{
		name: 'chef',
		message: 'Mhmm... Do you have any completed projects?',
		align: 'left',
	},
	{
		name: 'me',
		message: 'Yes, i do. You can check it on my GitHub',
		align: 'right',
	},
	{
		name: 'me',
		message: "Here's the link",
		align: 'right',
	},
	{
		name: 'me',
		message: '<a target="blank" href="https://github.com/Damianchii">https://github.com/Damianchii</a>',
		align: 'right',
	},
	{
		name: 'chef',
		message: 'Well, why should I hire you?',
		align: 'left',
	},
	{
		name: 'me',
		message: 'First of all, I am very determined to start my first job as a junior',
		align: 'right',
	},
	{
		name: 'me',
		message: 'I know that I will give my best',
		align: 'right',
	},
	{
		name: 'me',
		message: 'I will want to expand my knowledge in the field of frontend',
		align: 'right',
	},
	{
		name: 'me',
		message: 'I know that the beginnings can be difficult, but I learn quickly',
		align: 'right',
	},
	{
		name: 'chef',
		message: "OK, we'll let you know",
		align: 'left',
	},
]
//Current time
let dt = new Date()

const minutes = () => {
	let minutesUnderTen = '0'
	if (dt.getMinutes() < 10) {
		minutesUnderTen = minutesUnderTen + dt.getMinutes()
		return minutesUnderTen
	} else {
		return dt.getMinutes()
	}
}

// po wywolaniu schodzi na dol diva
const updateScroll = () => {
	let element = document.querySelector('#main-container-messages')
	element.scrollTop = element.scrollHeight
}

//pobranie i wyswietlenie czasu
let time = dt.getHours() + ':' + minutes()
$('#time').append(time)

let number = 0

const waitingForMessage = () => {
	$('#chat-meggase-list').append(`<li class="flex  rounded-full animate-[fade-in-message-${
		chatMessages[number].align == 'right' ? 'right' : 'left'
	}_0.5s_ease]" ${
		chatMessages[number].align == 'right'
			? (chatMessages[number].style = 'style = "justify-content: end;"')
			: (chatMessages[number].style = 'justify-content: start;')
	}>
	<p id="message-padding-${chatMessages[number].align == 'right' ? 'right' : 'left'}"
		class="flex justify-center items-center gap-1 max-w-[250px] bg-[#303030] text-white py-2 px-4 h-[40px]">
		<span
			class="w-2 h-2 rounded-full bg-[#aaa] animate-[while-writing-animation_1.5s_linear_infinite_both] delay-1000"></span>
		<span
			class="w-2 h-2 rounded-full bg-[#aaa] animate-[while-writing-animation_1.5s_linear_infinite_both_0.2s]"></span>
		<span
			class="w-2 h-2 rounded-full bg-[#aaa] animate-[while-writing-animation_1.5s_linear_infinite_both_0.4s]"></span></p></li>`)
	updateScroll()
}

waitingForMessage()

let intervalID = setInterval(() => {
	// sprawdzenie, jesli number jest wiekszy od elemetow listy interval zakancza sie
	if (number >= chatMessages.length - 1) {
		clearInterval(intervalID)
	}
	//usun animacje pisania wiadomosci
	const menu = document.querySelector('#chat-meggase-list')
	menu.removeChild(menu.lastElementChild)

	//dodawanie elementu
	$('#chat-meggase-list').append(`<li class="flex  animate-[fade-in-message-${
		chatMessages[number].align == 'right' ? 'right' : 'left'
	}_0.5s_ease]" ${
		chatMessages[number].align == 'right'
			? (chatMessages[number].style = 'style = "justify-content: end;"')
			: (chatMessages[number].style = 'justify-content: start;')
	}>
	    <p id="message-padding-${chatMessages[number].align == 'right' ? 'right' : 'left'}"
	        class="max-w-[250px] lg:text-sm text-xs  ${
						chatMessages[number].align === 'right' ? 'bg-[#0085FE]' : 'bg-[#555555]'
					} text-white py-2 px-2 ${chatMessages[number].align == 'right' ? 'pr-2 pl-4' : 'pl-4 pr-4'}">
	        ${chatMessages[number].message}
	    </p>
	</li>`)
	number++

	//wykonuj animacje pisania wiadomosci
	if (number >= chatMessages.length) {
		return
	} else {
		setTimeout(waitingForMessage(), 5000)
	}
}, 5000)
