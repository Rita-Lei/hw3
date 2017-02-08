function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  for(var x = 0; x <= width/2; x +=10) {
   line(x,width/2+x,width-x,width/2+x);
   line(x,height/2-x,height-x,height/2-x);
  }
}
