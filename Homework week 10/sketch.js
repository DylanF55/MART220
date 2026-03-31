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
let playerW = 400;
let playerH = 300;
let blockSize = 140;
let SphereX = 180;
let SphereY = 860;
let SphereRadius = 20;
let SphereDiameter = SphereRadius * 2;
let sphereVisible = true;

//Particle Array//
const particles = [];

const rewardParticleCount = 2000;
const damageParticleCount = 100;

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

    // player boundary//
    imgX = width / 2 - playerW / 2;
    imgY = height / 2 - playerH / 2;
}

function draw() {
    background(120);

    let cornerBlocks = [

        { x: width - blockSize, y: 0, w: blockSize, h: blockSize },
        { x: 0, y: height - blockSize, w: blockSize, h: blockSize },
        { x: width - blockSize, y: height - blockSize, w: blockSize, h: blockSize }
    ];
    
    imgX2 += random(-100, 100);
    imgY2 += random(-100, 100);

    let elapsed = (millis() - startTime) / 1000;                  
    let remaining = max(0, TOTAL_SECONDS - elapsed);            
    let secs = floor(remaining);
        
    if (!audioStarted) {
        textSize(25);
        text('click to begin', 400, 400);
    }

    // Controls and collision for corner blocks.
    let nextX = imgX;
    let nextY = imgY;

    if (keyIsDown(LEFT_ARROW)) nextX -= 5;
    if (keyIsDown(RIGHT_ARROW)) nextX += 5;
    if (keyIsDown(UP_ARROW)) nextY -= 5;
    if (keyIsDown(DOWN_ARROW)) nextY += 5;

    nextX = constrain(nextX, 0, width - playerW);
    nextY = constrain(nextY, 0, height - playerH);

    let blockedX = false;
    for (let block of cornerBlocks) {
        if (rectsOverlap(nextX, imgY, playerW, playerH, block.x, block.y, block.w, block.h)) {
            blockedX = true;
            break;
        }
    }
    if (!blockedX) {
        imgX = nextX;
    }

    let blockedY = false;
    for (let block of cornerBlocks) {
        if (rectsOverlap(imgX, nextY, playerW, playerH, block.x, block.y, block.w, block.h)) {
            blockedY = true;
            break;
        }
    }
    if (!blockedY) {
        imgY = nextY;
    }
        //Scoring for proximity to food//
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
            spawnParticles(foodCenterX, foodCenterY, {
                count: rewardParticleCount,
                minSpeed: 1,
                maxSpeed: 4,
                minSize: 8,
                maxSize: 18,
                colorMin: [255, 220, 80],
                colorMax: [255, 170, 40]
            });
        }
    } else {
        isNearFood = false;
    }
    if (audioStarted && score >= 10 && song.isPlaying()) {
    song.stop();
    }

    if (score >= 10) {
    fill(255, 0, 0);
    textSize(80);
    textAlign(200, 200);
    text('You Win : >', 2, 2);
}


    if (sphereVisible && circleRectOverlap(SphereX, SphereY, SphereRadius, imgX, imgY, playerW, playerH)) {
        score = max(0, score - 1);
        spawnParticles(SphereX, SphereY, {
            count: damageParticleCount,
            minSpeed: 2,
            maxSpeed: 6,
            minSize: 6,
            maxSize: 16,
            colorMin: [255, 80, 80],
            colorMax: [200, 40, 180]
        });
        sphereVisible = false;
    }

    updateParticles();

    fill(0, 100, 255);
    noStroke();
    for (let block of cornerBlocks) {
        rect(block.x, block.y, block.w, block.h);
    }

    if (sphereVisible) {
        fill(180, 120, 255);
        circle(SphereX, SphereY, SphereDiameter);
    }

    if (img) image(img, imgX, imgY, playerW, playerH);
    if (img2) image(img2, imgX2, imgY2, 200, 150);
    drawParticles();

    fill(255);
    textSize(32);
    textAlign(LEFT, TOP);
    text(nf(secs, 2), 10, 10);
    text('Scoreboard: ' + score, 10, 50);
}

function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

function circleRectOverlap(cx, cy, cr, rx, ry, rw, rh) {
    let nearestX = constrain(cx, rx, rx + rw);
    let nearestY = constrain(cy, ry, ry + rh);
    let d = dist(cx, cy, nearestX, nearestY);
    return d <= cr;
}

function spawnParticles(x, y, options) {
    let count = options.count || 12;
    let minSpeed = options.minSpeed || 1;
    let maxSpeed = options.maxSpeed || 3;
    let minSize = options.minSize || 4;
    let maxSize = options.maxSize || 10;
    let colorMin = options.colorMin || [255, 255, 255];
    let colorMax = options.colorMax || [255, 255, 255];

    for (let i = 0; i < count; i++) {
        let angle = random(TWO_PI);
        let speed = random(minSpeed, maxSpeed);
        let maxLife = random(18, 36);

        particles.push({
            x: x,
            y: y,
            vx: cos(angle) * speed,
            vy: sin(angle) * speed,
            size: random(minSize, maxSize),
            life: maxLife,
            maxLife: maxLife,
            r: random(colorMin[0], colorMax[0]),
            g: random(colorMin[1], colorMax[1]),
            b: random(colorMin[2], colorMax[2])
        });
    }
}

function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        let particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.97;
        particle.vy = particle.vy * 0.97 + 0.05;
        particle.life -= 1;

        if (particle.life <= 0) {
            particles.splice(i, 1);
        }
    }
}

function drawParticles() {
    noStroke();

    for (let particle of particles) {
        let alpha = map(particle.life, 0, particle.maxLife, 0, 255);
        fill(particle.r, particle.g, particle.b, alpha);
        circle(particle.x, particle.y, particle.size);
    }
}

function mousePressed() {
    if (!audioStarted) {

        userStartAudio();

        song.loop();

        audioStarted = true;

    }
}