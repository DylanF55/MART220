
let beefstrag;
let beefstragO;
let xmpl1;

function preload() {
beefstrag = loadImage('assets/images/beefstrag.jpg');
beefstragO = loadImage('assets/images/beefstragO.jpg');
xmpl1 = loadImage('assets/images/xmpl1.jpeg');
}
function setup()
            {
                createCanvas(900,900);
            }
            function draw(){
                background(0);
                image(beefstrag, 0, 0 ,width/2, height);
                image(beefstragO, 0, 0 ,width/2, height);
                image(xmpl1, 0, 0 ,width/2, height);

                function keyPressed(){
            if(keyPressed){
                x -= 205; }
            }
                fill(0,100,255);
                    //eyes//
                circle(190,150,50);
                circle(190,210,50);
                circle(150,380,50);
                circle(450,150,50);
                circle(450,210,50);
                circle(450,380,50);
                circle(300,270,50);

                fill(0, 89, 28);
                    //mouth and foliage//
                ellipse(600, 50, 80, 400);
                ellipse(50, 50, 80, 400);
                fill(0,100,255);
                ellipse(x, y, xx, yy);
                

                 fill(227, 42, 14);
                textFont('Courier New');
                 textSize(40);
                text("Stragonoff Forever",40,100)
                 fill(227, 42, 14);
                textFont('Courier New');
                 textSize(40);
                text("Dylan Fullerton",450,800)
            }



            
        