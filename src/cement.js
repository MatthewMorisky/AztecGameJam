class Cement {
	constructor(level) {
		this.level = level.level;
		this.scroll = 0;
		this.width = 1111;
		this.blocks = [];
		this.init();
	}
	
	init() {
		this.level.Ground.tile.forEach((gp) => {
			this.blocks.push(new Ground((gp['-x']*40) - this.scroll, gp['-y']*40));
		});
		this.level.Platform.tile.forEach((gp) => {
			this.blocks.push(new Ground((gp['-x']*40 - this.scroll, gp['-y']*40)));
		})
	}

	shift(delta) {
		this.scroll += delta;
		this.blocks.forEach((gp) => {
			gp.x -= delta;
		})
	}
}
