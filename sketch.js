
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(300,350,20);
	bob2=new Bob(340,350,20);
	bob3=new Bob(380,350,20);
	bob4=new Bob(420,350,20);
	bob5=new Bob(460,350,20);

	ground=new Ground(400,100,400,20)
  rope1=new Ropec(bob1.body,ground.body,-80,0);
  rope2=new Ropec(bob2.body,ground.body,-40,0);
  rope3=new Ropec(bob3.body,ground.body,0,0);
  rope4=new Ropec(bob4.body,ground.body,40,0);
  rope5=new Ropec(bob5.body,ground.body,80,0);
  

	Engine.run(engine);
  
}


function draw() {
  background("grey");
 Engine.update(engine)


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
   
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
  ground.display()


  drawSprites();
}

function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:10})
  
}
}


