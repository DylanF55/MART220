let img;
let imge;
let pg;
let myModel;
let sphere1X = 0, sphere1Y = -60;
let sphere2X = 0, sphere2Y = 160;
let dotX = 0, dotY = 0;
let dotSpeed = 3;
let score = 0;
let yellowDotX = 120, yellowDotY = 0;
let yellowDotR = 7;
let maxHealth = 100;
let health = 100;
let lastDamageFrame = 0;
let damageCooldown = 15;

function circleCircleCollision(ax, ay, ar, bx, by, br) {
  return dist(ax, ay, bx, by) < ar + br;
}

function circleBoxCollision(cx, cy, cr, bx, by, boxSize) {
  const half = boxSize / 2;
  const nearestX = constrain(cx, bx - half, bx + half);
  const nearestY = constrain(cy, by - half, by + half);
  const dx = cx - nearestX;
  const dy = cy - nearestY;
  return dx * dx + dy * dy < cr * cr;
}

function pointHitsAnything(x, y, radius) {
  const boxSize = 30;
  const sphereR = 50;

  if (circleBoxCollision(x, y, radius, sphere1X, sphere1Y, boxSize)) return true;
  if (circleBoxCollision(x, y, radius, sphere2X, sphere2Y, boxSize)) return true;
  if (circleBoxCollision(x, y, radius, -250, 100, boxSize)) return true;
  if (circleBoxCollision(x, y, radius, 200, -200, boxSize)) return true;

  if (circleCircleCollision(x, y, radius, 0, -60, sphereR)) return true;
  if (circleCircleCollision(x, y, radius, 0, 160, sphereR)) return true;
  if (circleCircleCollision(x, y, radius, -200, -200, sphereR)) return true;
  if (circleCircleCollision(x, y, radius, -200, 200, sphereR)) return true;

  return false;
}

function dotHitsAnything(x, y) {
  return pointHitsAnything(x, y, 8);
}

function respawnYellowDot() {
  for (let i = 0; i < 100; i++) {
    const x = random(-235, 235);
    const y = random(-235, 235);
    if (!pointHitsAnything(x, y, yellowDotR) && !circleCircleCollision(x, y, yellowDotR + 2, dotX, dotY, 8)) {
      yellowDotX = x;
      yellowDotY = y;
      return;
    }
  }
}

function preload(){
  img = loadImage('glassball.jpg');
  imge = loadImage('firetxt.jpg');
  myModel = loadModel('eyeball.obj', true);
}

function setup(){
  createCanvas(500, 500, WEBGL);
  ortho(-width, width, height, -height, 0.1, 2000);
  // text//
  pg = createGraphics(256, 256);
  pg.image(img, 0, 0, 256, 256);
  pg.fill(255);
  pg.noStroke();
  pg.textSize(28);
  pg.textAlign(CENTER, CENTER);
  pg.text('One million Norms by Dylan F', 128, 128);

  respawnYellowDot();
}

function mousePressed() {
  sphere1X = random(-200, 200);
  sphere1Y = random(-200, 200);
  sphere2X = random(-200, 200);
  sphere2Y = random(-200, 200);
  respawnYellowDot();
}

function draw(){
  background(39);

  let nextX = dotX;
  let nextY = dotY;

  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) nextX -= dotSpeed;
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) nextX += dotSpeed;
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) nextY -= dotSpeed;
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) nextY += dotSpeed;

  nextX = constrain(nextX, -240, 240);
  nextY = constrain(nextY, -240, 240);

  let touchingObstacle = dotHitsAnything(nextX, nextY);

  if (touchingObstacle) {
    if (frameCount - lastDamageFrame > damageCooldown) {
      health = max(0, health - 5);
      lastDamageFrame = frameCount;
    }
  } else {
    dotX = nextX;
    dotY = nextY;
  }

  if (circleCircleCollision(dotX, dotY, 8, yellowDotX, yellowDotY, yellowDotR)) {
    score++;
    respawnYellowDot();
  }

  push();
  translate(sphere1X, sphere1Y, -100);
  rotate(frameCount * 0.03, [1, 90, 90]);
  noStroke();
  texture(img);
  box(30);
  pop();

  push();
  translate(sphere2X, sphere2Y, -100);
  rotate(frameCount * 0.01, [1, 90, 90]);
  noStroke();
  texture(img);
  box(30);
  pop();

  push();
  translate(-250, 100, -100);
  rotate(frameCount * 0.02, [1, 70, 90]);
  noStroke();
  texture(img);
  box(30);
  pop();

  push();
  translate(200, -200, -100);
  rotate(frameCount * 0.02, [1, 70, 90]);
  noStroke();
  texture(img);
  box(30);
  pop();


  
  push();
  translate(0, -60, -100);
  rotate(frameCount * 0.03, [1, 1, 0]);
  noStroke();
  texture(img);
  sphere(50);
  pop();

  push();
  translate(0, 160, -100);
  rotate(frameCount * 0.03, [1, 1, 0]);
  noStroke();
  texture(img);
  sphere(50);
  pop();

  push();
  translate(-200, -200, -100);
  rotate(frameCount * 0.03, [1, 1, 0]);
  noStroke();
  texture(img);
  sphere(50);
  pop();

  push();
  translate(-200, 200, -100);
  rotate(frameCount * 0.03, [1, 1, 0]);
  noStroke();
  texture(img);
  sphere(50);
  pop();

  push();
  translate(dotX, dotY, -100);
  noStroke();
  fill(255, 80, 80);
  sphere(8);
  pop();

  push();
  translate(yellowDotX, yellowDotY, -100);
  noStroke();
  fill(255, 220, 0);
  sphere(yellowDotR);
  pop();

  push();
 resetMatrix();              
 fill(255);
 noStroke();
 textSize(22);
 textAlign(LEFT, TOP);
 text('Score: ' + score, 15 - width / 2, 15 - height / 2);
 textSize(16);
 text('Health: ' + health, 15 - width / 2, 45 - height / 2);

 fill(60);
 rect(15 - width / 2, 70 - height / 2, 180, 16, 4);
 fill(60, 220, 90);
 rect(15 - width / 2, 70 - height / 2, map(health, 0, maxHealth, 0, 180), 16, 4);
 pop();
  


}