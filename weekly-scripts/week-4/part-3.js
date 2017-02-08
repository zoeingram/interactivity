function preload() {
    plant = loadImage("../assets/images/room/plant.png");
    chair = loadImage("../assets/images/room/chair.png");
    table = loadImage("../assets/images/room/table.png");
    concrete = loadImage("../assets/images/room/concrete.png");
    plant1 = loadImage("../assets/images/room/plant1.png");
    plant2 = loadImage("../assets/images/room/plant2.png");
    shelf = loadImage("../assets/images/room/shelf.png");
    orchid = loadImage("../assets/images/room/orchid.png");
    sink = loadImage("../assets/images/room/sink.png");
  }

var scr = 1;

function setup() {
    createCanvas(600, 600);
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
    stroke(219, 167, 129);
    fill(255);
    quad(54, 88, 172, 140, 172, 254, 54, 306);

    //middle wall
    noStroke();
    fill(243, 188, 157);
    rect(220, 0, 160, 450);
    //window
    stroke(219, 167, 129);
    fill(255);
    rect(238, 140, 125, 114);
    noStroke();



    //right wall
    fill(255, 188, 157);
    quad(380, 0, 600, 0, 600, 600, 380, 450);
    //window
    stroke(219, 167, 129);
    fill(255);
    quad(431, 140, 549, 88, 549, 306, 431, 254);
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
    if(overWindow(450, 200, 60, 40)){
      fill("blue");
      rect(450, 200, 60, 40);
    }
    noFill();
    line(126, 258, 279, 179);
    image(plant2, 100, 0);
    image(plant1, 0, 0);
    var b = map(mouseY, 258, 530, 207, 121);
    fill(89, 173, b);
    rect(126, 258, 272, 272);
    line(398, 530, 551, 451);
}
    function drawScreen3() {
        background("white");
        ellipse(300, 300, 30, 30)
        stroke(0);
        line(344, 440, 600, 600);
        var wall = map(mouseY, 0, 440, 255, 205);
        noStroke();
        fill(wall, wall, wall);
        rect(0, 0, 344, 440);
        image(sink, 0, 160);
        image(orchid, 0, 0);
    }

    function drawScreen4() {
        background("yellow");
        ellipse(600, 550, 50, 50);
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
    if( mouseX < 220) {
      scr = 2;
    } else if(mouseX > 220 && mouseX < 380){
      scr = 3;
    } else if (mouseX > 380){
      scr = 4;
    }
  } else if(scr == 2) {
    if(overWindow(450, 200, 60, 40)){
      scr = 3;
    }
  }
}
