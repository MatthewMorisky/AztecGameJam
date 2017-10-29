class FallingBlock extends Thing 
{
	constructor(x, y)
	{
		super(x,y,0,0,new Hitbox(0,0,120,40), 'img/BreakawayPlatform.png', 'fallingBlock');
		this.standable=true;
		
	
	}
	update() {
		super.update();
		
	}
	collide(obj)
	{
		if(obj.name === 'player')
		{
			this.changeImage('img/BreakawayGif.gif');
		}
	}
} 