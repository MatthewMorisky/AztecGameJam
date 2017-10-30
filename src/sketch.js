tall = 640;
wide = 1111;
let drawList = [];
let height = 350;
let lvl;

function setup() {
	player = new Player(80,500);
	//block = new Block();
	checkpoint0 = new Checkpoint(120,height-80, 0);
	ghost = new Ghost(800, 0);
	//torso = new Torso(480, height - 40);
	bone = new Bone(400,height - 30);
	//fallingBlock = new FallingBlock(600, height);
	scoreBoard = new ScoreBoard();
	dialog = new Dialog();

	lvl = new Cement(Bonelevel1);
	
	frameRate(60);
	createCanvas(wide, tall); 
	
}

function draw() {
	background(51);
	
	for(let i=0;i<drawList.length;i++) {
		drawList[i].update();
	}
	scoreBoard.draw();
	dialog.writeDialog();
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
		dialog.advanceDialog();
	}
	else if ((keyCode === 88) && (player.level >= 2)) { //X key
		player.armThrow();
	}
}
