class Person {
  constructor(image) {
    this.im = image; 
    this.r = 100; //r diamater
    this.x = 50; //x position
    this.y = height - this.r;
    
    this.vy = 0; //velocity in the y direction
    this.gravity = 2.5;
   
  }
  
  show() {
    image(this.im, this.x, this.y, this.r, this.r);
  }
  
  jump() {
    if(this.y == height - this.r) { //if we are on the ground
      this.vy = -30;
    }
}
  
  
  move() {
   //distance = rate * time
   // velocity = acceleration * time, vel = gravity * 1
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }



  hits(cactus) {
    //get center point of person
    //get center point of cactus
    //assume they are both circles
    //check if circles overlap
    var x_person = this.x + this.r * 0.5;
    var y_person = this.y + this.r * 0.5;
    var x_cactus = cactus.x + cactus.r * 0.5;
    var y_cactus = cactus.y + cactus.r * 0.5;
    var distance = sqrt(pow(x_person - x_cactus, 2) + pow(y_person - y_cactus, 2));
    var overlap_thresh = this.r * 0.5 + cactus.r * 0.5;
    if (distance < overlap_thresh) {
      return true;
    }
    else {
      return false;
    }
  }
}
