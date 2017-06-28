function Button(num){
	var backCol = color(245);
	var actCol = color(245,120,120);
	this.currentCol = actCol;
	this.active = true;
	this.idNum = num;
	this.xLoc;
	this.yLoc;
	this.target = [];

	this.calcCenter = function(){
		this.xLoc = (radius * cos((360/numOfButtons) * num-90)) + width/2;
		this.yLoc = (radius * sin((360/numOfButtons) * num-90)) + height/2;
	}


	this.show = function(){
		this.calcCenter();
		rectMode(CENTER);
		fill(color(150,200,200));
		ellipse(this.xLoc, this.yLoc, butSize);
		fill(this.currentCol);
		ellipse(this.xLoc, this.yLoc, butSize-butThickness);
	}

	this.addLink = function(val){
		this.target.push(val);
	}

	this.invert = function(){
		this.active = !this.active;
		if (this.currentCol === backCol){
			this.currentCol = actCol;
		} else {
			this.currentCol = backCol;
		}
	}

	this.clicked = function(){
		for(var i = 0; i < this.target.length; i++){
			buttons[this.target[i]].invert();
		}
		this.invert();
	}
}