// const min = 50;
// const max = 100;

// + min sets the min of the random number generator and (max - min) sets the range
// let randomNumber = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNumber);

const generateButton = document.getElementById("generateNumButton");
const resultsParagraph = document.getElementById("randNumberResult");
const minValue = document.getElementById("minNumber");
const maxValue = document.getElementById("maxNumber");

let min = Number(minValue.value);
let max = Number(maxValue.value);

minValue.addEventListener("change", function () {
  min = Number(minValue.value);
});

maxValue.addEventListener("change", function () {
  max = Number(maxValue.value);
});

generateButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * (max - min)) + min;
  resultsParagraph.textContent = `Random Number: ${randomNumber}`;
});
