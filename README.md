# WK-2-Code-Challenge

## Author

By Hann Martin
Date, 29-03-2024

### Live Site

https://l3xst1ng.github.io/portfolio1/

### Description

- This repository contains a collection of utility functions that perform various operations on strings and arrays.

- Feel free to explore the code and experiment with different inputs to see the results. Contributions and improvements to these functions are welcome.

##### 1. Function: checkForPrimeNumbersinArrayOfNumbers()

swapCaseOfString is a function that takes a string as input and swaps the case of each character within that string. For example, if you input the string 'The Quick Brown Fox', the output will be 'tHE qUICK bROWN fOX'.

- The function iterates through each of the input string and checks and swaps the case of each character.

- The resulting string contains swapped cases for each character.

##### Parameters:

- inputString: A string of text from which each character is to be case-swapped.

###### Usage Example:

'
const input = prompt("Input Your String:");

const output = alert(swapCaseOfString(input));
console.log(output);

'

##### 2. Function: generateArrayBetweenTwoNumbers()

- generateArrayBetweenTwoNumbers()is a function that creates an array of numbers within a specified range. It accepts two numbers as input: a start value and an end value. The function will then generate and return an array containing all the integers between the start and end values,inclusive.

##### Return Value:

- An array containing ontaining all the integers between the start and end values, inclusive.

##### 3. Function: checkForPrimeNumbersinArrayOfNumbers()

- checkForPrimeNumbersinArrayOfNumbers() is a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array.

* The function iterates through each element of the input array and checks if it is a prime number using the isAPrimeNumber() helper function.

* Prime numbers are retained in the output array, while non-prime numbers are filtered out.

* The resulting array contains only prime numbers from the input array, maintaining the order of appearance.

##### Parameters:

- inputArray: An array of numbers from which prime numbers are to be filtered.

##### Return Value:

- An array containing only the prime numbers from the input array, in the same order as they appear.

Usage Example:
'
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = checkForPrimeNumbersinArrayOfNumbers(inputArray);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
'

### Installation Requirements

Git, npm

### Installation Instructions

Use git clone to be able to download the documents in the GitHub
git@github.com:l3xst1ng/WK-2-Code-Challenge.git

### Techstack

Javascript, HTML, CSS

### Contact details

https://l3xst1ng.github.io/portfolio1/

### License & CopyRight

The content of this site is licensed under the MIT license Copyright (c) 2024.
