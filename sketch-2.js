function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);

var circle = function(){

for(var total = 40; total > 0; total--){
  ellipse(200,200,total*10,total*10);
}
}  
circle();
}
