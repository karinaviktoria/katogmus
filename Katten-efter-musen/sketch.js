let circleX;
let circleY;
let pointX;
let pointY;
let rX;
let rY;
let rlen;
let eX;
let eY;
let circleSpeed = 2;
let d = 50;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  circleX = mouseX;
  circleY = mouseY;
  pointX = mouseX + random(20, 100);
  pointY = mouseY + random(20, 100);
  strokeWeight(10);

  //for at kunne genstarte spillet, bruges denne kode, som fortæller, at vi har kan genstarte vores sketch.
  // Plus den vi danner knapper.
  resetSkecth();
  var button = createButton("reset");
  button.mousePressed(resetSkecth);
  var button = createButton("pause");
  button.mousePressed(pauseSketch);
}
//Denne knap er beregnet til at genstarte spillet.
//Dette gøres ved at genstarte noget af setup bliver kørt igennem igen.
function resetSkecth() {
  x = width / 2;
  y = height / 2;
  circleX = mouseX;
  circleY = mouseY;
  pointX = mouseX + random(20, 100);
  pointY = mouseY + random(20, 100);
  strokeWeight(10);
}
//Mening med denne knap, er at pause spillet så man kan genstarte den.
//Men jeg har ikke fået den til at virke endnu.
function pauseSketch() {}

function draw() {
  background(220);
  circle(circleX, circleY, d);
  point(pointX, pointY);

  //step 1
  rX = pointX - circleX;
  rY = pointY - circleY;

  //step 2
  rlen = sqrt(rX ** 2 + rY ** 2);

  //step 3
  eX = (1 / rlen) * rX;
  eY = (1 / rlen) * rY;

  //step 4
  circleX += circleSpeed * eX;
  circleY += circleSpeed * eY;
}

//Dette stykke kode gør at i stedet for, at katten følger efter en så skal man kun bevæge musen.
function mouseMoved(event) {
  pointX = mouseX;
  pointY = mouseY;
}
