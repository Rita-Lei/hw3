function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
for (var d = 10; d <= 400; d = d + 10){
  ellipse(200,200,d,d);
  noFill();
}
}
