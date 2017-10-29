class Bone extends Thing 
{
	constructor(x, y)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), 'img/BoneCollectable.gif', 'bone');
		
	
	}
	update() {
		super.update();
		
		
	}
	collide(obj)
	{
		console.log("Score is 1");
		if(obj.name === 'arm' || obj.name === 'player')
		{
			//Increment score by 1
			this.delete();
		}

	}
}