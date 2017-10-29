class Bone extends Thing 
{
	constructor(x, y)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), 'img/BoneCollectable.gif', 'bone');
		this.stoppable = true;
	
	}
	update() {
		super.update();
		
		
	}
	collide(obj)
	{
		
		if(obj.name === 'arm' || obj.name === 'player')
		{
			score.score++;
			console.log(score.score);
			this.delete();
		}

	}
}