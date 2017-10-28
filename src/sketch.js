tall = 500;
wide = 500;

function setup() {
	enemy = new Enemy();
	player = new Player();
	createCanvas(wide, tall); 
	
}

function draw() {
	background(51);
	enemy.update();
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
