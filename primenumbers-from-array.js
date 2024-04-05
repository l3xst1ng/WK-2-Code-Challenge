function isAPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let m = 2; m <= Math.sqrt(number); m++) {
    if (number % m === 0) {
      return false;
    }
  }
  return true;
}

function checkForPrimeNumbersinArrayOfNumbers() {
  const input = prompt(
    "Enter an array of numbers e.g. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:"
  );
  const numbers = input.split(",").map((num) => parseInt(num.trim(), 10));

  if (!Array.isArray(numbers)) {
    alert("Please input a valid array.");
    return [];
  }

  const validNumbers = numbers.filter((num) => !isNaN(num)); // Filter out NaN values
  const primeNumbers = validNumbers.filter((num) => {
    if (typeof num !== "number") {
      return false;
    }
    return isAPrimeNumber(num);
  });

  if (primeNumbers.length === 0) {
    alert("No prime number identified in Your Array of Numbers.");
  } else {
    alert(
      `The Prime numbers in Your Array of Numbers Are: [${primeNumbers.join(
        ", "
      )}]`
    );
  }

  return primeNumbers;
}

checkForPrimeNumbersinArrayOfNumbers();
