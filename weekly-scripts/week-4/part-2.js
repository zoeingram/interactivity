var c1x = 100;
var c1y = 200;
var c1r = 200;

var c2x = 300;
var c2y = 100;
var c2r = 80;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);

    if (overCircle(c1x, c1y, c1r)) {
        fill(0, 102, 153);
        noStroke();
    } else {
        noFill();
        stroke(0, 102, 153);
    }
    ellipse(c1x, c1y, c1r * 2, c1r * 2);

    if (overCircle(c2x, c2y, c2r)) {
        fill(204, 102, 0);
        noStroke();
    } else {
        noFill();
        stroke(204, 102, 0);
    }
    ellipse(c2x, c2y, c2r * 2, c2r * 2);

}

function overCircle(x, y, radius) {
    if (dist(x, y, mouseX, mouseY) < radius) {
        return true;
    } else {
        return false;
    }
}
