const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var sudipengine, Sudipworld;
var ground, ball , box1 , pig1, box2,log1,bird,box3,box4,pig2,log3,log4,log2,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    Sudipengine = Engine.create();
    Sudipworld = Sudipengine.world;

    ground= new Ground(600,390,1200,20);
    box1= new Box(730,350,50,50);
    pig1=new Pig(800,350);
    box2= new Box(870,350,50,50);
    log1 = new Log(800,310,200,PI/2);


    box3= new Box(730,270,50,50);
    pig2=new Pig(800,270);
    box4= new Box(870,270,50,50);
    log2 = new Log(800,230,200,PI/2);

    box5= new Box(800,190,50,50);

    log3 = new Log(760,170,150,PI/7);

    log4 = new Log(840,170,150,-PI/7);

    bird = new Bird(300,170);





}

function draw(){
    background(0);
    Engine.update(Sudipengine);
   
    ground.display();
    
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    box3.display();
    log2.display();
    pig2.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();

}