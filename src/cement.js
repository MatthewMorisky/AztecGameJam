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
				this.blocks.push(new StaticBlock(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})
		this.level.Stone.tile.forEach((gp) => {
			if(gp['-x'] < this.width / 40) {
				this.blocks.push(new Tombstone(gp['-x']*40 - this.scroll, gp['-y']*40));
			}

		})
		this.level.Breakaway.tile.forEach((gp) => {
			if(gp['-x'] < this.width / 120) {
				this.blocks.push(new FallingBlock(gp['-x']*120 - this.scroll, gp['-y']*40));
			}

		})
		this.level.Breaker.tile.forEach((gp) => {
			if(gp['-x'] < this.width / 40) {
				this.blocks.push(new BreakBlock(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})

		this.level.objects.Fireball.forEach((gp) => {
			if(gp['-x'] < this.width) {
				new Fireball(gp['-x'] - this.scroll, gp['-y']);
			}
		})

		this.level.objects.BoneCollectable.forEach((gp) => {
			if(gp['-x'] < this.width) {
				this.blocks.push(new Bone(gp['-x'] - this.scroll, gp['-y']));
			}
		})
		this.level.objects.Torso.forEach((gp) => {
			if(gp['-x'] < this.width) {
				this.blocks.push(new Torso(gp['-x'] - this.scroll, gp['-y']));
			}
		})
		
	}

	shift(delta) {
		this.scroll += delta;
		bg.x -= delta / 2;
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
				this.blocks.push(new StaticBlock(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})

		this.level.Stone.tile.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (gp['-x'] == Math.floor(this.scroll / 40)
				|| gp['-x'] == Math.floor((this.scroll + this.width) / 40))) {
				this.blocks.push(new Tombstone(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})

		this.level.Breakaway.tile.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (gp['-x'] == Math.floor(this.scroll / 120)
				|| gp['-x'] == Math.floor((this.scroll + this.width) / 120))) {
				this.blocks.push(new FallingBlock(gp['-x']*120 - this.scroll, gp['-y']*40));
			}
		})

		this.level.Breaker.tile.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (gp['-x'] == Math.floor(this.scroll / 40)
				|| gp['-x'] == Math.floor((this.scroll + this.width) / 40))) {
				this.blocks.push(new BreakBlock(gp['-x']*40 - this.scroll, gp['-y']*40));
			}
		})

		this.level.objects.Fireball.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (Math.floor(gp['-x'] / 40) == Math.floor(this.scroll / 40)
				|| Math.floor(gp['-x'] / 40) == Math.floor((this.scroll + this.width) / 40))) {
				this.blocks.push(new Fireball(gp['-x'] - this.scroll, 1*gp['-y']));
			}
		})

		this.level.objects.BoneCollectable.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (Math.floor(gp['-x'] / 40) == Math.floor(this.scroll / 40)
				|| Math.floor(gp['-x'] / 40) == Math.floor((this.scroll + this.width) / 40))) {
				this.blocks.push(new Bone(gp['-x'] - this.scroll, 1*gp['-y']));
			}
		})

		this.level.objects.Torso.forEach((gp) => {
			if(this.scroll % 40 == 0
				&& (Math.floor(gp['-x'] / 40) == Math.floor(this.scroll / 40)
				|| Math.floor(gp['-x'] / 40) == Math.floor((this.scroll + this.width) / 40))) {
				this.blocks.push(new Torso(gp['-x'] - this.scroll, 1*gp['-y']));
			}
		})

	}
}
