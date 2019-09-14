class Muis {
  constructor() {
    this.x = -100;
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


    this.x += this.snelheid;
  }


  eet(kaas) {
      var hulp = dist(this.x,this.y,kaas.x,kaas.y);
      //text("afstand:"+round(hulp),20,80);
    if (dist(this.x,this.y,kaas.x,kaas.y) < 80) {
      return true;
    }
    else {
      return false;
    }
  }

  teken() {
    push();
    stroke('dimgrey');
    strokeWeight(1);
    translate(this.x,this.y);
    fill('grey');
    ellipse(100,50,50);
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
    this.x = random(100,800);
    this.y = random(100,600);
    this.diameter = d;
  }


  teken() {
    push();
    stroke('peru');
    strokeWeight(1);
    translate(this.x,this.y);
    fill('yellow');
    triangle(0,0,20,30,30,10);
    fill('black');
    ellipse(15,15,5,5);
    fill('black');
    ellipse(20,20,3,3);
    pop();
  }
}

function setup() {
  var myCanvas = createCanvas(900,600);
  myCanvas.parent('processing');
  frameRate(10);
  textFont("Verdana");
  textSize(90);
  muis = new Muis();
  oudekaas = new Kaas();
  jongekaas = new Kaas(40);
}

function draw() {
  background('sienna');
  textFont("Verdana");
  textSize(20);
  text("Je hebt honger... Probeer de kaasjes te pakken te krijgen!",300,30);
  muis.ren();
  muis.teken();

  oudekaas.teken();

  if (muis.eet(oudekaas)) {
    muis.x = -100;
    muis.gegeten++;
    muis.snelheid += 3;
    oudekaas.y = random(100,600);
    oudekaas.x = random(100,800);

  }
  if (muis.x>800) {
    background('yellow');
    textFont("Verdana");
    textSize(90);
    //textSize(30);
    text("Helaas, geen kaas!",20,300);
    noLoop();
  }

  textSize(90);
  text(muis.gegeten,5,80);

}