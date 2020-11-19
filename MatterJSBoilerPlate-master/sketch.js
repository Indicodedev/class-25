
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, Paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,700,20);

	dustbin1 = new Dustbin1(550,660,10,65);
	dustbin2 = new Dustbin1(640,660,10,65);
	dustbin3 = new Dustbin1(595,685,80,10);

	Paper1 = new Paper(250,300,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  image

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  Paper1.display();
  
  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
     if(keyCode === UP_ARROW){
        Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:1,y:-1});

	 }
	
}



