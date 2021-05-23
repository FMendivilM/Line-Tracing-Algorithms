const radius = 100;
const algorithms = [
  { name: "DDA", action: dda },
  { name: "Bresenham", action: bresenham },
  { name: "Punto-Pendiente", action: pp },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  algorithms.forEach(({ name, action }, index) => {
    const x = (width / 4) * (index + 1);
    const y = 200;
    push();
    fill("#88F38C");
    circle(x, y, radius * 2);
    pop();
    textSize(30);
    text(name, x - radius / 2, y + radius * 2);

    action({ x1: x - radius, y1: y, x2: x + radius, y2: y });
    action({ x1: x, y1: y - radius, x2: x, y2: y + radius });

    let rad1 = radians(45);
    let rad2 = radians(225);

    action({
      x1: Math.floor(x + radius * cos(rad2)),
      y1: Math.floor(y + radius * sin(rad2)),
      x2: Math.floor(x + radius * cos(rad1)),
      y2: Math.floor(y + radius * sin(rad1)),
    });

    rad1 = radians(135);
    rad2 = radians(315);

    action({
      x1: Math.floor(x + radius * cos(rad2)),
      y1: Math.floor(y + radius * sin(rad2)),
      x2: Math.floor(x + radius * cos(rad1)),
      y2: Math.floor(y + radius * sin(rad1)),
    });
  });
  noLoop();
}
