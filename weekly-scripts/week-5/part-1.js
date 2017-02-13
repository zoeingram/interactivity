var frames = [];
var whichFrame = 0;

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

function setup() {
  createCanvas(200, 200);
  frameRate(20);
}

function draw() {
  background(0);
	image(frames[whichFrame], 0, 0);
  whichFrame = whichFrame + 1;
  if (whichFrame >= frames.length) {
    whichFrame = 0;
  }
}
