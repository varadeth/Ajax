function loadText() {
	console.log('Tejas');
	var xhttp = new XMLHttpRequest();
	if(xhttp.readyState == 0 || xhttp.readyState == 4) {
		xhttp.open('GET','/read',true);
		xhttp.onreadstatechange = function() {
			console.log(this.status);
			if(this.readyState == 4 && this.status == 200) {
				console.log((xhttp.responseText).toString());
				//document.getElementById('text').innerHTML = xhttp.responseText;
			}
		}
		xhttp.send();
	}
	else {
		setTimeout('loadText()',1000);
	}
}