var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1, block2,block3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	block1 = new Block(400,650,200,20);
	block2 = new Block(290,610,20,100);
	block3 = new Block(510,610,20,100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);





	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	//Engine.run(engine);
  
}



function draw() {
  background(0);
  Engine.update(engine);
  keyPressed();
  rectMode(CENTER);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  groundSprite.display();
  block1.display();
  block2.display();
  block3.display();
  packageSprite.display();
  helicopterSprite.display();

  
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	   Matter.Body.setStatic(packageBody,false);
	   
   }
   }