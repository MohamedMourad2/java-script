// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
let str = "123";
let num = Number(str);   
let result = num + 7;
console.log(result);   

// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
let variable = 0;

function check(variable) {
  if (!variable) {
    return "Invalid";
  }
}

console.log(check(variable));

// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);

// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

function mergeArrays(a, b) {
  return [...a, ...b];
}

console.log(mergeArrays(arr1, arr2));

// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
let dayNumber = 3;

function getDay(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

console.log(getDay(dayNumber));

// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
let words = ["apple", "banana", "kiwi", "orange"];

let lengths = words.map(function (word) {
  return word.length;
});

console.log(lengths);

// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade) • Input Example: 15 • Output Example: "Divisible by both"
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
}

console.log(checkDivisible(30));

// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
const square = (num) => num * num;

console.log(square(5));

// 10. Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
const person = { name: "Ahmed", age: 20, city: "Cairo" };

function formatPerson({ name, age, city }) {
  return `${name} is ${age} years old and lives in ${city}`;
}

console.log(formatPerson(person));

// 11. Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4));

// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
function myPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

myPromise().then((message) => console.log(message));

// 13. Write a function to find the largest number in an array. (0.5 Grade)
function findLargest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findLargest([3, 9, 2, 15, 7]));

// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys({ name: "Ahmed", gender: "Male", city: "Cairo" }));

// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
function splitWords(str) {
  return str.split(" ");
}

console.log(splitWords("The sky is blue"));