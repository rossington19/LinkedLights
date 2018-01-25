var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var dim, circRadius, butRadius, lineThickness;

var lineCol = [155, 193, 188];
var actCol = [237, 106, 90];
var backCol = [240, 245, 240];
canvas.style.backgroundColor  = "rgb(" + backCol[0] + "," + backCol[1] + "," + backCol[2] + ")";

var numOfButtons = 5;
var numOfLinks = 5;
var numOfPresses = 2;
var score = 0;

var buttons = [];
var links = [];
var combos = [];
var clickable = false;

var timerID;
var totTime = 10000;
var intTime = 10;
var curTime = totTime;
