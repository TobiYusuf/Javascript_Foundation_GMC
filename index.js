// STRING MANIPULATION FUNCTIONS
// Reverse a String: Write a function that reverses a given string.
let reverseString = function (s) {
  let r = [...s]; // Create a copy of input array

  //   Iterate through array
  for (i = 0; i < s.length; i++) {
    // Reverse the index of input array
    curIndex = s.length - (i + 1);
    s[i] = r[curIndex];
    // s[0] = r[4] ; "h" = "o"
    // s[1] = r[3] ; "e" = "l"
    // s[2] = r[2] ; "l" = "l"
    // s[3] = r[1] ; "l" = "e"
    // s[4] = r[0] ; "0" = "h"
  }
  return s;
};
console.log(reverseString(["H", "e", "l", "l", "o"]));

// Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
  return str.length; // Returns the length of the string, which is the count of characters
}
console.log(countCharacters("Hello World"));

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
let capitalizeTitle = function (title) {
  // Array to hold final result
  let output = [];
  // Split the title into an array of words and convert to lowercase
  title = title.toLowerCase().split(" ");

  // Iterate through each word in the array
  title.forEach((word) => {
    // Only capitalize words that has more than two letters
    if (word.length > 2) {
      // Capitalize the first letter of each word
      word = word[0].toUpperCase() + word.slice(1, word.length);
      output.push(word);
    } else {
      output.push(word);
    }
  });
  // Join the modified words back into a sentence
  return output.join(" ");
};

console.log(capitalizeTitle("i lOve leetcode"));

// ARRAY FUNCTIONS
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
const findMinMax = function (arr) {
  if (arr.length === 0) {
    return { max: undefined, min: undefined }; // Return undefined for an empty array
  }

  let max = arr[0]; // Assume the first element is the maximum
  let min = arr[0]; // Assume the first element is the minimum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger element is found
    }
    if (arr[i] < min) {
      min = arr[i]; // Update min if a smaller element is found
    }
  }

  return [max, min];
};

console.log(findMinMax([1, 5, 7, 2, 9, 3]));

// Sum of Array: Create a function that calculates the sum of all elements in an array.
const calculateSum = function (arr) {
  let sum = 0; // Initialize sum to 0

  // Loop through the array and add each element to sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum; // Return the calculated sum
};

console.log(calculateSum([3, 7, 2, 8, 5]));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
const filterArray = function (arr, condition) {
  return arr.filter(condition);
};

// Filter out even numbers
const evenNumbers = filterArray(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  function (num) {
    return num % 2 === 0;
  }
);
console.log("Even numbers:", evenNumbers); // Output: Even numbers: [2, 4, 6, 8, 10]

// Filter out odd numbers
const oddNumbers = filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (num) {
  return num % 2 !== 0;
});
console.log("Odd numbers:", oddNumbers); // Output: Odd numbers: [1, 3, 5, 7, 9]

// MATHEMATICAL FUNCTIONS
// Factorial: Write a function to calculate the factorial of a given number.
const factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

console.log(factorial(5));

// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Check divisibility from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If the number is divisible by any number other than 1 and itself, it's not prime
    }
  }

  return true; // If no divisor is found, the number is prime
}

console.log(isPrime(7)); // Output: 7 is prime? true

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
const generateFibonacci = function (n) {
  const fibonacciSequence = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; // Calculate the next Fibonacci number
    fibonacciSequence.push(nextNumber); // Add the next Fibonacci number to the sequence
  }

  return fibonacciSequence;
};

console.log(generateFibonacci(10));
