"use strict";

function preload() {
    plant = loadImage("../assets/images/room/plant.png");
    chair = loadImage("../assets/images/room/chair.png");
    table = loadImage("../assets/images/room/table.png");
    concrete = loadImage("../assets/images/room/concrete.png");
    plant1 = loadImage("../assets/images/room/plant1.png");
    plant2 = loadImage("../assets/images/room/plant2.png");
    shelf = loadImage("../assets/images/room/shelf.png");
    palm = loadImage("../assets/images/room/palm.png");
    ficus = loadImage("../assets/images/room/ficus.png");
    ivy = loadImage("../assets/images/room/ivy.png");
    sidetable = loadImage("../assets/images/room/sidetable.png");
    dresser = loadImage("../assets/images/room/dresser.png");

}

var scr = 1;
var c1, c2;


function setup() {
    createCanvas(600, 600);
    c1 = color(255, 156, 157);
    c2 = color(112, 255, 255);
}

function draw() {
    if (scr == 1) {
        drawScreen1();
    } else if (scr == 2) {
        drawScreen2();
    } else if (scr == 3) {
        drawScreen3();
    } else if (scr == 4) {
        drawScreen4();
    }
}

function drawScreen1() {
    background(255);
    noStroke();
    fill(73, 67, 44);
    rect(0, 450, 600, 200);
    var x = 0,
        y = 450,
        x1 = 600,
        y1 = 450;

    for (var i = 1; i < 100; i++) {
        stroke(93, 86, 58);
        line(x, y, x1, y1);
        y += 5;
        y1 += 5;
    }
    noStroke();

    //left wall
    fill(255, 188, 157);
    quad(0, 0, 220, 0, 220, 450, 0, 600);


    //window
    // stroke(219, 167, 129);
    fill(255);
    rect(54, 88, 118, 219);
    setGradient(54, 88, 118, 219, c1, c2);
    if (overWindow(54, 88, 118, 219)) {
        setGradient(54, 88, 118, 219, c2, c1);
    }
    stroke(219, 167, 129);
    quad(54, 88, 172, 140, 172, 254, 54, 306);
    noStroke();
    fill(255, 188, 157);
    triangle(173, 88, 173, 140, 54, 88);
    triangle(53, 308, 173, 254, 173, 308);

    //middle wall
    noStroke();
    fill(233, 188, 157);
    rect(220, 0, 160, 450);
    //window
    setGradient(238, 140, 125, 114, c1, c2);
    if (overWindow(238, 140, 125, 114)) {
        setGradient(238, 140, 125, 114, c2, c1);
    }
    stroke(219, 167, 129);
    // fill(255);
    rect(238, 140, 125, 114);
    noStroke();



    //right wall
    fill(255, 188, 157);
    quad(380, 0, 600, 0, 600, 600, 380, 450);
    //window
    stroke(219, 167, 129);
    rect(430, 87, 118, 219);
    setGradient(430, 87, 118, 219, c1, c2);
    if (overWindow(430, 87, 118, 219)) {
        setGradient(430, 87, 118, 219, c2, c1);
    }
    stroke(219, 167, 129);
    quad(431, 140, 549, 88, 549, 306, 431, 254);
    noStroke();
    fill(255, 188, 157);
    triangle(429, 87, 429, 139, 548, 87);
    triangle(429, 254, 429, 307, 548, 307);

    image(chair, 0, 0);
    image(plant, 0, 0);
    image(table, 0, 0);

    // flame();
    noStroke();
    var r = random(170, 255)
    fill(255, r, 45);
    ellipse(475, 465, 7, 7)


}

function drawScreen2() {
    background("white");
    stroke(0);
    noFill();
    fill(255);
    image(shelf, 0, 0);
    rect(279, 179, 272, 272);
    rect(450, 200, 60, 40);
    if (overWindow(450, 200, 60, 40)) {
        setGradient(450, 200, 60, 40, c2, c1);
        // rect(450, 200, 60, 40);
    }
    noFill();
    stroke(0);
    line(126, 258, 279, 179);
    image(plant2, 100, 0);
    image(plant1, 0, 0);
    var wall = map(mouseY, 0, 440, 210, 107);
    fill(wall, 189, 174);
    rect(126, 258, 272, 272);
    line(398, 530, 551, 451);
}

function drawScreen3() {
    background("white");
    ellipse(300, 300, 30, 30)
    stroke(0);
    var wall = map(mouseY, 0, 440, 210, 107);
    noStroke();
    fill(wall, 189, 174);
    rect(0, 0, 344, 440);
    image(dresser, 0, 0);
    // quad(336, 274, 380, 265, 500, 281, 466, 292);
    // image(palm, 0, 100);
    //window
    stroke(0);
    noFill();
    rect(430, 150, 60, 40);
    if (overWindow(430, 150, 60, 40)) {
        setGradient(430, 150, 60, 40, c2, c1);
    }

}

function drawScreen4() {
    background("white");
    stroke(100);
    var face = map(mouseY, 263, 600, 255, 0);
    fill(face, 205, 189);
    rect(111, 0, 414, 334);
    image(sidetable, 70, -20);
    stroke(0);
    fill(255);
    rect(0, 263, 414, 334);
    rect(250, 400, 60, 40);
    if (overWindow(250, 400, 60, 40)) {
        setGradient(250, 400, 60, 40, c2, c1);
    }
    image(ivy, 30, 0);
    image(ficus, 0, 210);
}

function overWindow(x, y, w, h) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        return true;
    } else {
        return false;
    }
}

function mousePressed() {
    if (scr == 1) {
        if (mouseX < 220) {
            scr = 2;
        } else if (mouseX > 220 && mouseX < 380) {
            scr = 3;
        } else if (mouseX > 380) {
            scr = 4;
        }
    } else if (scr == 2) {
        if (overWindow(450, 200, 60, 40)) {
            scr = 1;
        }
    } else if (scr == 3) {
        if (overWindow(430, 150, 60, 40)) {
            scr = 1;
        }
    } else if (scr == 4) {
        if (overWindow(250, 400, 60, 40)) {
            scr = 1;
        }
    } else {}
}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    for (var i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}
