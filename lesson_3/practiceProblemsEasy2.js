// Question 1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
/* advice.replace('important', 'urgent'); will replace the first instance of 'important'.
To change every instance of 'important' we would use replaceAll() or replace(/important/g, 'urgent'); */

/* Question 2. The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second. */
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
/*We have to use slice() to make a copy of the array, then we can use reverse() to reverse the order without mutating it. 
We declare a new variable, its value will be the variable we want reversed, along with the slice() method to make a copy of the original array, and the reverse() method to reverse the copy and avoid mutating the original array.
- answer code: */
let reversedNumbers = numbers.slice().reverse();

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
/* We have to use the spread operator to avoid mutating the array. We can then utilize the sort method and reverse the array. */
// ANSWER:
numbers = [...numbers].sort((num1, num2) => num2 - num1);

// Question 3. Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; //
let number2 = 95; //
// ANSWER:
numbers.includes(8); //=> false
numbers.includes(95); //=> true

// Question 4. Starting with the string:
let famousWords = "seven years ago...";
//show two different ways to put the expected "Four score and " in front of it.
// ANSWER:
"Four score and ".concat(famousWords); //=> "Four score and seven years ago..."
"Four score and " + "seven years ago..."; //=> "Four score and seven years ago..."
"Four score and " + famousWords; //=> "Four score and seven years ago..."

/* Question 5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5]. */
arr = [1, 2, 3, 4, 5];
//ANSWER:
arr.splice(2, 1); // => [1, 2, 4, 5];

// Question 6. Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
// This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
/* Nesting data structures like we do here is commonplace in JavaScript and programming in general. We'll explore this in much greater depth in a future Lesson.

Create a new array that contains all of the above values, but in an un-nested format: */
["Fred", "Wilma", "Barney", "Betty", "Bambam", "Pebbles"];
// let flintstones = ['Fred', 'Wilma'].concat('Barney', 'Betty', 'Bambam', 'Pebbles'); or
// newArray = [...flintstones].concat('Barney', 'Betty', 'Bambam', 'Pebbles');

// Question 7. Consider the following object:
let flintstones3 = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};
//Create an array from this object that contains only two elements: Barney's name and Barney's number:
["Barney", 2];
// ANSWER:
Object.entries(flintstones)
  .filter((barney) => barney[0] === "Barney")
  .shift();

// Question 8. How would you check whether the objects assigned to variables numbers and table below are arrays?
let numbers = [1, 2, 3, 4]; //
let table = {field1: 1, field2: 2, field3: 3, field4: 4}; //
// ANSWER:
Array.isArray(numbers); //=> true
Array.isArray(table); //=> false

/* Question 9. Back in the stone age (before CSS), we used spaces to align things on the screen. 
If we have a 40-character wide table of Flintstone family members, 
how can we center the following title above the table with spaces? */
let title = "Flintstone Family Members";
// ANSWER:
let padding = (40 - title.length) / 2;
title.padStart(padding + title.length);

// Question 10. Write a one-line expression to count the number of lower-case t characters in each of the following strings:
let statement1 = "The Flintstones Rock!"; // => statement1.split('').filter(char => char === 't').length;
let statement2 = "Easy come, easy go."; // => statement2.split('').filter(char => char === 't').length;
// ANSWER:
statement1.split("").filter((char) => char === "t").length;
statement2.split("").filter((char) => char === "t").length;
