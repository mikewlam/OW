let vid;

function preload () {
    vid = loadImage('data/OW.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  translate(windowWidth/2, windowHeight/2);
  imageMode(CENTER);
  noCursor();
}


function draw() {
  background(255);
  image(vid, windowWidth/2, windowHeight/2, 720, 405);
  ellipse(mouseX, mouseY, 10, 10);
  text('IDENTITY SYSTEM', windowWidth/2-360, windowHeight/2+214);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
