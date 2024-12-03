new p5((p) => {
    var w = 460;
    var h = 500;

    var colThird;
    var twoColThird;
    var rowThird;
    var twoRowThird;
    var weight;
    
    p.setup = function () {
      p.createCanvas(w, h).parent('canvas1');
      p.strokeCap(SQUARE);

      colThird = p.mouseX;
      twoColThird = p.min(w - 3 * weight, (p.mouseX + w)/2);

      rowThird = p.mouseY;
      twoRowThird = (p.mouseY + h)/2;

      weight = 50;

    };
  
    p.draw = function () {

    colThird = min(w - 9 * weight, p.mouseX);
    if (colThird < weight * 4) colThird = weight * 4;
    twoColThird = min(w - 4 * weight, (p.mouseX + width)/2);
    rowThird = min(h - 9 * weight, p.mouseY);
    if (rowThird < weight * 3) rowThird = weight * 3;
    twoRowThird = min(height - 3 * weight, (mouseY + height)/2);

      p.background(255);
      p.fill(137, 229, 97);
      p.rect(w/5, h/4 * p.sin(p.millis()/1000) + h/2, w/6, h/6, 20);
      p.fill(152, 214, 255);
      p.rect(2 * w/5, h/4 * p.cos(p.millis()/1000) + h/2, w/6, h/8, 20);
      p.fill(245, 200, 94);
      p.rect(3/5 * w, h/4 * (-1) * p.cos(p.millis()/1000) + h/2, w/6, h/4, 20);
      p.fill(241, 80, 80);
      p.rect(4 * w/5, h/4 * (-1) * p.sin(p.millis()/1000) + h/2, w/6, h/12, 20);
    };
  });

  var colThird;
var twoColThird;

var rowThird;
var twoRowThird;

var weight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeCap(SQUARE);
  
  colThird = mouseX;
  twoColThird = min(width - 3 * weight, (mouseX + width)/2);
  
  rowThird = mouseY;
  twoRowThird = (mouseY + height)/2;
  
  weight = 50;
}


function guidelines() {
  line(colThird, 0, colThird, height);
  line(twoColThird, 0, twoColThird, height);
  line(0, rowThird, width, rowThird);
  line(0, twoRowThird, width, twoRowThird);
}

function draw() {
  colThird = min(width - 9 * weight, mouseX);
  if (colThird < weight * 4) colThird = weight * 4;
  twoColThird = min(width - 4 * weight, (mouseX + width)/2);
  rowThird = min(height - 9 * weight, mouseY);
  if (rowThird < weight * 3) rowThird = weight * 3;
  twoRowThird = min(height - 3 * weight, (mouseY + height)/2);
  
  background(255);
  guidelines();
  strokeWeight(weight);
  
  left();
  middle();
  right();
  strokeWeight(1);
}

function left() {
  line(weight/2, rowThird + weight/2, colThird - weight/2, rowThird + weight/2);
  line((colThird)/2 - weight/2, weight, (colThird)/2 - weight/2, height - weight);
  line((colThird)/2 - weight/2, rowThird + weight/2, weight, (rowThird + twoRowThird)/2);
  line((colThird)/2 - weight/2, rowThird + weight/2, colThird - weight, rowThird + (twoRowThird - rowThird) * 3/4);
}

function middle() {
  line(colThird + weight/2, rowThird - weight/2, twoColThird - weight/2, rowThird - weight/2);
  line(twoColThird - weight, rowThird - weight/2, colThird - weight/2, twoRowThird + weight);
  
  line(colThird + weight, rowThird + weight, twoColThird - weight/2, twoRowThird + (height - twoRowThird)/3);
  
}

function right() {
  line(twoColThird + weight/2, rowThird + weight/2, width - weight/2, rowThird + weight/2);
  line((twoColThird + width)/2 + weight/2, weight, (twoColThird + width)/2 + weight/2, height - weight);
  line(twoColThird + (width - twoColThird)/5, height - weight * 3/2, (twoColThird + width)/2 + weight/2, height - weight * 3/2);
  line(twoColThird, rowThird + (twoRowThird - rowThird)/3, twoColThird + (width - twoColThird)/3, twoRowThird - weight);
}