var ball;
var bat;

function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
  ball.shapeColor = "red";
  
  bat = createSprite(400, 300, 50, 50);
  bat.shapeColor = "yellow";
}

function draw() {
  background("white"); 
  
  //making the ball move with mouse;
  ball.y = World.mouseY;
  ball.x = World.mouseX;

  if(isTouching()){
    text("hello", 200, 200);
    bat.shapeColor = "black";
  } else{
    bat.shapeColor = "yellow";
  }

  drawSprites();
}

function isTouching(){
  if(ball.x - bat.x <= ball.width/2 + bat.width/2 && bat.x - ball.x <= ball.width/2 + bat.width/2 && 
    ball.y - bat.y <= ball.height/2 + bat.height/2 && bat.y - ball.y <= ball.height/2 + bat.height/2){
    return true;

  }

  

  else{
  return false;
  }
}