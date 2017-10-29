class PumpkinEnemy extends Enemy 
{
	constructor(x, y)
	{
		super(x,y,0,0,new Hitbox(0,0,36,36), 'img/EPMovesLeft.gif', 'pumpkinEnemy');
		this.gravity = .2;
		this.xspeed = -3;
		this.isLeft = true;

	}


	fall() {
		if (this.yspeed <= 12) {
			this.yspeed += this.gravity;
		}
	}
	
	update() {
		super.update();
		
	}

	collide(obj)
	{
		if(obj.standable)
		{
			this.xspeed = -this.xspeed;
		}
		if(this.isLeft)
		{
			this.changeImage('img/EPMovesLeft.gif')
			this.switch();
		}
		if(!this.isLeft)
		{
			this.changeImage('img/EPMovesRight.gif')
			this.switch();
		}
		if(obj.name=='player')
		{
			obj.delete(); //MAKE PLAYER DIE
		}
	}
	switch()
	{
		this.isLeft = !this.isLeft;
	}


}