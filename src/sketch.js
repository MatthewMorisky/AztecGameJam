tall = 500;
wide = 500;
let drawList = [];

function setup() {
	enemy = new Enemy();
	player = new Player();
	drawList.push(player);
	createCanvas(wide, tall); 
	
}

function draw() {
	background(51);
<<<<<<< HEAD
	enemy.update();
	player.update();
	
=======
	for(let i=0;i<drawList.length;i++) {
		drawList[i].update();
	}
>>>>>>> 7d2d41d9c14d67e3bad94d613498c47e4dd1ebb0
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
