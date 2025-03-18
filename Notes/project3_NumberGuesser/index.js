const userGuessBox = document.getElementById("numberGuess");
const guessSubmitButton = document.getElementById("guessButton");
const guessedNumbersParagraph = document.getElementById("submittedGuesses");
const guessResultParagraph = document.getElementById("guessParagraph");

let randNumber = 43;
let guessCount = 1;
let guesses = [];

guessSubmitButton.addEventListener("click", () => {
  console.log(`User has submitted a guess. Current Guess Count: ${guessCount}`);

  // Declare guess locally
  let guess = Number(userGuessBox.value);
  let message;

  if (guess > randNumber) {
    message = "Your guess is too high! Please try again.";
  } else if (guess < randNumber) {
    message = "Your guess is too low! Please try again.";
  } else {
    message = `CONGRATULATIONS! You have correctly guessed the number ${randNumber} in ${guessCount} attempts :)`;
    // Optionally disable further input if the guess is correct:
    guessSubmitButton.disabled = true;
  }

  guesses.push(guess);
  console.log(`Current Guesses: ${guesses}`);
  guessCount++;
  console.log(message);

  // Display the list of guesses and the message to the user
  let guessString = guesses.join(", ");
  guessedNumbersParagraph.textContent = `Guessed Numbers: ${guessString}`;
  guessResultParagraph.textContent = message;
});
