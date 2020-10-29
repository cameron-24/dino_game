class Background {
  constructor(image) {
    this.im = image;
    this.x = 0;
    this.speed = - 4;
  }  
  
  show() {
    image(this.im, ((this.x + width)%(2*width) - width), 0, width, height);
    image(this.im, (this.x + width)%(2*width), 0, width, height);
    console.log(((this.x + width)%(2*width) - width));
  }
  
  
  
  move() {
    this.x += this.speed;
  }
}
