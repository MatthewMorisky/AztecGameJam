class Checkpoint extends Thing 
{
	constructor(x, y, checkNum)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 80), 'img/UnlitLantern.png', 'block');
		this.hasNotChecked = true;
	
	}
	update() {
		super.update();
		
		
		
	}
	
	collide(obj)
	{
		console.log(obj.name);
		if(obj.name === 'player')
		{
			if(this.hasNotChecked){
				this.hasNotChecked = false;
				this.changeImage('img/LitLantern.gif');
				player.saveX = this.x;
				player.saveY = this.y;
			}
		}

	}
}