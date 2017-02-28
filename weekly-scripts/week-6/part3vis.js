var a, b, c, d;

var g1, g2;
var rocks;
var rockstop;
var cact;
var flower;
var section;

function preload(){
  rocks = loadImage("/weekly-scripts/week-6/images/rocks.png");
  rockstop = loadImage("/weekly-scripts/week-6/images/rockstop.png");
  cact = loadImage("/weekly-scripts/week-6/images/cactus.png");
  flower = loadImage("/weekly-scripts/week-6/images/flower.png");
  section = loadImage("/weekly-scripts/week-6/images/section.png");
  one = loadImage("/weekly-scripts/week-6/images/one.png");
  two = loadImage("/weekly-scripts/week-6/images/two.png");
  three = loadImage("/weekly-scripts/week-6/images/three.png");
}

function setup(){
  createCanvas(600, 600);
  a = new Cactus(0, 0);
  b = new Cactus(100, 100);
  c = new Cactus(200, -50);
  d = new Cactus(400, 0);
  var c1  = color(255, 198, 140);
  var c2  = color(0, 198, 140);
   g1 = color(213, 107, 255);
   g2 = color(213, 107, 0);
   g3 = color("#60783f");

}

function draw(){
  background(255);
  image(rocks, 0, 0);


  setGradient(0, 0, 600, 600, g1, g2);
  image(rockstop, 0, 0);
  a.display();


}

var Cactus = function(shiftX, shiftY, size){

  this.display = function(){
      push();
      translate(shiftX, shiftY);
        image(one, 0, 200);
        scale(0.5, 0.5);
        image(flower, 150, 400);
      pop();
    }

}


function mouseClicked() {
  var flowerPosX = 102;
  var flowerPosY = 300;
}

function setGradient(x, y, w, h, g2, g1) {
  noFill();
    for (var i = y; i <= y+h; i+=3) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(g1, g2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
}


function overRect(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}
