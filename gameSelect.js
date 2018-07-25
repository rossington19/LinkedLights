function gameFreePlay() {
	sessionStorage.setItem('gameTimer', false);
	sessionStorage.setItem('gameLink', true);
	sessionStorage.setItem('gamePerfection', false);
}

function gameTimeOut(){
	sessionStorage.setItem('gameTimer', true);
	sessionStorage.setItem('gameLink', true);
	sessionStorage.setItem('gamePerfection', false);
}

function gamePerfection(){
	sessionStorage.setItem('gameTimer', false);
	sessionStorage.setItem('gameLink', true);
	sessionStorage.setItem('gamePerfection', true);
}

function gameHidden() {
	sessionStorage.setItem('gameTimer', true);
	sessionStorage.setItem('gameLink', false);
	sessionStorage.setItem('gamePerfection', false);
}