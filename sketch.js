
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,400);
  
  monkey=createSprite(100,330,10,10);
  monkey.addAnimation("running",monkey_running)
   monkey. scale=0.1;
  
  
  ground=createSprite(400,350,950,10)
    ground.x = ground.width/2;
  ground.velocityX=-4;
  
  
  
    foodGroup=createGroup();
  obstacleGroup=createGroup();
 
}


function draw() {
  background("white");
  
  
  
// console.log(ground.x)

  
  if(keyDown("space")&&monkey.y>=220){
    monkey.velocityY=-12;
   
  }
   //  console.log(monkey.y)

    monkey.velocityY = monkey.velocityY + 0.8
    
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival:"+survivalTime,100,50);
  
  ground.velocityX=-4;
   if (ground.x < 400){
      ground.x = ground.width/2;
    }
  
  banana();
  
  obstacle();
    
  
  drawSprites();
}




function banana(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,110,40,10);
   banana.y = Math.round(random(70,110));
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    banana.lifetime=170;
   foodGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount%200==0){
    var obstacle=createSprite(600,330,10,10)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX =-3;
    obstacle.lifetime=170;
    obstacleGroup.add(obstacle);
  }
}

