function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
	
	for(var x2 = 0;x2<=400;x2=x2+10){
  line(200,0,x2,400);
	}
}
