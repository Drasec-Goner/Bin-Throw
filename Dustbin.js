class Dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;

		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbin.png")

		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display(){
			var posB=this.bottomBody.position;
			var posL=this.leftWallBody.position;
			var posR=this.rightWallBody.position;

			push()
			translate(posL.x, posL.y);
			rectMode(CENTER)
			fill(255)
			rotate(this.angle)
			pop()

			push()
			translate(posR.x, posR.y);
			rectMode(CENTER)
			fill(255)
			rotate(-1*this.angle)
			pop()

			push()
			translate(posB.x, posB.y+10);
			rectMode(CENTER)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}