
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
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 20);


	Engine.run(engine);

	trashcan1 = new Trashcan(width/2-100, 600, 20, 200);
	trashcan2 = new Trashcan(width/2+100, 600, 20, 200);
	trashcan3 = new Trashcan(width/2, 650, 180, 20)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();

  if(keyCode === 38) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-20})
  }

  drawSprites();
 
}



