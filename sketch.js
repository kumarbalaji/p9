var box;
function setup() {
  createCanvas(1600,787);
}

function draw() 
{

  if(keyIsDown(UP_ARROW)){
   background('pink');
  }
  if(keyIsDown(DOWN_ARROW)){
    background('blue');
  }
  if(keyIsDown(LEFT_ARROW)){
    background('yellow');
  }
  if(keyIsDown(RIGHT_ARROW)){
    background('red');
  }
drawSprites();
}




