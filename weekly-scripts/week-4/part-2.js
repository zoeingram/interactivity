function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  var size = 50;
  var positionX = 50;
  var positionY = 100;
  colorMode("RGB");
  stroke(255, 141, 256);
  ellipse(positionX, positionY, size, size);
  noFill();
  if(overCircle(25, 75, 75, 125, "red")){
  }
  // rect(100, 100, 100, 100);
  // if(overRect(50, 150, 50, 150)){
  //   fill("blue");
  // }
  // ellipse(500, 500, 200, 200);
  // ellipse(430, 229, 250, 250);
  // triangle(30, 150, 58, 20, 86, 150);
  // triangle(150, 75, 200, 400, 300, 75);

}

function overCircle(lowx, highx, lowy, highy, color){

  if(mouseX >= lowx && mouseX <= highx && mouseY >= lowy && mouseY <= highy){
    console.log("over circle");
    fill(255, 141, 256);

   }
}

// function overRect(lowx, highx, lowy, highy, fill) {
//   if(mouseX >= lowx && mouseX <= highx && mouseY >= lowy && mouseY <= highy){
//     console.log("over rectangle");
//     fill("blue");
//
//   }}
