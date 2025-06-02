let img;
let pixelSize = 10; // Bigger value = more pixelated

function preload() {
  img = loadImage('tree.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  noStroke();
  img.loadPixels();

  for (let y = 0; y < img.height; y += pixelSize) {
    for (let x = 0; x < img.width; x += pixelSize) {
      let index = ((x + y * img.width) * 4);
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      fill(r, g, b);
      rect(x, y, pixelSize, pixelSize);
    }
  }
}
