var radius = 350;
var butThickness = 40;
var butSize = 300;
var numOfButtons = 6;
var numOfLinks = 7;
var numOfPresses = 7;
var clickable = false;
var buttons = [];
var links = [];
var combos = [];
var currentSeconds;

function setup() {
	createCanvas(1200,100);
	noStroke();
	angleMode(DEGREES);
	generate();
};

function generate(){
	generateCombos();
	for(var i = 0; i < numOfButtons; i++){
		buttons[i] = new Button(i);
		buttons[i].calcCenter();
	}
	generateLinks();
	genStart();
	clickable = true;
}

function draw() {
	background(245);
	for(var i = 0; i < numOfLinks; i++){
		links[i].show();
	}
	for(var i = 0; i < numOfButtons; i++){
		buttons[i].show();
	}
	if(isCompleted()) {
		restart();
	}
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
	for(var i = 0; i < numOfPresses; i++){
		buttons[Math.floor(Math.random() * numOfButtons)].clicked();
	}
}

function mousePressed(){
	if(clickable){
		for (var i = 0; i < numOfButtons; i++){
			if (dist(mouseX, mouseY, buttons[i].xLoc, buttons[i].yLoc) < butSize/2){
				buttons[i].clicked();
			}
		}
	}
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
	if (clickable){
		currentSeconds = millis();
	}
	clickable = false;
	if(millis() - currentSeconds > 400){
		buttons = [];
		links = [];
		combos = [];
		generate();
	}
}