class Polygon {
  constructor(sides, r, period, note) {
    this.sides = sides; 
    this.r = r;
    this.period = period;
    this.angle = 0;
    
    this.note = note;
    this.osc = new p5.Oscillator();
    this.osc.start();
    this.osc.freq(midiToFreq(this.note));
    this.osc.amp(0);
    
    this.collide = false;
  }
  
  update() {
    this.angle += (TWO_PI/this.period)/60;
    
    if (this.collision()) {
      this.collide = true;
      this.osc.amp(1, 0.05);
    } else {
      this.collide = false;
      this.osc.amp(0, 0.05);
    }
  }
  
  display() {
    noStroke();
    if (this.collide) {
      fill(136, 46, 95, 90);
    } else {
      fill(255, 80);
    }
    
    
    push();
    rotate(this.angle);
    beginShape();
    for (let i=0; i<this.sides; i++) {
      let a = TWO_PI/this.sides * i;
      let x = this.r * cos(a);
      let y = this.r * sin(a);

      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
    
  }
  
  collision() {
    for (let i=0; i<this.sides; i++) {
      let angle = (TWO_PI/this.sides * i) + this.angle;
      let y = this.r * sin(angle);
      
      if (abs(y) < 2) {
        return true;
      }
    }
    return false;
  }
  
  
  
}