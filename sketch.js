///////////////////////////////////Code Started///////////////////////////

//Created const and set the value
const Engine = Matter.Engine;

//Created const and set the value
const World = Matter.World;

//Created const and set the value
const Bodies = Matter.Bodies;

//Created const and set the value
const Constraint = Matter.Constraint;

//Created variables
var engine, world;

//Created variables
var holder, ball, ground;

//Created variables
var stand1, stand2;

//Created variable
var ball;

//Created variable
var slingShot;

//Created variable
var polygon_img;

//Image-storage function
function preload() {

  //Loaded img inside the variable
  polygon_img = loadImage("polygon.png");

}

//Pre-defined function:- function setup
function setup() {

  //Created canvas
  createCanvas(900, 400);

  //Created Engine inside engine
  engine = Engine.create();

  //Added world to engine
  world = engine.world;

  //Run the engine
  Engine.run(engine);

  //Created an object from class
  ground = new Ground();

  //Created an object from class
  stand1 = new Stand(390, 300, 250, 10);

  //Created an object from class
  stand2 = new Stand(710, 200, 200, 10);

  //Created an object from class
  block1 = new Block(300, 275, 30, 40);

  //Created an object from class
  block2 = new Block(330, 275, 30, 40);

  //Created an object from class
  block3 = new Block(360, 275, 30, 40);

  //Created an object from class
  block4 = new Block(390, 275, 30, 40);

  //Created an object from class
  block5 = new Block(420, 275, 30, 40);

  //Created an object from class
  block6 = new Block(450, 275, 30, 40);

  //Created an object from class
  block7 = new Block(480, 275, 30, 40);

  //Created an object from class
  block8 = new Block(330, 235, 30, 40);

  //Created an object from class
  block9 = new Block(360, 235, 30, 40);

  //Created an object from class
  block10 = new Block(390, 235, 30, 40);

  //Created an object from class
  block11 = new Block(420, 235, 30, 40);

  //Created an object from class
  block12 = new Block(450, 235, 30, 40);

  //Created an object from class
  block13 = new Block(360, 195, 30, 40);

  //Created an object from class
  block14 = new Block(390, 195, 30, 40);

  //Created an object from class
  block15 = new Block(420, 195, 30, 40);

  //Created an object from class
  block16 = new Block(390, 155, 30, 40);

  //Created an object from class
  block17 = new Block(770, 50, 30, 40)

  //Created an object from class
  block22 = new Block(740, 50, 30, 40)

  //Created an object from class
  block23 = new Block(710, 50, 30, 40)

  //Created an object from class
  block24 = new Block(680, 50, 30, 40)

  //Created an object from class
  block21 = new Block(650, 50, 30, 40)

  //Created an object from class
  block18 = new Block(740, 75, 30, 40)

  //Created an object from class
  block19 = new Block(710, 75, 30, 40)

  //Created an object from class
  block20 = new Block(680, 75, 30, 40)

  //Created an object from class
  block25 = new Block(710, 8, 30, 40)

  //Created an object from class
  polygon = new Polygon(50, 200, 50)

  //Created an object from class
  slingshot = new SlingShot(polygon.body, { x: 100, y: 200 })

}

//Pre-defined function:- draw function (repeat)
function draw() {

  //Added background color through rgb
  background(56, 44, 44);

  //Drawn Sprites
  drawSprites()

  //Set text size to 20 pixels
  textSize(20)

  //Set text with coordinates
  text(`Drag the Hexagonal Stone and Release it ,launch it towards the blocks`, width / 2 - 350, 40)

  //Fill the color of below objects as "lightyellow"
  fill("lightyellow");

  //Displayed the object
  ground.display();

  //Displayed the object
  stand1.display();

  //Set stroke weight as 2 pixels
  strokeWeight(2);

  //Set stroke color as 15 (color code)
  stroke(15);

  //Fill the color of below objects as "skyblue"
  fill("skyblue");

  //Displayed the object
  block1.display();

  //Displayed the object
  block2.display();

  //Displayed the object
  block3.display();

  //Displayed the object
  block4.display();

  //Displayed the object
  block5.display();

  //Displayed the object
  block6.display();

  //Displayed the object
  block7.display();

  //Fill the color of below objects as "pink"
  fill("pink");

  //Displayed the object
  block8.display();

  //Displayed the object
  block9.display();

  //Displayed the object
  block10.display();

  //Displayed the object
  block11.display();

  //Displayed the object
  block12.display();

  //Fill the color of below objects as "turquoise"
  fill("turquoise");

  //Displayed the object
  block13.display();

  //Displayed the object
  block14.display();

  //Displayed the object
  block15.display();

  //Fill the color of below objects as "skyblue"
  fill("skyblue");

  //Displayed the object
  block16.display();

  //Displayed the object
  block21.display()

  //Displayed the object
  block17.display()

  //Displayed the object
  block18.display()

  //Displayed the object
  block19.display()

  //Displayed the object
  block20.display()

  //Fill the color of below objects as "turquoise"
  fill("turquoise");

  //Displayed the object
  block22.display()

  //Displayed the object
  block23.display()

  //Displayed the object
  block24.display()

  //Fill the color of below objects as "pink"
  fill("pink")

  //Displayed the object
  block25.display()

  //Fill the color of below objects as  (188,67,67)
  fill(188, 67, 67)

  //Set the stroke color of below objects as  (188,67,67)
  stroke(188, 67, 67)

  //Displayed the object
  stand2.display()

  //Displayed the object
  polygon.display()

  //Displayed the object
  slingshot.display()

}

//Pre-defined function :- mouseDragged
function mouseDragged() {

  //Set the position of matter body as dragged the body mentioned
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })

}

//Pre-defined function :- mouseReleased
function mouseReleased() {

  //Added function fly of slingshot object
  slingshot.fly()

}

///////////////////////////////////Code Ended///////////////////////////