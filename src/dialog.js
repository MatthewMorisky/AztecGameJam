class Dialog 
{
	
	constructor() 
	{
		this.dialogText = "";
	}

	
	writeDialog() 
	{
		fill(255);
		textFont("Verdana",18);
		text(this.dialogText, 2, 500);
	}
	setDialog(t)
	{
		this.dialogText = t;
	}
}
