let img;
let img2;
let imgX = 10;
let imgY = 10;
let imgX2 = 400;
let imgY2 = 400;

function preload() {
    img = loadImage('images/move1.png');
    img2 = loadImage('images/food1.jpg');
}

function setup() {
    createCanvas(1500, 1000);
}

function draw() {
    background(120);imgX2 += random(-2, 2);
    imgY2 += random(-2, 2);

    // Controls//
    if (keyIsDown(LEFT_ARROW)) imgX -= 5;
    if (keyIsDown(RIGHT_ARROW)) imgX += 5;
    if (keyIsDown(UP_ARROW)) imgY -= 5;
    if (keyIsDown(DOWN_ARROW)) imgY += 5;

    
    if (img) image(img, imgX, imgY, 400, 300);
    if (img2) image(img2, imgX2, imgY2, 200, 150);
}
