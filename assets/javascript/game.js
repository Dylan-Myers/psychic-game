var wins = 0;
var losses = 0;
var guessesLeft= 9;
var guessesSoFar = [];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";


var pcGuess = letters[Math.floor(Math.random() * letters.length)];

console.log(pcGuess);

function pcGuess() {
    ranLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(ranLetter);
    
}


document.onkeyup = function(event) {
    var userChoice = event.key;
    console.log(userChoice)

    if (userChoice === pcGuess) {
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
    }

    if (userChoice !== pcGuess) {
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
        document.getElementById("guessesLeft").innerHTML = "Guesses Left:";
        console.log(guessesSoFar);
    }
    
    document.getElementById("win").innerHTML = "Wins:" + wins;
    document.getElementById("losses").innerHTML = "Losses:" + losses ;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left:" + guessesLeft ;
    document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far:" + userChoice;
}   