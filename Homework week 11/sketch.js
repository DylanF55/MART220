let img;
let pg;
//Norm macdonald cube image//
function preload(){
  img = loadImage('nrm.jpg');

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
function draw(){
  background(39);

  push();
  translate(250, 100, -100);
  rotate(frameCount * 0.02, [1, 70, 90]);
  texture(img);
  box(30);
  pop();

  push();
  translate(160, 100, -100);
  rotate(frameCount * 0.02, [1, 70, 90]);
  texture(img);
  box(30);
  pop();

  push();
  translate(-250, 100, -100);
  rotate(frameCount * 0.02, [1, 70, 90]);
  texture(img);
  box(30);
  pop();

  push();
  translate(-160, 100, -100);
  rotate(frameCount * 0.02, [1, 70, 90]);
  texture(img);
  box(30);
  pop();

  push();
  translate(0, 100, -100);
  rotate(frameCount * 0.002, [20, 90, 90]);
  texture(pg);
  box(200);
  pop();

  //Norm Planets//
  
  push();
  translate(0, -120, -100);
  rotate(frameCount * 0.03, [1, 1, 0]);
  texture(img);
  sphere(50);
  pop();

  push();
  translate(0, 320, -100);
  rotate(frameCount * 0.03, [1, 1, 0]);
  texture(img);
  sphere(50);
  pop();

}