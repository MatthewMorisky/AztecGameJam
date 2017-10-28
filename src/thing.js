class Thing {
	constructor(x, y, xspeed, yspeed, hitbox, img, name) {
		this.x = x;
		this.y = y;
		this.xspeed = xspeed || 0;
		this.yspeed = yspeed || 0;
		this.hitbox = hitbox;
		this.img = loadImage(img);
		this.name = name;
		drawList.push(this); // eww?
		image(this.img, this.x, this.y);
	}

	update() {
		this.checkCollision();

		this.x += this.xspeed;
		this.y += this.yspeed;
		image(this.img, this.x, this.y);
	}

	checkCollision() {
		for(let i=0;i<drawList.length;i++) {
			let di = drawList[i];
			if(di.name === this.name) continue;
			if(this.x + this.xspeed + this.hitbox.right < di.x + di.hitbox.left) continue;
			if(this.x + this.xspeed + this.hitbox.left > di.x + di.hitbox.right) continue;
			if(this.y + this.yspeed + this.hitbox.top > di.y + di.hitbox.bottom) continue;
			if(this.y + this.yspeed + this.hitbox.bottom < di.y + di.hitbox.top) continue;

			this.collide(di);
		}
	}

	collide(obj) {
		// extended...
	}



}