
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var left
var right

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var balls_option={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	var ground_option={
		isStatic: true
	}

	//Create the Bodies Here.
    ball = Bodies.circle(150, 650, 20, balls_option)
	
	ground = Bodies.rectangle(400, 690, width, 15, ground_option)

	left = Bodies.rectangle(480, 650, 10, 110, ground_option)

	right = Bodies.rectangle(630, 650, 10, 110, ground_option)

	World.add(world,ball)
	World.add(world,ground)
	World.add(world,left)
	World.add(world,right)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ellipse ( ball.position.x, ball.position.y, 20)
  rect ( ground.position.x, ground.position.y, width, 15)
  rect ( left.position.x, left.position.y, 10, 110)
  rect ( right.position.x, right.position.y, 10, 110)

  Engine.update(engine);

  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode === 32) {
		Body.applyForce(ball,{x:0, y:0},{x:35, y:60})
	}
}

