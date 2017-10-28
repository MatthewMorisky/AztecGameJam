class Hitbox {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.right = this.x;
		this.left = this.x + this.wdth;
		this.top = this.y;
		this.bottom = this.y + this.height;
	}
}