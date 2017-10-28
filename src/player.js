class Player extends Thing {
	constructor(x, y) {
		super(250, 250, 0, 0, new Hitbox(0, 0, 40, 40), 'img/BoneMainCharacter.png', 'player');
		this.radius = 40;
		this.gravity = .2;
		this.friction = .90;
	}

	update() {
		super.update();

		//prevents the head from going off screen
		this.x = constrain(this.x, 0, (wide-1));
		this.y = constrain(this.y, 0, ((tall) - this.radius/2));

		this.draw();
		this.fall();
		this.slow();
		this.moving();
	}

	draw() {
		//fill(255);
		//ellipse(this.x, this.y, this.radius, this.radius);
	}
	jump() {
		this.yspeed = -8;
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
		if (Math.abs(player.xspeed < .00001)) {
			player.move(player.xspeed * this.friction);
		}
	}
	armThrow() {
		arm = new Arm();
		arm.draw();
	}
	moving() {
		if (keyIsDown(LEFT_ARROW)) {
			player.move(-3);
		}
		else if (keyIsDown(RIGHT_ARROW)) {
			player.move(3);
		}
	}
}