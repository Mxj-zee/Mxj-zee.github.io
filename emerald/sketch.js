let flowers = [];

function setup() {
  createCanvas(800, 600);
  colorMode(HSL, 360, 100, 100);
  background(210, 50, 95);
}

function draw() {
  background(210, 50, 95, 20); // Slightly fading background for motion trails

  // Draw and update flowers
  for (let f of flowers) {
    f.update();
    f.display();
  }
}

// Add flower on mouse click
function mousePressed() {
  flowers.push(new Flower(mouseX, mouseY));
}

// Flower class
class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.maxSize = random(40, 80);
    this.colorHue = random(0, 360);
    this.growing = true;
  }

  update() {
    // Grow until maxSize
    if (this.growing) {
      this.size += 1;
      if (this.size >= this.maxSize) this.growing = false;
    } else {
      // Slowly change color over time
      this.colorHue = (this.colorHue + 0.5) % 360;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.colorHue, 80, 70);
    for (let i = 0; i < 8; i++) {
      ellipse(0, this.size / 2, this.size / 3, this.size);
      rotate(PI / 4);
    }
    fill(50, 80, 90);
    ellipse(0, 0, this.size / 2, this.size / 2);
    pop();
  }
}
