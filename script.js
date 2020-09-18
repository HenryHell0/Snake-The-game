var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d");
var gs = 20;
var xpos = 9 * gs;
var ypos = 9 * gs;
var xvelo = 0;
var yvelo = 0;
var tailx = [0, 20 * gs, 20 * gs, 20 * gs, 20 * gs, 20 * gs];
var taily = [0, 20 * gs, 20 * gs, 20 * gs, 20 * gs, 20 * gs];

document.addEventListener("keydown", keyPressed);

function keyPressed(){
	if (event.keyCode == 37) {
		xvelo = -1 * gs;
		yvelo = 0;
}

	if (event.keyCode == 38) {
		xvelo = 0;
		yvelo = -1 * gs;
}

	if (event.keyCode == 39) {
		xvelo = 1 * gs;
		yvelo = 0;
}

	if (event.keyCode == 40) {
		xvelo = 0;
		yvelo = 1 * gs;
}
}

function fillBackground(){
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.rect(0, 0, 20 * gs, 20 * gs);
	ctx.fill();
	ctx.closePath();
}

function makeSnake(xpos, ypos){
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.rect(xpos, ypos, 1 * gs, 1 * gs);
	ctx.fill();
}

fillBackground();

setInterval(gameInterval, 1000/5);

function gameInterval(){
	console.log("hello");
	xpos += xvelo;
	ypos += yvelo;
	fillBackground();
	makeSnake(xpos, ypos);
	tailx.push(xpos);
	tailx.shift();
	taily.push(ypos);
	taily.shift();
	makeSnake(tailx[0], taily[0]);
	makeSnake(tailx[1], taily[1]);
	makeSnake(tailx[2], taily[2]);
	makeSnake(tailx[3], taily[3]);
	makeSnake(tailx[4], taily[4]);
	makeSnake(tailx[5], taily[5]);

	if (xpos <= 0 && xvelo == -1 * gs) {
		xpos = 20 * gs;
	}
	if (xpos >= 20 * gs && xvelo == 1 * gs) {
		xpos = 0;
	}
	if (ypos <= 0 && yvelo == -1 * gs) {
		ypos = 20 *gs;
	}
	if (ypos >= 20 * gs && yvelo == 1 * gs) {
		ypos = 0;
	}
}

