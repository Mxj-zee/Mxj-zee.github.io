function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  drawGrid();

  // Head
  fill(255, 220, 180);
  stroke(0);
  ellipse(200, 200, 200, 200);

  // Eyes
  fill(255);
  ellipse(160, 170, 30, 20);
  ellipse(240, 170, 30, 20);

  // Pupils that follow the mouse (limited to eye area)
  let leftPupilX = constrain(mouseX, 155, 165);
  let rightPupilX = constrain(mouseX, 235, 245);
  let pupilY = constrain(mouseY, 165, 175);

  fill(0);
  ellipse(leftPupilX, pupilY, 10, 10);
  ellipse(rightPupilX, pupilY, 10, 10);

  // Smile
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(200, 220, 100, 60, 0, PI);
}

function drawGrid() {
  stroke(220);
  for (let x = 0; x <= width; x += 40) {
    line(x, 0, x, height);
  }
  for (let y = 0; y <= height; y += 40) {
    line(0, y, width, y);
  }
}
