// console.log(`Hello`);
// console.log(`I like pizza!`);

// window.alert(`This is an alert!`);
// window.alert(`I like pizza!`);

// This is how you can write a comment

/*
Multi line comment
*/

// the below targets an element on the index.html pag and replaces it's text content
// document.getElementById("myh1").textContent = `Hello!`;
// document.getElementById("myp").textContent = "This is a paragraph";

// // variables
// let x = 123;

// console.log(x);

// let price = 10.99;
// console.log(price);

// let gpa = 2.1;
// console.log(`Your GPA is ${gpa} for this school year.`);

// let firstName = "Harviti";
// console.log(typeof firstName);

// let online = true;
// console.log(typeof online);
// console.log(`Is the User online?: ${online}`);

// let fullName = "Harviti Bondiliti";
// let age = 5;
// let student = false;

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;

// // arithmetic operators
// let students = 30;

// students = students + 1;
// console.log(`Number of Students: ${students}`);

// // another way of adding 1
// let animals = 20;
// animals += 1;
// animals -= 5;
// console.log(`Number of Animals: ${animals}`);

// // increment operator
// let pets = 10;
// pets++;
// pets--;
// console.log(`Number of Pets: ${pets}`);

// how to accept user input
let username;

document.getElementById("mySubmit").addEventListener("click", function () {
  username = document.getElementById("myText").value;
  document.getElementById("myh1").textContent = `Welcome ${username}`;
  console.log(`Your username is: ${username}`);
});

// // Type Conversion
// let userAge = window.prompt(`How Old Are you?`);
// userAge = Number(userAge); // The Number() function converts a string to a number
// userAge += 1;
// console.log(`Age: ${userAge}`);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(`X: ${x} ||| Y: ${y} ||| Z: ${z}`);

// const are variables that can't be changed once assigned
const PI = 3.14159; // capitalize constant variables if they are numbers or boolean. keep them lowercase if they are strings
let radius;
let circumference;

document.getElementById("radiusSubmit").addEventListener("click", function () {
  radius = Number(document.getElementById("myRadius").value);
  circumference = 2 * PI * radius;
  document.getElementById(
    "circumResult"
  ).textContent = `Circumference is ${circumference} inches.`;
  console.log(`Circle Circumference: ${circumference}`);
});

/*
Math = built-in object that provides a collection of mathematical properties and methods
*/
console.log(Math.PI);
console.log(Math.E);

let a = 3.21;
let b = 2;
let c;
let d = 4.99;
let e;

c = Math.round(a);
console.log(c);

e = Math.floor(d); // floor rounds down, ceil rounds up, trunc eliminates decimal values
console.log(e);

// If statements
let stats = 20;

if (stats >= 25) {
  console.log("User is able to enter this site.");
} else {
  console.log("User is not able to enter the site.");
}

let time = 15;
if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

isTeacher = false;

if (isTeacher) {
  console.log("User is a student.");
} else {
  console.log("User is not a Student.");
}

let driver = 25;
hasLicense = false;

if (driver >= 16) {
  console.log("You are old enough to drive.");
  if (hasLicense) {
    console.log("But you have a license. You meet the conditions to drive!");
  } else {
    console.log("You do not have a license. Please get one.");
  }
} else {
  console.log("You must be 16+ to have a license.");
}

const ageButton = document.getElementById("ageButton");
const myAgeInput = document.getElementById("myAge");
const ageCheck = document.getElementById("ageCheck");

ageButton.addEventListener("click", () => {
  const age = Number(myAgeInput.value);
  let message = "";

  if (age >= 100) {
    message = "Age cannot be greater than 100. You are too old!";
  } else if (age == 0) {
    message = "Your age cannot be zero.";
  } else if (age < 0) {
    message = "Age cannot be a negative value.";
  } else if (age < 18) {
    message = "You are not old enough to enter this site.";
  } else {
    message = "You are old enough to enter this site!";
  }

  ageCheck.textContent = message;
  console.log(message);
});

// The Checked Property
const subscribeCheckbox = document.getElementById("myCheckbox");
const visaRadio = document.getElementById("visaBTN");
const mastercardRadio = document.getElementById("mastercardBTN");
const paypalRadio = document.getElementById("paypalBTN");
const submitButton = document.getElementById("myButton");
const subscribeParagraph = document.getElementById("subResult");
const paymentParagraph = document.getElementById("paymentResult");

submitButton.addEventListener("click", () => {
  let subscribeMessage;
  let paymentMessage;

  // check checked state of subcribeChecbox
  if (subscribeCheckbox.checked) {
    subscribeMessage = `You are subscribed!`;
  } else {
    subscribeMessage = `You are not subscribed.`;
  }

  // check checked state of payment options
  if (visaRadio.checked) {
    paymentMessage = "Your payment method is Visa.";
  } else if (mastercardRadio.checked) {
    paymentMessage = "Your payment method is Mastercard.";
  } else if (paypalRadio.checked) {
    paymentMessage = "Your payment method is Paypal.";
  } else {
    paymentMessage = "You did not select a payment method.";
  }

  // Display Messages
  subscribeParagraph.textContent = subscribeMessage;
  paymentParagraph.textContent = paymentMessage;
});

// Ternary operators
let age3 = 21;
let message = age3 >= 18 ? "You are an adult!" : "You are not an adult";

let time2 = 16;
let greeting =
  time2 < 12
    ? `Good morning! It is ${time2}am`
    : `Good afternoon! It is ${time2}pm`;
console.log(greeting);

// let isTeacher = true;
// let message5 = isTeacher ? "Welcome to Class!" : "You're not allowed in class!";
// console.log(message5);

let grandTotal = 125;
let discount =
  grandTotal >= 100
    ? "You will receive a 10% discount on your order!"
    : "You do not qualify for a 10% discount.";

console.log(discount);

// Switch Statements
let weekday = 5;
switch (weekday) {
  case 1:
    console.log("It is Monday!");
    break;
  case 2:
    console.log("It is Tuesday!");
    break;
  case 3:
    console.log("It is Wednesday!");
    break;
  case 4:
    console.log("It is Thursday!");
    break;
  case 5:
    console.log("It is Friday!");
    break;
  case 6:
    console.log("It is Saturday!");
    break;
  case 7:
    console.log("It is Sunday");
    break;
  default:
    console.log("Not a valid day.");
    break;
}

let testScore = 71;
let grade;

switch (true) {
  case testScore <= 50:
    grade = "F";
    break;
  case testScore <= 60:
    grade = "D";
    break;
  case testScore <= 70:
    grade = "C";
    break;
  case testScore <= 80:
    grade = "B";
    break;
  case testScore <= 90:
    grade = "A";
    break;
  case testScore <= 100:
    grade = "A+";
    break;
  default:
    grade = "N/A";
}
console.log(grade);

// String Methods allow us to manipulate and work with text (strings)
let username2 = "Chefff_Boyardee";

console.log(username2.charAt(0)); // gets the char at a specified index
console.log(username2.indexOf("f")); // returns the index where it found the first char
console.log(username2.lastIndexOf("f")); // returns the last index where it found the char
console.log(username2.length); // returns the length of a string

cleanedUsername = username2.trim(); // removes leading and trailing whitespaces

console.log(username2.toUpperCase()); // sets all chars to uppercase
console.log(username2.toLowerCase()); // sets all chars to lowercase
console.log(username2.repeat(2)); // repeats a string a specified number of time
console.log(username2.startsWith("C")); // returns a boolean if starts with specified char
console.log(username2.endsWith("e")); // returns a boolean if ends with specified char
console.log(username2.includes("are")); // returns a boolean if includes a char or sequence of chars

let phoneNumber = "123-456-7890";

let phoneNumber2 = phoneNumber.replaceAll("-", ""); // replace all dashes with nothing
console.log(phoneNumber2);

// pad the string with 0's at the start, until it is 15 chars long. We can also use padEnd
let phoneNumber3 = phoneNumber.padStart(15, "0");
console.log(phoneNumber3);

// String Slicing

// the below is not a dynamic way of string slicing
const fullName2 = "Chefff Boyardee";
let firstName2 = fullName2.slice(0, 6); // starts a 0 index, ends at ending -1 index as it is exclusive
let lastName2 = fullName2.slice(7); // dont need to include an ending index
// console.log(`First Name: ${firstName2} | Last Name: ${lastName2}`);

// this is more dyanmic
let firstName3 = fullName2.slice(0, fullName2.indexOf(" "));
let lastName3 = fullName2.slice(fullName2.indexOf(" ") + 1);
console.log(
  `New First Name: ${firstName3.trim()} | New Last Name: ${lastName3.trim()}`
);

const email = "chefffy@gmail.com";
let username3 = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(
  `Email: ${email} | Extension: ${extension} |  Suggested Username: ${username3}`
);

// Method Chaining - Calling one method after another

// No Chain
let player = "   chefffBoyardee12    ";
player = player.trim(); // remove all whitespaces
let firstLetter = player.charAt(0);
firstLetter = firstLetter.toUpperCase();
let extraChars = player.slice(1);
extraChars = extraChars.toLowerCase();
player = firstLetter + extraChars;
console.log(`Cleaned Username: ${player}`);

// Method chaining
let player2 = "    chefffBoyARDee   ";
player2 = player2.trim();
player2 = player2.charAt(0).toUpperCase() + player2.slice(1).toLowerCase();
console.log(`Cleaned Username for Player2: ${player2}`);

/* Logical Operators: Used to combine or manipulate Boolean Values
                      AND = &&
                      OR = ||
                      NOT = !
*/
const temp = 20;

if (temp > 0 && temp <= 30) {
  console.log(`The weather is currently ${temp} and is good.`);
} else {
  console.log(`The weather is bad! Temp is currently ${temp}`);
}

const score = -10;

if (score >= 50 && score <= 100) {
  console.log(`You have passed the class. Your score is ${score}`);
} else if (score > 100 || score < 0) {
  console.log(`Your score (${score}) is invalid. Please contact the teacher.`);
} else {
  console.log(`You have failed the class. Your score is ${score}`);
}

const speed = 20;

if (speed != 30) {
  console.log("You are too slow.");
}

const isSunny = false;

if (!isSunny) {
  console.log(`The weather is bad. It is not sunny.`);
} else {
  console.log(`The weather is good. It is sunny!`);
}

// Various types of operators and string operators
//    = assignment operator
//    == comparison operator (if two variables or values are equal)
//    === strict equality operator (compare if values and datatypes are equal)
//    != inequality operator
//    !== strict inequality operator

const nums = 3.14;
if (nums == "3.14") {
  console.log("That is pie!"); // logs this result, as == only cares about values and not dtypes.
} else {
  console.log("That is not pie!");
}

const nums2 = 3.14;
if (nums === "3.14") {
  console.log("That is pie!");
} else {
  console.log("That is not pie!"); // logs this result, as === is a strict equality comparison for both value and dtypes
}

const nums3 = 3.14;
if (nums3 != "3.14") {
  console.log("That is not pie!");
} else {
  console.log("That is pie!"); // logs this result, as != compares two values and doesnt care about dtype
}

const nums4 = 3.14;
if (nums4 !== "3.14") {
  console.log("That is not pie!"); // logs this result, as !== is a strict not equal comparison that looks at both value and dtypes.
} else {
  console.log("This is pie!");
}

// While and Do While loops

// let password = "";
// while (password === "" || username === null) {
//   password = window.prompt("Enter Password: ");
// }
// console.log(`Password: ${password}`);

let counter = 0;
while (true) {
  if (counter >= 5) {
    break;
  }
  counter++;
  console.log(`Current Count: ${counter}`);
}

// Do while loops run the code first, then they check the condition
let counter2 = 0;
do {
  counter2 += 1;
  console.log(`Counter2 Current Count: ${counter2}`);
} while (counter2 < 10);

let loggedIn = false;
let player3;
let specialKey;

// while not logged in, ask user for their username and password
// while (!loggedIn) {
//   player3 = window.prompt(`Enter Username: `);
//   specialKey = window.prompt(`Enter Password: `);

//   if (player3 != undefined || player3 != null) {
//     console.log("Username and Password entered");
//     console.log(`Username: ${player3} | Password: ${specialKey}`);
//     break;
//   }
// }

// For Loops: Repeat something a limited amount of time
// i (index) starts at 0, and as long as i is less than or equal to 10, run the code and then increment i by 1
for (let i = 0; i <= 10; i++) {
  console.log(`Current Iteration: ${i + 1}`);
}

// count downwards
for (i = 5; i >= 0; i--) {
  console.log(`Counting Downwards. Current Count: ${i}`);
}
console.log(`Boom!`);

// skipping iterations
for (i = 0; i <= 30; i++) {
  if (i % 3 == 0) {
    continue; // skip iterations where the index is divisible by 3
  }
  console.log(`Counting Upwards. Current Iteration: ${i}`);
}

// Functions: Section of Resuable Code. Declare the code once, and use it whenevr you want
function happyBirthday(birthdayName, age) {
  console.log(`Happy Birthday to you`);
  console.log(`Happy Birthday to you`);
  console.log(`Happy Birthday ${birthdayName}. You are now ${age}`);
  console.log(`Happy Birthday to you`);
}
happyBirthday((birthdayName = "Aryan"), (age = 27));

function additioner(x, y) {
  let result = x + y;
  console.log(result);
  return result;
}
let numberCalc = additioner(5, 9);

function substracter(x, y) {
  let result = x - y;
  console.log(result);
  return result;
}
let substractResult = substracter(10, 5);

function evenFinder(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const students = 67511;
isStudentsEven = evenFinder(students);
console.log(`Is Students an Even Number?: ${isStudentsEven}`);

function emailVerifier(email) {
  return email.includes("@") ? true : false;
}
const userEmail = "apple@gmail.com";
console.log(`Email Valid?: ${emailVerifier(userEmail)}`);

// Variable Scope
let xx = 1;

// Arrays: A variable like structure that can hold more than 1 value
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(`First Fruit: ${fruits[0]}`);

fruits[0] = "coconut"; // updates and replaces the first fruit with the passed in fruit
fruits.push("pear"); // adds an element to the list, at the end of the array
lastValue = fruits.pop(); // removes the last element from the array
console.log(`Element removed from end of list: ${lastValue}`);
fruits.unshift("mango"); // adds an element to the start of the array
console.log(fruits);
firstRemoved = fruits.shift(); // removes the first element from the list
console.log(`First removed element: ${firstRemoved}`);

let numFruits = fruits.length;
console.log(`Number of Fruits: ${numFruits} fruits`);

let bananaIndex = fruits.indexOf(`banana`);
console.log(`Index of Banana: ${bananaIndex}`);

/* 
Iterating through our list in reversed order
  1) we start at the length of the list and substract by 1
  2) As long as i is greater than or equal to 0, keep iterating
  3) Decrement by 1 on each iteration
*/
for (i = fruits.length - 1; i >= 0; i--) {
  console.log(`Element ${i}: ${fruits[i]}`);
}

// Quicker way of iterating through a list
for (let fruit of fruits) {
  console.log(fruit);
}

// Sorting an array alphabetically
let names = ["Aryan", "Allison", "Harvey", "Ben", "Josh", "Zach", "Moe"];
console.log(`Sorted Names: ${names.sort()}`);
console.log(`Reverse Sorted Names: ${names.reverse()}`);

// Spread Operator: Allows iterables like an array or string to be unpacked (separated)
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let maximum = Math.max(numbers);
console.log(maximum); // returns NAN, so we need to use the spread operator
console.log(...numbers);
let newMax = Math.max(...numbers);
console.log(`Max Num in Numbers array: ${newMax}`);

let username4 = `ChefffBoyardee`;
let usernameLetters = [...username4];
console.log(`Full Username: ${username4}`);
console.log(`Username Letters: ${usernameLetters}`);

let newSeparatedUsername = usernameLetters.join("-");
console.log(newSeparatedUsername);

let vegetables = ["cucumber", "celery", "cabbage"];
let fruits2 = ["banana", "pear", "mango"];
let groceryOrder = [...vegetables, ...fruits2];
console.log(groceryOrder);
console.log(`Groceries List: \n${groceryOrder.join("\n")}`);

/* 
Rest Operators: Combine multiple elements into a single array
  - Allows a function to work with a variable number of arguments by bundling them into an array
*/
function openFridge(...foods) {
  console.log(foods);
}
const food1 = "pizza";
const food2 = "mango";
const food3 = `hmaburger`;
const food4 = "suhsi";

openFridge(food1, food2, food3, food4);

function adder(...numbers) {
  let result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
const num1 = 10;
const num2 = 10;
const num3 = 10;
const num4 = 25;

const sumResult = adder(num1, num2, num3, num4);
console.log(`Total of Adder Function: ${sumResult}`);

function combineStrings(...strings) {
  return strings.join(" ");
}

const firstName4 = "Harvey";
const lastName4 = "Bondiliti";
const middleName4 = "Jr.";

const fullName4 = combineStrings(firstName4, lastName4, middleName4);
console.log(`Harvey's Full Name is : ${fullName4}`);

// Callbacks: A callback is a function that is passed as an argument, to another function.
/*            They're often used to handle asynchronous functions such as:
                1) Reading a file
                2) Network requests
                3) Interacting with databases
*/

function hello(callback) {
  console.log(`Hello`);
  callback();
}

function goodbye() {
  console.log(`Goodbye!`);
}
hello(goodbye);

function adder2(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayResult(result) {
  console.log(result);
}

adder2(displayResult, 2, 4);

/*
forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element. 

Example: array.forEach(callback)
        an element, index and array are provided when using the forEach method
*/
let numbers2 = [1, 2, 3, 4, 5];

function displayNums(element) {
  console.log(element);
}
numbers2.forEach(displayNums);

let numbers3 = [10, 20, 30, 40, 50];

function doulber(number) {
  let result = number * 2;
  console.log(`Original Number: ${number} | Doubled Number: ${result}`);
}
numbers3.forEach(doulber);

function trippler(element, index, array) {
  array[index] = element * 3;
}
numbers3.forEach(trippler);

let fruits3 = ["apple", "orange", "banana", "coconut"];
function fruitDisplayer(element) {
  element = element.toUpperCase();
  console.log(`Fruit: ${element}`);
}
fruits3.forEach(fruitDisplayer);

/*
.map() = Accepts a callback and applies that function to each element within the array, then returns a new array.
*/
const numbers4 = [1, 2, 3, 4, 5];

function square(element) {
  return Math.pow(element, 2);
}

const sqauredNums = numbers4.map(square);
console.log(sqauredNums);

const students2 = ["Aryan", "Allison", "Harvey"];

function uppercaser(element) {
  return element.toUpperCase();
}

studentsUpper = students2.map(uppercaser);
console.log(studentsUpper);

const dates = ["2024-12-15", "2024-10-25", "2021-09-22"];

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}-${parts[2]}-${parts[0]}`;
}
const newDates = dates.map(formatDates);
console.log(`New Dates: ${newDates}`);

/*
.filter() = Cretes a new array by filtering our elements
*/

let numerics = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isEven(element) {
  return element % 2 === 0;
}
function isOdd(element) {
  return element % 2 !== 0;
}
let evenNumbers = numerics.filter(isEven);
console.log(evenNumbers);

let oddNumbers = numerics.filter(isOdd);
console.log(oddNumbers);

const ages = [18, 20, 19, 16, 22, 15, 29, 40, 38, 14, 13, 12];
function findAdults(element) {
  if (element >= 18) {
    return element;
  }
}
function findTeens(element) {
  if (element < 18) {
    return element;
  }
}
const adults = ages.filter(findAdults);
console.log(adults);
const teens = ages.filter(findTeens);
console.log(teens);
