function setup() {
  createCanvas(600, 600);
}

function draw(){
  background(0);

  noFill();
  stroke(255);
  ellipse(50, 50, 50, 50);

}

function overCircle(){
  if(mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75){
    fill(255);
  }
}
