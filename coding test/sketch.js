function setup() {
  resizeCanvas (500, 500);
  background(0);
  
}

function draw() {
  
}

function sayWord(word) {
  console.log(word);
}


function drawPlanet (x, y, radius) {
  ellipse (x, y, radius, radius);
}

function drawRings (x, y, radius) {
  // draw some rings
}

function drawMoons (x, y) {
  // draw some moons...
}
function mouseClicked() {
  var r = random(20, 150);
  drawPlanet (mouseX, mouseY, r);
  drawRings (mouseX, mouseY);
  drawMoons (mouseX, mouseY);
}
