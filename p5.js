//main

let cirRow;
let diam;
let row;
let diamMult;
let d;

function setup() {
    createCanvas(windowWidth,windowHeight);
    noStroke();
}

function draw() {
    background('pink');
    row = 0;
    diamMult = 20;
    for (let i = -10; i <= height + 60; i += 45) { // this adds rows of circles top to bottom
        if (row % 2 == 1) {
            cirRow = 0;
        } else { cirRow = -90; } // offset of top circle so the center is inbetween two circles

        for (let x = cirRow; x <= width + 10; x += 180) { // creating a row of cirlces
            for (let innerCir = 10; innerCir > 0; innerCir--) { // this adds multiple circles 
                // within the larger circle 'pink' circle
                
                // color changing wave effect
                if (innerCir == 10) {
                    fill(243, 207, 198);
                } else if (innerCir == 9) {
                    const cirColor = color(0,50,100);
                    cirColor.setAlpha(127 + 127 * sin(millis() / 800));
                    fill(cirColor);
                }else if (innerCir == 8) {
                    const cirColor = color(30,50,100);
                    cirColor.setAlpha(127 + 127 * sin(millis() / 800));
                    fill(cirColor);
                } else if (innerCir == 7) {
                    const cirColor = color(35, 50, 100);
                    cirColor.setAlpha(127 + 127 * sin(millis() / 800));
                    fill(cirColor);
                } else if (innerCir == 6) {
                    const cirColor = color(40, 50, 100);
                    cirColor.setAlpha(127 + 127 * sin(millis() / 800));
                    fill(cirColor);
                } else if (innerCir == 5) {
                    const cirColor = color(76, 50, 100);
                    cirColor.setAlpha(127 + 127 * sin(millis() / 800));
                    fill(cirColor);
                } else if (innerCir == 4) {
                    const cirColor = color(111, 50, 100);
                    cirColor.setAlpha(127 + 127 * sin(millis() / 780));
                    fill(cirColor);
                } else if (innerCir == 3) {
                    const cirColor = color(150, 50, 100);
                    cirColor.setAlpha(127 + 127 * sin(millis() /750));
                    fill(cirColor);
                } else if (innerCir == 2) {
                    const cirColor = color(193, 50, 100);
                    cirColor.setAlpha(127 + 127 * sin(millis()/700));
                    fill(cirColor);
                } else if (innerCir == 1) {
                    const cirColor = color(235, 50, 100);
                    cirColor.setAlpha(127 + 127 * sin(millis()/700));
                    fill(cirColor);
                }

                d = dist(mouseX, mouseY, x, i);
                let nDiam = innerCir * diamMult;
                if (d < innerCir * diamMult) { 
                    // x += 0.4;
                    i+=0.4; }
                ellipse(x, i, nDiam);
            }
        }
        row++; // offset / return next row
    }    
}