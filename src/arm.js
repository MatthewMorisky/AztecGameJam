class Arm extends Thing {

	constructor(x, y) {
		super(x, y, 10, 0, new Hitbox(0,0,0,0), 'img/BoneCollectable.gif', 'arm')
		this.size = 10;
		this.x = player.x;
		this.y = player.y;
		this.distance = 0;
	}
	update() {

		super.update();
		this.turnAbout();

	}
turnAbout() {
	this.distance++
	if (this.distance > 20) {
		this.distance = -21;
		this.xspeed = -this.xspeed;
	}
	else if (this.distance = -1) {
		this.delete();
	}
}
	

}