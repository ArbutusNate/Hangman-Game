// Set Variables
var wordbank = ["tomb", "temple", "treasure", "explore", "rope", "pitfall", "snakes", "scarab", "boulder", "escape", "trap", "darts", "mummy", "ruins", "loot", 
				"pilfer", "ancient", "lost", "skeleton", "detonate", "dig", "delve", "dark", "stone", "rock", "whip", "lasso"];
var wins = 0;
var word = "";
var playerChoice;
var guessleft = 10;
var guesshistory = [];
var wordblank = [];
var wincondition = true;
document.onkeyup = function(event){  //  --- On Keypress ---
	playerChoice = event.key;
	if(wincondition === true || guessleft === 0){ //Reset
		compChoice = wordbank[Math.floor(Math.random() * wordbank.length)]; // Choose random word.
		word = compChoice.split([]); // Split word into [comChoice].
		length = word.length; // Set variable for blanking for loop.
		wordblank = [];
		for (i = 0; i < length; i++) {  // for loop
			wordblank.push("_"); // Add _ equal to index of word
		}
		wincondition = false;
		guessleft = 10;
		guesshistory = [];
		console.log(word);
		document.getElementById("guessleft").innerHTML = guessleft; //Update guessleft in HTML.
		document.getElementById("pwordblank").innerHTML = wordblank.join(" ");
		document.getElementById("messages").innerHTML = "Press a letter to guess!";
		document.getElementById("guesshistory").innerHTML = "Nothing yet!";
	}
	else {	// Play
		if(word.indexOf(playerChoice) === -1 && guesshistory.indexOf(playerChoice) === -1){ //Wrong Guess. playerChoice doesn't exist in [word] or [guesshistory]
			guesshistory.push(playerChoice); //Add playerchoice to guesshistory.
			guessleft--; //Reduce guessleft by 1.
			document.getElementById("guessleft").innerHTML = guessleft; //Update guessleft in HTML.
			document.getElementById("guesshistory").innerHTML = guesshistory; //Update guesshistory in HTML.
			// console.log("New Wrong Guess. playerChoice: " + playerChoice + ". guesshistory: " + guesshistory + ".");
		}
		else if(word.indexOf(playerChoice) > -1 && guesshistory.indexOf(playerChoice) === -1){ // Right guess. playerChoice exists in [word].
			for (var i = 0; i < word.length; i++) { // Loop = to word length.
				if(word[i] === playerChoice){ // Add letter(s) to wordblank.
				wordblank[i] = playerChoice;
				document.getElementById("pwordblank").innerHTML = wordblank.join(" ");
				// console.log("your guess " + playerChoice + " is correct, index " + i);
					if(wordblank.indexOf("_") === -1){  //Check for and display wins
						wins++;
						wincondition = true;
						document.getElementById("wins").innerHTML = wins; //Add HTML and update w/ "press any key to continue"
						document.getElementById("messages").innerHTML = "You win! Press a letter to play again!";
						console.log("You Win!");
					}
				}
			}
		}
	}
};


