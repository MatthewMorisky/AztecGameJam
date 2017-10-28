function Arm() {
this.x = player.x;
this.y = player.y;
this.size = 10;

this.draw = function() {
		fill(255);
		rect(this.x, this.y, this.size, this.size/2);
	}


}