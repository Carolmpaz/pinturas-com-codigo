function setup() {
  createCanvas(544, 399);
}

function draw() {
  background("#17439D");

  let t = frameCount * 0.058;
  let swingTop    =  sin(t)      * 5;
  let swingBottom =  sin(t + PI) * 5;

  drawBuilding();
  drawFlags(swingTop, swingBottom);
}

function drawBuilding() {
  drawWindowsTop();
  drawWindowsBottom();
  drawRedDetailsTop();
  drawRedDetailsBottom();
  drawLocks();
  drawGroundLine();
}

function drawWindowsTop() {
  fill("#FDFDF7");
  noStroke();
  rect(20, 40, 59, 80);
  rect(107, 42, 59, 80);
  rect(194, 42, 59, 80);
  push(); translate(280.629, 42.2926); rotate(radians(-0.533241)); rect(0, 0, 60.2884, 80); pop();
  push(); translate(367.737, 38.0115); rotate(radians(-1.83207));  rect(0, 0, 62, 80); pop();
  push(); translate(462.653, 32.0192); rotate(radians(-0.967554)); rect(0, 0, 60.3556, 82.7747); pop();
}

function drawWindowsBottom() {
  fill("#FDFDF7");
  noStroke();
  push(); translate(17.7184,  226.284); rotate(radians( 0.6803));    rect(0, 0, 60.2859, 144.726); pop();
  push(); translate(106.718,  225);     rotate(radians( 0.6803));    rect(0, 0, 60.2859, 144.726); pop();
  push(); translate(193.718,  225);     rotate(radians( 0.6803));    rect(0, 0, 60.2859, 144.726); pop();
  push(); translate(280.718,  224);     rotate(radians( 0.6803));    rect(0, 0, 60.2859, 144.726); pop();
  push(); translate(369.778,  224.386); rotate(radians(-0.0628204)); rect(0, 0, 62.3719, 144.726); pop();
  push(); translate(464,      224.128); rotate(radians(-0.115763));  rect(0, 0, 63.4165, 146.298); pop();
}

function drawRedDetailsTop() {
  fill("#D60002");
  noStroke();
  rect(27, 48, 20, 31); rect(27, 82, 20, 29);
  rect(50, 48, 20, 31); rect(50, 82, 20, 29);
  rect(114, 49, 20, 31); rect(114, 83, 20, 29);
  rect(137, 49, 20, 31); rect(137, 83, 20, 29);
  rect(202, 51, 20, 31); rect(202, 84, 20, 29);
  rect(224, 51, 20, 31); rect(224, 84, 20, 29);
  rect(288, 49, 20, 31); rect(288, 83, 20, 29);
  rect(311, 49, 20, 31); rect(311, 83, 20, 29);
  push(); translate(378.007, 46.7264); rotate(radians(-0.897946)); rect(0, 0, 20, 31); pop();
  push(); translate(378,    80.5486);  rotate(radians(-1.57191));  rect(0, 0, 20, 29); pop();
  push(); translate(402.827, 79.4117); rotate(radians( 0.110756)); rect(0, 0, 20, 29); pop();
  push(); translate(402,    45.2516);  rotate(radians(-0.720918)); rect(0, 0, 20, 31); pop();
  rect(470, 41, 20, 31); rect(470, 75, 20, 30);
  rect(494, 40, 20, 31); rect(494, 73, 21, 31);
}

function drawRedDetailsBottom() {
  fill("#D60002");
  noStroke();
  push(); translate(25.5768,  260.632); rotate(radians( 0.834307)); rect(0, 0, 43.067,  109.063); pop();
  push(); translate(113.588,  260);     rotate(radians( 0.834307)); rect(0, 0, 43.067,  109.063); pop();
  push(); translate(200.588,  261);     rotate(radians( 0.834307)); rect(0, 0, 44.9945, 108.356); pop();
  push(); translate(288.588,  261);     rotate(radians( 0.834307)); rect(0, 0, 43.9946, 108.371); pop();
  push(); translate(378.977,  260.248); rotate(radians( 0.197632)); rect(0, 0, 44.3192, 109.371); pop();
  push(); translate(471.926,  260.183); rotate(radians(-0.27497));  rect(0, 0, 45.8871, 109.371); pop();
}

function drawLocks() {
  fill("#0F0F0B");
  noStroke();
  let locks = [
    [25, 234, 18, 18], [52, 234, 18, 18], [45, 234, 5, 18],
    [113, 234, 18, 18], [140, 234, 18, 18], [133, 234, 5, 18],
    [201, 234, 18, 18], [228, 234, 18, 18], [221, 234, 5, 18],
    [287, 234, 18, 18], [314, 234, 18, 18], [307, 234, 5, 18],
    [378, 232, 18, 18], [405, 232, 18, 18], [398, 232, 5, 18],
    [472, 232, 18, 18], [499, 232, 18, 18], [492, 232, 5, 18],
  ];
  for (let l of locks) rect(l[0], l[1], l[2], l[3]);
}

function drawGroundLine() {
  fill("#050108");
  noStroke();
  rect(0, 369, 544, 6);
}

const TOP_RED = [
  [0,159, 6,137, 26,140.5, 21,162.5, 11.5,151.5],
  [65.5,170, 69,144, 91,147, 86,173.5, 77.5,160.5],
  [132.5,177.5, 137.5,152, 158.5,154, 154.5,179.5, 145.5,170],
  [201,182.5, 206.5,157, 230,158.5, 228,184, 216.5,172.5],
  [275.5,185.5, 279,159, 302,158.5, 301,185, 290,173.5],
  [349.5,181, 349.5,155.5, 373.5,154, 373.5,179.5, 360,169.5],
  [419,173.5, 420.5,148, 442,146.5, 441,171.5, 429.5,162.5],
  [488,163.5, 490,137.5, 511.5,134.5, 509,162, 499.5,152.5],
];

const TOP_WHITE = [
  [33,165, 37.5,140.5, 59,144, 54,168.5, 45,157],
  [111.5,166, 98.5,174.5, 103.408,148.49, 125,150.5, 121,177.5],
  [180,171.5, 167.5,180.5, 171.398,155.65, 193.5,157, 189.5,182.5],
  [239,185.5, 241,159, 265,159, 264,185.5, 252,176],
  [311.5,184, 314.5,156.5, 337.5,156.5, 336.5,182.5, 326,172.5],
  [383.5,177.5, 385.5,152.5, 408.5,149.5, 407.5,176, 395.5,166],
  [466,158, 453.5,169.5, 454.972,143, 477,140, 477,167.315, 475,167.5],
  [517.5,160, 523,132, 542.5,128.5, 536.5,155.5, 529.5,148.5],
];

const BOT_RED = [
  [39,191, 43.5,167.5, 64.5,170, 59,195, 50.5,183.5],
  [106.5,199.5, 110,176, 130.5,177.5, 127,202.5, 118,191],
  [174.5,205, 179,181.5, 200,182.5, 197,209, 187,197],
  [250,212.5, 252,185.5, 274.5,185.5, 273.5,212.5, 261.5,202],
  [323,209.5, 326,182.5, 347,182.5, 346,209.5, 336.5,197.5],
  [392,204.5, 394,177.5, 417,175, 414,204.5, 404.5,192],
  [461.5,195.5, 463.5,168.5, 486.5,166.5, 482.5,193.5, 473,183],
];

const BOT_WHITE = [
  [32,166, 11.5,162.5, 6,185.5, 19.5,177.5, 29,189.5],
  [71,198, 75.5,171, 97.5,173.5, 93.5,199.5, 82.5,189.5],
  [139,203.5, 144,179.5, 166,180.5, 161.5,207, 152,194],
  [212,209, 215,184, 238,184, 235.5,212.5, 225,199.5],
  [287,212.5, 288.5,185.5, 310,184, 310,212.5, 299.5,200.5],
  [358,209, 360,179.5, 381.5,179, 380,208.5, 370,196.5],
  [428.5,201, 429.5,172, 450,171, 450,198, 440.5,189],
  [493.5,189.5, 497,163, 517.5,161, 513.5,189, 504.5,179],
];

function drawFlags(swingTop, swingBottom) {
  drawSwingStrip(TOP_RED,    "#CE0000", swingTop);
  drawSwingStrip(TOP_WHITE, "#FDFDF7", swingTop);
  drawSwingStrip(BOT_RED,    "#CE0000", swingBottom);
  drawSwingStrip(BOT_WHITE, "#FDFDF7", swingBottom);
}

function drawSwingStrip(shapes, color, swing) {
  fill(color);
  noStroke();
  const CX = 272;
  for (let pts of shapes) {
    beginShape();
    for (let i = 0; i < pts.length; i += 2) {
      let x = pts[i];
      let y = pts[i + 1];
      let factor = (x - CX) / CX;
      vertex(x + swing * factor, y);
    }
    endShape(CLOSE);
  }
}