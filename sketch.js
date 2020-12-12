
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world
	paper = Engine.create();
	world = paper.create();

	ground = Engine.create();
	world = ground.create();

	c1 = Engine.create(20,200);
	c2 = Engine.create(100,20);
	c3 = Engine.create(100,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



