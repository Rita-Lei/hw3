function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  
for (var x = 0; x <= 400; x = x + 10){
  line(x,0,x,x+10);
}
}
