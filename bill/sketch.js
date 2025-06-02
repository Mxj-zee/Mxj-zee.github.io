function setup() {
  createCanvas(800, 400);
  background(180, 230, 255); // Sky blue background
  noLoop();
}

function draw() {
  drawRoad();
  drawCar(250, 250);
}

function drawRoad() {
  fill(50);
  rect(0, 300, width, 100); // Road
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, 350, i + 20, 350); // Lane dividers
  }
  noStroke();
}

function drawCar(x, y) {
  // Car shadow
  fill(0, 0, 0, 30);
  ellipse(x + 150, y + 50, 200, 30);

  // Main car body
  fill(220, 20, 60); // Crimson red
  stroke(0);
  strokeWeight(1.5);
  rect(x, y - 40, 300, 60, 20); // Lower body
  rect(x + 50, y - 90, 200, 60, 15); // Upper body (cabin)

  // Windows
  fill(200, 240, 255);
  rect(x + 60, y - 85, 60, 40, 5); // Front window
  rect(x + 140, y - 85, 60, 40, 5); // Rear window

  // Door line
  stroke(100);
  line(x + 150, y - 40, x + 150, y + 20);

  // Wheels
  drawWheel(x + 70, y + 30);
  drawWheel(x + 230, y + 30);

  // Headlight
  fill(255, 255, 100);
  ellipse(x - 10, y - 20, 20, 10);

  // Taillight
  fill(255, 50, 50);
  ellipse(x + 310, y - 20, 15, 10);
}

function drawWheel(cx, cy) {
  fill(30);
  ellipse(cx, cy, 50, 50); // Tire
  fill(150);
  ellipse(cx, cy, 20, 20); // Hubcap
}
