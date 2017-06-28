function Link(val1, val2){
	this.a = val1;
	this.b = val2;

	this.calcCenter = function(){
		this.startX = buttons[this.a].xLoc;
		this.startY = buttons[this.a].yLoc;
		this.endX = buttons[this.b].xLoc;
		this.endY = buttons[this.b].yLoc;
	}
	this.calcCenter();

	this.show = function() {
		this.calcCenter()
		push();
			strokeWeight(7);
			stroke(150,200,200);
			line(this.startX, this.startY, this.endX, this.endY);
		pop();
	}
}