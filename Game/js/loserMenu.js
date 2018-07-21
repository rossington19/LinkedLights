function openLoserMenu() {
	document.getElementById("loserMenu").style.visibility = "visible";
	document.getElementById("loserMenu").style.left = "50%";
}

function retryGame() {
	document.getElementById("loserMenu").style.left = "-50%";
	score = 0;
	document.getElementById('scoreVal').innerHTML = score;
	numOfButtons = document.getElementById("butDisp").innerHTML;
	numOfLinks = document.getElementById("linkDisp").innerHTML;
	setTimeout(function(){ restart(); }, 500);
}