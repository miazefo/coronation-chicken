function setup() {
  createCanvas(600, 500);
}

function draw() {
  //change the colour of the background using a hex code
  background('#00ff00');
  //draw a tree shape in the centre of the screen
textSize(30)
text('⭐️',286,70);
  
noStroke();
    beginShape();
    vertex(300, 70);
    vertex(260, 150);
    vertex(280, 150);
    vertex(220, 230);
    vertex(260, 230);
    vertex(190, 310);
    vertex(280, 310);
    vertex(280, 350);
    vertex(320, 350);
    vertex(320, 310);
    vertex(410, 310);
    vertex(340, 230);
    vertex(380, 230);
    vertex(320, 150);
    vertex(340, 150);
    endShape();

// add presents
  gift1();
  gift2();
  gift3();

// change the colour of the tree
}



function gift1() {
  textSize(70);
  text("🎁", 210, 390);
}

function gift2() {
  textSize(50);
  text("🎁", 320, 380);
}

function gift3() {
  textSize(60);
  text("🎁", 270, 400);
}