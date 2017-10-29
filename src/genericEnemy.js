class PumpkinEnemy extends Enemy 
{
	constructor(x, y, xspeed, yspeed, hitbox, img, name)
	{
		super(x,y,xspeed,yspeed,new Hitbox(0,0,40,40), 'img/blank.png', 'PumpkinEnemy');
		this.gravity = .2;
		this.xspeed = -3;

	}


	fall() {
		if (this.yspeed <= 12) {
			this.yspeed += this.gravity;
		}
	}
	
	update() {
		super.update();
		
	}

}