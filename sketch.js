/*
----- Coding Tutorial by Patt Vira ----- 
Name: Musical Onion
Video Tutorial: https://youtu.be/cRzHaiL9HCE

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let polygons = []; let num = 18;
let side0 = 4; let sideInc = 2;
let r0 = 20; let rInc = 10;
let period0 = 5;

let midiNotes = [55, 60, 64, 67, 72, 79, 84, 88, 91];

function setup() {
  createCanvas(400, 400);
  for (let i=0; i<num; i++) {
    let sides = side0 + i*sideInc;
    let r = r0 + i*rInc;
    let period = period0 * (i + 1);
    let note = midiNotes[i % midiNotes.length];
    polygons[i] = new Polygon(sides, r, period, note);
  }

}

function draw() {
  background("#EDE8D0");
  translate(width/2, height/2);
  for (let i=num-1; i>=0; i--) {
    polygons[i].update();
    polygons[i].display();
  }
  
  
}