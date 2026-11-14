let polygons = []; let num = 18;
let side0 = 4; let sideInc = 2;
let r0 = 20; let rInc = 10;
let period0 = 5;

let midiNotes = [55, 60, 64, 67, 72, 79, 84, 88, 91];

let soundOn = false;

function setup() {
  createCanvas(400, 400);
  outputVolume(0); // start silent
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

  noStroke();
  fill(80);
  textAlign(CENTER);
  textSize(14);
  text(soundOn ? 'Click to turn sound off' : 'Click to turn sound on', width/2, 24);

  translate(width/2, height/2);
  for (let i=num-1; i>=0; i--) {
    polygons[i].update();
    polygons[i].display();
  }
  
  
}

function setSound(on) {
  soundOn = on;
  if (on) userStartAudio();
  outputVolume(on ? 1 : 0, 0.1);
}

// Click or tap the sketch to switch sound on and off
function mousePressed() {
  setSound(!soundOn);
}

// Lets the "Turn sound off" button on katechon.design mute the sketch
window.addEventListener('message', function (e) {
  if (e.data === 'sound-off') setSound(false);
});
