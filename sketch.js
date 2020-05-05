var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(1515, 730);
  ball=createSprite(60,200,100,100);
  ball.addImage (ballimg); 
  ball.velocityX=5;
  ball.velocityY = 6;
  paddle=createSprite(1500,200,100,500);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  
  ball.setCollider("circle",0,0,20);
  paddle.setCollider("rectangle",0,0,25,100);
  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  if(ball.isTouching(paddle)){
   explosion();
    ball.velocityX = ball.velocityX * (-1);
  }
  drawSprites();
  
}
function explosion(){
  rand2 = random(-5,-9);
  rand1 = random(5,9);
  rand = random(0,1);
 if(rand === 0){
   ball.velocityY = rand1;
}
  if(rand === 1){
    ball.velocityY = rand2;
  }}

