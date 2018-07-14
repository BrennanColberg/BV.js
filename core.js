
const MIN_COLOR = 100;
const MAX_COLOR = 255;
const COLOR_RANGE = MAX_COLOR - MIN_COLOR;

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 255, 1, 1, 1);
	background(0);
}


function draw(){
	
	let index = frameCount;
	
	fill(calcHue(index), 1, 1, 0.1);
	noStroke();
	ellipse(mouseX, mouseY, 30, 30);
}

function calcHue(index) {
	let val;
	if (Math.floor(index / 255) % 2 == 1) {
		val = map(index % 255, 0, 255, MIN_COLOR, MAX_COLOR);
	} else {
		val = map(index % 255, 0, 255, MAX_COLOR, MIN_COLOR);
	}
	return val;
}