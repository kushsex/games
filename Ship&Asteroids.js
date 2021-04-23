

function Rocket(owner) { 
		
		tRocket = new Sprite(scene, "Rocket.png", 5, 5);
		tRocket.owner = owner;
		tRocket.setBoundAction(DIE);
		
		tRocket.fire = function() { 
			this.setPosition(this.owner.x, this.owner.y);
			this.setMoveAngle(this.owner.rocket.getImgAngle());
			this.setSpeed(35);
			this.show();
		}//end fire
		return tRocket;
	}//end rocket

	function Ship(){
			tShip = new Sprite (scene, "Ship.png", 100, 100);
			tShip.maxSpeed = 15;
			tShip.minSpeed = -10;
			tShip.setSpeed (0);
			tShip.setAngle (0);
			tShip.rocket = new Rocket(tShip);
			tShip.checkKeys = function () { 
					if (keysDown [K_LEFT]) {
						this.changeAngleBy(15);
					}//end if key left
					if (keysDown [K_RIGHT]) {
						this.changeAngleBy(-15);
					}//end if key right
					if (keysDown [K_UP]) {
					this.changeSpeedBy(1);
					if (this.speed > this.maxSpeed){
						this.setSpeed(this.maxSpeed);
					}//end if max speed up
				}//end if up
				if (keysDown [K_DOWN]) {
					this.changeSpeedBy(-1);
					if (this.speed < this.minSpeed){
						this.setSpeed(this.minSpeed);
					}//end if
				}//end if down
					if (keysDown [K_SPACE]){
						this.rocket.fire();
					}//end rocker
					
			}//end check keys
			
			return tShip;
			
	}//end Ship function


		
		
		function Asteroid() {
			tAsteroid = new Sprite (scene, "Asteroid.png", 50, 50);
			tAsteroid.setSpeed (15);
			tAsteroid.run = function() {
				newDir = (Math.random() * 90) - 45;
				this.changeAngleBy(newDir);
			}//end run
			tAsteroid.reset = function() {
				newX = Math.random() * this.cWidth;
				newY = Math.random() * this.cHeight;;	
			}//end Asteroid.reset
			tAsteroid.reset();
			return tAsteroid;
		}//end Asteroid