
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paper,ground;
var world;


function setup() {
	createCanvas(1320, 610);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(200,455,70);
	ground=new Ground(width/2,610,width,20);
	dustbin=new Dustbin(1200,590);
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(101, 156, 138);
 
  
  paper.display();
  ground.display();
  dustbin.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:285,y:-285})
	}
	}