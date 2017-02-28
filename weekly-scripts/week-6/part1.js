var x = 100;
var amplitude = 40;
var centerY = 300;
var speed = 0.5;
var radius = 50;
var direction  = 1;
var angle = 0;
var smallerR = 100;
var smallSpeed = 0.05;
var speedA = 0.1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  background(220);
  var y = centerY + sin(angle) * amplitude;
  ellipse(x, y, radius*2, radius*2);
  angle = angle + speedA;

  x = x + (speed * direction);
	if (x < radius || x > width-radius) {
    direction = -direction;
  }

  var smallerX = x + smallerR * cos(angle);
	var smallerY = y + smallerR * sin(angle);


  if (mouseIsPressed) {
    if (overCircle(x, y, radius)) {
      fill("red");
      speed = 5.0;
      speed++;
      radius-=2;
      for(var i = 0; i < 10; i++){
      	ellipse(smallerX, smallerY, 10, 10);
      	angle = angle + smallSpeed;
        smallerX++;
        smallerY++;
      }

      if(radius < 20){
      	radius = 500;
      }
      x = x + random(-speed, speed);
      y = y + random(-speed, speed);
    }
  }
    if(radius < 45){
              text("Stop poking him!", 50, 50);
}
  if (speed > 0) {
    speed = speed - 0.1;
  }
}

function overCircle(x, y, radius) {
	if (dist(x, y, mouseX, mouseY) < radius) {
	  return true;
	} else {
	  return false;
	}
}
