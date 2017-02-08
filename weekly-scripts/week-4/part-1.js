var glacier;
var frontIce;
var backMountain;
var mount2;

function preload() {
    iceberg = loadImage("berg.png");
    frontIce = loadImage("front.png");
    backMountain = loadImage("mountain.png");
    mount2 = loadImage("ymount.png");
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    image(backMountain, 0, 0);
    var ym = map(mouseY, 0, 600, -100, 200);
    tint(255, 200);
    image(mount2, 0, ym);
    tint(255, 255);
    image(iceberg, 0, 100);
    var m = map(mouseX, 300, 600, 0, 1000);
    image(frontIce, m, 350);

}
