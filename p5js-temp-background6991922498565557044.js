class Background {
  constructor(image) {
    this.im = image;
    this.x = 0;
    this.speed = 10;
  }  
  
  show() {
    push();
    scale(-1.0,1.0);
    image(this.im, ((this.x + width)%(2*width) - width), 0, -width, height);
    pop();
    image(this.im, width - this.x, 0, width, height);
    
   
  }
  
  
  
  move() {
    this.x += this.speed;
    this.x = this.x % (2*width);
  }
}
