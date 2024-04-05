// function generateArrayBetweenTwoNumbers(num1, num2) {
//   const result = [];
//   const start = Math.min(num1, num2);
//   const end = Math.max(num1, num2);

//   for (let m = start; m <= end; m++) {
//     result.push(m);
//   }

//   return result;
// }

// User friendly edit
function promptNumber(message) {
  const value = prompt(message);
  return parseInt(value, 10);
}

function generateArrayBetweenTwoNumbers() {
  let num1 = promptNumber("Enter the first number:");
  let num2 = promptNumber("Enter the second number:");

  if (isNaN(num2)) {
    alert("Please enter a second number for the function to work.");
    num2 = promptNumber("Enter the second number:");
  }

  while (num1 === num2) {
    num2 = promptNumber("Please enter a different second number:");
  }

  const result = [];
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let m = start; m <= end; m++) {
    result.push(m);
  }

  alert(`Generated array: [${result.join(", ")}]`);
  return result;
}

generateArrayBetweenTwoNumbers();
