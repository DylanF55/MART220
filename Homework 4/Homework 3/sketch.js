var x =300;
var y =500;
var xx =10;
var yy =200;


function setup()
            {
                createCanvas(900,900);
            }
            function draw(){
                background(0);
                function keyPressed(){
            if(keyPressed){
                x -= 205; }
            }
                fill(0,100,255);
                    //eyes//
                circle(150,150,50);
                circle(150,210,50);
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
                text("Buzzards",40,100)
                 fill(227, 42, 14);
                textFont('Courier New');
                 textSize(40);
                text("Dylan Fullerton",450,800)
            }

            function keyPressed(){
            if (keycode == 32){
                x -= 25; }
            }



            
        