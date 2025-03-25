function updateClock() {
  // Get current time
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  // Combine all the time varibales into a text string
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Get the ID of the text content of our html page
  document.getElementById("clock").textContent = timeString;
}

// Use setInterval to run our clock function every 1,000 milliseconds
setInterval(updateClock, 1000);
