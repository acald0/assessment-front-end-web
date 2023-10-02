let favColor = document.querySelector('#color')
let favPlace = document.querySelector('#place')
let favRitual = document.querySelector('#ritual')


function colorEvent(event) {
	event.preventDefault();

	alert("My favorite color is black!")
}

function placeEvent(event) {
	event.preventDefault();

	alert("My favorite place is the UK!")
}

function ritualEvent(event) {
	event.preventDefault();

	alert("My favorite ritual is praying!")
}

favColor.addEventListener('click', colorEvent);

favPlace.addEventListener('click', placeEvent);

favRitual.addEventListener('click', ritualEvent)



//Troubleshooting:
// document.getElementById('color').addEventListener('click', colorEvent)

// favColor.addEventListener('click' (evt) => {
//     evt.preventDefault();

//     alert('My favorite color is black!');
// })

