function setup() { 
  resizeCanvas(500, 500); } 
  var balls = []; 
  function mousePressed()
  { var ball = new Ball(); ball.position.x = mouseX; ball.position.y = mouseY; balls.push(ball); } function draw() { for(var i = 0; i < balls.length; i++) { balls[i].draw(); } } function Ball() { this.position = {x: 0, y: 250}; this.speed = {x:1, y:1}; this.draw = function() { this.position.x = this.position.x + this.speed.x; this.position.y = this.position.y + this.speed.y; ellipse(this.position.x, this.position.y, 10, 10); } }