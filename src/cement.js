class Cement {
	constructor(level) {
		this.load(level);
	}

	load(level) {
		fetch(level, (resp) => {
			console.log(resp);
		});
	}
}