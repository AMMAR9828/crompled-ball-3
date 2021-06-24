const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var papper,ground;
var greenbin

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground (600,395,1200,20)
	papper = new Papper(40,40,20)
	greenbin = new Dustbin(1000,390);

	slingshotObj = new SlingShot(papper.body,{x:200,y:50})
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("lightBlue");


  ground.display();
  papper.display();
  greenbin.display();
  slingshotObj.display();

  drawSprites();
	
 
}
function mouseDragged(){
	Matter.Body.setPosition(papper.body,{x:mouseX, y:mouseY})	
}
function mouseReleased(){
	slingshotObj.fly()
}


