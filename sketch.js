var img;
function setup () {
   img = loadImage('https://78.media.tumblr.com/db026282ecb36a41036d580a6566860b/tumblr_p2oc23s1kD1v29fzqo1_100.png');
   frameRate(10);
    var myCanvas = createCanvas(800,250);
    myCanvas.parent('mySketch');

    background(184, 133, 202);

}

function draw() {
   image(img, mouseX, mouseY, 150, 75);
fill(255);
 textSize(35);
  text("e m i    l a m b y",270,130);
  noStroke();
 //stars

 if (mouseIsPressed) {
background(184, 133, 202);
  }
}
