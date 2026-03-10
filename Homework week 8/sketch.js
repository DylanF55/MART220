let img;
let img2;
let imgX = 10;
let imgY = 10;
let imgX2 = 400;
let imgY2 = 400;
let score = 0;
let isNearFood = false;
let song;
let audioStarted = false;

// timer//
let startTime;
let TOTAL_SECONDS = 60;

function preload() {
    img = loadImage('images/move1.png');
    img2 = loadImage('images/food1.jpg');
    //Audio files//
    song = loadSound('audio/Butterfly.mp3');
}

function setup() {
    createCanvas(1500, 1000);
    startTime = millis();
    song.setVolume(0.1);
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
    text('Scoreboard: ' + score, 10, 50);

    if (!audioStarted) {
        textSize(25);
        text('click to begin', 400, 400);
    }

    // Controls//
    if (keyIsDown(LEFT_ARROW)) imgX -= 5;
    if (keyIsDown(RIGHT_ARROW)) imgX += 5;
    if (keyIsDown(UP_ARROW)) imgY -= 5;
    if (keyIsDown(DOWN_ARROW)) imgY += 5;
        //Scoring//
    let playerCenterX = imgX + 90;
    let playerCenterY = imgY + 150;
    let foodCenterX = imgX2 + 100;
    let foodCenterY = imgY2 + 75;
    let OBJToFood = dist(playerCenterX, playerCenterY, foodCenterX, foodCenterY);
    let proxRadius = 100;

    if (OBJToFood < proxRadius) {
        if (!isNearFood) {
            score++;
            isNearFood = true;
        }
    } else {
        isNearFood = false;
    }

    
    if (img) image(img, imgX, imgY, 400, 300);
    if (img2) image(img2, imgX2, imgY2, 200, 150);
}

function mousePressed() {
    if (!audioStarted) {

        userStartAudio();

        song.loop();

        audioStarted = true;

    }
}