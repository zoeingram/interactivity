var song, analyzer;

function preload() {
    song = loadSound('assets/clippy.mp3');
}

function setup() {
    createCanvas(600, 600);
    song.loop();
    analyzer = new p5.Amplitude();
    analyzer.setInput(song);
}

function draw() {
    background(255);
    rectMode(CENTER);
    var rms = analyzer.getLevel();
    if (song.currentTime() > 20) {
        for (var i = 1; i < 10; i++) {
            fill(230, 180, 34);
            noStroke();
            ellipse(x, y, 10 + rms * 200, 10 + rms * 200);
            var x = random(0, 600);
            var y = random(0, 600);
        }
        stroke(171, 87, 178, 200);
        for (var y = 300; y < 600; y += 600) {
            for (var x = 300; x < 600; x += 600) {
                for (var w = 300; w > 0; w = w - r) {
                    noFill();

                    ellipse(x, y, w, w);
                    var r = random(2, 10);
                }

            }

        }

    } else if (song.currentTime() > 15.7) {

        for (var i = 1; i < 50; i += 5) {
            var x = 300;
            var y = 400;
            stroke(230, 180, 34, 200);
            ellipse(x, y, w, w);
            var w = random(50, 400);
            x += 5;
            y += 5;

        }
        for (var y = 25; y < 200; y += 50) {
            for (var x = 25; x < 600; x += 50) {
                for (var w = 50; w > 0; w = w - r) {
                    stroke(171, 87, 178, 200);
                    ellipse(x, y, w, w);
                    var r = random(2, 10);
                }
            }

        }


    } else if (song.currentTime() > 11.3) {

        noFill();
        for (var i = 1; i <= 5; i++) {
            line(x, 200, x1, 300 + rms * 200);
            strokeWeight(2);
            var rStroke = random(0, 100);
            var x1 = random(0, 600);
            var x = random(0, 600);
            stroke(225, rStroke, 155);
        }
        strokeWeight(1);
        for (var y = 25; y < 600; y += 50) {
            for (var x = 25; x < 600; x += 50) {
                for (var w = 50; w > 0; w = w - r) {
                    stroke(171, 87, 178, 200);
                    ellipse(x, y, w, w);
                    var r = random(2, 10);

                }

            }

        }
    } else if (song.currentTime() > 6.8) { //20-30
        noFill();
        for (var i = 1; i <= 2; i++) {
            line(x, 200, x1, 300 + rms * 200);
            strokeWeight(2);
            var rStroke = random(0, 100);
            var x1 = random(0, 600);
            var x = random(0, 600);
            stroke(225, rStroke, 155);
        }
        strokeWeight(1);
        stroke(171, 87, 178, 200);
        for (var y = 25; y < 600; y += 50) {
            for (var x = 25; x < 600; x += 50) {
                for (var w = 50; w > 0; w = w - r) {
                    stroke(171, 87, 178, 200);
                    ellipse(x, y, w, w);
                    var r = random(2, 10);
                    stroke(255, 185, 22, 80);
                }

            }

        }

    } else if (song.currentTime() > 6.3) { //10-20
        for (var y = 25; y < 600; y += 50) {
            for (var x = 25; x < 600; x += 50) {
                for (var w = 50; w > 0; w = w - r) {
                    stroke(171, 87, 178, 200);
                    ellipse(x, y, w, w);
                    var r = random(2, 10);
                }

            }

        }

    } else if (song.currentTime() > 4) { //10-20
        for (var y = 50; y < 559; y += 100) {
            for (var x = 50; x < 550; x += 90) {
                for (var w = 80; w > 0; w = w - r) {
                    stroke(171, 87, 178, 200);
                    ellipse(x, y, w, w);
                    var r = random(2, 10);
                }

            }

        }

    } else if (song.currentTime() > 2) { //4.3 - 2.3

        noFill();
        stroke(171, 87, 178, 200);
        for (var y = 150; y < 600; y += 300) {
            for (var x = 150; x < 600; x += 300) {
                for (var w = 200; w > 0; w = w - r) {
                    ellipse(x, y, w, w);
                    var r = random(2, 10);
                }

            }

        }



    } else { //first loop
        noFill();
        stroke(171, 87, 178, 200);


        for (var y = 300; y < 600; y += 600) {
            for (var x = 300; x < 600; x += 600) {
                for (var w = 300; w > 0; w = w - r) {
                    ellipse(x, y, w, w);
                    var r = random(2, 10);
                }

            }

        }


    }


}
