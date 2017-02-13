var frames = [];
var currentFrame = 0;

var cx = 340,
  cy = 60,
  cr = 100,
  c2x = 60,
  c2y = 340;

function preload() {
  frames[0] = loadImage("image_1.jpg");
  frames[1] = loadImage("image_2.jpg");
  frames[2] = loadImage("image_3.jpg");
  frames[3] = loadImage("image_4.jpg");
  frames[4] = loadImage("image_5.jpg");
  frames[5] = loadImage("image_6.jpg");
  frames[6] = loadImage("image_7.jpg");
  frames[7] = loadImage("image_8.jpg");
  frames[8] = loadImage("image_9.jpg");
  frames[9] = loadImage("image_10.jpg");
  frames[10] = loadImage("image_11.jpg");
  frames[11] = loadImage("image_12.jpg");
  frames[12] = loadImage("image_13.jpg");
}

console.log(frames[0]);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noFill();
  if (overCircle(cx, cy, cr)) {
    fill(236, 72, 33);
    noStroke();
    frameRate(20);
    image(frames[currentFrame], 100, 100);
    if (mouseIsPressed == false) {
      currentFrame = currentFrame + 1;
      if (currentFrame >= frames.length) {
        currentFrame = 0;
      }
    } else {
      image(frames[currentFrame], 0, 0, 400, 400);

    }

  } else {
    noFill();
    stroke(236, 72, 33);
  }

  ellipse(cx, cy, cr, cr);

  if (overCircle(c2x, c2y, cr)) {
    fill(236, 72, 33);
    noStroke();
    frameRate(12);
    image(frames[currentFrame], 100, 100);
    if (mouseIsPressed == false) {
      currentFrame = currentFrame + 1;
      if (currentFrame >= frames.length) {
        currentFrame = 0;
      }
    } else {
      var x = 0,
        y = 0,
        x2 = 0,
        y2 = 400;
      stroke(236, 72, 33);
      for (var i = 0; i < 200; i++) {
        line(x, y, x2, y2);
        x += 3;
        x2 += 3;

      }
    }

  } else {
    noFill();
    stroke(236, 72, 33);
  }
  ellipse(c2x, c2y, cr, cr);

}

function overCircle(x, y, radius) {
  if (dist(x, y, mouseX, mouseY) < radius) {
    return true;
  } else {
    return false;
  }
}
