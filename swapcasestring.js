/*function swapCaseOfString(inputString) {
  return inputString
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join("");
}

// Testing the function
const input = "The Quick Brown Fox";

const output = swapCaseOfString(input);
console.log(output);*/

function swapCaseOfString(inputString) {
  return inputString
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join("");
}

// Testing the function
const input = prompt("Input Your String:");

const output = alert(swapCaseOfString(input));
console.log(output);
