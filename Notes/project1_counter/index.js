let count = 0;

/*
One way of writing the code
*/
// document.getElementById("decreaseBTN").addEventListener("click", function () {
//   count--;
//   document.getElementById("countLabel").textContent = count;
// });

// document.getElementById("increaseBTN").addEventListener("click", function () {
//   count++;
//   document.getElementById("countLabel").textContent = count;
// });

// document.getElementById("resetBTN").addEventListener("click", function () {
//   count = 0;
//   document.getElementById("countLabel").textContent = count;
// });

/* Another way of writing the code */
const increaseButton = document.getElementById("increaseBTN");
const decreaseButton = document.getElementById("decreaseBTN");
const resetButton = document.getElementById("resetBTN");
const counter = document.getElementById("countLabel");

let counts = 0;

increaseButton.addEventListener("click", function () {
  counts++;
  counter.textContent = counts;
});

decreaseButton.addEventListener("click", function () {
  counts--;
  counter.textContent = counts;
});

resetButton.addEventListener("click", function () {
  counts = 0;
  counter.textContent = counts;
});
