// Create the array of words
var words = ["tardis", "tinkerbell", "supercalifragilisticexpialidocious", "sunshine", "autumn"];
pickWord(words);
// Setup the random word selection
function pickWord(words){
  var word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  createAnswerArray(word);
}
// Create an answer array
function createAnswerArray(selection){
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  var remainingLetters = word.length;
    console.log(remainingLetters + " remainingLetters");
    console.log(answerArray + " answerArray");
    showProgress(remainingLetters, answerArray, word);
}
// The game loop
function showProgress(remainingLetters, answerArray, word){
    if (remainingLetters > 0) {
      // Show the player his/her progress
      alert(answerArray.join(" "));
      getGuess(remainingLetters, answerArray, word);
    }else{
      showAnswerAndCongratulatePlayer(answerArray, word);
    }
  }
  function getGuess(remainingLetters, answerArray, word){
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    // console.log("guess is " + guess);
      if(guess === null) {
      // Exit the game loop
        console.log("break");
      } else if (guess.length !== 1) {
          alert("Please enter a single letter.");
      } else {
        // console.log("go to update " + remainingLetters + " remaining letters");
        updateGameState(guess, remainingLetters, answerArray, word);
    }
  }
  function updateGameState(guess, remainingLetters, answerArray, word){
      // Update the game state with the guess
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
      showPlayerProgress(remainingLetters, answerArray, word);
  }
    // The end of the game loop
  function showAnswerAndCongratulatePlayer(answerArray, word){
       // Show the answer and congratulate the player
       alert(answerArray.join(" "));
       alert("Good job! The answer was " + word + ".");
  }
