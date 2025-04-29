/*
ES6 Modules = An external file that contains reusable code that can be imported into other javascript files.
             It allows us to write reusable code for many different applications, and can contain variables, functions, classes, etc.
*/
import { PI, getArea, getVolume, getCircumference } from "./mathUtil.js";

console.log(PI);

const circumference = getCircumference(10);
console.log(circumference);

const area = getArea(5);
console.log(area);

/*
Synchronous  = Executes line by line consecutively in a sequential manner. Code waits for the previous operation to complete

vs

Asynchronous = Allows multiple operations to be performed concurrently without any waiting. Does not block the execution flow and allows the program to continue
               (I/O Operations, network requests, fetching data)
                Handled With: Callbacks, Promises, Async/Await

*/

// Example 1 - setTimeout() is an example of a asynchronous function. the rest of the code does not wait for it to finish before executing. this is why task 2 gets logged to the console before task 1
setTimeout(() => console.log(`TASK 1 COMPLETE!`), 2000);
console.log(`TASK 2 COMPLETE`);

// Example 2 - if we want setTimeout() to execute before any other line of code, we can use Callbacks
function func1(callback) {
  setTimeout(function () {
    console.log(`Treasure 1 Found!`);
    callback();
  }, 5000);
}

function func2() {
  console.log(`Treasure 2 Found!`);
  console.log(`Treasure 3 Found!`);
}

func1(func2);

/*
Error = An object that is created to represent a problem that occurs. This often occurs with user input or establishing a connection.

These errors often end the program and prevent it from executing further. These can be handled with try, catch, and finally blocks

try {} = Encloses the code that might potentially throw an error
catch {} = Catch and handle any thrown errors from try {}
finally {} = (optional) Always executes. Used mostly for cleanup (closing files, closing connections, releasing resources)
*/

// Example 1 - Because we used try and catch blocks, it caught the error and allowed the rest of our program to continue executing
try {
  console.log(x);
} catch (error) {
  console.error(error);
} finally {
  console.log(`This always executes.`);
}

// Example 2 - Calculate Premium
function calculatePremium() {
  // Convert input values to numbers explicitly
  const metalWeight = parseFloat(document.getElementById("metalWeight").value);
  const metalPrice = parseFloat(document.getElementById("metalPrice").value);
  const spotPrice = parseFloat(document.getElementById("spotPrice").value);
  const resultText = document.getElementById("metalResult");

  console.log(`calculatePremium() function has been called.`);
  console.log(`Metal Weight: ${metalWeight}`);
  console.log(`Metal Price: ${metalPrice}`);
  console.log(`Spot Price: ${spotPrice}`);

  let result;

  try {
    // Validate that inputs are valid numbers
    if (isNaN(metalWeight) || isNaN(metalPrice) || isNaN(spotPrice)) {
      throw new Error("One or more input values are not valid numbers.");
    }
    if (metalWeight <= 0) {
      throw new Error("Metal weight must be greater than zero.");
    }

    // Check metal weight is greater than 1
    if (metalWeight < 1) {
      result = ((1 / metalWeight) * metalPrice - spotPrice).toFixed(2);
    } else {
      result = (metalPrice / metalWeight - spotPrice).toFixed(2);
    }
  } catch (error) {
    console.error(error);
    result = "Error";
  } finally {
    result = `${result}/oz`;
    console.log(`Calculated Premium: ${result}`);
  }

  resultText.value = result;
}

document
  .getElementById("calcPremiumButton")
  .addEventListener("click", calculatePremium);
