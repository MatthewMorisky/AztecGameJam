class Player extends Stoppable {
	constructor(x, y) {

		super(x, y, 0, 0, new Hitbox(0, 0, 37, 37), 'img/LookRight.png', 'player');


		this.radius = 40;
		this.gravity = .2;
		this.friction = .90;
		this.isRight = true;
		this.hasArm = true;
		this.jumpLimit=1;
		this.jumpCount = this.jumpLimit;
		this.isOnTop = false;
		this.level = 1;
		this.hasCheckpoint = false;
		
	}

	update() {
		super.update();

		//prevents the head from going off screen
		this.x = constrain(this.x, 0, (wide-1));
		this.y = constrain(this.y, 0, ((tall) - this.radius/2));
		this.fall();
		this.slow();
		this.moving();
		this.isOnTop = false;

	}

	fall() {
		if (this.yspeed <= 15) {
			this.yspeed += this.gravity;
		}
	}
	move(dir) {
		if((this.x > 700 && dir > 0) || (this.x < 400 && dir < 0)) {
			this.xspeed = 0;
			lvl.shift(dir < 0 ? -8 : 8);
		}
		else {
			this.xspeed = dir;
		}
	}

	slow() {
		if (Math.abs(this.xspeed) > .00001) {
			this.move(this.xspeed * this.friction);
		}
		if (Math.abs(this.xspeed) < 1) {

			if ((this.isRight === true) && (this.level === 1)) {
				this.changeImage('img/LookRight.png');
			}
			if ((this.isRight === false) && (this.level === 1)) {
				this.changeImage('img/LookLeft.png')
			}
			if ((this.isRight === true) && (this.level === 2) && (this.hasArm)) {
				this.changeImage('img/BonyWithTorsoAndArmRight.png')
			}
			if ((this.isRight === false) && (this.level === 2) && (this.hasArm)) {
				this.changeImage('img/BonyWithTorsoAndArmLeft.png')
			}
			if ((this.isRight === true) && (this.level === 2) && (!this.hasArm)) {
				this.changeImage('img/BonyWithTorsoRight.png')
			}
			if ((this.isRight === false) && (this.level === 2) && (!this.hasArm)) {
				this.changeImage('img/BonyWithTorsoLeft.png')
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
		
		if (keyIsDown(RIGHT_ARROW)) 
		{
			player.move(3);
			if (player.level === 1) {
				this.changeImage('img/BoneRollRight.gif');
			}
			else if ((player.level === 2) && (this.hasArm)) {
				this.changeImage('img/HopRight.gif');
				console.log(this.y);
			}
			else if ((player.level === 2) && (!this.hasArm)) {
				this.changeImage('img/HopRightNoArm.gif');
				
			}
			this.isRight = true;
			if(!this.isOnTop) {
				this.jumpCount=0;
			}
		}
		else if (keyIsDown(LEFT_ARROW)) 
		{
			player.move(-3);
			if (player.level === 1) {
				this.changeImage('img/BoneRollLeft.gif');
			}
			else if ((player.level === 2) && (this.hasArm)) {
				this.changeImage('img/HopLeft.gif');
			}
			else if ((player.level === 2) && (!this.hasArm)) {
				this.changeImage('img/HopLeftNoArm.gif');
			}
			this.isRight = false;
			if(!this.isOnTop) {
				this.jumpCount=0;
			}
		}
		
	}
	collide(obj)
	{
		super.collide(obj);
		if(obj.standable)
		{

			if(this.isOnTop) {
				this.jumpCount = this.jumpLimit;
			}
		}
			

	}
	

}
