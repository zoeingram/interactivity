var rocks;
var section;
var rockytop;
var g1, g2;

var a, b, c;
var topRow = [];
var plant1, plant2, plant3, plant4;
var plant1i, plant2i, plant3i, plant4i;
var pick;

function preload(){
  square = loadImage("/weekly-scripts/week-6/images/gradient.png");
  rocks = loadImage("/weekly-scripts/week-6/images/rocks.png");
  section = loadImage("/weekly-scripts/week-6/images/section.png");
  rockstop = loadImage("/weekly-scripts/week-6/images/rockstop.png");
  rockytop = loadImage("/weekly-scripts/week-6/images/rockytop.png");

  plant1 = loadSound("/weekly-scripts/week-6/images/plant1.m4a");
  plant2 = loadSound("/weekly-scripts/week-6/images/plant2.m4a");
  plant3 = loadSound("/weekly-scripts/week-6/images/plant3.m4a");
  plant4 = loadSound("/weekly-scripts/week-6/images/plant4.m4a");

  plant1i = loadImage("/weekly-scripts/week-6/images/plant1i.png");
  plant2i = loadImage("/weekly-scripts/week-6/images/plant2i.png");
  plant3i = loadImage("/weekly-scripts/week-6/images/plant3i.png");
  plant4i = loadImage("/weekly-scripts/week-6/images/plant4i.png");

}


function setup(){
  createCanvas(600, 600);
  a = new Gradient();
  b = new Gradient();

  g1 = color(213, 107, 255);
  g2 = color(213, 107, 0);
  for(var i = 0; i < 2; i++){
    topRow.push(new Gradient());
  }
}

function draw(){
  background(255);
  setGradient(0, 0, 600, 600, g1, g2);

  tint(100, 100);
  image(rocks, 0, 0);
  tint(255, 255);
  var x = 100;
  var y = 100;
   //212  228
  for(var i = 0; i < topRow.length; i++){
    topRow[i].display(x, y);
    topRow[i].change(x, y);
    x+=220;
  }
  a.display(350, 290);
  var x = 0, y = 0;
  if(overRect(350, 290, 212, 228)){
    if(mouseIsPressed){
      pickPlant();
    }
    if(pick == plant1){
      image(plant1i, x, y);
    } else if(pick == plant2){
      image(plant2i, x, y);
    } else if(pick == plant3){
      image(plant3i, x, y);
    } else if(pick == plant4){
      image(plant4i, x, y);
    }else {

    }
  }
  if(overRect(40, 350, 212, 228)){
    if(mouseIsPressed){
      pickPlant();
    }
    if(pick == plant1){
      image(plant1i, x, y);
    } else if(pick == plant2){
      image(plant2i, x, y);
    } else if(pick == plant3){
      image(plant3i, x, y);
    } else if(pick == plant4){
      image(plant4i, x, y);
    }else {

    }
  }

  if(overRect(100, 100, 212, 228)){

    if(mouseIsPressed){
      pickPlant();
    }
    if(pick == plant1){
      image(plant1i, x, y);
    } else if(pick == plant2){
      image(plant2i, x, y);
    } else if(pick == plant3){
      image(plant3i, x, y);
    } else if(pick == plant4){
      image(plant4i, x, y);
    }else {

    }
  }
    if(overRect(320, 100, 212, 228)){
      if(mouseIsPressed){
        pickPlant();
      }
      if(pick == plant1){
        image(plant1i, x, y);
      } else if(pick == plant2){
        image(plant2i, x, y);
      } else if(pick == plant3){
        image(plant3i, x, y);
      } else if(pick == plant4){
        image(plant4i, x, y);
      }else {

      }
    }


  b.display(40, 350);

  image(section, 0, 0);
  image(rockytop, 0, 0);


}

var Gradient = function(){
var x = 0; var y = 0;
  this.display = function(x, y){
    image(square, x, y);
  }

  this.change = function(shiftX, shiftY){
    if(overRect(x + shiftX, y + shiftY, 50, 50)){
      ellipse(0, 300, 40, 40);

    }
  }

}
function overRect(x, y, w, h) {
    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
        return true;
    } else {
        return false;
    }
}



function setGradient(x, y, w, h, c1, c2) {
    for (var i = y; i <= y + h; i+=4) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}

function pickPlant(){
  var plantSounds = [plant1, plant2, plant3, plant4];

   pick = plantSounds[Math.floor(Math.random() * plantSounds.length)];
  pick.playMode('restart');
  pick.play();
  return pick;
}
