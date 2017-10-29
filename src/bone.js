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
		
		if(obj.name === 'arm' || obj.name === 'player')
		{
			scoreBoard.score++;
			console.log(scoreBoard.score);
			this.delete();
		}

	}
}