class Arm extends Thing {
	constructor(x, y) {
		super(x, y, 10, 0, new Hitbox(0,0,0,0), 'img/BoneCollectable.gif', 'arm')
		this.size = 10;
		this.x = player.x;
		this.y = player.y;
	}

	

}