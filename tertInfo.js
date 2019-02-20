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
const l = 200;

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

var rrr = document.getElementById('canvasRR');
var rrrr = rrr.getContext('2d');
var ooo = document.getElementById('canvasOO');
var oooo = ooo.getContext('2d');
var yyy = document.getElementById('canvasYY');
var yyyy = yyy.getContext('2d');
var ggg = document.getElementById('canvasGG');
var gggg = ggg.getContext('2d');
var bbb = document.getElementById('canvasBB');
var bbbb = bbb.getContext('2d');
var ppp = document.getElementById('canvasPP');
var pppp = ppp.getContext('2d');

var ro = document.getElementById('canvasRO');
var rroo = ro.getContext('2d');
var oy = document.getElementById('canvasOY');
var ooyy = oy.getContext('2d');
var yg = document.getElementById('canvasYG');
var yygg = yg.getContext('2d');
var gb = document.getElementById('canvasGB');
var ggbb = gb.getContext('2d');
var bp = document.getElementById('canvasBP');
var bbpp = bp.getContext('2d');
var pr = document.getElementById('canvasPR');
var pprr = pr.getContext('2d');

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

function drawSquareRR(color) {
	rrrr.beginPath();
	rrrr.rect(0, 0, l, l);
	rrrr.fillStyle = color;
	rrrr.fill();
}

function drawSquareOO(color) {
	oooo.beginPath();
	oooo.rect(0, 0, l, l);
	oooo.fillStyle = color;
	oooo.fill();
}

function drawSquareYY(color) {
	yyyy.beginPath();
	yyyy.rect(0, 0, l, l);
	yyyy.fillStyle = color;
	yyyy.fill();
}

function drawSquareGG(color) {
	gggg.beginPath();
	gggg.rect(0, 0, l, l);
	gggg.fillStyle = color;
	gggg.fill();
}

function drawSquareBB(color) {
	bbbb.beginPath();
	bbbb.rect(0, 0, l, l);
	bbbb.fillStyle = color;
	bbbb.fill();
}

function drawSquarePP(color) {
	pppp.beginPath();
	pppp.rect(0, 0, l, l);
	pppp.fillStyle = color;
	pppp.fill();
}

function drawSquareRO(color) {
	rroo.beginPath();
	rroo.rect(0, 0, l, l);
	rroo.fillStyle = color;
	rroo.fill();
}

function drawSquareOY(color) {
	ooyy.beginPath();
	ooyy.rect(0, 0, l, l);
	ooyy.fillStyle = color;
	ooyy.fill();
}

function drawSquareYG(color) {
	yygg.beginPath();
	yygg.rect(0, 0, l, l);
	yygg.fillStyle = color;
	yygg.fill();
}

function drawSquareGB(color) {
	ggbb.beginPath();
	ggbb.rect(0, 0, l, l);
	ggbb.fillStyle = color;
	ggbb.fill();
}

function drawSquareBP(color) {
	bbpp.beginPath();
	bbpp.rect(0, 0, l, l);
	bbpp.fillStyle = color;
	bbpp.fill();
}

function drawSquarePR(color) {
	pprr.beginPath();
	pprr.rect(0, 0, l, l);
	pprr.fillStyle = color;
	pprr.fill();
}

drawSquareR(red);
drawSquareO(orange);
drawSquareY(yellow);
drawSquareG(green);
drawSquareB(blue);
drawSquareP(purple);
drawSquareRR(red);
drawSquareOO(orange);
drawSquareYY(yellow);
drawSquareGG(green);
drawSquareBB(blue);
drawSquarePP(purple);
drawSquareRO(redOrange);
drawSquareOY(orangeYellow);
drawSquareYG(yellowGreen);
drawSquareGB(greenBlue);
drawSquareBP(bluePurple);
drawSquarePR(purpleRed);
