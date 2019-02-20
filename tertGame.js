var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var c = document.getElementById('canvasTwo');
var ctx = c.getContext('2d');

const redOrange = '#FF5900';
const orangeYellow = '#FFBD00';
const yellowGreen = '#9BFF00';
const greenBlue = '#0EE7AF';
const bluePurple = '#460EE7';
const purpleRed = '#DA0EE7';
const red = '#ff0202';
const orange = '#ff8001';
const yellow = '#faff02';
const green = '#1daf20';
const blue = '#2abdfc';
const purple = '#7908d6';


function drawSquare(color) {
	context.beginPath();
	context.rect(0, 0, 100, 100);
	context.fillStyle = color;
	context.fill();
}

function drawBigSquare(color) {
	ctx.beginPath();
	ctx.rect(0, 0, 300, 300);
	ctx.fillStyle = color;
	ctx.fill();
}


drawSquare(orange);
drawBigSquare(orangeYellow);


