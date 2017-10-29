class Ground extends Thing 
{
	constructor(x, y)
	{
		super(x,y,40,40,new Hitbox(0,0,40,40), 'img/tombstone2-1.png', 'ground');
		this.xspeed = 0;
		this.yspeed = 0;

		
	
	}
	update() {
		super.update();
		
	}
	draw(){

	}
	collide(obj)
	{
		if(obj.name === 'player')
		{
			this.delete();
		}
	}
}