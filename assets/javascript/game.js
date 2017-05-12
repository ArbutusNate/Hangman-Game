// Set Variables
var wordbank = ["tomb", "temple", "treasure", "explore", "pitfall", "snakes", "scarab", "boulder", "escape", "trap", "darts", "mummy", "ruins", "loot", "steal", "ancient", "lost", "skeleton", "dig", "delve", "dark", "stone", "rock", "whip", "lasso", "hidden"];
var wins = 0;
var word = "";
var playerChoice;
var guessleft = 10;
var guesshistory = [];
var wordblank = [];
var wincondition = true;
var audio = document.createElement('audio');
audio.src = './assets/audio/Indiana_Jones_Theme.mp3';
// Play
document.onkeyup = function(event){  //  --- On Keypress ---
	playerChoice = event.key;
	if (event.which <= 90 && event.which >= 48){
		if(wincondition === true || guessleft === 0){ //Reset
			compChoice = wordbank[Math.floor(Math.random() * wordbank.length)]; // Choose random word.
			word = compChoice.split([]); // Split word into [comChoice].
			length = word.length; // Set variable for blanking for loop.
			wordblank = [];
			for (i = 0; i < length; i++) {  // for loop
				wordblank.push("_"); // Add _ equal to index of word
			}
			wincondition = false; // Flip win condition
			guessleft = 10; // Reset guessleft
			guesshistory = []; // Reset guesshistory
			console.log(word);
			document.getElementById("guessleft").innerHTML = guessleft; //Update guessleft in HTML.
			document.getElementById("pwordblank").innerHTML = wordblank.join(" ");
			document.getElementById("messages").innerHTML = "Press a letter to guess!";
			document.getElementById("guesshistory").innerHTML = "Nothing yet!";
			audio.pause();
		}
		else {	// Play
			if(word.indexOf(playerChoice) === -1 && guesshistory.indexOf(playerChoice) === -1){ //Wrong Guess. playerChoice doesn't exist in [word] or [guesshistory]
				guesshistory.push(playerChoice); //Add playerchoice to guesshistory.
				guessleft--; //Reduce guessleft by 1.
				document.getElementById("guessleft").innerHTML = guessleft; //Update guessleft in HTML.
				document.getElementById("guesshistory").innerHTML = guesshistory.join(" "); //Update guesshistory in HTML.
			}
			else if(word.indexOf(playerChoice) > -1 && guesshistory.indexOf(playerChoice) === -1){ // Right guess. playerChoice exists in [word].
				for (var i = 0; i < word.length; i++) { // Loop = to word length.
					if(word[i] === playerChoice){ // Add letter(s) to wordblank.
					wordblank[i] = playerChoice;
					document.getElementById("pwordblank").innerHTML = wordblank.join(" ");
						if(wordblank.indexOf("_") === -1){  //Check for and display wins
							wins++;
							wincondition = true;
							document.getElementById("wins").innerHTML = wins; //Add HTML and update w/ "press any key to continue"
							document.getElementById("messages").innerHTML = "You win! Press a letter to play again!";
							console.log("You Win!");
							audio.play();
						}
					}
				}
			}
		}
	}
};


