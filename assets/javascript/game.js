var wins = 0;
var losses = 0;
var guessesLeft= 9;
var guessesSoFar = [];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";


var ranLetter = letters[Math.floor(Math.random() * letters.length)];

console.log(ranLetter);

function pcGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);
}


document.onkeyup = function (event) {
    var userChoice = event.key;
    
    if (userChoice === ranLetter) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
    }

    if (userChoice !== ranletter) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesSoFar = [];
        guessesLeft = 9;
    }

    if (guessesSoFar.indexOf(userChoice) >= 0) {



    } else {
        guessesSoFar.push(guessesLeft)
        document.getElementById("guessSoFar").innerHTML = guessesLeft;
        console.log(guessesSoFar);
    }

    document.getElementById("win").innerHTML = win;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("yourGuessesLeft").innerHTML = guessesLeft;
} 