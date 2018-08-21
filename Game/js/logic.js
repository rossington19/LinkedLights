var canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
canvas.style.backgroundColor  = "rgb(" + backCol[0] + "," + backCol[1] + "," + backCol[2] + ")";

if (sessionStorage.getItem('buttonNum') && sessionStorage.getItem('linkNum')) {
	numOfButtons = sessionStorage.getItem('buttonNum'); 
	numOfLinks = sessionStorage.getItem('linkNum');
}
generate(numOfButtons);

function generate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	generateCombos();
	for(var i = 0; i < numOfButtons; i++){
		buttons[i] = new Button(i);
		buttons[i].calcCenter();
	}
	generateLinks();
	generateTimer();
	genStart();
	clickable = true;
	resizeCanvas();
}

function generateCombos(){
	for(var j = 0; j < numOfButtons; j++){
		for(var k = j; k < numOfButtons; k++){
			if(j != k)
				combos.push(new Array(j,k));
		}
	}
}

function generateLinks(){
	for(var i = 0; i < numOfLinks; i++){
		var randVal = Math.floor(Math.random() * combos.length);
		var a = combos[randVal][0];
		var b = combos[randVal][1]
		links[i] = new Link(a, b);
		buttons[a].addLink(b);
		buttons[b].addLink(a);
		combos.splice(randVal, 1);
	}
}

function genStart(){
	var counter = 0;
	do {
		for(var i = 0; i < numOfPresses; i++){
			buttons[Math.floor(Math.random() * numOfButtons)].clicked();
		}
		counter++;
	} while(isCompleted() && counter < 1);
	
	if (isCompleted()){
		restart();
	}
}

function drawAll(){
	if (gamePerfection === "true"){
		document.getElementById('perfectionCont').style.visibility = "visible";
		document.getElementById('perfCurNum').innerHTML = perfNumOfClicks;
		document.getElementById('perfTotNum').innerHTML = numOfPresses;
	} else {
		document.getElementById('perfectionCont').style.visibility = "hidden";
	}
	if(gameTimer === "true"){
		drawTimer();
	}
	if(gameLink === "true"){
		for(var i = 0; i < numOfLinks; i++){
			links[i].draw();
		}
	}
	for(var i = 0; i < numOfButtons; i++){
		buttons[i].draw();
	}
}

window.addEventListener('orientationchange', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	if(canvas.width < canvas.height) dim = canvas.width;
	else dim =canvas.height;
	butRadius = dim * ( (numOfButtons-4)*(-0.05)/(4) + 0.12 );
	circRadius = (dim * 0.37)-butRadius;
	lineThickness = dim * 0.015;
	for(var i = 0; i < numOfButtons; i++){
		buttons[i].calcCenter();
	}
	drawAll();
}

function isCompleted(){
	var responce = true;
	for(var i = 0; i < buttons.length; i++){
		if(!buttons[i].active)
			responce = false;
	}
	return responce;
}

function restart(){
	buttons = [];
	links = [];
	combos = [];
	clearInterval(timerID);
	generate();
}

function checkPerfection(){
	perfNumOfClicks++;
	document.getElementById('perfCurNum').innerHTML = perfNumOfClicks;
	if(perfNumOfClicks === numOfPresses && !isCompleted()){
		clickable = false;
		setTimeout(function(){ 
			document.getElementById('popupTitle').innerHTML = "Failed!";
			openLoserMenu();
		}, 300);
	}
}

function checkHighscore(){
	currentScoreRef = sessionStorage.getItem('gameMode') + " " + numOfButtons + "-" + numOfLinks;
	if(score > localStorage.getItem(currentScoreRef)){
		localStorage.setItem(currentScoreRef, score);
	}
}

canvas.addEventListener('click', function(e) {
	if(clickable){
		for(var i = 0; i < numOfButtons; i++){
			if(e.offsetX + butRadius > buttons[i].xLoc && e.offsetX - butRadius < buttons[i].xLoc){
				if(e.offsetY + butRadius > buttons[i].yLoc && e.offsetY - butRadius < buttons[i].yLoc){
					buttons[i].clicked();
					if(gamePerfection === "true"){
						checkPerfection();
					}
					if(isCompleted()) {
						console.log("SOLVED");
						intTime = 0;
						clickable = false;
						setTimeout(function(){ 
							perfNumOfClicks = 0;
							document.getElementById('scoreVal').innerHTML = ++score;
							checkHighscore();
							restart();
						}, 300);
					}
				}
			}
		}
	}
});


