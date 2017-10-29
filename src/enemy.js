class Enemy extends Stoppable 
{
	constructor(x, y, xspeed, yspeed, hitbox, img, name)
	{
		super(x,y,xspeed,yspeed,hitbox, img, name);

	}


	update() {
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		super.update();
		
	}

}