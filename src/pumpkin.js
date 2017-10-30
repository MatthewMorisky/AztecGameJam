class Pumpkin extends Thing 
{
	constructor(x, y)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), 'img/UnlitPumpkin.png', 'pumpkin');
		this.sideLength = 40;
		this.standable=true;
	
	}
	update() {
		super.update();
		
		
		
	}
	
	collide(obj)
	{
		console.log(obj.name);
		if(obj.name === 'arm' || obj.name === 'player')
		{
			this.changeImage('img/LitPumpkin.png');
		}

	}
}