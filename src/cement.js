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
			if(gp.x < this.width / 40) {
				this.blocks.push(new Ground((gp['-x']*40) - this.scroll, gp['-y']*40));
			}
		});
		this.level.Platform.tile.forEach((gp) => {
			if(gp.x < this.width / 40) {
				this.blocks.push(new Ground((gp['-x']*40 - this.scroll, gp['-y']*40)));
			}
		})
	}

	shift(delta) {
		this.scroll += delta;
		this.blocks.forEach((gp, i) => {
			gp.x -= delta;
			if(gp.x < this.scroll || gp.x > this.scroll + this.width) {
				this.blocks.splice(i, 1);
			}
		});
	}
}
