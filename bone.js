function Bone(){

	this.x = wide/4;
	this.y = tall/3;
	this.length = 30;
	this.width = 10;
	
	this.break = function(){
		delete this;
	}

	this.draw = function(){
		fill(255);
		rect(this.x, this.y, this.length, this.width)
	}




}