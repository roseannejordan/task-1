function setup() {
  resizeCanvas(500, 500);
  background(0);
}

function drawStars() {
  stroke(255);
  for(var i = 0; i < 500; i++)  {
    point(random(width), random(0, height));
    
  }
}

function mouseClicked() {
  drawStars();
  
  }