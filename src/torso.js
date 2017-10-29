class Torso extends Thing 
{
	constructor(x, y)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), 'img/TorsoAndArmRight.png', 'bone');
	
	}
	update() {
		super.update();
		
		
	}
	collide(obj)
	{
		
		if(obj.name === 'player')
		{
			player.isLvl2 = true;
		}

	}
}