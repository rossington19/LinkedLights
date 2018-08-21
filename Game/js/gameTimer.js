function generateTimer(){
	if(gameTimer === "true"){
		intTime = 10;
		totTime = (numOfButtons * 750) + (numOfLinks * 1000);
		if(gameLink === "false"){
			totTime *= 2;
		}
		curTime = totTime;
		drawTimer();
		showTime();	
		timerID = setInterval( function() {
			showTime();
			checkTime();
			curTime -= intTime;
			console.log(curTime);
		}, intTime);
	}
}

function drawTimer(){
	ctx.beginPath();
	ctx.arc(canvas.width/2, canvas.height/2, circRadius+(1.5*butRadius), 0, 2*Math.PI);
	ctx.lineWidth = lineThickness;
	ctx.strokeStyle = "rgb(" + lineCol[0] + "," + lineCol[1] + "," + lineCol[2] + ")";
	ctx.stroke();
	ctx.closePath();
}

function showTime(){
	ctx.save();
	ctx.translate( canvas.width/2, canvas.height/2 );
	ctx.rotate(1.5*Math.PI);
	ctx.beginPath();
	ctx.arc(0,0, circRadius+(1.5*butRadius), 0, (curTime/totTime)*1.9999*Math.PI, true);
	ctx.lineWidth = lineThickness*1.4;
	ctx.strokeStyle = "rgb(" + backCol[0] + "," + backCol[1] + "," + backCol[2] + ")";
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
}

function checkTime(){
	if(curTime <= -0){
		score = -1;
		clearInterval(timerID);
		ctx.fillStyle = "rgb(" + backCol[0] + "," + backCol[1] + "," + backCol[2] + ")";
		ctx.save();
		ctx.translate( canvas.width/2, canvas.height/2 );
		ctx.fillRect(-10, (circRadius+(1.5*butRadius))*-1-10, 50, 20);
		ctx.restore();
		clickable = false;
		openLoserMenu();
	}
}
