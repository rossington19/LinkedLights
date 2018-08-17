function createScoreboard(){
	document.getElementById("scoreTitle").innerHTML = sessionStorage.getItem("gameMode");
	for (var but = 4; but <= 8; but++){
		document.getElementById("generalCont").innerHTML +=	`
			<div class="scoreSection" id="butNum`+ but +`"> 
				<div class="subTitle">` + but + ` Buttons </div>
			</div>
		`;
		for(var link = 3; link < factorial(but)/(factorial(but-2)*2); link++){
			document.getElementById("butNum" + but ).innerHTML +=	`
				<div class="scoreBlock"  id=` + but + "-" + link +`>
					<div class="scoreLinkNum">`+ link + ` Links</div>
					<div class="highscores"></div>
					<div class="starblock">
						<div class="star"></div>
						<div class="star"></div>
						<div class="star"></div>
					</div>
				</div>
			`;
		}
	}
	getHighscores();
}

function getHighscores(){
	var unlockVal = 0;
	var streak10 = 0;
	var streak20 = 0;
	var streak30 = 0;
	for (var but = 4; but <= 8; but++){
		for(var link = 3; link < factorial(but)/(factorial(but-2)*2); link++){
			storageRef = sessionStorage.getItem('gameMode') + " " + but + "-" + link;
			if (localStorage.getItem(storageRef)){
				highscore = localStorage.getItem(storageRef);
			} else {
				highscore = 0;
			}
			prevLink = link - 1;
			if(link === 3){
				unlockBlock(but + "-" + link, highscore);
				unlockVal++;
			} else if (localStorage.getItem(sessionStorage.getItem('gameMode') + " " + but + "-" + prevLink) >= 10){
				unlockBlock(but + "-" + link, highscore);
				unlockVal++;
			}
			if (highscore >= 30){
				streak30++;
			} else if (highscore >= 20){
				streak20++;
			} else if(highscore >= 10){
				streak10++;
			}
		}
	}
	document.getElementById("unlocked").innerHTML = (unlockVal-5) + " / 60"
	document.getElementById("10streak").innerHTML = streak10 + " / 65"
	document.getElementById("20streak").innerHTML = streak20 + " / 65"
	document.getElementById("30streak").innerHTML = streak30 + " / 65"
}

function unlockBlock(blockId, highscore){
	document.getElementById(blockId).children[0].classList.add("unlockedLinkNum");
	document.getElementById(blockId).children[1].innerHTML = highscore;
	for(var i = 0; i < 3; i++){
		document.getElementById(blockId).children[2].children[i].classList.add("unlockedStar");
		if (highscore >= (i+1)*10){
			document.getElementById(blockId).children[2].children[i].classList.add("starOn");
		}
	}
}

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * factorial(n -1);
}