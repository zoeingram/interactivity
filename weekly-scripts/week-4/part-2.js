var g = 189;
var b = 166;

var c1x = 50;
var c1y = 50;
var c1r = 150;

var c2x = 450;
var c2y = 500;
var c2r = 70;

var c3x = 250;
var c3y = 300;
var c3r = 100;


var rx = 50;
var ry = 315;
var rw = 30;
var rh = 280;

var r2x = 200;
var r2y = 250;
var r2w = 30;
var r2h = 330;

var r3x = 400;
var r3y = 125;
var r3w = 30;
var r3h = 430;

var r4x = 560;
var r4y = 0;
var r4w = 30;
var r4h = 530;




function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  if (overCircle(c1x, c1y, c1r)) { //circle 1
    fill(0, g, b);
    noStroke();
    stroke(246, g, b);
    var i = 1;
    var x = 0;
    var y = 0;

    var x2 = 300;
    var y2 = 50;

    for (i; i < 50; i++) {
      line(x, y, x2, y2);
      y += 5;
      y2 += 5;
    }

  } else {
    noFill();
    stroke(0, g, b);
  }
  ellipse(c1x, c1y, c1r * 2, c1r * 2);

  if (overCircle(c2x, c2y, c2r)) { // circle 2
    fill(233, g, b);
    noStroke();
    stroke(60, g, b);
    var i = 1;
    var x = 400;
    var y = 400;
    var x2 = 300;
    var y2 = 300;

    for (i; i < 50; i++) {
      line(x, y, x2, y2);
      y += 5;
      y2 += 5;
    }

  } else {
    noFill();
    stroke(233, g, b);
  }
  ellipse(c2x, c2y, c2r * 2, c2r * 2);


  if (overCircle(c3x, c3y, c3r)) { // circle 3
    fill(136, g, b);
    noStroke();

  } else {
    noFill();
    stroke(136, g, b);
  }
  ellipse(c3x, c3y, c3r * 2, c3r * 2);

  if (overRect(rx, ry, rw, rh)) { // rectangle 1
    fill(255, g, b);
    noStroke();
  } else {
    noFill();
    stroke(255, g, b);
  }
  rect(rx, ry, rw, rh);

  if (overRect(r2x, r2y, r2w, r2h)) { // rectangle 2
    fill(190, g, b);
    noStroke();
  } else {
    noFill();
    stroke(190, g, b);
  }
  rect(r2x, r2y, r2w, r2h);

  if (overRect(r3x, r3y, r3w, r3h)) { // rectangle 3
    fill(130, g, b);
    noStroke();
    stroke(130, g, b);
    var i = 1;
    var x = 400;
    var y = 125;
    var x2 = 560;
    var y2 = 125;


    for (i; i < 88; i++) {
      line(x, y, x2, y2);
      y += 5;
      y2 += 5;
    }
  } else {
    noFill();
    stroke(130, g, b);
  }
  rect(r3x, r3y, r3w, r3h);


  if (overRect(r4x, r4y, r4w, r4h)) { // rectangle 4
    fill(19, g, b);
    noStroke();
  } else {
    noFill();
    stroke(19, g, b);
  }
  rect(r4x, r4y, r4w, r4h);

}

function overCircle(x, y, radius) {
  if (dist(x, y, mouseX, mouseY) < radius) {
    return true;
  } else {
    return false;
  }
}


function overRect(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}
