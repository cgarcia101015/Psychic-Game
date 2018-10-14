//variables



var winCount = 1;

var lossCount = 0;

var guessesRemaining = 10;

var guessedLetters = [];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"

    ,"r","s","t","u","v","w","x","y","z"];


//picks random letter
var randomLetter = Math.floor(Math.random() * alphabet.length);

var computerChoice = alphabet[randomLetter];

console.log(computerChoice);

//listens to key pressed
document.onkeypress = function (event) {
    var userGuess = event.key; 
    

//makes sure only a-z is selected

var lettersOnly = /[a-z]/gi;

    if (lettersOnly.test(userGuess)) {
      alert("Please enter a letter");
    } else {
      console.log(userGuess);
    }

//reset computer choice if user loses
if (guessesRemaining <= 0) {
  
  lossCount++;
  
  document.getElementById("lossCount").innerHTML = lossCount++;
  
  console.log ("You lost!");
  
  guessesRemaining = 10;
  
  guessedLetters = [];
  
  document.getElementById("guessedLetters").innerHTML = guessedLetters;
  
  document.getElementById("guessesRemaining").innerHTML = 10;
  
  randomLetter = Math.floor(Math.random() * alphabet.length);
  
  computerChoice = alphabet[randomLetter];
  
  console.log(computerChoice);
}

//compares choices
if (computerChoice === userGuess) {
  
  console.log("You won!");

  alert("You won!");

  document.getElementById("winCount").innerHTML = winCount++;

  guessedLetters = [];

  document.getElementById("guessedLetters").innerHTML = guessedLetters;

  computerChoice = alphabet[randomLetter];

  console.log(computerChoice);

  guessesRemaining = 10;

  document.getElementById("guessesRemaining").innerHTML = 10;
} else {
  console.log("Guess again!");

  document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
  
  guessedLetters.push(userGuess);

  document.getElementById("guessedLetters").innerHTML = guessedLetters;
}

}

