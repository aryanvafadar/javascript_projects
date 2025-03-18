// HTML elements related to password generation
const passLegth = document.getElementById("passLength");
const useUpper = document.getElementById("includeUppercase");
const useLower = document.getElementById("includeLowercase");
const useNums = document.getElementById("includeNumbers");
const useSpecials = document.getElementById("includeSymbols");
const generateButton = document.getElementById("createPassword");
const outputText = document.getElementById("createdPassword");

// consts for creating the password
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = letters.toLowerCase();
const numbers = "1234567890";
const specialChars = "!@#$%^&*";

function createPassword() {
  let generatedPassword = [];
  let passwordLength = Number(passLegth.value);
  let options = [useUpper, useLower, useNums, useSpecials];
  let chars = [];

  // Check if the requested password length is valid
  if (passwordLength < 4) {
    console.error(
      `Requested password length ${passwordLength} is less than the minimum of 4.`
    );
    return;
  }

  // Update chars based on user's options
  console.log(options);

  for (let option of options) {
    let charSelection;
    if (option.checked) {
      console.log(
        `${option.id} is checked, so it has been added to list of available characters to use.`
      );
      // Determine which characters to add based on the option
      switch (true) {
        case option === useUpper:
          charSelection = letters;
          break;
        case option === useLower:
          charSelection = lowerLetters;
          break;
        case option === useNums:
          charSelection = numbers;
          break;
        case option === useSpecials:
          charSelection = specialChars;
          break;
        default:
          break;
      }
      // Push the selected characters into the chars array
      chars.push(charSelection);
    } else {
      console.log(
        `${option.id} is not selected, and has not been added to list of available characters to use.`
      );
    }
  }

  // If no options are selected, exit the function
  if (chars.length === 0) {
    console.error("No character options selected.");
    return;
  }

  // Log the characters array
  console.log(`List of Characters being used for password creation: ${chars}`);

  // Join the elements in the array to form a string of available characters
  const newChars = chars.join("");
  console.log(`Available characters: ${newChars}`);

  // Randomly select characters for the password
  for (let i = 0; i < passwordLength; i++) {
    let randNum = Math.floor(Math.random() * newChars.length);
    let randChar = newChars[randNum];
    console.log(`Randomly selected char: ${randChar}`);
    generatedPassword.push(randChar);
  }

  // Convert the generatedPassword array to a string
  generatedPassword = generatedPassword.join("");
  console.log(`Generated Password: ${generatedPassword}`);

  // Display the generated password to the user
  outputText.value = generatedPassword;
}
