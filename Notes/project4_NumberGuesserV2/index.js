const min = 10;
const max = 30;
const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Number User Must Guess: ${randNumber}`);

gameRunning = true;

while (gameRunning) {
  let guessCounter = 1;
  let userGuess = Number(window.prompt("Enter Guess: "));

  if (userGuess > randNumber) {
    guessCounter++;
    console.log(`Your guess is too high! Please try again.`);
  } else if (userGuess < randNumber) {
    guessCounter++;
    console.log(`Your guess is too low! Please try again.`);
  } else {
    console.log(
      `Congratulations! You've guessed the correct number ${randNumber} in ${guessCounter} attempts!`
    );
    gameRunning = false;
    console.log(`Game Over!`);
  }
}
