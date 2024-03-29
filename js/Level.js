class Level{

	constructor(cwidth, cheight){
		//atributes
		this.bricks = []; //array of bricks
		this.availableBricks = []; //array of bool for which brick can be hit
		this.bricks_on_width = 10;
		this.bricks_on_height = 10;
		this.audio;

		//liste/tableau de projectiles
		//////////
	}

	//returns the level created
	static loadLevels(cwidth, cheight, cpt_lvl){
		if (cpt_lvl==1)
			return Level.level1(cwidth, cheight);
		else if (cpt_lvl==2)
			return Level.level2(cwidth, cheight);
		else if (cpt_lvl==3)
			return Level.level3(cwidth, cheight);
		else if (cpt_lvl==4)
			return Level.level4(cwidth, cheight);
		else if (cpt_lvl==5)
			return Level.level5(cwidth, cheight);
	}


	


	

	




	

	//returns true if the level is over
	isOver(){
		return this.bricks.length == 0;
	}

	/////////////////////////////LEVELS
	//returns a Level

	static level1(cwidth, cheight){

		var level = new Level();
		level.bricks.push(new Brick(1, 2, 7));
		level.bricks.push(new Brick(2, 3, 6));
		level.bricks.push(new Brick(3, 4, 5));
		level.bricks.push(new Brick(4, 5, 4));
		level.bricks.push(new Brick(4, 6, 4));
		level.bricks.push(new Brick(3, 7, 5));
		level.bricks.push(new Brick(2, 8, 6));
		level.bricks.push(new Brick(1, 9, 7));
		for(var i=0; i<level.bricks.length; ++i){
			level.bricks[i].draw(stage);
			level.availableBricks.push(level.bricks[i]);
		}

		level.audio = new Audio("ressources/lvl1.mp3");
		level.audio.loop = true;
		level.audio.play();

		stage.update();
		return level;
	}

	static level2(cwidth, cheight){

		var level = new Level();
		level.bricks.push(new Brick(1, 0, 4));
		level.bricks.push(new Brick(2, 1, 4));
		level.bricks.push(new Brick(3, 2, 4));
		level.bricks.push(new Brick(4, 3, 4));
		level.bricks.push(new Brick(5, 4, 4));
		level.bricks.push(new Brick(6, 5, 4));
		level.bricks.push(new Brick(6, 6, 4));
		level.bricks.push(new Brick(5, 7, 4));
		level.bricks.push(new Brick(4, 8, 4));
		level.bricks.push(new Brick(3, 9, 4));
		level.bricks.push(new Brick(2, 10, 4));
		level.bricks.push(new Brick(1, 11, 4));
		for(var i=0; i<level.bricks.length; ++i){
			level.bricks[i].draw(stage);
			level.availableBricks.push(level.bricks[i]);
		}

		level.audio = new Audio("ressources/lvl2.mp3");
		level.audio.loop = true;
		level.audio.play();

		stage.update();
		return level;
	}


	static level3(cwidth, cheight){

		var level = new Level();
		level.bricks.push(new Brick(3, 5, 4));
		level.bricks.push(new Brick(3, 6, 4));
		level.bricks.push(new Brick(3, 4, 5));
		level.bricks.push(new Brick(3, 7, 5));
		level.bricks.push(new Brick(3, 4, 6));
		level.bricks.push(new Brick(3, 7, 6));
		level.bricks.push(new Brick(3, 3, 7));
		level.bricks.push(new Brick(3, 8, 7));
		level.bricks.push(new Brick(3, 3, 8));
		level.bricks.push(new Brick(3, 8, 8));
		level.bricks.push(new Brick(3, 4, 9));
		level.bricks.push(new Brick(3, 7, 9));
		level.bricks.push(new Brick(3, 4, 10));
		level.bricks.push(new Brick(3, 7, 10));
		level.bricks.push(new Brick(2, 5, 11));
		level.bricks.push(new Brick(2, 6, 11));

		level.bricks.push(new Brick(6, 0, 7));
		level.bricks.push(new Brick(6, 11, 7));

		level.bricks.push(new Brick(4, 5, 5));
		level.bricks.push(new Brick(4, 6, 5));
		level.bricks.push(new Brick(4, 5, 6));
		level.bricks.push(new Brick(4, 6, 6));
		level.bricks.push(new Brick(4, 5, 9));
		level.bricks.push(new Brick(4, 6, 9));
		level.bricks.push(new Brick(4, 5, 10));
		level.bricks.push(new Brick(4, 6, 10));
		level.bricks.push(new Brick(4, 4, 7));
		level.bricks.push(new Brick(4, 7, 7));
		level.bricks.push(new Brick(4, 4, 8));
		level.bricks.push(new Brick(4, 7, 8));
		level.bricks.push(new Brick(5, 5, 8));
		level.bricks.push(new Brick(5, 6, 8));
		level.bricks.push(new Brick(6, 5, 7));
		level.bricks.push(new Brick(6, 6, 7));
		for(var i=0; i<level.bricks.length; ++i){
			level.bricks[i].draw(stage);
			level.availableBricks.push(level.bricks[i]);
		}

		level.audio = new Audio("ressources/lvl3.mp3");
		level.audio.loop = true;
		level.audio.play();

		stage.update();
		return level;
		
	}


	static level4(cwidth, cheight){

	var level = new Level();
	level.bricks.push(new Brick(1, 0, 12));
	level.bricks.push(new Brick(2, 1, 11));
	level.bricks.push(new Brick(3, 2, 10));
	level.bricks.push(new Brick(4, 3, 9));
	level.bricks.push(new Brick(5, 4, 8));
	level.bricks.push(new Brick(6, 5, 7));
	level.bricks.push(new Brick(6, 6, 7));
	level.bricks.push(new Brick(5, 7, 8));
	level.bricks.push(new Brick(4, 8, 9));
	level.bricks.push(new Brick(3, 9, 10));
	level.bricks.push(new Brick(2, 10, 11));
	level.bricks.push(new Brick(1, 11, 12));

	level.bricks.push(new Brick(1, 0, 1));
	level.bricks.push(new Brick(2, 1, 2));
	level.bricks.push(new Brick(3, 2, 3));
	level.bricks.push(new Brick(4, 3, 4));
	level.bricks.push(new Brick(5, 4, 5));
	level.bricks.push(new Brick(6, 5, 6));
	level.bricks.push(new Brick(6, 6, 6));
	level.bricks.push(new Brick(5, 7, 5));
	level.bricks.push(new Brick(4, 8, 4));
	level.bricks.push(new Brick(3, 9, 3));
	level.bricks.push(new Brick(2, 10, 2));
	level.bricks.push(new Brick(1, 11, 1));
	for(var i=0; i<level.bricks.length; ++i){
		level.bricks[i].draw(stage);
		level.availableBricks.push(level.bricks[i]);
	}

	level.audio = new Audio("ressources/lvl4.mp3");
	level.audio.loop = true;
	level.audio.play();

	stage.update();
	return level;
}
	static level5(cwidth, cheight){

	var level = new Level();
	
	level.bricks.push(new Brick(1, 0, 3));
	level.bricks.push(new Brick(1, 1, 3));
	level.bricks.push(new Brick(1, 2, 3));
	level.bricks.push(new Brick(1, 3, 3));
	level.bricks.push(new Brick(1, 4, 3));
	level.bricks.push(new Brick(1, 5, 3));
	level.bricks.push(new Brick(1, 6, 3));
	level.bricks.push(new Brick(1, 7, 3));
	level.bricks.push(new Brick(1, 8, 3));
	level.bricks.push(new Brick(1, 9, 3));
	level.bricks.push(new Brick(1, 10, 3));
	level.bricks.push(new Brick(1, 11, 3));
	
	level.bricks.push(new Brick(1, 0, 4));
	level.bricks.push(new Brick(2, 1, 4));
	level.bricks.push(new Brick(2, 2, 4));
	level.bricks.push(new Brick(2, 3, 4));
	level.bricks.push(new Brick(2, 4, 4));
	level.bricks.push(new Brick(2, 5, 4));
	level.bricks.push(new Brick(2, 6, 4));
	level.bricks.push(new Brick(2, 7, 4));
	level.bricks.push(new Brick(2, 8, 4));
	level.bricks.push(new Brick(2, 9, 4));
	level.bricks.push(new Brick(2, 10, 4));
	level.bricks.push(new Brick(1, 11, 4));
	
	level.bricks.push(new Brick(1, 0, 5));
	level.bricks.push(new Brick(3, 2, 5));
	level.bricks.push(new Brick(3, 3, 5));
	level.bricks.push(new Brick(3, 4, 5));
	level.bricks.push(new Brick(3, 5, 5));
	level.bricks.push(new Brick(3, 6, 5));
	level.bricks.push(new Brick(3, 7, 5));
	level.bricks.push(new Brick(3, 8, 5));
	level.bricks.push(new Brick(3, 9, 5));
	level.bricks.push(new Brick(1, 11, 5));
	
	level.bricks.push(new Brick(1, 0, 6));
	level.bricks.push(new Brick(4, 3, 6));
	level.bricks.push(new Brick(4, 4, 6));
	level.bricks.push(new Brick(4, 5, 6));
	level.bricks.push(new Brick(4, 6, 6));
	level.bricks.push(new Brick(4, 7, 6));
	level.bricks.push(new Brick(4, 8, 6));
	level.bricks.push(new Brick(1, 11, 6));
	
	level.bricks.push(new Brick(1, 0, 7));
	level.bricks.push(new Brick(5, 4, 7));
	level.bricks.push(new Brick(5, 5, 7));
	level.bricks.push(new Brick(5, 6, 7));
	level.bricks.push(new Brick(5, 7, 7));
	level.bricks.push(new Brick(1, 11, 7));
	
	level.bricks.push(new Brick(1, 0, 8));
	level.bricks.push(new Brick(7, 2, 7));
	level.bricks.push(new Brick(8, 2, 8));
	level.bricks.push(new Brick(6, 5, 8));
	level.bricks.push(new Brick(6, 6, 8));
	level.bricks.push(new Brick(8, 9, 8));
	level.bricks.push(new Brick(7, 9, 7));
	level.bricks.push(new Brick(1, 11, 8));

	
	level.bricks.push(new Brick(1, 0, 13));
	level.bricks.push(new Brick(1, 1, 13));
	level.bricks.push(new Brick(1, 2, 13));
	level.bricks.push(new Brick(1, 3, 13));
	level.bricks.push(new Brick(1, 4, 13));
	level.bricks.push(new Brick(1, 5, 13));
	level.bricks.push(new Brick(1, 6, 13));
	level.bricks.push(new Brick(1, 7, 13));
	level.bricks.push(new Brick(1, 8, 13));
	level.bricks.push(new Brick(1, 9, 13));
	level.bricks.push(new Brick(1, 10, 13));
	level.bricks.push(new Brick(1, 11, 13));
	
	level.bricks.push(new Brick(1, 0, 12));
	level.bricks.push(new Brick(2, 1, 12));
	level.bricks.push(new Brick(2, 2, 12));
	level.bricks.push(new Brick(2, 3, 12));
	level.bricks.push(new Brick(2, 4, 12));
	level.bricks.push(new Brick(2, 5, 12));
	level.bricks.push(new Brick(2, 6, 12));
	level.bricks.push(new Brick(2, 7, 12));
	level.bricks.push(new Brick(2, 8, 12));
	level.bricks.push(new Brick(2, 9, 12));
	level.bricks.push(new Brick(2, 10, 12));
	level.bricks.push(new Brick(1, 11, 12));
	
	level.bricks.push(new Brick(1, 0, 11));
	level.bricks.push(new Brick(3, 2, 11));
	level.bricks.push(new Brick(3, 3, 11));
	level.bricks.push(new Brick(3, 4, 11));
	level.bricks.push(new Brick(3, 5, 11));
	level.bricks.push(new Brick(3, 6, 11));
	level.bricks.push(new Brick(3, 7, 11));
	level.bricks.push(new Brick(3, 8, 11));
	level.bricks.push(new Brick(3, 9, 11));
	level.bricks.push(new Brick(1, 11, 11));
	
	level.bricks.push(new Brick(1, 0, 10));
	level.bricks.push(new Brick(4, 3, 10));
	level.bricks.push(new Brick(4, 4, 10));
	level.bricks.push(new Brick(4, 5, 10));
	level.bricks.push(new Brick(4, 6, 10));
	level.bricks.push(new Brick(4, 7, 10));
	level.bricks.push(new Brick(4, 8, 10));
	level.bricks.push(new Brick(1, 11, 10));
	
	level.bricks.push(new Brick(1, 0, 9));
	level.bricks.push(new Brick(5, 4, 9));
	level.bricks.push(new Brick(5, 5, 9));
	level.bricks.push(new Brick(5, 6, 9));
	level.bricks.push(new Brick(5, 7, 9));
	level.bricks.push(new Brick(1, 11, 9));

	for(var i=0; i<level.bricks.length; ++i){
		level.bricks[i].draw(stage);
		level.availableBricks.push(level.bricks[i]);
	}

	level.audio = new Audio("ressources/lvl5.mp3");
	level.audio.loop = true;
	level.audio.play();

	stage.update();
	return level;
}

	///////////////////////////////////
}