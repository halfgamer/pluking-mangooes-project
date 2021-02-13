
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject,rockchain;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,35);
	mango2= new mango(1200,200,37);
	mango3=new mango(1000,250,35);
	mango4=new mango(950,170,40);
	mango5=new mango(1100,180,40)


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj= new ROCK(240,430,30)
	rockchain=new CHAIN(stoneObj.body,{x:240, y:427})
	
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stoneObj.display();
rockchain.display();
  groundObject.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX , y :mouseY})
}
function mouseReleased(){
	rockchain.detatch();    
	}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

