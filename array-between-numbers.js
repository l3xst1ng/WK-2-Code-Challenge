function generateArrayBetweenTwoNumbers(num1, num2) {
  const result = [];
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}
