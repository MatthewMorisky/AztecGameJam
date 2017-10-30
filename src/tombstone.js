class Tombstone extends Thing 
{
	constructor(x, y)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), 'img/tombstone2-1.png', 'tombstone');
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
			this.changeImage('img/tombstone2-2.png');
		}

	}
}