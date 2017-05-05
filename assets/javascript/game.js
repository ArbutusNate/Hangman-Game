// Set Variables

var wordbank = ["tomb", "temple", "treasure", "explore", "rope", "pitfall", "snakes", "scarab", "boulder", "escape", "trap", "darts", "mummy", "ruins", "loot", 
				"pilfer", "ancient", "lost", "skeleton", "detonate", "dig", "delve", "dark", "stone",];
var compChoice = wordbank[Math.floor(Math.random() * wordbank.length)];
var word = compChoice.split("");
console.log(word);
var wins = 0;
var guessleft = 10;
console.log(guessleft);
var guesshistory = 0;

//On Keypress
document.onkeyup = function(event){
	var playerChoice = event.key;
	console.log(playerChoice);
	var guessleft = parseInt('guessleft', 10) -= 1;
	console.log(guessleft);
// if(playerChoice === word){

// }
}
document.getElementById("guessleft").innerHTML = guessleft;