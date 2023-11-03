const chatMessages = [
	{
		name: 'me',
		message: "Hello I'm Damian Czerwiński, a passionate Front-end Developer based in Kielce Poland. I'm 23 years old.",
		align: 'right',
	},
	{
		name: 'chef',
		message: 'I want to express my interests in a position at your company',
		align: 'right',
	},
	{
		name: 'me',
		message: 'dLorem ipsum',
		align: 'right',
	},
	{
		name: 'chef',
		message: 'Lorem ipsum',
		align: 'right',
	},
	{
		name: 'chef',
		message: 'Lorem ipsum',
		align: 'left',
	},
	{
		name: 'chef',
		message: 'Lorem ipsum',
		align: 'right',
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
	$('#chat-meggase-list').append(`<li class="flex rounded-full justify-${
		chatMessages[number].align == 'right' ? 'end' : 'start'
	} animate-[fade-in-message-${chatMessages[number].align == 'right' ? 'right' : 'left'}_0.5s_ease]">
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
	$('#chat-meggase-list').append(`<li class="flex rounded-full animate-[fade-in-message-${
		chatMessages[number].align == 'right' ? 'right' : 'left'
	}_0.5s_ease] justify-${chatMessages[number].align == 'right' ? 'end' : 'start'}">
	    <p id="message-padding-${chatMessages[number].align == 'right' ? 'right' : 'left'}"
	        class="max-w-[250px] bg-[${
						chatMessages[number].align == 'right' ? '#0085FE' : '#444444' //0085FE
					}] text-white py-2 px-4 ">
	        ${chatMessages[number].message}
	    </p>
	</li>`)

	number++

	//wykonuj animacje pisania wiadomosci
	if (number >= chatMessages.length) {
		return
	} else {
		setTimeout(waitingForMessage(), 3000)
	}
}, 3000)
