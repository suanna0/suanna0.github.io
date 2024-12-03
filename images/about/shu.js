new p5((p) => {
    var w = 460;
    var h = 500;
    
    p.setup = function () {
      p.createCanvas(w, h).parent('canvas1');
    };
  
    p.draw = function () {
      p.background(250, 255, 224);
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