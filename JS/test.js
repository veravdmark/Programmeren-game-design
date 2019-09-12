//var kaas = new Array ["jongekaas","oudekaas","komijnenkaas","geitenkaas","schapenkaas"];
//var kaas1 = "jongekaas";
//var kaas2 = "oudekaas";
//var kaas = [];
//var aantalKaas = 5;

//for(kaas=1;kaas<=5;n++) {
//    teken();
//}


class Muis {
  constructor() {
    this.x = 170;
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
        this.x += this.snelheid;
    }
    if (keyIsDown(LEFT_ARROW)) {
        this.x += this.snelheid;
    }

    //this.x += this.snelheid;
  }

  eet(kaas) {
      var hulp = dist(this.x,this.y,kaas.x,kaas.y);
      text("afstand:"+round(hulp),20,80);
    if (dist(this.x,this.y,kaas.x,kaas.y) < 20) {
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
    this.x = random(700,800);
    this.y = random(100,500);
    this.diameter = d;
  }

  teken() {
    push();
    noStroke();
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
  oudekaas = new Kaas(40);
  jongekaas = new Kaas(40);

}

function draw() {
  background('sienna');
  muis.ren();
  muis.teken();


  oudekaas.teken();
  //jongekaas.teken();

  if (muis.eet(oudekaas)) {
    muis.x = -170;
    muis.gegeten++;
    muis.snelheid += 3;
    oudekaas.y = random(100,500);
  }
  if (muis.x>800) {
    background('red');
    textSize(30);
    text("Helaas, geen kaas voor jou!",5,24);
    noLoop();
  }
  //if (muis = 0) {
   //   constrain();
 // }

  //if (muis = 500) {
      //constrain();
 // }
  text(muis.gegeten,5,70);
}