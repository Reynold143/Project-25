
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var dustbin1, dustbin2, dustbin3;
var ground 

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(10,640)
	dustbin1 = new Dustbin(810,660,140,10)
	dustbin2 = new Dustbin(745,600,10,140)
	dustbin3 = new Dustbin(868,600,10,140)
	ground = new Ground(0,680,2000,20)


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  //text("x:"+mouseX+", y:"+mouseY,mouseX,mouseY)

  
  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
	}
}



