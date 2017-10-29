class Stoppable extends Thing 
{
	constructor(x, y, xspeed, yspeed, hitbox, img, name)
	{

		super(x, y, 0, 0, hitbox, img, name); //fix images
	
	}

	/*checkCollision() {
		for(let i=0;i<drawList.length;i++) {
			let di = drawList[i];
			if(di.name === this.name) continue;
			if(this.x + this.xspeed + this.hitbox.right > di.x + di.hitbox.left) 
			{
				this.collide(di,this.hitbox.left);

			}
			if(this.x + this.xspeed + this.hitbox.left < di.x + di.hitbox.right) 
			{
				this.collide(di,this.hitbox.right);
			}
			if(this.y + this.yspeed + this.hitbox.top > di.y + di.hitbox.bottom) 
			{
				this.collide(di,this.hitbox.top);
			}
			if(this.y + this.yspeed + this.hitbox.bottom < di.y + di.hitbox.top) 
			{
				this.collide(di,this.hitbox.bottom);
			}

			
		}
	}*/

	collide(obj)
	{
		if(obj.name === 'ground') {
			console.log("abo");
			let k = 15;
			console.log(this.yspeed);
			if(obj.y + obj.hitbox.bottom < this.y + this.hitbox.top + k && this.yspeed < 0) {
				this.y = obj.y + obj.hitbox.bottom - this.hitbox.height;
				this.yspeed = 0;
				console.log("BOTTOMMMM");
			}
			if(obj.x + obj.hitbox.left > this.x + this.hitbox.right - k) {
				this.x = obj.x + obj.hitbox.left - this.hitbox.right;
				console.log("shwibby");
				this.xspeed = 0;
			} else if(obj.x + obj.hitbox.right < this.x + this.hitbox.left + k) {
				this.x = obj.x + obj.hitbox.right - this.hitbox.left;
				this.xspeed = 0;
			} else if(obj.y + obj.hitbox.top > this.y + this.hitbox.bottom - k) {
				this.y = obj.y + obj.hitbox.top - this.hitbox.height;
				this.yspeed = 0;
				console.log('toppppp');
				this.isColliding = true;
			} 
			else {
				this.isColliding = false;
			}
		}
		/*
		if(num == this.hitbox.top || num == this.hitbox.bottom)
		{
			this.yspeed = 0;
		}
		if(num == this.hitbox.left || num == this.hitbox.right)
		{
			this.yspeed = 0;
		}
		*/
	}
}