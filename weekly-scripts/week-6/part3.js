var a, b, c, d;

var g1, g2;
var rocks;
var rockstop;

function preload(){
  rocks = loadImage("/weekly-scripts/week-6/images/rocks.png");
  rockstop = loadImage("/weekly-scripts/week-6/images/rockstop.png");

}

function setup(){
  createCanvas(600, 600);
  // a = new Cactus(0, 0);
  // b = new Cactus(100, -100);
  // c = new Cactus(200, -50);
  // d = new Cactus(400, -200);
  var c1  = color(255, 198, 140);
  var c2  = color(0, 198, 140);
   g1 = color(213, 107, 255);
   g2 = color(213, 107, 0);

}

function draw(){
  background(255);
  image(rocks, 0, 0);

  setGradient(0, 0, 600, 600, g1, g2);
  image(rockstop, 0, 0);

  // a.display();
  // b.display();
  // c.display();
  // d.display();



}

// var Cactus = function(shiftX, shiftY){
//   this.display = function(){
//     push();
//     translate(shiftX, shiftY);
//     triangle(91, 326, 76, 515, 112, 521);
//     triangle(69, 297, 71, 392, 96, 433);
//     triangle(119, 286, 117, 382, 82, 422);
//     pop();
//   }
// }


function setGradient(x, y, w, h, g2, g1) {
  noFill();
    for (var i = y; i <= y+h; i+=3) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(g1, g2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
}
