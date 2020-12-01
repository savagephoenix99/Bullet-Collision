var bullet
var wall 
var bulletWeight
var speed
var thickness 
var damage

function setup() {
  createCanvas(1000,400);
  bulletWeight=Math.round(random(30, 52))
  thickness=Math.round(random(22, 83))
  speed=Math.round(random(223, 321))
  wall=createSprite(700, 200, thickness, 200);
  wall.shapeColor= (80,80,80)
  bullet=createSprite(30, 200, 50, 10);
  bullet.shapeColor= "white"
  bullet.velocityX=speed/10
  }
 function draw() {
  background("turquoise");  
  if(touching(bullet, wall)){
    bullet.velocityX=0;
    damage=(speed*speed*bulletWeight*0.5)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<10){
      wall.shapeColor="lime"
    }
  }
  drawSprites();
  console.log(damage);

}