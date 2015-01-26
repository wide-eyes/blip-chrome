var endpoint = 'http://localhost:5000/blip';

function handleJSONP(blip) {
	alert(blip.text);
}

var xhr = new XMLHttpRequest();
xhr.open('GET', endpoint, true);
xhr.setRequestHeader('Accept', 'text/javascript');
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		eval(xhr.responseText);
	}
};
xhr.send();
