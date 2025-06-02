let img;

function preload() {
  img = loadImage('tree.jpg'); // Make sure the image file is available
}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  img.loadPixels();
  frameRate(500); // Faster drawing
  noStroke();
}

function draw() {
  let x = floor(random(img.width));
  let y = floor(random(img.height));

  let index = (x + y * img.width) * 4;
  let r = img.pixels[index];
  let g = img.pixels[index + 1];
  let b = img.pixels[index + 2];

  fill(r, g, b);
  ellipse(x, y, 5, 5); // Adjust size for more/less detail
}
