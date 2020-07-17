var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,platform,platform2,platform3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	platformSprite = createSprite(400,655,110,10);
	platformSprite.shapeColor = color("red");

	platform2Sprite = createSprite(340,645,10,50);
	platform2Sprite.shapeColor = color("red");

	platform3Sprite = createSprite(450,645,10,50);
	platform3Sprite.shapeColor = color("red");

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);   
  }
  else if (keyCode === LEFT_ARROW) {
	helicopterSprite.x = helicopterSprite.x - 20;
	options = {x:-20,y:0}
	Matter.Body.translate(packageBody,options);
  }
  else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x = helicopterSprite.x + 20; 
	options = {x:20,y:0}
	Matter.Body.translate(packageBody,options);
  }
}



