const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygonImg
var gameState = "onsling";
function preload(){
  polygonImg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    rectMode(CENTER);
  
    engine = Engine.create();
    world = engine.world;
   
    ground01 = new Ground(600,590,1200,20)
    polygon1 = Bodies.circle(200,200,50)
    World.add(world,polygon1)
    
    sling1 = new SlingShot(polygon1.body,{x:200,y:200})
    Engine.update(engine)
   
}

function draw(){
    background(200) 
   image(polygonImg,polygon1.position.x,polygon1.position.y,50,50) 
   polygon1.display();
   sling1.display();
   ground01.display();

}

function mouseDragged(){
   if (gameState!=="launched"){
        Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
}

function mouseReleased(){
   sling1.fly(); 
   gameState = "launched"
}

function keyPressed(){
   if ((keyCode === 32) && (gameState==="launched")){
      sling1.attach(polygon1.body)
      Matter.Body.setPosition(polygon1.body, { x: 200, y: 200 });
     
    gameState="onsling"
}
}





