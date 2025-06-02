// Sample data: city, temperature in °C (approximate)
const cityData = [
  { city: 'New York', temp: 13.0 },
  { city: 'London', temp: 11.0 },
  { city: 'Tokyo', temp: 16.0 },
  { city: 'Sydney', temp: 18.0 },
  { city: 'Moscow', temp: 5.8 },
  { city: 'Cairo', temp: 22.0 },
  { city: 'Rio de Janeiro', temp: 24.0 }
];

let circles = [];

function setup() {
  createCanvas(700, 400);
  textAlign(CENTER, CENTER);
  colorMode(HSL);

  // Map cities horizontally spaced
  for (let i = 0; i < cityData.length; i++) {
    let x = map(i, 0, cityData.length - 1, 80, width - 80);
    let y = height / 2;
    let temp = cityData[i].temp;
    let size = map(temp, 0, 30, 30, 100);
    let hue = map(temp, 0, 30, 240, 0); // Blue (cold) to Red (hot)

    circles.push({
      x,
      y,
      size,
      baseSize: size,
      hue,
      city: cityData[i].city,
      temp,
      pulse: 0
    });
  }
}

function draw() {
  background(220);

  for (let c of circles) {
    // Animate pulse effect
    c.pulse += 0.05;
    let currentSize = c.baseSize + sin(c.pulse) * 5;

    fill(c.hue, 80, 60);
    noStroke();
    ellipse(c.x, c.y, currentSize);

    fill(0);
    textSize(14);
    text(c.city, c.x, c.y + currentSize / 2 + 15);

    // If mouse is over circle, show temp label
    let d = dist(mouseX, mouseY, c.x, c.y);
    if (d < currentSize / 2) {
      fill(0);
      rectMode(CENTER);
      rect(c.x, c.y - currentSize / 2 - 20, 80, 30, 5);
      fill(255);
      text(`${c.temp} °C`, c.x, c.y - currentSize / 2 - 20);
    }
  }

  // Title and source
  fill(0);
  textSize(18);
  text('Average Annual Temperature of Cities (°C)', width / 2, 30);
  textSize(12);
  text('Source: World Bank Climate Data (simplified)', width / 2, height - 20);
}
