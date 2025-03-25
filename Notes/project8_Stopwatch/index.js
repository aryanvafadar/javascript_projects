// Variables to our HTML StopWatch Program Page
const timerText = document.getElementById("display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("stopButton");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  timerText.textContent = "00:00:00:00";
}

function updateDisplay() {
  const currentTime = Date.now();
  // The below returns the elapsed time in milliseconds, so we need to convert this value to hours, minutes, seconds and milliseconds
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = hours.toString().padStart(2, 0);
  minutes = minutes.toString().padStart(2, 0);
  seconds = seconds.toString().padStart(2, 0);
  milliseconds = milliseconds.toString().padStart(2, 0);

  // Display the content
  timerText.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
