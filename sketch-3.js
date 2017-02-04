function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);

var doubles = function(){

for(var x = 0; x <= 400; x = x + 10){
  for(var y = 10; y <=400; y = y + 10){
   line(x,0,x,y); 
  }
}
}
doubles();
}
