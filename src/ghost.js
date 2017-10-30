class Ghost extends Enemy 
{
	constructor(x, y)
	{
		super(x,y,0,0,new Hitbox(0,0,50,640), 'img/GhostBossAnimation.gif', 'ghost');
		this.xspeed = -3;

	}
	
	update() {
		super.update();
		
	}

	collide(obj)
	{
		if(obj.name=='player')
		{
			obj.die();
		}
	}


}