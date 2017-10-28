function Block(){

	this.x = wide/2.2;
	this.y = tall/3;
	
	this.break = function(){
		delete this;
	}

	this.draw = function(){
		fill(255);
		rect(this.x, this.y, 40, 40)
	}




}