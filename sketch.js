
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



function preload(){

	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
bobObject1=new Bob(400,600,50,);
bobObject2=new Bob(500,600,50,);
bobObject3=new Bob(600,600,50,);
bobObject4=new Bob(700,600,50,);
bobObject5=new Bob(800,600,50,);
roof1=new Roof(600,151,600,50);
rope1=new Rope(bobObject1.body,roof1.body,-100*2,0)
rope2=new Rope(bobObject2.body,roof1.body,-50*2,0)
rope3=new Rope(bobObject3.body,roof1.body,0*2,0)
rope4=new Rope(bobObject4.body,roof1.body,50*2,0)
rope5=new Rope(bobObject5.body,roof1.body,100*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");





  roof1.display();
  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  Engine.update(engine)

  

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-2000,y:705});
  }
}



