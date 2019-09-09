function setup() {
var myCanvas = createCanvas(1000,500);
background('lightblue');
myCanvas.parent('processing');
noLoop();
}

class Muis {
  constructor() {
    this.x = -170;
    this.y = 100;
    this.snelheid = 10;
    this.gegeten = 0;
  }

  ren() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.snelheid;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.snelheid;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        this.y += this.snelheid;
    }
    if (keyIsDown(LEFT_ARROW)) {
        this.y += this.snelheid;
    }
    this.x += this.snelheid;
  }

  eet(p) {
    if (dist(this.x + 155,this.y + 60,p.x,p.y) < 20) {
      return true;
    }
    else {
      return false;
    }
  }

  teken() {
    push();
    noStroke();
    translate(this.x,this.y);
    //fill('yellow');
    //triangle(0,0,0,100,50,50);
    fill('grey');
    ellipse(100,50,50);
    //fill('steelblue')
    //triangle(145,60,165,50,165,70);
    fill('black');
    ellipse(90,40,5,5);
    fill('black');
    ellipse(110,40,5,5);
    fill('black');
    ellipse(100,52,20,20);
    fill('grey');
    ellipse(60,30,50,50)
    fill('grey');
    ellipse(140,30,50,50);
    fill('rosybrown');
    ellipse(60,30,40,40);
    fill('rosybrown');
    ellipse(140,30,40,40);
    fill('red');
    pop();
  }
}

class Kaas {
  constructor(d) {
    this.x = random(700,800);
    this.y = random(100,500);
    this.diameter = d;
  }

 beweeg() {
   this.x = constrain(this.x,700,800);
   this.y = constrain(this.y,20,580);
  }

  teken() {
    push();
    noStroke();
    translate(this.x,this.y);
    fill('yellow');
    triangle(0,0,20,30,30,10);
    pop();
  }
}

function setup() {
  var myCanvas = createCanvas(900,600);
  myCanvas.parent('processing');
  frameRate(10);
  textFont("Verdana");
  textSize(90);
  gup = new Muis();
  oudekaas = new Kaas(40);
  jongekaas = new Kaas(40);
  //kaas2 = new Kaas(1);
}

function draw() {
  background('sienna');
  gup.ren();
  gup.teken();

  oudekaas.beweeg();
  oudekaas.teken();

  if (gup.eet(oudekaas)) {
    gup.x = -170;
    gup.gegeten++;
    gup.snelheid += 3;
    oudekaas.y = random(100,500);
  }
  if (gup.x>800) {
    background('red');
    textSize(30);
    text("Helaas, geen kaas voor jou!",5,24);
    noLoop();
  }
  text(gup.gegeten,5,70);
}