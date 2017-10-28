function Player() {
	this.x = 250;
	this.y = 250;
	this.xspeed = 0;
	this.yspeed = 0;
	this.radius = 40;
	this.gravity = .2;

	this.update = function() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

		//prevents the head from going off screen
		this.x = constrain(this.x, 0, (wide-1));
		this.y = constrain(this.y, 0, ((tall) - this.radius/2));
	}

	this.draw = function() {
		fill(255);
		ellipse(this.x, this.y, this.radius, this.radius);
	}
	this.jumping = function() {
		this.yspeed = -8;
	}
	this.fall = function() {
		if (this.yspeed <= 15) {
			this.yspeed += this.gravity;
		}
	}
}