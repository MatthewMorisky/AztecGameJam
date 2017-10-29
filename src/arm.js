class Arm extends Thing {

	constructor(x, y) {
		super(x, y, 0, 0, new Hitbox(0,0,40,40), 'img/BoneAttack.gif', 'arm')
		this.x = player.x;
		this.y = player.y;
		this.distance = 0;
		this.maxDistance = 20;

		this.isRight = player.isRight;
		this.isReturning = false;
		if (this.isRight) {
			this.xspeed = 10;
		}
		else if (!this.isRight) {
			this.xspeed = -10;
		}
	}
	update() {

		super.update();
		this.throw();
	}
throw() {
	this.distance++
		if (this.distance > this.maxDistance) {
			this.isReturning = true;
			this.distance = -21;
			this.xspeed = -this.xspeed;
		}
		else if (this.isReturning) {
		
		}
	}
collide(obj) {
	if ((obj.name === 'player') && (this.isReturning)) {
		player.hasArm = true;
		this.delete();
		this.isReturning = false;
	}


}
}
	