
var ship, ship_running;
var seaImage;
function preload() {
  ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png","ship-4.png");
 seaImage = loadImage("sea.png");
}
function setup() {
  createCanvas(1200,750);

  sea=createSprite(628,259,4000,20);
  sea.addImage("sea",seaImage);
  sea.scale=0.3;


ship = createSprite(650,240,20,50);
ship.addAnimation("running", ship_running);
ship.scale = 0.3;


}
function draw() {
background("white");
sea.velocityX=2;


drawSprites();
}
