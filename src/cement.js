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
			if(gp['-x'] < this.width / 40) {
				this.blocks.push(new Ground((gp['-x']*40) - this.scroll, gp['-y']*40));
			}
		});
		this.level.Platform.tile.forEach((gp) => {

			if(gp['-x'] < this.width / 40) {
				this.blocks.push(new Ground(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})
	}

	shift(delta) {
		this.scroll += delta;
		let i = 0;
		this.blocks.forEach((gp) => {
			gp.x -= delta;
			if(gp.x < -40 || gp.x > this.width + 40) {
				gp.delete();
				this.blocks.splice(i, 1);
			}
			i++;
		});

		this.level.Ground.tile.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (gp['-x'] == Math.floor(this.scroll / 40)
				|| gp['-x'] == Math.floor((this.scroll + this.width) / 40))) {
				this.blocks.push(new Ground(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})


		this.level.Platform.tile.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (gp['-x'] == Math.floor(this.scroll / 40)
				|| gp['-x'] == Math.floor((this.scroll + this.width) / 40))) {
				this.blocks.push(new Ground(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})

	}
}
