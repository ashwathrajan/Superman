var PLAY = 1;
var END = 0;
var gamestate = PLAY;
var superman, supermanImg;
var space,spaceImg;
var asteroid,asteroidImg;
var score;
var krGroup;
var gameoverImg,gameover;
function preload(){
  supermanImg = loadImage("superman.png");
  spaceImg = loadImage("1071539.jpg");
  asteroidImg = loadImage("kr.png");
  gameoverImg = loadImage("gameover.png");
}
function setup(){
  createCanvas(400,400);
  space = createSprite(400,400);
  space.addImage(spaceImg);
  space.scale = 3;
  space.velocityY = 5;
  superman = createSprite(100,100);
  superman.addImage(supermanImg);
  superman.scale = 0.3;
  krGroup = createGroup();
  gameover = createSprite(200,200);
  gameover.addImage(gameoverImg);
  gameover.scale = 2;
}

function draw(){
  background(0);
  if(gamestate === PLAY){
    gameover.visible = false; 
  if(space.y>400){
    space.y = 1;
  }
  if(keyDown("space"))
{
  superman.velocityY = -5;
}
  superman.velocityY = superman.velocityY + 0.8; 
  if(keyDown("a")){
    superman.x = superman.x - 2;
  }
  if(keyDown("d")){
    superman.x = superman.x + 2;
  }
    if(krGroup.isTouching(superman) || superman.y > 1000){
      gamestate = END;
    }
    spawnAst();
    drawSprites();
  }
  if(gamestate === END){
    background("white");
    gameover.visible = true;
    superman.visible = false;
    space.visible = false;
    krGroup.visible = false;
    asteroid.visible = false;
    drawSprites();
  }
}
function spawnAst(){
  if(frameCount % 250===0){
    asteroid = createSprite(200,-50,10,10);
    asteroid.addImage(asteroidImg);
    asteroid.scale = 0.1;
    asteroid.x = Math.round(random(100,300));
    asteroid.velocityY = 1;
    krGroup.add(asteroid);
  }
}