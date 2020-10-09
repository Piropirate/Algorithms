var box1, box2;

function setup() {
  createCanvas(800,400);
 // boxX = createSprite(400, 200, 50, 50);
  //boxY = createSprite(200,200,100,10);
  box1 = createSprite(200,100,50,100);
  box1,shapeColor = "red";
  box1.velocityY = 2;
  box2 = createSprite(200,300,100,20);
  box2.shapeColor = "magenta";
  box2.velocityY = -2;
}

function draw() {
  background("black");  

  if(box1.x - box2.x < box1.width/2 + box2.width/2 && box2.x - box1.x < box1.width/2 + box2.width/2){
    box1.velocityX = box1.velocityX*(-1);
    box2.velocityX = box2.velocityX*(-1);
  }
  if(box1.y - box2.y < box1.height/2 + box2.height/2 && box2.y - box1.y < box1.height/2 +box2.height/2){
    box1.velocityY = box1.velocityY*(-1);
    box2.velocityY = box2.velocityY*(-1);
  }
  //console.log(boxX.width/2 + boxY.width/2);
  //textSize(20);
  //text(boxX.x, 100,100);
  //text(boxY.x, 200,300);
  //boxY.x = World.mouseX;
  //boxY.y = World.mouseY; 
  
  /*if(boxX.x - boxY.x < boxX.width/2 + boxY.width/2 && boxY.x - boxX.x < boxX.width/2 + boxY.width/2 && boxX.y - boxY.y < boxX.height/2 + boxY.height/2 && boxY.y - boxX.y < boxX.height/2 +boxY.height/2){
    boxX.shapeColor = "red";
    boxY.shapeColor = "blue";
  }else{
    boxX.shapeColor = "brown";
    boxY.shapeColor = "brown";
  }
*/
 
  drawSprites();
}