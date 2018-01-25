function Link(val1, val2){
	this.a = val1;
	this.b = val2;

	this.calcLoc = function(){
		this.startX = buttons[this.a].xLoc;
		this.startY = buttons[this.a].yLoc;
		this.endX = buttons[this.b].xLoc;
		this.endY = buttons[this.b].yLoc;
	}

	this.draw = function() {
		this.calcLoc()
		ctx.beginPath();
		ctx.moveTo(this.startX, this.startY);
		ctx.lineTo(this.endX, this.endY);
		ctx.lineWidth = lineThickness;
		ctx.strokeStyle = "rgb(" + lineCol[0] + "," + lineCol[1] + "," + lineCol[2] + ")";
		ctx.stroke();
		ctx.closePath();
	}
}