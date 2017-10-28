class Arm {
	constructor(x,y) {
	this.size = 10;
	this.x = 20;
	this.y = 20;
}
draw() {
		fill(255);
		rect(this.x, this.y, 70, 70);
		console.log("drawn");
	}

}