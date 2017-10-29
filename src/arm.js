class Arm extends Thing {

	constructor(x, y) {
		super(x, y, 0, 0, new Hitbox(0,0,0,0), 'img/BoneAttack.gif', 'arm')
		this.x = player.x;
		this.y = player.y;
		this.distance = 0;
		this.isRight = player.isRight;
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
		if (this.distance > 20) {
			this.distance = -21;
			this.xspeed = -this.xspeed;
		}
		else if (this.distance == -1) {
			this.delete();
		}
	}
}
	