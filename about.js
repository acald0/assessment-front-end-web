console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted Successfully');
}

function mouseoverEvent(event) {
	event.preventDefault();

	alert("You're amazing!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', mouseoverEvent)