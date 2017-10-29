class Block extends Thing 
{
	constructor(x, y)
	{

		super(70, 70, 0, 0, new Hitbox(0, 0, 40, 40), 'img/UnlitPumpkin.png', 'block');
		this.sideLength = 40;
	
	}
	update() {
		super.update();
		console.log(this.x, this.y);
		this.draw();
		
		
	}
	draw() {

	}
	collide(obj)
	{
		console.log(obj.name);
		if(obj.name === 'arm')
		{
			this.changeImage('img/LitPumpkin.png');
		}

	}
}