tall = 640;
wide = 1111;
let drawList = [];
let height = 350

function setup() {
	player = new Player(80,height - 80);
	//block = new Block();
	ground = new Ground(80,height);
	//ground1 = new Ground(120,height);
	ground2 = new Ground(160,height);
	//ground3 = new Ground(200,height);
	ground4 = new Ground(240,height);
	//ground5 = new Ground(280,height);
	ground6 = new Ground(320,height);
	ground7 = new Ground(360,height);
	ground8 = new Ground(400,height);
	ground9 = new Ground(440,height);
	ground0 = new Ground(480,height);
	fallingBlock = new FallingBlock(600, height);
	bone = new Bone(400,height - 30)
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
	else if ((keyCode === 88) && (player.level >= 2)) { //X key
		player.armThrow();
	}
}
