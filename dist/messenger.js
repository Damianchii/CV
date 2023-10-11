const chatMessages = [
	{
		name: 'me',
		message: 'Lorem ipsum',
		delay: 1000,
		align: 'right',
		showTime: true,
		time: '19:58', //dodac prawidzwy czas
	},
	{
		name: 'chef',
		message: 'Lorem ipsum',
		delay: 6000,
		align: 'left',
		showTime: true,
		time: '19:58', //dodac prawidzwy czas
	},
	{
		name: 'me',
		message: 'dLorem ipsum',
		delay: 3000,
		align: 'right',
		showTime: true,
		time: '19:58', //dodac prawidzwy czas
	},
	{
		name: 'chef',
		message: 'Lorem ipsum',
		delay: 6000,
		align: 'right',
		showTime: true,
		time: '19:58', //dodac prawidzwy czas
	},
	{
		name: 'chef',
		message: 'Lorem ipsum',
		delay: 6000,
		align: 'right',
		showTime: true,
		time: '19:58', //dodac prawidzwy czas
	},
	{
		name: 'chef',
		message: 'Lorem ipsum',
		delay: 6000,
		align: 'right',
		showTime: true,
		time: '19:58', //dodac prawidzwy czas
	},
]
//Current time
let dt = new Date()
let time = dt.getHours() + ':' + dt.getMinutes()
$('#time').append(time)

let chatDelay = 0

$.each(chatMessages, function (index, element) {
	$('#chat-meggase-list').append(`<li class="flex rounded-full justify-${element.align == 'right' ? 'end' : 'start'}">
    <p id="message-padding-${element.align == 'right' ? 'right' : 'left'}"
        class="max-w-[250px] bg-[#0078FF] text-white py-2 px-4 break-all">
        ${element.message}
    </p>
</li>`)
})
