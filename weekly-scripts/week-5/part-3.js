var gradientFrames = [];
var gCurrentFrame = 0;

var barFrames = [];
var bCurrentFrame = 0;

var flowerFrames = [];
var fCurrentFrame = 0;

//gradient
var c1;
var c2;

function preload() {
  //gradient square
    gradientFrames[0] = loadImage("/weekly-scripts/week-5/gradient-seq/0.png");
    gradientFrames[1] = loadImage("/weekly-scripts/week-5/gradient-seq/1.png");
    gradientFrames[2] = loadImage("/weekly-scripts/week-5/gradient-seq/2.png");
    gradientFrames[3] = loadImage("/weekly-scripts/week-5/gradient-seq/3.png");
    gradientFrames[4] = loadImage("/weekly-scripts/week-5/gradient-seq/4.png");
    gradientFrames[5] = loadImage("/weekly-scripts/week-5/gradient-seq/5.png");
    gradientFrames[6] = loadImage("/weekly-scripts/week-5/gradient-seq/6.png");
    gradientFrames[7] = loadImage("/weekly-scripts/week-5/gradient-seq/7.png");
    gradientFrames[8] = loadImage("/weekly-scripts/week-5/gradient-seq/8.png");
    gradientFrames[9] = loadImage("/weekly-scripts/week-5/gradient-seq/9.png");
    gradientFrames[10] = loadImage("/weekly-scripts/week-5/gradient-seq/10.png");
    gradientFrames[11] = loadImage("/weekly-scripts/week-5/gradient-seq/11.png");
    gradientFrames[12] = loadImage("/weekly-scripts/week-5/gradient-seq/12.png");
    gradientFrames[13] = loadImage("/weekly-scripts/week-5/gradient-seq/13.png");
    gradientFrames[14] = loadImage("/weekly-scripts/week-5/gradient-seq/14.png");
    gradientFrames[15] = loadImage("/weekly-scripts/week-5/gradient-seq/15.png");
    gradientFrames[16] = loadImage("/weekly-scripts/week-5/gradient-seq/16.png");
    gradientFrames[17] = loadImage("/weekly-scripts/week-5/gradient-seq/17.png");
    gradientFrames[18] = loadImage("/weekly-scripts/week-5/gradient-seq/18.png");
    gradientFrames[19] = loadImage("/weekly-scripts/week-5/gradient-seq/19.png");
    gradientFrames[20] = loadImage("/weekly-scripts/week-5/gradient-seq/20.png");
    gradientFrames[21] = loadImage("/weekly-scripts/week-5/gradient-seq/21.png");
    gradientFrames[22] = loadImage("/weekly-scripts/week-5/gradient-seq/22.png");
    gradientFrames[23] = loadImage("/weekly-scripts/week-5/gradient-seq/23.png");
    gradientFrames[24] = loadImage("/weekly-scripts/week-5/gradient-seq/24.png");
    gradientFrames[25] = loadImage("/weekly-scripts/week-5/gradient-seq/25.png");
    gradientFrames[26] = loadImage("/weekly-scripts/week-5/gradient-seq/26.png");
    gradientFrames[27] = loadImage("/weekly-scripts/week-5/gradient-seq/27.png");
    gradientFrames[28] = loadImage("/weekly-scripts/week-5/gradient-seq/28.png");
    gradientFrames[29] = loadImage("/weekly-scripts/week-5/gradient-seq/29.png");
    gradientFrames[30] = loadImage("/weekly-scripts/week-5/gradient-seq/30.png");

//black lines
    barFrames[0] = loadImage("/weekly-scripts/week-5/bars/0.png");
    barFrames[1] = loadImage("/weekly-scripts/week-5/bars/1.png");
    barFrames[2] = loadImage("/weekly-scripts/week-5/bars/2.png");
    barFrames[3] = loadImage("/weekly-scripts/week-5/bars/3.png");
    barFrames[4] = loadImage("/weekly-scripts/week-5/bars/4.png");
    barFrames[5] = loadImage("/weekly-scripts/week-5/bars/5.png");
    barFrames[6] = loadImage("/weekly-scripts/week-5/bars/6.png");
    barFrames[7] = loadImage("/weekly-scripts/week-5/bars/7.png");
    barFrames[8] = loadImage("/weekly-scripts/week-5/bars/8.png");
    barFrames[9] = loadImage("/weekly-scripts/week-5/bars/9.png");
    barFrames[10] = loadImage("/weekly-scripts/week-5/bars/10.png");
    barFrames[11] = loadImage("/weekly-scripts/week-5/bars/11.png");
    barFrames[12] = loadImage("/weekly-scripts/week-5/bars/12.png");
    barFrames[13] = loadImage("/weekly-scripts/week-5/bars/13.png");
    barFrames[14] = loadImage("/weekly-scripts/week-5/bars/14.png");
    barFrames[15] = loadImage("/weekly-scripts/week-5/bars/15.png");
    barFrames[16] = loadImage("/weekly-scripts/week-5/bars/16.png");
    barFrames[17] = loadImage("/weekly-scripts/week-5/bars/17.png");
    barFrames[18] = loadImage("/weekly-scripts/week-5/bars/18.png");
    barFrames[19] = loadImage("/weekly-scripts/week-5/bars/19.png");
    barFrames[20] = loadImage("/weekly-scripts/week-5/bars/20.png");
    barFrames[21] = loadImage("/weekly-scripts/week-5/bars/21.png");
    barFrames[22] = loadImage("/weekly-scripts/week-5/bars/22.png");
    barFrames[23] = loadImage("/weekly-scripts/week-5/bars/23.png");
    barFrames[24] = loadImage("/weekly-scripts/week-5/bars/24.png");
    barFrames[25] = loadImage("/weekly-scripts/week-5/bars/25.png");
    barFrames[26] = loadImage("/weekly-scripts/week-5/bars/26.png");
    barFrames[27] = loadImage("/weekly-scripts/week-5/bars/27.png");
    barFrames[28] = loadImage("/weekly-scripts/week-5/bars/28.png");

    flowerFrames[0] = loadImage("/weekly-scripts/week-5/flower/0.png");
    flowerFrames[1] = loadImage("/weekly-scripts/week-5/flower/1.png");
    flowerFrames[2] = loadImage("/weekly-scripts/week-5/flower/2.png");
    flowerFrames[3] = loadImage("/weekly-scripts/week-5/flower/3.png");
    flowerFrames[4] = loadImage("/weekly-scripts/week-5/flower/4.png");
    flowerFrames[5] = loadImage("/weekly-scripts/week-5/flower/5.png");
    flowerFrames[6] = loadImage("/weekly-scripts/week-5/flower/6.png");
    flowerFrames[7] = loadImage("/weekly-scripts/week-5/flower/7.png");
    flowerFrames[8] = loadImage("/weekly-scripts/week-5/flower/8.png");
    flowerFrames[9] = loadImage("/weekly-scripts/week-5/flower/9.png");
    flowerFrames[10] = loadImage("/weekly-scripts/week-5/flower/10.png");
    flowerFrames[11] = loadImage("/weekly-scripts/week-5/flower/11.png");
    flowerFrames[12] = loadImage("/weekly-scripts/week-5/flower/12.png");
    flowerFrames[13] = loadImage("/weekly-scripts/week-5/flower/13.png");


}



function setup() {
    createCanvas(600, 600);
    frameRate(15);
    colorMode(RGB);
    c1 = color(254, 231, 214);
    c2 = color(6, 231, 214);
}

function draw() {
    background(255);
    gCurrentFrame = int(map(mouseY, 0, width,  gradientFrames.length-1, 0));
    gCurrentFrame = int(constrain(gCurrentFrame, 0, gradientFrames.length-1));
    image(gradientFrames[gCurrentFrame], 50, 50, 500, 500);

    image(barFrames[bCurrentFrame], 25, 25);
    bCurrentFrame = bCurrentFrame + 1;
    if (bCurrentFrame >= barFrames.length) {
      bCurrentFrame = 0;
    }
    setGradient(400, 200, 50, 50, c1, c2);

    image(flowerFrames[bCurrentFrame], 25, 25);
    fCurrentFrame = fCurrentFrame + 1;
    if (fCurrentFrame >= flowerFrames.length) {
      fCurrentFrame = 0;
    }

}

function setGradient(x, y, w, h, c1, c2) {
    // noFill();
    for (var i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}
