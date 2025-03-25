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

/*
.filter() = Creates a new array by filtering out elements
*/
const ages2 = [16, 17, 18, 18, 19, 20, 21, 21, 25, 50];
function isAdult(element) {
  return element >= 18;
}
const adults2 = ages2.filter(isAdult);
console.log(`Ages for Adults2 Variable: ${adults2}`);

function isTeenager(element) {
  return element < 18;
}
const tennagers = ages2.filter(isTeenager);
console.log(`Ages for Teenagers Variable: ${tennagers}`);

// Find all the words that start with an A
const words = ["Aryan", "Allison", "Harvey", "Barney", "Zeusy"];
function startsWithA(element) {
  return element.startsWith("A");
}

const aWords = words.filter(startsWithA);
console.log(aWords);

/*
.reduce() = Reduce the elements of an array to a single value
*/
const prices = [10, 5, 20, 40, 100, 40, 25, 10];
const total = prices.reduce(summer);
console.log(`Total of Prices: $${total.toFixed(2)}`);

function summer(previous_element, next_element) {
  return previous_element + next_element;
}

const grades = [75, 91, 85, 94, 45, 65, 53, 79, 67, 30, 66];
const maxGrade = grades.reduce(getBestGrade);

function getBestGrade(previous_element, next_element) {
  let best_grade;

  if (previous_element > next_element) {
    best_grade = previous_element;
  } else {
    best_grade = next_element;
  }

  return best_grade;
}

console.log(`Best Grade: ${maxGrade}`);

const worstGrade = grades.reduce(getWorstGrade);
function getWorstGrade(accumulator, element) {
  return Math.min(accumulator, element);
}

console.log(`Worst Class Grade: ${worstGrade}`);

/*
Function Declaration: Define a reusable block of code that performs a specific task.

Function Expressions: A way to define functions as values or variables. It allows us to use functions as arguments.
*/

// The below is an example of function declaration
const numerics2 = [1, 2, 3, 4, 5, 6];
const squaredNumerics = numerics2.map(squarer);
console.log(`Squared Numbers: ${sqauredNums}`);

function squarer(number) {
  return Math.pow(number, 2);
}

// The below is an example of function expression
const newSquaredNumerics = numerics2.map(function (element) {
  return Math.pow(element, 2);
});
console.log(
  `Squared Numbers Using Function Expressions: ${newSquaredNumerics}`
);

// Below are examples of function expressions
const newDoubledNumbers = numerics2.map(function (element) {
  return element + element;
});
console.log(`Doubled Numbers: ${newDoubledNumbers}`);

const numsToReview = [
  1, 4, 6, 7, 11, 14, 15, 17, 18, 20, 21, 24, 26, 28, 29, 31,
];
const evenNums = numsToReview.filter(function (element) {
  if (element % 2 == 0) {
    return element;
  }
});
console.log(`Even Numbers: ${evenNums}`);

const oddNums = numsToReview.filter(function (element) {
  if (element % 2 != 0) {
    return element;
  }
});
console.log(`Odd Numbers: ${oddNums}`);

const numTotal = numsToReview.reduce(function (previous_element, next_element) {
  return previous_element + next_element;
});
console.log(`Total of Numbers: ${numTotal}`);

/*
Arrow Functions 
  - Conscise ways to write function expressions
  - Good for simple functions that only need to be used once
  - (parameters) => some code
*/

const greeting2 = () => console.log(`Hello, this is an arrow function!`);
greeting2();

const arrowAdder = (num1, num2) => {
  return num1 + num2;
};
const result5 = arrowAdder(5, 10);
console.log(`ArrowAdder Result: ${result5}`);

// Another example of an arrow function
setTimeout(() => console.log(`HELLO HARVEY!`), 5000);

// More examples of arrow functions
const checkoutPrices = [4.29, 10.99, 8.99, 14.99];

const basket = checkoutPrices.reduce((x, y) => {
  return x + y;
});
console.log(`Shopping Cart Basket: $${basket}`);

const mostExpensiveProduct = checkoutPrices.reduce((x, y) => {
  return Math.max(x, y);
});
console.log(`Price of Most Expensive Product: $${mostExpensiveProduct}`);

const wholePrices = checkoutPrices.map((element) => {
  return Math.round(element);
});
console.log(`Whole Prices: ${wholePrices}`);

const belowTenDollars = checkoutPrices.filter((element) => {
  return element <= 10.0;
});
console.log(`Prices Below $10.00: ${belowTenDollars}`);

/*
Objects in Javascript:
  - A collection of related properties and/or methods.
  - Can represent real world places (people, products, places)
  - object = {key: value,
              function()}
*/
const individual1 = {
  firstName: "Aryan",
  lastName: "Vafadar",
  age: 27,
  height: 170,
  weight: 175,
  isEmployed: true,
  isMarried: true,
  sayHello: function () {
    console.log(`Hi my name is ${this.firstName}`);
  },
  expressHunger: () => console.log(`Wow I am hungry!`),
};
console.log(`First Name: ${individual1.firstName}`);
console.log(`Last Name: ${individual1.lastName}`);
console.log(`Is Married?: ${individual1.isMarried}`);
individual1.sayHello();
individual1.expressHunger();

const individual2 = {
  firstName: "Harvey",
  lastName: "Bondiliti",
  age: 5,
  height: 30,
  weight: 90,
  isEmployed: false,
  isMarried: false,
  sayWoof: function () {
    console.log(`Woof! My name is ${this.firstName}`);
  },
  introduction: function () {
    console.log(
      `I am a dog. My name is ${this.firstName}. I weight ${this.weight} lbs. I am chonky!`
    );
  },
};
console.log(`First Name: ${individual2.firstName}`);
console.log(`Last Name: ${individual2.lastName}`);
console.log(`Is Married?: ${individual2.isMarried}`);
individual2.sayWoof();
individual2.introduction();

/*
Constructors = A special method for for defining the methods and properties of objects
*/
function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You are driving a ${this.make} ${this.model}.`);
  };
}

const Car1 = new Car("Lexus", "NX300", 2019, "Silver");
console.log(`Car1 Make: ${Car1.make}`);
console.log(`Car1 Model: ${Car1.model}`);
Car1.drive();

const Car2 = new Car("Mercedes Benz", "AMG-GT", 2024, "Dark Blue");
console.log(`Car2 Make: ${Car2.make}`);
console.log(`Car2 Model: ${Car2.model}`);
Car2.drive();

/*
class = Provides a more structured and cleaner way to work with objects compared to traditional constructor functions.
      ex. static keyword, encapsulation, inheritance
*/
class Product {
  constructor(name, price, category, saleable_units) {
    (this.name = name),
      (this.price = price),
      (this.category = category),
      (this.saleable_units = saleable_units);
  }

  // Function to display the product
  displayProduct() {
    console.log(
      `Product Name: ${this.name} | Price: $${this.price} | Department: ${this.category} | Units Remaining: ${this.saleable_units}`
    );
  }

  // Function to calculate the total price including sales tax
  calculateTotal(salesTax) {
    return this.price * (1 + salesTax);
  }
}

const Product1 = new Product("Shirt", 19.99, "Clothing", 10);
Product1.displayProduct();
const Product2 = new Product("Xbox", 399.99, "Electronics", 15);
Product2.displayProduct();

const salesTax = 0.05;
const Total1 = Product1.calculateTotal(salesTax);
console.log(
  `Total for ${Product1.name} including salestax is $${Total1.toFixed(2)}.`
);

const Total2 = Product2.calculateTotal(salesTax);
console.log(
  `Total for ${Product2.name} including salestax is $${Total2.toFixed(2)}.`
);

/*
static = keyword that defines properties or methods that belong to the class itself, rather than the objects created from that class. 
         A class owns anything static, but they don't own the objects themselves
*/

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(5));
console.log(MathUtil.getArea(5));

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`Total Number of Users: ${User.userCount} online.`);
  }

  sayHello() {
    console.log(`Hello ${this.username}!`);
  }
}

const user1 = new User("Harviti");
const user2 = new User("Chefffy");
const user3 = new User("AllieMcBLT");
user3.sayHello();
User.getUserCount();

/*
Inheritance = Allows a new class to inherit properties and methods from an existing class (parent --> child)
              This helps with code reusability
*/

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating.`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping.`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`This ${this.name} is running.`);
  }
}

class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`This ${this.name} is swimming.`);
  }
}

class Hawk extends Animal {
  name = "Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(`Is Rabbit Alive?: ${rabbit.alive}`);
rabbit.eat();

rabbit.run();
fish.swim();

/*
super = keyword used in classes to call the constructor or access the properties and methods of a parent class (superclass)
        this = this object
        super = the parent
*/

class Animal2 {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  move(speed) {
    console.log(`${this.name} moves at a speed of ${speed} km/h`);
  }
}

class Rabbit2 extends Animal2 {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run.`);
  }
}

class Fish2 extends Animal2 {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim.`);
  }
}

class Hawk2 extends Animal2 {
  constructor(name, age, flyingSpeed) {
    super(name, age);
    this.flyingSpeed = flyingSpeed;
  }

  fly() {
    console.log(`This ${this.name} can fly.`);
    super.move(this.flyingSpeed);
  }
}

const rb = new Rabbit2("Aryan", 10, 30);
const fh = new Fish2("Allison", 5, 40);
const hk = new Hawk2("Harvey", 3, 80);

hk.fly();

/*
More examples of super
*/

class Dog {
  constructor(name, age, color, weight) {
    (this.name = name),
      (this.age = age),
      (this.color = color),
      (this.weight = weight);
  }

  displayInfo(breed) {
    console.log(
      `Congratulations on your new dog!\nYour dog belongs to the ${breed} breed. Their name is ${this.name}, they are ${this.age} years old and they weigh ${this.weight} lbs.\nLastly, their coat colour is ${this.color} `
    );
  }
}

class Labrador extends Dog {
  breed = "Labrador";
  constructor(name, age, color, weight) {
    super(name, age, color, weight);
  }
}

class GermanShepard extends Dog {
  breed = "German Shepard";
  constructor(name, age, color, weight) {
    super(name, age, color, weight);
  }
}

const labrador1 = new Labrador("Harvey", 5, "Silver", 80);
labrador1.displayInfo(labrador1.breed);

/*
getter = a special method that makes a property readable
setter = a special method that makes a property writeable

helps validate and modify a value when reading/writing a property
*/

class Rectangle {
  constructor(width, height) {
    (this.width = width), (this.height = height);
  }

  set width(newWidth) {
    if (newWidth > 0 && newWidth > 5) {
      this._width = newWidth;
    } else {
      console.error(`Width must be a positive number, greater than 5`);
    }
  }

  set height(newHeight) {
    if (newHeight > 0 && newHeight > 5) {
      this._height = newHeight;
    } else {
      console.error(`Height must be a positive number, greater than 5`);
    }
  }

  get width() {
    return `${this._width.toFixed(1)} cm`;
  }
  get height() {
    return `${this._height.toFixed(1)} cm`;
  }
  get area() {
    return `${(this._width * this._height).toFixed(1)} cm^2`;
  }
}

const rectangle = new Rectangle(8, 6);

// rectangle.width = 10;
// rectangle.height = 20;
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person3 {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 1) {
      this._firstName = newFirstName;
    } else {
      console.error(
        `FirstName must be a string, with a length greater than 1. `
      );
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 1) {
      this._lastName = newLastName;
    } else {
      console.error(
        `LastName must be a string, with a length greater than one.`
      );
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge > 2) {
      this._age = newAge;
    } else {
      console.error("Age must be an integer and greater than 2.");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  get fullname() {
    return this._firstName + " " + this._lastName;
  }

  get introduction() {
    console.log(
      `Hello, my name is ${this._firstName} ${this._lastName}. I am ${this._age} years old.`
    );
  }
}

const human = new Person3("Aryan", "Vafadar", 27);
console.log(human.firstName);
console.log(human.lastName);
console.log(human.age);
console.log(`Full Name: ${human.fullname}`);
human.introduction;

/*
destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
[] = used to perform array destructuring
{} = used to perform object destructuring
*/

// Example 1 - Swapping the value of two variables
let bucket1 = 5;
let bucket2 = 10;
console.log(`bucket1 value: ${bucket1} | bucket2 value: ${bucket2}`);

[bucket1, bucket2] = [bucket2, bucket1];
console.log(`New bucket1 value: ${bucket1} | New bucket2 value: ${bucket2}`);

// Example 2 - Swap two elements in an array
const colours = ["red", "orange", "green", "yellow", "blue"];
[colours[0], colours[4]] = [colours[4], colours[0]];
console.log(`Colours: ${colours}`);

// Example 3 - Assign Array Elements to Variables
const colours2 = ["brown", "green", "purple", "pink", "turquoise", "teal"];

const [firstColour, secondColour, thirdColour, ...extraColours] = colours2;
console.log(`First Colour: ${firstColour}`);
console.log(`Second Colour: ${secondColour}`);
console.log(`Third Colour: ${thirdColour}`);
console.log(`Remaining Colours: ${extraColours}`);

// Example 4 - Extract Values from Objects
const individual5 = {
  firstName: "Harviti",
  lastName: "Bondiliti",
  age: 20,
  job: "Police Pup",
};

const individual6 = {
  firstName: "Allison",
  lastName: "Trevino",
  age: 26,
  job: "Surgical Technician",
};

// const { firstName, lastName, age, job } = individual5;
// console.log(
//   `First Name: ${firstName} | Last Name: ${lastName} | Age: ${age} | Job: ${job}`
// );

// Example 5 - Destructure in Function Parameters
function displayPerson({ firstName, lastName, age, job }) {
  console.log(
    `First Name: ${firstName} | Last Name: ${lastName} | Age: ${age} | Job: ${job}`
  );
}
displayPerson(individual6);

/*
nested objects = objects inside of other objects. Allows us to represent more complex data structures
                 A child object is enclosed in a parent object

                 Person{Address{}, ContactInfo{}}
                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/
const Person5 = {
  fullName: "Aryan Vafadar",
  age: 27,
  isStudent: false,
  hobbies: ["Gym", "Video Games", "Music"],
  address: {
    street: "80 Strathridge Close SW",
    city: "Calgary",
    province: "Alberta",
    country: "Canada",
  },
};
console.log(`Full Name: ${Person5.fullName}`);
console.log(`Hobbies: ${Person5.hobbies.join(", ")}`);
console.log(
  `Address: ${Person5.address.street}, ${Person5.address.city} ${Person5.address.province}, ${Person5.address.country}`
);

class Address {
  constructor(street, city, province, country) {
    (this.street = street),
      (this.city = city),
      (this.province = province),
      (this.country = country);
  }
}

class Resident {
  constructor(name, age, ...address) {
    (this.name = name),
      (this.age = age),
      (this.address = new Address(...address));
  }
}

const resident1 = new Resident(
  "Aryan Vafadar",
  27,
  "80 Strathridge Close SW",
  "Calgary",
  "Alberta",
  "Canada"
);

const resident2 = new Resident(
  "Allison Trevino",
  26,
  "8350 Gera Rd",
  "Birch Run",
  "Michigan",
  "United States"
);

const resident3 = new Resident(
  "Harviti Bondiliti",
  5,
  "300 Pup Lane SW",
  "Toronto",
  "Ontario",
  "Canada"
);

console.log(resident3.address);

// Array Objects
const fruits5 = [
  { name: "Apple", colour: "Red", calories: 95 },
  { name: "Orange", colour: "Orange", calories: 45 },
  { name: "Banana", colour: "Yellow", calories: 90 },
  { name: "Cocounut", colour: "White", calories: 150 },
  { name: "Pineaaple", colour: "Yellow", calories: 200 },
];

console.log(`First Fruit Name: ${fruits5[0].name}`);
console.log(`First Fruit Colour: ${fruits5[0].colour}`);
console.log(`First Fruit Calories: ${fruits5[0].calories}`);

// Adding a new object to our array
fruits5.push({ name: "Mango", colour: "Orange-Yellow", calories: 200 });
console.log(`Newest Fruit Name: ${fruits5[5].name}`);
console.log(`Newest Fruit Colour: ${fruits5[5].colour}`);
console.log(`Newest Fruit Calories: ${fruits5[5].calories}`);

// iterating through the array
fruits5.forEach((fruit) =>
  console.log(`Fruit Name: ${fruit.name} | Calories: ${fruit.calories}`)
);

// .map() method
const fruitNames = fruits5.map((fruit) => fruit.name);
console.log(`Fruit Names: ${fruitNames}`);

// .filter method
const yellowFruits = fruits5.filter((fruit) => fruit.colour === "Yellow");
yellowFruits.forEach((fruit) => console.log(`Yellow Fruit Name: ${fruit}`));

const lowCalorieFruits = fruits5.filter((fruit) => fruit.calories < 100);
console.log(lowCalorieFruits);

// reduce method
const highestCalorieFruit = fruits5.reduce((previous_element, next_element) => {
  if (previous_element.calories > next_element.calories) {
    return previous_element;
  } else {
    return next_element;
  }
});

console.log(
  `Highest Calorie Fruit: ${highestCalorieFruit.name} | Calories Per Serving: ${highestCalorieFruit.calories}`
);

/*
.sort() method = used to sort elements of an array in place. Sorts elements as strings in lexographic order
                 lexographic = (alphabet + numbers + symbols)
*/
let fruits6 = [
  "mango",
  "apple",
  "banana",
  "beets",
  "cherries",
  "watermelon",
  "pineapple",
  "grapes",
];
fruits6.sort();
console.log(fruits6);

let numbers6 = [3, 1, 6, 2, 10, 11, 4, 2];
numbers6.sort((a, b) => a - b);
console.log(numbers6);

const people = [
  { name: "Aryan", age: 27, gpa: 3.7 },
  { name: "Allison", age: 26, gpa: 4.0 },
  { name: "Harviti", age: 5, gpa: 2.5 },
];

// sort the array of objects by the age attribute. This method works for numbers
people.sort((a, b) => a.age - b.age);

// sort the array of objects by the name attribute, which is a string. We need to use the localCompare method
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

/*
Shuffling the elements in an array using the Fisher-Yates Algorithm
*/
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function shuffle(array) {
  // iterate through the array, start at the end
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random number
    const random = Math.floor(Math.random() * (i + 1));

    // Perform destructring and swap the values
    [array[i], array[random]] = [array[random], array[i]];
  }
}

shuffle(cards);
console.log(cards);

// Example two for shuffling
const prizes = ["Ipod", "Dog", "Car", "House", "Giftcard", "Clothes"];

function prizeShuffler(array) {
  // Iterate through the array. Start at the end of the array by taking the length and substracting by 1
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random number, then round down
    const randomNumber = Math.floor(Math.random() * (i + 1));
    // Perform destructuring and swap the values
    [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
  }
}
prizeShuffler(prizes);
console.log(prizes);

/*
Date Objects = Objects that contain values that represent dates and times
               These date objects can be changed and formatted.
*/
// Arguments for Date() = (year, month, day, hour, minute, second, ms)
const date = new Date();
console.log(date);

const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const dayOfMonth = date.getDate();
console.log(dayOfMonth);

/*
closure = A function defined inside of another function. The inner function has access to the variables and scope of the outer function
          Allows for private variables and state maintenance.
          Used frequently in JS Frameworks: React, Vue, Angular
*/
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// Example 2 utilizing state maintenance
function createCounter() {
  let count = 0;

  function incrementer() {
    count++;
    console.log(`Current Count: ${count}`);
  }

  function getCount() {
    return count;
  }

  return { incrementer, getCount };
}

const count = createCounter();
count.incrementer();
count.incrementer();
console.log(`The current count is ${count.getCount()}`);

// Example 3 - Scoring Game
function createGame() {
  let score2 = 0;

  function increaseScore(points) {
    score2 += points;
    console.log(`+${points}`);
  }

  function decreaseScore(points) {
    score2 -= points;
    console.log(`-${points}`);
  }

  function getScore() {
    return score2;
  }

  return { increaseScore, decreaseScore, getScore };
}

const newGame = createGame();
newGame.increaseScore(10);
newGame.increaseScore(4);
newGame.decreaseScore(5);
console.log(`Current Score: ${newGame.getScore()}`);

// Example 3 - Shopping Cart
function newOrder() {
  // Create an empty list to store our shopping cart items
  let basket = [];

  function addProduct(productName) {
    basket.push(productName);
    console.log(`Product: ${productName} added to cart.`);
  }

  function removeProduct(productName) {
    // find the index of the element passed into the function. if no index is found, then it returns -1
    let index = basket.indexOf(productName);

    // if index does not equal to -1, as in the product was found in the array, then continue looping until all instances are removed
    while (index !== -1) {
      basket.splice(index, 1);
      index = basket.indexOf(productName);
    }
    console.log(`Product: ${productName} has been removed from your cart.`);
  }

  function displayBasket() {
    console.log(`Basket: ${basket.join(", ")}`);
  }

  return { addProduct, removeProduct, displayBasket };
}

const newOrder2 = newOrder();
newOrder2.addProduct("Xbox");
newOrder2.addProduct("PS5");
newOrder2.addProduct("Mattress");
newOrder2.removeProduct("Xbox");
newOrder2.displayBasket();

/*
.setTimeout() = A function that allows you to schedule the execution of a function after a set amount of time (milliseconds).
                Times are approximate and based on the workload of the javascript runtime environment.
                setTimeout(callback, delay)
*/
function bonjour() {
  console.log(`Bonjour, comment ca vas?`);
}
setTimeout(bonjour, 3000);

// Using an annoymous function
setTimeout(() => {
  console.log(`A Demain!`);
}, 5000);

// clearTimeout(timeoutId) = can cancel a timeout before it triggers
