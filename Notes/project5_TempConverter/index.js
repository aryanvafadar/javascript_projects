const userTemp = document.getElementById("textbox");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const resultsText = document.getElementById("resultsParagraph");

function convert() {
  let originalTemp;
  let newTemp;
  let method;
  let message;

  // update originalTemp based on user's input
  originalTemp = Number(userTemp.value);

  // Log users input
  console.log(`User Input: ${originalTemp}`);

  // get which method user would like to convert to
  if (toFarenheit.checked) {
    console.log(`User would like to convert from Celsius to Farenheit.`);
    method = `calcFarenheit`;
  } else if (toCelsius.checked) {
    console.log(`User would like to convert from Farenheit to Celsius.`);
    method = `calcCelsius`;
  } else {
    console.error(`User has not make a selection.`);
  }

  // Calc result based on method & display message
  if (method === `calcFarenheit`) {
    newTemp = Math.round((originalTemp * 9) / 5 + 32);
    message = `${originalTemp}°C converted to Farenheit is ${newTemp}°F`;
  } else if (method === `calcCelsius`) {
    newTemp = Math.round(((originalTemp - 32) * 5) / 9);
    message = `${originalTemp}°F converted to Celsius is ${newTemp}°C`;
  }

  // Update results paragraph with the new message
  resultsText.textContent = message;
}
