const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var world, engine,bar1,bar2,bar3,bar4,bar5,bar6,bar7;
var particles = [];
var plinkos = [];
var ground;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790);
  bar1 = new Bar(-5,790,20,500);
  bar2 = new Bar(75,790,15,500);
  bar3 = new Bar(155,790,15,500);
  bar4 = new Bar(235,790,15,500);
  bar5 = new Bar(315,790,15,500);
  bar6 = new Bar(395,790,15,500);
  bar7 = new Bar(475,790,15,500);

  for(var j = 40; j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
 
}


function draw() {
  background("black");  
 
 
  
  parts();

  ground.display();

  bar1.display();
  bar2.display();
  bar3.display();
  bar4.display();
  bar5.display();
  bar6.display();
  bar7.display();

  

  drawSprites();
}

 function parts(){
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }


 }