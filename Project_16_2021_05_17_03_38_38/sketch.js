
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(100, 300, 20 ,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.15;

  ground = createSprite(400, 360, 900, 15);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
}


function draw() {
  background("white");
  drawSprites();
  
  
}

function food() {
  if(frameCount / 80){
  banana = createSprite(400, Math.rand(120,200), )

  }


}




