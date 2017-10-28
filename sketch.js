tall = 500;
wide = 500;

function setup() {
	player = new Player();
	createCanvas(wide, tall); 
}

function draw() {
	background(51);
	player.update();
	player.draw();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		player.jump();
	}
	else if (keyCode === DOWN_ARROW) {
		
	}
	else if (keyCode === LEFT_ARROW) {

	}
	else if (keyCode === RIGHT_ARROW) {

	}
	else if (keyCode === 32) { //Spacebar
		
	}
}

function keyReleased() {
	
}