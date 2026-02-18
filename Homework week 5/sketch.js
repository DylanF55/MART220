let x = [];
let y = [];
let diameter = [];
let r = [];
let g = [];
let b = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 5; i++) {
    x[i] = random(10, width);
    y[i] = random(10, height);
    diameter[i] = random(5, 50);
    r[i] = random(255);
    g[i] = random(255);
    b[i] = random(255);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < x.length; i++) {
    fill(r[i], g[i], b[i]);
    circle(x[i], y[i], diameter[i]);
  }
}