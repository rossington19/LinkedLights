var dim, circRadius, butRadius, lineThickness;

var lineCol = [155, 193, 188];
var actCol = [237, 106, 90];
var backCol = [240, 245, 240];

var numOfButtons = 4;
var numOfLinks = 3;
var numOfPresses = 3;
var score = 0;

var buttons = [];
var links = [];
var combos = [];
var clickable = false;

var timerID;
var totTime = 10000;

var intTime = 10;
var curTime = totTime;


var gameTimer = sessionStorage.getItem('gameTimer');
var gameLink = 	sessionStorage.getItem('gameLink');
var gamePerfection = sessionStorage.getItem('gamePerfection');
var perfNumOfClicks = 0;