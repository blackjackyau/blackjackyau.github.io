window.onload = function() {
	// Get a reference to the <div> on the page that will display the
	// message text.
	var messageEle = document.getElementById('message');
	var mainWin = (window.opener) ? window.opener : window.parent;

	// A function to process messages received by the window.
	function receiveMessage(e) {
		console.log("receiveMessage");
		console.log(e);
		// Update the div element to display the message.
		messageEle.innerHTML = "Message Received: " + e.data;
		mainWin.postMessage("Message Received Acknowledgement", "*");
	}

	// Setup an event listener that calls receiveMessage() when the window
	// receives a new MessageEvent.
	window.addEventListener('message', receiveMessage);
}
