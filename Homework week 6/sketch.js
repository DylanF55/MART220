var food1, food2, food3, food4;

function setup()
{
    createCanvas(600, 800);
    food1 = new myImage("images/food1.jpg", 10, 100, 130, 130);
    food2 = new myImage("images/food2.jpg", 150, 100, 130, 130);
    food3 = new myImage("images/food3.jpg", 290, 100, 130, 130);
    food4 = new myImage("images/food4.jpg", 430, 100, 130, 130);
}

function draw()
{
    background(120);
    food1.draw();
    food2.draw();
    food3.draw();
    food4.draw();
}
