function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(HSL, 360, 100, 100);
}

function draw() {
  background(220, 30, 95);
  let gridSize = 20;

  for (let y = gridSize / 2; y < height; y += gridSize) {
    for (let x = gridSize / 2; x < width; x += gridSize) {
      // Calculate size with noise for smooth animation
      let size = noise(x * 0.05, y * 0.05, frameCount * 0.01) * gridSize;
      
      // Color hue changes over time and position
      let hue = (frameCount * 2 + x + y) % 360;
      
      fill(hue, 80, 60);
      ellipse(x, y, size, size);
    }
  }
}
