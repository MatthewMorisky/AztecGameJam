class Fireball extends Enemy 
{
	constructor(x, y)
	{
		super(x,y,0,0,new Hitbox(0,0,36,36), 'img/FlameEnemy.gif', 'fireball');
		this.gravity = .2;
		this.xspeed = 1;
		this.isLeft = false;
		this.hasJumped = false;

	}


	fall() {
		if (this.yspeed <= 12) {
			this.yspeed += this.gravity;
		}
	}
	
	update() {
		super.update();
		this.fall();
		this.jump();
		
	}
	jump()
	{
		if(!this.hasJumped)
		{
			this.yspeed = -5;
			this.hasJumped = true
			this.isLeft = !this.isLeft;
			this.xspeed = -this.xspeed;
		}
	}

	collide(obj)
	{
		if(obj.standable)
		{
			this.hasJumped = false;
		}
		if(!this.isLeft)
		{
			this.changeImage('img/FlameEnemy.gif')
			this.isleft = true;
			
		}
		if(this.isLeft)
		{
			this.changeImage('img/FlameEnemyMovingRight.gif')
			this.isleft = false;
			this.xspeed = -this.xspeed;
		}
		if(obj.name=='player')
		{
			obj.delete(); //MAKE PLAYER DIE
		}
		if(obj.name == 'arm')
		{
			this.delete();
		}
	}


}