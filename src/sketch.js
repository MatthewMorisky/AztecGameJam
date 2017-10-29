tall = 640;
wide = 1111;
let drawList = [];

function setup() {
	player = new Player(100,80);
	//block = new Block();
	ground = new Ground(100,200);
	ground1 = new Ground(180,200);
	ground2 = new Ground(260,200);
	ground3 = new Ground(340,200);
	bone = new Bone(500,100)
	scoreBoard = new ScoreBoard();
	

	createCanvas(wide, tall); 
	
}

function draw() {
	background(51);
	
	for(let i=0;i<drawList.length;i++) {
		drawList[i].update();
	}
	scoreBoard.draw();
}

function keyPressed() {
	if (keyCode === UP_ARROW)
	 {
	 	if((player.jumpCount>0))
	 	{
		player.yspeed=-8;
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
