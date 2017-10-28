tall = 500;
wide = 500;

function setup() {
	player = new Player();
	createCanvas(wide, tall); 
	frameRate(1);
	
}

function draw() {
	background(51);
	player.update();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		player.jump();

	}
	else if (keyCode === DOWN_ARROW) {

	}
	else if (keyCode === 32) { //Spacebar

	}
	else if (keyCode === 88) { //X key
		player.armThrow();
	}
}
