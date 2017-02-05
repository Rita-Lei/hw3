function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  for(var y = 0; y <= height; y += 10) {
    for(var x = 0; x <= width; x +=10) {
   line(x,y,x,y); 
    }
  }
}
