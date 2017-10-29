
class ScoreBoard  
{
	
	constructor() 
	{
		this.score = 0;
		this.maxScore = 206;
	}
	draw()
	{

		fill(255);
		textFont("Verdana",18);
		text(`Bones Collected: ${this.score} / ${this.maxScore}`, 2, 17);
	}
}