function setup() {
  resizeCanvas(500,500)
}

var ball = {
  x: 0,
  y: 250,
  draw: function() {
    this.x = this.x + 1;
    this.y = this.y +1;
    ellipse(this.x, this.y, 10,10);

  }
};

function draw() {
  ball.draw();
}

