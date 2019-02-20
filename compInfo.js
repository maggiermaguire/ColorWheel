var r = document.getElementById('canvasR');
var rr = r.getContext('2d');
var o = document.getElementById('canvasO');
var oo = o.getContext('2d');
var y = document.getElementById('canvasY');
var yy = y.getContext('2d');
var g = document.getElementById('canvasG');
var gg = g.getContext('2d');
var b = document.getElementById('canvasB');
var bb = b.getContext('2d');
var p = document.getElementById('canvasP');
var pp = p.getContext('2d');


const red = '#ff0202';
const orange = '#ff8001';
const yellow = '#faff02';
const green = '#1daf20';
const blue = '#2abdfc';
const purple = '#7908d6';
const l = 200;


function drawSquareR(color) {
	rr.beginPath();
	rr.rect(0, 0, l, l);
	rr.fillStyle = color;
	rr.fill();
}

function drawSquareO(color) {
	oo.beginPath();
	oo.rect(0, 0, l, l);
	oo.fillStyle = color;
	oo.fill();
}

function drawSquareY(color) {
	yy.beginPath();
	yy.rect(0, 0, l, l);
	yy.fillStyle = color;
	yy.fill();
}

function drawSquareG(color) {
	gg.beginPath();
	gg.rect(0, 0, l, l);
	gg.fillStyle = color;
	gg.fill();
}

function drawSquareB(color) {
	bb.beginPath();
	bb.rect(0, 0, l, l);
	bb.fillStyle = color;
	bb.fill();
}

function drawSquareP(color) {
	pp.beginPath();
	pp.rect(0, 0, l, l);
	pp.fillStyle = color;
	pp.fill();
}


drawSquareR(red);
drawSquareO(orange);
drawSquareY(yellow);
drawSquareG(green);
drawSquareB(blue);
drawSquareP(purple);