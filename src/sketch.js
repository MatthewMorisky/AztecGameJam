tall = 500;
wide = 500;
let drawList = [];

function setup() {
	player = new Player();
	block = new Block();
	createCanvas(wide, tall); 
	
}

function draw() {
	background(51);
	
	for(let i=0;i<drawList.length;i++) {
		drawList[i].update();
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	}
	else if (keyCode === DOWN_ARROW) {

	}
	else if (keyCode === 32) { //Spacebar

	}
	else if (keyCode === 88) { //X key
		player.armThrow();
	}
}
