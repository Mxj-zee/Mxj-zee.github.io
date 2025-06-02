function setup() {
  createCanvas(400, 400);
  noLoop(); // Stop looping since this version is static
}

function draw() {
  background(255); // White background
  drawGrid();

  // Head
  fill(255, 220, 180);
  stroke(0);
  ellipse(200, 200, 200, 200); // Face circle

  // Eyes
  fill(255); // White eyes
  ellipse(160, 170, 30, 20);
  ellipse(240, 170, 30, 20);

  // Pupils
  fill(0);
  ellipse(160, 170, 10, 10);
  ellipse(240, 170, 10, 10);

  // Smile
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(200, 220, 100, 60, 0, PI); // Smile arc
}

// Optional: draw 40x40 grid for reference
function drawGrid() {
  stroke(220);
  for (let x = 0; x <= width; x += 40) {
    line(x, 0, x, height);
  }
  for (let y = 0; y <= height; y += 40) {
    line(0, y, width, y);
  }
}
