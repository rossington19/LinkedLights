function Button(num){
	this.col = actCol;
	this.active = true;
	this.idNum = num;
	this.xLoc;
	this.yLoc;
	this.target = [];

	this.calcCenter = function(){
		this.xLoc = (circRadius * Math.cos( ((360/numOfButtons) * this.idNum-90)/180*Math.PI) ) + canvas.width/2;
		this.yLoc = (circRadius * Math.sin( ((360/numOfButtons) * this.idNum-90)/180*Math.PI) ) + canvas.height/2;
	}

	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.xLoc, this.yLoc, butRadius, 0, 2*Math.PI);
		ctx.fillStyle = "rgb(" + this.col[0] + "," + this.col[1] + "," + this.col[2] + ")";
		ctx.fill();
		ctx.lineWidth = lineThickness;
		ctx.strokeStyle = "rgb(" + lineCol[0] + "," + lineCol[1] + "," + lineCol[2] + ")";
		ctx.stroke();
		ctx.closePath();
	}

	this.addLink = function(val){
		this.target.push(val);
	}

	this.invert = function(){
		this.active = !this.active;
		if (this.active){
			this.col = actCol;
		} else {
			this.col = backCol;
		}
		this.draw();
	}

	this.clicked = function(){
		for(var i = 0; i < this.target.length; i++){
			buttons[this.target[i]].invert();
		}
		this.invert();
	}
}