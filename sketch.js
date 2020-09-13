var fixedRect,movingRect;
var game1,game2,game3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  game1 = createSprite(100,100,50,50)
  game2 = createSprite(200,100,50,50)
  game3 = createSprite(300,100,50,50)

  movingRect.velocityY = -5;
  fixedRect.velocityY  = 5;

}


function draw() {
  background(0); 
  bounceOff(movingRect,fixedRect)
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
if (isTouching(movingRect,game2)){
  game2.shapeColor = "green";
  movingRect.shapeColor = "green";

} else{
  game2.shapeColor = "red";
  movingRect.shapeColor = "red";
}

  
  drawSprites();
}
