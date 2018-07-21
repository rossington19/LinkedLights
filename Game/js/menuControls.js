window.onload = function menuNumbers(){
	document.getElementById("butDisp").innerHTML = numOfButtons;
	document.getElementById("linkDisp").innerHTML = numOfLinks;
}

function openNav() {
    document.getElementById("menu").style.height = "100%";
}

function closeNav() {
    document.getElementById("menu").style.height = "0%";
    document.getElementById("butDisp").innerHTML = numOfButtons;
	document.getElementById("linkDisp").innerHTML = numOfLinks;
	menuLimit();
}

function menuInc(elem) {
	document.getElementById(elem).innerHTML++;
	menuLimit();
}

function menuDec(elem) {
	document.getElementById(elem).innerHTML--;
	menuLimit();
}

function menuLimit(){
	butNum = document.getElementById("butDisp").innerHTML;
	butUpArrow = document.getElementById("butUpArrow").classList;
	butDownArrow = document.getElementById("butDownArrow").classList;

	if(butNum === "8")
		butUpArrow.add("disabledButton");
	else
		butUpArrow.remove("disabledButton");
	if(butNum === "4")
		butDownArrow.add("disabledButton");
	else
		butDownArrow.remove("disabledButton");

	linkNum = document.getElementById("linkDisp").innerHTML;
	linkUpArrow = document.getElementById("linkUpArrow").classList;
	linkDownArrow = document.getElementById("linkDownArrow").classList;

	combinations = factorial(butNum)/(factorial(butNum-2)*2);

	if(parseInt(linkNum) > combinations-1)
		document.getElementById("linkDisp").innerHTML = String(combinations-1);

	if(parseInt(linkNum) === combinations-1)
		linkUpArrow.add("disabledButton");
	else
		linkUpArrow.remove("disabledButton");
	if(linkNum === "1")
		linkDownArrow.add("disabledButton");
	else
		linkDownArrow.remove("disabledButton");
}

function menuApply() {
	score = 0;
	document.getElementById('scoreVal').innerHTML = score;
	numOfButtons = document.getElementById("butDisp").innerHTML;
	numOfLinks = document.getElementById("linkDisp").innerHTML;
	closeNav();
}

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }

    return n * factorial(n -1);
}