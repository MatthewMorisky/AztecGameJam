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
		if (this.isReturning) {
			let dX = (player.x - this.x);
			let dY = (player.y - this.y);
			let mag = Math.sqrt(dX*dX+dY*dY);
			this.xspeed =  (dX/mag) * 5;
			this.yspeed =  (dY/mag) * 5;
		}
		else if (this.distance > this.maxDistance) {
			this.isReturning = true;
			this.distance = -21;
			this.xspeed = -this.xspeed;
		}
		
	}
collide(obj) {
	if ((obj.name === 'player') && (this.isReturning)) {
		player.hasArm = true;
		this.delete();
	}


}
}
	