// Set Variables
	//Comp Chooses a Word
var wordbank = ["tomb", "temple", "treasure", "explore", "rope", "pitfall", "snakes", "scarab", "boulder", "escape", "trap", "darts", "mummy", "ruins", "loot", 
				"pilfer", "ancient", "lost", "skeleton", "detonate", "dig", "delve", "dark", "stone", "rock", "whip", "lasso"];

var length = word.length
  console.log(word);
  // console.log(length);
var wins = 0;
var guessleft = 10;
  // console.log(guessleft);
var guesshistory = [];
var wordblank = [];


//Page Setup
var compChoice = wordbank[Math.floor(Math.random() * wordbank.length)];
var word = compChoice.split([]);
for (i = 0; i < length; i++) { 
    wordblank.push("_");
}
document.getElementById("pwordblank").innerHTML = wordblank;


//On Keypress
document.onkeyup = function(play){
	var playerChoice = event.key;

	//Wrong Guess
	if(word.indexOf(playerChoice) === -1 && guesshistory.indexOf(playerChoice) === -1){
		guesshistory.push(playerChoice);
		guessleft--;
		document.getElementById("guessleft").innerHTML = guessleft;
		document.getElementById("guesshistory").innerHTML = guesshistory;
		console.log("New Wrong Guess. playerChoice: " + playerChoice + ". guesshistory: " + guesshistory + ".")
	}
	//Right Guess
	else if(word.indexOf(playerChoice) > -1 && guesshistory.indexOf(playerChoice) === -1){
		for (var i = 0; i < word.length; i++) {
			//Add letter(s) to wordblank.
			if(word[i] === playerChoice){
			wordblank[i] = playerChoice;
			document.getElementById("pwordblank").innerHTML = wordblank;
			console.log("your guess " + playerChoice + " is correct, index " + i);
				//Check for and display wins
				if(wordblank.indexOf("_") === -1){
					wins++;
					document.getElementById("wins").innerHTML = wins;
					console.log("You Win!")
				}
			}
			
      	}
	}
}


