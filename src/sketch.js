tall = 500;
wide = 500;
let drawList = [];

function setup() {
	player = new Player();
	//block = new Block();
	ground = new Ground(100,100);
	ground1 = new Ground(200,200);
	ground2 = new Ground(300,300);
	ground3 = new Ground(400,400);
	score = new ScoreBoard();
	createCanvas(wide, tall); 
	
}

function draw() {
	background(51);
	
	for(let i=0;i<drawList.length;i++) {
		drawList[i].update();
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW)
	 {
	 	if(player.jumpCount>0)
	 	{
		player.yspeed=-7;
		player.jumpCount--;
		}
	}
	else if (keyCode === DOWN_ARROW) {

	}
	else if (keyCode === 32) { //Spacebar

	}
	else if (keyCode === 88) { //X key
		player.armThrow();
	}
}
