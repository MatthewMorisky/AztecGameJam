class Block extends Thing 
{
	constructor(x, y, xspeed, yspeed, hitbox, img, name)
	{
		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), 'img/UnlitPumpkin.gif', 'block');
		this.sideLength = 40;
	
	}
	update() {
		console.log(this.x, this.y);
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		this.draw();
		super.update();
		
	}
	draw() {

	}
}