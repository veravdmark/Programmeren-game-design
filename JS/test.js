function setup() {
    var myCanvas = createCanvas(1000,500);
    background('lightblue');
    myCanvas.parent('processing');
    noLoop();
    raster = new Raster(5,10);
}

function draw() {
    raster.teken();
    muis.teken();
}

class Raster {
  constructor(r,k) {
    this.aantalRijen = r;
    this.aantalKolommen = k;
    this.celGrootte = 100;
  }

teken() {
    push();
    noFill();
    stroke('grey');
    for (var rij = 0;rij<this.aantalRijen;rij++) {
      for (var kolom = 0;kolom<this.aantalKolommen;kolom++) {
        rect(kolom*this.celGrootte,rij*this.celGrootte,this.celGrootte,this.celGrootte);
      }
    }
    pop();
  }
}

