class Brick extends Object{
	constructor(_level, _x, _y){
		//atributes
		super("ressources/brick_level_" + _level + ".jpg");

		this.bitmap.setTransform((_x*64)+15, (_y*16)+50);

		this.level = _level;
	}

	new_brick(_level, _x, _y, stage){
		this.level_img = "ressources/brick_level_" + this.level + ".jpg";

		this.bitmap = new createjs.Bitmap(this.level_img);
		this.bitmap.setTransform(_x, _y);

		this.bitmap.image.onload = () => {
			this.bounds = this.bitmap.getTransformedBounds();
			this.loaded = true;
			//places the bitmap
		}

		stage.addChild(this.bitmap);
	}

	// takes the ball as argument and returns true if the brick is a level 0, else false
	ball_collision(ball, stage){
		if(ball.loaded && this.loaded && this.level>0){
			var rect = this.bitmap.getTransformedBounds().intersection(ball.bitmap.getTransformedBounds());
			if(rect != null){//intersection
				//deviate the ball
				if(rect.width >= rect.height){ //hit from top
					ball.directionY = -ball.directionY;
					if(ball.directionY > 0)
						ball.bitmap.y += (rect.height+1);
					else
						ball.bitmap.y -= (rect.height+1);
				}
				else{//hit from side
					ball.directionX = -ball.directionX;
					if(ball.directionX > 0)
						ball.bitmap.x += (rect.width+1);
					else
						ball.bitmap.x -= (rect.width+1);
				}			
				//throw pattern
				Pattern.new(this.level, this.bitmap.x, this.bitmap.y);
				this.level--;
				stage.removeChild(this.bitmap);
				Bonus.new_bonus(this.bitmap.x+20, this.bitmap.y, stage);
				this.loaded = false;
				WorldObject.mult += 1;
				WorldObject.score_change(10);
				if(this.level == 0){
					return true;
				}
				else{
					var _x = this.bitmap.x;
					var _y = this.bitmap.y;

					this.new_brick(this.level, _x, _y, stage); //loads the bitmap for the corresponding level
					return false;		
				}
			}
			else{
				return false;
			}
		}
	}
}