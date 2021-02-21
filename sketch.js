
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");

     if(ground.x < 0){ 
     ground.x = ground.width/2;
   }
  
  if(keyDown("space")&& monkey.y >150) {
      monkey.velocityY = -5;
  }

  monkey.velocityY = monkey.velocityY + 0.8 
  
  monkey.collide(ground);
 
  
  fruits();
  obstacles();
    
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityY = 0;
    obstacles.velocityX = 0;
    ground.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    
    
  }
  
  drawSprites(); 
  
  stroke("white");
  textSize(20);
  fill("Black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  
}

function fruits(){
  if(frameCount%80 === 0){
    banana = createSprite(400,200,40,10);
    banana.y = Math.round(random(200,260));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    bananaGroup.add(banana);
    banana.lifetime = 85;
  }
}

function obstacles(){
  if(frameCount%60 === 0){
    obstacle = createSprite(400,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 85;
    obstacleGroup.add(obstacle);
  }
}
