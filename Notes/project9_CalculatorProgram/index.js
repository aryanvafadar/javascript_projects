export const displayText = document.getElementById("display");
export const buttons = document.querySelectorAll(
  "button:not(.exclude-display)"
);
export const clearBtn = document.getElementById("clearBtn");
export const calcBtn = document.getElementById("calcBtn");

export function appendToDisplay(input) {
  console.log(`Button Clicked. Value: ${input}`);
  displayText.value += input;
}

export function clearDisplay() {
  console.log(`Clear button has been clicked. Calculator wiped.`);
  displayText.value = null;
}

export function calculate() {
  try {
    displayText.value = eval(displayText.value);
  } catch (error) {
    displayText.value = "Error";
    console.error(error);
  } finally {
    console.log(`Result: ${displayText.value}`);
  }
}

// Event listeners to execute each function
buttons.forEach((button) => {
  button.addEventListener("click", () => appendToDisplay(button.textContent));
});

clearBtn.addEventListener("click", clearDisplay);

calcBtn.addEventListener("click", calculate);
