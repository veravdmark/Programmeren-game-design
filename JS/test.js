function setup() {
    var myCanvas = createCanvas(1000,500);
    background('lightblue');
    myCanvas.parent('processing');
    noLoop();
    raster = new Raster(5,10);

}

function draw() {
    raster.teken();
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

var Muis = {
  x: 400,
  y: 300,
  animatie: [],
  aantalFrames: 6,
  frameNummer: 3,
  stapGrootte: null,

  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.stapGrootte;
      this.frameNummer = 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.stapGrootte;
      this.frameNummer = 1;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.stapGrootte;
      this.frameNummer = 4;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.stapGrootte;
      this.frameNummer = 5;
    }

    this.x = constrain(this.x,0,canvas.width-raster.celGrootte);
    this.y = constrain(this.y,0,canvas.height-raster.celGrootte);
  },

  wordtGeraakt(vijand) {
    if (this.x == vijand.x && this.y == vijand.y) {
      return true;
    }
    else {
      return false;
    }
  },

  toon() {
    image(this.animatie[this.frameNummer],this.x,this.y,raster.celGrootte,raster.celGrootte);
  }
}


var kat = {
  x: 700,
  y: 200,
  sprite: null,
  stapGrootte: null,

  beweeg() {
    this.x += floor(random(-1,2))*this.stapGrootte;
    this.y += floor(random(-1,2))*this.stapGrootte;

    this.x = constrain(this.x,0,canvas.width - raster.celGrootte);
    this.y = constrain(this.y,0,canvas.height - raster.celGrootte);
  },

  toon() {
    image(this.sprite,this.x,this.y,raster.celGrootte,raster.celGrootte);
  }
}


function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  kat.sprite = loadImage("images/sprites/Kat100px/Kat.png");
  for (var b = 0;b < muis.aantalFrames;b++) {
    frameMuis = loadImage("images/sprites/Muis100px/Muis_" + b + ".png");
    muis.animatie.push(frameMuis);
  }
}

function setup() {
  var myCanvas = createCanvas(900,600);
  myCanvas.parent('processing');
  frameRate(10);
  raster.berekenCelGrootte();
  muis.stapGrootte = 1*raster.celGrootte;
  kat.stapGrootte = 1*raster.celGrootte;
}

function draw() {
  background(brug);
  raster.teken();
  muis.beweeg();
  kat.beweeg();
  muis.toon();
  kat.toon();
  if (muis.wordtGeraakt(kat)) {
    noLoop();
  }
}