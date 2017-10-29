class Player extends Thing {
	constructor(x, y) {
		super(250, 250, 0, 0, new Hitbox(0, 0, 40, 40), 'img/BoneMainCharacter.png', 'player');
		this.radius = 40;
		this.gravity = .2;
		this.friction = .90;
		this.isRight = true;
		this.hasArm = true;
		this.jumpLimit=10;
		this.jumpCount = this.jumpLimit;
		
	}

	update() {
		super.update();

		//prevents the head from going off screen
		this.x = constrain(this.x, 0, (wide-1));
		this.y = constrain(this.y, 0, ((tall) - this.radius/2));
		this.fall();
		this.slow();
		this.moving();

	}

	fall() {
		if (this.yspeed <= 15) {
			this.yspeed += this.gravity;
		}
	}
	move(dir) {
		this.xspeed = dir;
	}

	slow() {
		if (Math.abs(this.xspeed) > .00001) {
			this.move(this.xspeed * this.friction);
		}
		if (Math.abs(this.xspeed) < 1) {
			if (this.isRight === true) {
				this.changeImage('img/BoneMainCharacter.png');
			}
			if (this.isRight === false) {
				this.changeImage('img/LookLeft.png')
			}
		}
	}
	armThrow() {
		if (this.hasArm) {
			let arm = new Arm();
			this.hasArm = false;
		}
	}
	moving() {
		if (keyIsDown(LEFT_ARROW)) {
			player.move(-3);
			this.changeImage('img/BoneRollLeft.gif');
			this.isRight = false;
		}
		else if (keyIsDown(RIGHT_ARROW)) {
			player.move(3);
			this.changeImage('img/BoneRollRight.gif');
			this.isRight = true;
		}
	}
	collide(obj)
	{
		super.collide(obj);
		if(obj.name == 'ground')
			this.jumpCount = this.jumpLimit;
	}
	

}
