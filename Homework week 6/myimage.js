class myImage 
{
    constructor(myFilePath, x, y, w, h)
    {
        this.myFilePath = myFilePath
        this.myImage = loadImage(this.myFilePath);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    draw()
    {
        image(this.myImage, this.x, this.y, this.w, this.h);
       
    }
}