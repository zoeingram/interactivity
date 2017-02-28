var firstDot;
function setup() {
    createCanvas(600, 600);
    firstDot = new Dot();
}

function draw() {
    noStroke();
    background(220);
    firstDot.display();
    firstDot.dance();
    firstDot.jump();
}

var Dot = function() {
  this.x = 100;
  this.amplitude = 100;
  this.centerY = 300;
  this.speed = 0.5;
  this.radius = 50;
  this.direction = 1;
  this.angle = 0;
  this.smallerR = 100;
  this.smallSpeed = 0.05;
  this.speedA = 0.1;
  this.y = this.centerY + sin(this.angle) * this.amplitude;




  if (this.speed > 0) {
      this.speed = this.speed - 0.1;
  }


  this.display = function(){
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    if (this.x < this.radius || this.x > this.width - this.radius) {
        this.direction = -this.direction;
    }
  }
  this.dance = function(){
    this.smallerX = this.x + this.smallerR * cos(this.angle);
    this.smallerY = this.y + this.smallerR * sin(this.angle);
    this.angle = this.angle + this.speedA;
    this.x = this.x + (this.speed * this.direction);
  }

  this.jump = function(){
      if (mouseIsPressed) {
          if (overCircle(this.x, this.y, this.radius)) {
              fill("red");
              this.speed = 5.0;
              this.speed++;
              this.radius--;

              if (this.radius < 5) {
                  this.radius = 50;
              }
              this.x = this.x + random(-this.speed, this.speed);
              this.y = this.y + random(-this.speed, this.speed);
          }
      }
  }
}

function overCircle(x, y, radius) {
    if (dist(x, y, mouseX, mouseY) < radius) {
        return true;
    } else {
        return false;
    }
}
