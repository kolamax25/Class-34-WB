const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var WB, chain, floor;
var b1;
var b2, b3;
var b4, b5, b6;

function setup() {
  createCanvas(1400,900);
  engine = Engine.create();
    world = engine.world;
  

  WB = new Ball(400, 200, 75) 
  floor = new Ground(700, 875, 2000, 50)
  chain = new Chain(WB.body, {x: 762, y: 649})
  b1 = new Box(1200, 100, 50, 50)
  b2 = new Box(1200, 100, 50, 50)
  b3 = new Box(1200, 100, 50, 50)
  b4 = new Box(1200, 100, 50, 50)
  b5 = new Box(1200, 100, 50, 50)
  b6 = new Box(1200, 100, 50, 50)
}

function draw() {
  background(0,255,255);  
  Engine.update(engine);
  WB.display();
  floor.display();
  chain.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();

  if(mouseIsPressed){
    
    Matter.Body.setPosition(WB.body, {x: mouseX, y:mouseY});
    
  }

}
