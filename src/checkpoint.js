class CheckPoint extends Thing 
{
	constructor(x, y)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), 'img/UnlitLantern.png', 'block');
		this.sideLength = 40;
	
	}
	update() {
		super.update();
		
		
		
	}
	
	collide(obj)
	{
		console.log(obj.name);
		if(obj.name === 'player')
		{
			this.changeImage('img/LitLantern.gif');
			player.hasCheckpoint = true;
		}

	}
}