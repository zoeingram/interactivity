var frames = [];
var whichFrame = 0;

function preload() {
    frames[0] = loadImage("/weekly-scripts/week-5/gradient-seq/0.png");
    frames[1] = loadImage("/weekly-scripts/week-5/gradient-seq/1.png");
    frames[2] = loadImage("/weekly-scripts/week-5/gradient-seq/2.png");
    frames[3] = loadImage("/weekly-scripts/week-5/gradient-seq/3.png");
    frames[4] = loadImage("/weekly-scripts/week-5/gradient-seq/4.png");
    frames[5] = loadImage("/weekly-scripts/week-5/gradient-seq/5.png");
    frames[6] = loadImage("/weekly-scripts/week-5/gradient-seq/6.png");
    frames[7] = loadImage("/weekly-scripts/week-5/gradient-seq/7.png");
    frames[8] = loadImage("/weekly-scripts/week-5/gradient-seq/8.png");
    frames[9] = loadImage("/weekly-scripts/week-5/gradient-seq/9.png");
    frames[10] = loadImage("/weekly-scripts/week-5/gradient-seq/10.png");
    frames[11] = loadImage("/weekly-scripts/week-5/gradient-seq/11.png");
    frames[12] = loadImage("/weekly-scripts/week-5/gradient-seq/12.png");
    frames[13] = loadImage("/weekly-scripts/week-5/gradient-seq/13.png");
    frames[14] = loadImage("/weekly-scripts/week-5/gradient-seq/14.png");
    frames[15] = loadImage("/weekly-scripts/week-5/gradient-seq/15.png");
    frames[16] = loadImage("/weekly-scripts/week-5/gradient-seq/16.png");
    frames[17] = loadImage("/weekly-scripts/week-5/gradient-seq/17.png");
    frames[18] = loadImage("/weekly-scripts/week-5/gradient-seq/18.png");
    frames[19] = loadImage("/weekly-scripts/week-5/gradient-seq/19.png");
    frames[20] = loadImage("/weekly-scripts/week-5/gradient-seq/20.png");
    frames[21] = loadImage("/weekly-scripts/week-5/gradient-seq/21.png");
    frames[22] = loadImage("/weekly-scripts/week-5/gradient-seq/22.png");
    frames[23] = loadImage("/weekly-scripts/week-5/gradient-seq/23.png");
    frames[24] = loadImage("/weekly-scripts/week-5/gradient-seq/24.png");
    frames[25] = loadImage("/weekly-scripts/week-5/gradient-seq/25.png");
    frames[26] = loadImage("/weekly-scripts/week-5/gradient-seq/26.png");
    frames[27] = loadImage("/weekly-scripts/week-5/gradient-seq/27.png");
    frames[28] = loadImage("/weekly-scripts/week-5/gradient-seq/28.png");
    frames[29] = loadImage("/weekly-scripts/week-5/gradient-seq/29.png");
    frames[30] = loadImage("/weekly-scripts/week-5/gradient-seq/30.png");
}

function setup() {
    createCanvas(600, 600);
    // frameRate(5);
}

function draw() {
    background(255);
    whichFrame = int(map(mouseY, 0, width,  frames.length-1, 0));
    whichFrame = int(constrain(whichFrame, 0, frames.length-1));
    image(frames[whichFrame], 100, 100);


}
