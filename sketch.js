var fixedRect, movingRect
var gameObject1, gameObject2

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(200, 200, 50, 80); 
  fixedRect.shapeColor = ("green"); 
  movingRect = createSprite(400, 200, 80, 30); 
  movingRect.shapeColor = ("green");
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = ("green");
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = ("green");
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,gameObject2)){
   movingRect.shapeColor = "pink";
   gameObject2.shapeColor = "pink";
 }
else{
  movingRect.shapeColor = "green"
  gameObject2.shapeColor = "green"
}

if (isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "pink";
  gameObject1.shapeColor = "pink";
}
else{
 movingRect.shapeColor = "green"
 gameObject1.shapeColor = "green"
}








  drawSprites();
}


















