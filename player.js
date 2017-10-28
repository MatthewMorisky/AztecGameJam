<<<<<<< HEAD
function Player() {
	this.x = 250;
	this.y = 250;
	this.xspeed = 0;
	this.yspeed = 0;
	this.radius = 40;
	this.gravity = .2;
	this.friction = .90;
	this.isMoving = false;

	this.update = function() {
=======
class Player extends Thing {
	constructor(x, y) {
		super
		this.x = 250;
		this.y = 250;
		this.xspeed = 0;
		this.yspeed = 0;
		this.radius = 40;
		this.gravity = .2;
		this.friction = .90;
	}

	update() {
>>>>>>> ab3b6137b58768e7b470dbb196b6df43328127a5
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

		//prevents the head from going off screen
		this.x = constrain(this.x, 0, (wide-1));
		this.y = constrain(this.y, 0, ((tall) - this.radius/2));
<<<<<<< HEAD
	}

	this.draw = function() {
		fill(255);
		ellipse(this.x, this.y, this.radius, this.radius);
	}
	this.jump = function() {
		this.yspeed = -8;
	}
	this.fall = function() {
=======

		this.draw();
		this.fall();
		this.slow();
		this.moving();
	}

	draw() {
		fill(255);
		ellipse(this.x, this.y, this.radius, this.radius);
	}
	jump() {
		this.yspeed = -8;
	}
	fall() {
>>>>>>> ab3b6137b58768e7b470dbb196b6df43328127a5
		if (this.yspeed <= 15) {
			this.yspeed += this.gravity;
		}
	}
<<<<<<< HEAD
	this.move = function(dir) {
		this.xspeed = dir;
	}
	this.slow = function() {
=======
	move(dir) {
		this.xspeed = dir;
	}
	slow() {
>>>>>>> ab3b6137b58768e7b470dbb196b6df43328127a5
		if ((player.xspeed > .00001) || (player.xspeed < -.00001)) {
			player.move(player.xspeed * this.friction);
		}
	}
<<<<<<< HEAD
	this.armThrow = function() {
		arm = new Arm();
	}

=======
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
>>>>>>> ab3b6137b58768e7b470dbb196b6df43328127a5
}