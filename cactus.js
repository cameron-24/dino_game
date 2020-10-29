class Cactus{
  constructor(image) {
    this.im = image; 
    this.r = 75; //r radius
    this.x = width; //x position
    this.y = height - this.r;
  }
  
  move() {
    this.x -= 16;
  }
   
   show(){
     image(this.im, this.x, this.y, this.r, this.r);
  }
}
