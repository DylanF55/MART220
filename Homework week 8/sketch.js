let img;
let img2;
let imgX = 10;
let imgY = 10;
let imgX2 = 400;
let imgY2 = 400;

// timer//
let startTime;
let TOTAL_SECONDS = 60;

function preload() {
    img = loadImage('images/move1.png');
    img2 = loadImage('images/food1.jpg');
}

function setup() {
    createCanvas(1500, 1000);
    startTime = millis(); 
}

function draw() {
    background(120);
    
    imgX2 += random(-100, 100);
    imgY2 += random(-100, 100);

    let elapsed = (millis() - startTime) / 1000;                  
    let remaining = max(0, TOTAL_SECONDS - elapsed);            
    let secs = floor(remaining);


    fill(255);
    textSize(32);
    textAlign(LEFT, TOP);
    text(nf(secs, 2), 10, 10);

    // Controls//
    if (keyIsDown(LEFT_ARROW)) imgX -= 5;
    if (keyIsDown(RIGHT_ARROW)) imgX += 5;
    if (keyIsDown(UP_ARROW)) imgY -= 5;
    if (keyIsDown(DOWN_ARROW)) imgY += 5;

    
    if (img) image(img, imgX, imgY, 400, 300);
    if (img2) image(img2, imgX2, imgY2, 200, 150);
}