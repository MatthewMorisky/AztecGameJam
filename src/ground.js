class Ground extends Thing 
{
	constructor(x, y)
	{
		super(x,y,0,0,new Hitbox(0,0,40,40), 'img/MyEmotions.png', 'ground');

		
	
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
			//this.delete();
		}
	}
}