var gradientFrames = [];
var gCurrentFrame = 0;

var barFrames = [];
var bCurrentFrame = 0;

var flowerFrames = [];
var fCurrentFrame = 0;

var circleFrames = [];
var cCurrentFrame = 0;
//gradient
var c1;
var c2;

var overlay;

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


    circleFrames[0] = loadImage("/weekly-scripts/week-5/circles/0.png");
    circleFrames[1] = loadImage("/weekly-scripts/week-5/circles/1.png");
    circleFrames[2] = loadImage("/weekly-scripts/week-5/circles/2.png");
    circleFrames[3] = loadImage("/weekly-scripts/week-5/circles/3.png");
    circleFrames[4] = loadImage("/weekly-scripts/week-5/circles/4.png");
    circleFrames[5] = loadImage("/weekly-scripts/week-5/circles/5.png");
    circleFrames[6] = loadImage("/weekly-scripts/week-5/circles/6.png");
    circleFrames[7] = loadImage("/weekly-scripts/week-5/circles/7.png");
    circleFrames[8] = loadImage("/weekly-scripts/week-5/circles/8.png");
    circleFrames[9] = loadImage("/weekly-scripts/week-5/circles/9.png");
    circleFrames[10] = loadImage("/weekly-scripts/week-5/circles/10.png");
    circleFrames[11] = loadImage("/weekly-scripts/week-5/circles/11.png");
    circleFrames[12] = loadImage("/weekly-scripts/week-5/circles/12.png");
    circleFrames[13] = loadImage("/weekly-scripts/week-5/circles/13.png");
    circleFrames[14] = loadImage("/weekly-scripts/week-5/circles/14.png");
    circleFrames[15] = loadImage("/weekly-scripts/week-5/circles/15.png");
    circleFrames[16] = loadImage("/weekly-scripts/week-5/circles/16.png");
    circleFrames[17] = loadImage("/weekly-scripts/week-5/circles/17.png");
    circleFrames[18] = loadImage("/weekly-scripts/week-5/circles/18.png");
    circleFrames[19] = loadImage("/weekly-scripts/week-5/circles/19.png");
    circleFrames[20] = loadImage("/weekly-scripts/week-5/circles/20.png");
    circleFrames[21] = loadImage("/weekly-scripts/week-5/circles/21.png");
    circleFrames[22] = loadImage("/weekly-scripts/week-5/circles/22.png");
    circleFrames[23] = loadImage("/weekly-scripts/week-5/circles/23.png");
    circleFrames[24] = loadImage("/weekly-scripts/week-5/circles/24.png");
    circleFrames[25] = loadImage("/weekly-scripts/week-5/circles/25.png");
    circleFrames[26] = loadImage("/weekly-scripts/week-5/circles/26.png");
    circleFrames[27] = loadImage("/weekly-scripts/week-5/circles/27.png");
    circleFrames[28] = loadImage("/weekly-scripts/week-5/circles/28.png");
    circleFrames[29] = loadImage("/weekly-scripts/week-5/circles/29.png");
    circleFrames[30] = loadImage("/weekly-scripts/week-5/circles/30.png");
    circleFrames[31] = loadImage("/weekly-scripts/week-5/circles/31.png");
    circleFrames[32] = loadImage("/weekly-scripts/week-5/circles/32.png");
    circleFrames[33] = loadImage("/weekly-scripts/week-5/circles/33.png");
    circleFrames[34] = loadImage("/weekly-scripts/week-5/circles/34.png");
    circleFrames[35] = loadImage("/weekly-scripts/week-5/circles/35.png");
    circleFrames[36] = loadImage("/weekly-scripts/week-5/circles/36.png");
    circleFrames[37] = loadImage("/weekly-scripts/week-5/circles/37.png");
    circleFrames[38] = loadImage("/weekly-scripts/week-5/circles/38.png");

    one = loadSound('/weekly-scripts/week-5/one.mp3');
    two = loadSound('/weekly-scripts/week-5/two.mp3');
    three = loadSound('/weekly-scripts/week-5/three.mp3');
    four = loadSound('/weekly-scripts/week-5/four.mp3');
    five = loadSound('/weekly-scripts/week-5/five.mp3');
    six = loadSound('/weekly-scripts/week-5/six.mp3');
    seven = loadSound('/weekly-scripts/week-5/seven.mp3');
    eight = loadSound('/weekly-scripts/week-5/eight.mp3');
    nine = loadSound('/weekly-scripts/week-5/nine.mp3');
    ten = loadSound('/weekly-scripts/week-5/ten.mp3');
    eleven = loadSound('/weekly-scripts/week-5/eleven.mp3');
    twelve = loadSound('/weekly-scripts/week-5/twelve.mp3');



}



function setup() {
    createCanvas(600, 600);
    frameRate(15);
    colorMode(RGB);
    c1 = color(254, 231, 214);
    c2 = color(6, 231, 214);


}

function draw() {
    var h = hour();
    var m = minute();
    var s = second();
    textSize(20);

    background(255);
    gCurrentFrame = int(map(mouseY, 0, 500, gradientFrames.length - 1, 0));
    gCurrentFrame = int(constrain(gCurrentFrame, 0, gradientFrames.length - 1));
    image(gradientFrames[gCurrentFrame], 50, 50, 500, 500);

    var rx, ry;


    image(circleFrames[cCurrentFrame], 0, 0);
    cCurrentFrame = cCurrentFrame + 1;
    if (cCurrentFrame >= circleFrames.length) {
        cCurrentFrame = 0;
    }



    bCurrentFrame = int(map(mouseY, 0, 500, barFrames.length - 1, 0));
    bCurrentFrame = int(constrain(bCurrentFrame, 0, barFrames.length - 1));
    image(barFrames[bCurrentFrame], 50, 50, 500, 500);

    //292, 440, 150, 150
    stroke(0);
    noFill();
    ellipse(90, 220, 130, 130);
    if (overCircle(90, 220, 140)) {
        fill(0);
        ellipse(90, 220, 130, 130);
        var i = 1;
        var x = 200;
        var y = 125;
        var x2 = 460;
        var y2 = 125;


        for (i; i < 88; i++) {
            line(x, y, x2, y2);
            y += 5;
            y2 += 5;
        }

        if (h == 1 || h == 13) {
            one.playMode('restart');
            one.play();
        } else if (h == 2 || h == 14) {
            two.playMode('restart');
            two.play();
        } else if (h == 3 || h ==15) {
            three.playMode('restart');
            three.play();
        } else if (h == 4 || h == 16) {
            four.playMode('restart');
            four.play();
        } else if (h == 5 || h ==17) {
            five.playMode('restart');
            five.play();
        } else if (h == 6 || h == 18) {
            six.playMode('restart');
            six.play();
        } else if (h == 7 || h == 19) {
            seven.playMode('restart');
            seven.play();
        } else if (h == 8 || h ==20) {
            eight.playMode('restart');
            eight.play();
        } else if (h == 9 || h ==21) {
            nine.playMode('restart');
            nine.play();
        } else if (h == 10 || h ==22) {
            ten.playMode('restart');
            ten.play();
        } else if (h == 11 || h ==23) {
            eleven.playMode('restart');
            eleven.play();
        } else if (h == 12 || h == 0) {
            twelve.playMode('restart');
            twelve.play();
        } else {

        }


        // image(overlay, 0, -100, 600, 600);
    }
    fill(fillVal);
    // rect(150, 150, 200, 200)
    image(flowerFrames[fCurrentFrame], 280, 200, 400, 400);
    if (mouseIsPressed == false) {
        fCurrentFrame = fCurrentFrame + 1;
        if (fCurrentFrame >= flowerFrames.length) {
            fCurrentFrame = 0;
        }
    } else {
        tint(255, 100);
        fill(0);
        text(h + ":" + m + ":" + s, 300, 200);
        image(flowerFrames[fCurrentFrame], 0, -100, 500, 500);
        tint(255, 255);
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

function overCircle(x, y, radius) {
    if (dist(x, y, mouseX, mouseY) < radius) {
        return true;
    } else {
        return false;
    }
}



var fillVal = 255;

function keyPressed() {
    if (keyCode == UP_ARROW) {
        fillVal = color(254, 231, 214);
    } else if (keyCode == DOWN_ARROW) {
        fillVal = color(6, 231, 214);

    }
    return false; // prevent default
}




function overRect(x, y, w, h) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        return true;
    } else {
        return false;
    }
}
