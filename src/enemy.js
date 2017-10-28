class Enemy extends Thing 
{
	constructor(x, y, xspeed, yspeed, hitbox, img, name)
	{
		super(x,y,xspeed,yspeed,hitbox, img, name);
		this.gravity = .2;
		this.radius = 20;
	
	}


	fall() {
		if (this.yspeed <= 12) {
			this.yspeed += this.gravity;
		}
	}
	draw() {
		fill(255);
		ellipse(this.x, this.y, this.radius, this.radius);
	}
	update() {
		console.log(this.x, this.y);
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		this.draw();
		this.fall();
		super.update();
		this.x = constrain(this.x, 0, (wide-1));
		this.y = constrain(this.y, 0, ((tall) - this.radius));
		
	}

}