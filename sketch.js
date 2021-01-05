
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	
	bobDiameter=40;

	bobObject1 = new bob(400,500,50);
	bobObject2 = new bob(330,500,50);
	bobObject3 = new bob(260,500,50);
	bobObject4 = new bob(470,500,50);
	bobObject5 = new bob(540,500,50);
	
	roof1 = new roof(400,50,800,150);


	rope1=new rope(bobObject1.body,roof1.body,0,0) 
	rope2=new rope(bobObject2.body,roof1.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roof1.body,-bobDiameter*2,0)
	rope4=new rope(bobObject4.body,roof1.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roof1.body,bobDiameter*2, 0)

	
	Engine.run(engine);
}


function draw() {
rectMode(CENTER)
  background(220);
  Engine.update(engine);

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roof1.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-45});

	}
}


