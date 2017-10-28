class Enemy extends fallable 
{
	constructor(x,y)
	{

		this.x = x;
		this.y = y;
		this.xspeed = -5;
		super(x,y,xspeed,yspeed);
	}

	update()
	{
		super.update();
	}

}