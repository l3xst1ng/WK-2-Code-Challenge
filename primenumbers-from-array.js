function checksPrimeNumbersInInput(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function filterPrimeNumbers(inputArray) {
  return inputArray.filter((num) => checksPrimeNumbersInInput(num));
}

// Testing the function
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimeNumbers(inputArray);
console.log(primeNumbers);
