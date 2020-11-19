
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy,boyImage;
var mango, mango2,mango3, mango4, mango5;
var ground;
var tree,treeImage;
var stone;
var hand;
var rope;

function preload()
{

treeImage=loadImage("images/tree.png")
boyImage=loadImage("images/boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	
	 ground=new Ground(400,600,10,10)

	 hand=createSprite(120,430,10,10);

	 boy=createSprite(200,510,500,600)
	boy.addImage("boy",boyImage)
	boy.scale=0.15



	 stone=new Stone(400,500,600,700)

	 mango=new Mango(50,400,300);
	 mango2=new Mango(100,400,300);
	 mango3=new Mango(150,400,300);
	 mango4=new Mango(200,400,300);
	 mango5=new Mango(250,400,300);


	  
	 rope=new Rope(stone.body,{x:120,y:420})

	 tree=createSprite(700,350,500,600);
	 tree.addImage("tree",treeImage)
	 tree.scale=0.4;
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
mango.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
 
ground.display();


boy.display();

stone.display();

tree.display();

rope.display();

fill("black")
text(mouseX+","+mouseY,mouseX,mouseY)

detectCollision(stone,mango)
detectCollision(stone,mango2)
detectCollision(stone,mango3)
detectCollision(stone,mango4)
detectCollision(stone,mango5)

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){

if(keyCode===32){

	
rope.attach(stone.body)


}


}


function detectCollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance<-lmango.r+lstone.r){


Matter.Body.setStatic(lmango.body,false)


	}






}