/*
GAME FUNCTION:
- Player must guess a number between a min and a max.
- Player gets a certain amount of guesses.
- Notify player guesses remaining.
- Notify player of the correct answer if loose.
- Let player choose to play again.
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Asign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);
  console.log(typeof(guess));

  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'crimson');
  }

  // Check if won
  if(guess === winningNum){
  //Disable input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = 'green';
  // Set message
  setMessage(`${winningNum} is correct!!`, 'green');
}
});


// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


  

// const sendGuessBtn = document.querySelector('#guess-btn');

// // Load event listener

// function loadEventListener() {
//   sendGuessBtn.addEventListener('click', sendGuess);
// }

// function sendGuess(e) {

// console.log('submit');
// e.preventDefault();
// }