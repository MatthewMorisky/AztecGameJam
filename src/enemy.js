class Enemy //extends fallable 
{
	constructor(x,y)
	{

		this.x = 20;
		this.y = 20;
		this.gravity = .2;
		this.xspeed = 5;
		this.yspeed = 0;
		this.radius = 20;
		//super(x,y,xspeed,yspeed, gravity);
	}


	fall() {
		if (this.yspeed <= 12) {
			this.yspeed += this.gravity;
		}
	}
	draw() {
		fill(255);
		ellipse(this.x, this.y, this.radius, this.radius);
		console.log("drawn");
	}
	update() {
		console.log(this.x, this.y);
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		this.draw();
		this.fall();
		this.x = constrain(this.x, 0, (wide-1));
		this.y = constrain(this.y, 0, ((tall) - this.radius));
		//super.update();
	}

}