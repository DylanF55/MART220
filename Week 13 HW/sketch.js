let img;
let imge;
let pg;
let myModel;
let sphere1X = 0, sphere1Y = -60;
let sphere2X = 0, sphere2Y = 160;

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
}

function mousePressed() {
  sphere1X = random(-200, 200);
  sphere1Y = random(-200, 200);
  sphere2X = random(-200, 200);
  sphere2Y = random(-200, 200);
}

function draw(){
  background(39);

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
  translate(-160, 100, -100);
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
    //Eyeball model and fire texture//
  push();
  translate(0, 90, 0);      
  scale(5);
  rotateX(frameCount * .06); 
  ambientLight(150);         
  noStroke();
  texture(imge)                  
  model(myModel);
  pop();


}