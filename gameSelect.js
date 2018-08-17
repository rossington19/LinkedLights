function gameFreePlay() {
	sessionStorage.setItem('gameMode', "Free Play")
	sessionStorage.setItem('gameTimer', false);
	sessionStorage.setItem('gameLink', true);
	sessionStorage.setItem('gamePerfection', false);
}

function gameTimeOut(){
	sessionStorage.setItem('gameMode', "Time Out")
	sessionStorage.setItem('gameTimer', true);
	sessionStorage.setItem('gameLink', true);
	sessionStorage.setItem('gamePerfection', false);
}

function gamePerfection(){
	sessionStorage.setItem('gameMode', "Perfection")
	sessionStorage.setItem('gameTimer', false);
	sessionStorage.setItem('gameLink', true);
	sessionStorage.setItem('gamePerfection', true);
}

function gameHidden() {
	sessionStorage.setItem('gameMode', "Hidden")
	sessionStorage.setItem('gameTimer', true);
	sessionStorage.setItem('gameLink', false);
	sessionStorage.setItem('gamePerfection', false);
}

function levelSelect(){
	sessionStorage.setItem('buttonNum', document.getElementById("butDisp").innerHTML);
	sessionStorage.setItem('linkNum', document.getElementById("linkDisp").innerHTML);
}