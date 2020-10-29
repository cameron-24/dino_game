var person_img;
var cactus_img;
var bg_img;
var person;
var cacti = [];
var bg;

function preload() {
  person_img = loadImage('person_guy.gif');
  cactus_img = loadImage('cactus.png');
  bg_img = loadImage('background.png');
}
function setup() {
  createCanvas(800,450);
  person = new Person(person_img);
  bg = new Background(bg_img);
}
function keyPressed() {
  if (key == ' '){
    person.jump();
  }
}

function draw() {
  
  if (random(1) < 0.005) {
    cacti.push(new Cactus(cactus_img));
  }
  bg.show();
  bg.move();
  
  for (var cactus of cacti) {
    cactus.move();
    cactus.show();
    if (person.hits(cactus)) {
      console.log('game over');
      noLoop();
    }
  }
  
  person.show();
  person.move();
}
