var wins = 0;
var losses = 0;
var yourGuessesLeft= 9;
var yourGuessesSoFar = [];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var ranLetter = math.floor(math.random()= letters.length);
var computerChoice = letters[randomIndex];

console.log(computerChoice);

document.onkeyup = function(event) {
    var userChoice = event.key;
    var regexp = /[a-z]/gi;
      if (!regexp.test(userChoice)) {
      }
    
   
      if (yourGuessesLeft <= 0) {
        lossCount++;
        document.getElementById("losses").innerHTML = lossCount++;
        guessesRemaining = 9;
        guessedLetters = [];
        document.getElementById("guessesSoFar").innerHTML = guessedLetters;
        document.getElementById("guessesLeft").innerHTML = 9;
        randomLetter = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
      }
    
      if (computerChoice === userChoice) {
        document.getElementById("win").innerHTML = wins++;
        guessedLetters = [];
        document.getElementById("guessesSoFar").innerHTML = yourGuessesSoFar;
        randomLetter = Math.floor(Math.random() * letters.length);
        computerChoice = letters[randomIndex];
        guessesRemaining = 9;
        document.getElementById("guessesLeft").innerHTML = 9;
      } 
      else {
        document.getElementById("guessesLeft").innerHTML = yourGuessesLeft;
        guessedLetters.push(userChoice);
        document.getElementById("guessesSoFar").innerHTML = yourGuessesSoFar;
      }
    }   
//this is not working and I dont know why. I have looked at so many examples online. 