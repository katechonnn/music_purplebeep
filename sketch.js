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

  // Hint shown until the visitor clicks and sound unlocks
  if (getAudioContext().state !== 'running') {
    noStroke();
    fill(80);
    textAlign(CENTER);
    textSize(14);
    text('Click to turn on sound', width/2, 24);
  }

  translate(width/2, height/2);
  for (let i=num-1; i>=0; i--) {
    polygons[i].update();
    polygons[i].display();
  }
  
  
}

// Browsers block audio until the visitor clicks or taps
function mousePressed() {
  userStartAudio();
}

function touchStarted() {
  userStartAudio();
}
