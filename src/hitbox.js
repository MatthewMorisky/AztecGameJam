class Hitbox {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;

		this.left = this.x;
		this.right = this.x + this.width;
		this.top = this.y;
		this.bottom = this.y + this.height;
	}
}