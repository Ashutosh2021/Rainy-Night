const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drop1;
var maxDrops=100;
var drop=[];
var createDrop;
var boy;
var thunder1;
var img1;
var img2;
var img3;
var img4;

function preload(){

    img1=loadImage("thunderbolt/1.png");
    img2=loadImage("thunderbolt/2.png");
    img3=loadImage("thunderbolt/3.png");
    img4=loadImage("thunderbolt/4.png");
}

function setup(){

    engine = Engine.create();
    world = engine.world;
  

    createCanvas(500,620);

    
    boy = new Umbrella(250,460);

    
   // drop1= new Drops(random(0,400),random(0,400));
  

   for(var i=0;i<maxDrops;i++){
    drop.push(new Drops(random(0,400),random(0,400)));
}


   

  
   
    
}

function draw(){

    Engine.update(engine);
    background(0);

    boy.display();
    
    thunder();
    
  
   
    

    

  
    
}  

function thunder(){

    var rand = Math.round(random(1,4));
    if(frameCount%10===0){
       var  thunderCreatedFrame = frameCount;
        thunder1=createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder1.addImage(img1);
            break;
            case 2: thunder1.addImage(img2);
            break;
            default:break;
        }

        thunder1.scale=random(0.3,0.6);
    }
}

