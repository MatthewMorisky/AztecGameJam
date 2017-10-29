class Stoppable extends Thing 
{
	constructor(x, y)
	{

		super(x, y, 0, 0, new Hitbox(0, 0, 40, 40), undefined, 'stoppable'); //fix images
	
	}

	checkCollision() {
		for(let i=0;i<drawList.length;i++) {
			let di = drawList[i];
			if(di.name === this.name) continue;
			if(this.x + this.xspeed + this.hitbox.right > di.x + di.hitbox.left) 
			{
				this.collide(di,di.hitbox.left);

			}
			if(this.x + this.xspeed + this.hitbox.left < di.x + di.hitbox.right) 
			{
				this.collide(di,di.hitbox.right);
			}
			if(this.y + this.yspeed + this.hitbox.top > di.y + di.hitbox.bottom) 
			{
				this.collide(di,di.hitbox.top);
			}
			if(this.y + this.yspeed + this.hitbox.bottom < di.y + di.hitbox.top) 
			{
				this.collide(di,di.hitbox.bottom);
			}

			
		}
	}

	collide(obj, num)
	{
		if(num == this.hitbox.top || num == this.hitbox.bottom)
		{
			this.yspeed = 0;
		}
		if(num == this.hitbox.left || num == this.hitbox.right)
		{
			this.yspeed = 0;
		}
	}
}