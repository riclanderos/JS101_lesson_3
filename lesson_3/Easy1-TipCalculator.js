/*
Create a simple tip calculator.
The program should prompt for a bill amount and a tip rate.
The program must compute the tip, and then log both the tip
and the total amount of the bill to the console.
You can ignore input validation and assume that the user will enter numbers.

Example:
*/

let readline = require("readline-sync");

//console.log("What is the bill?");
let billAmount = Number(readline.question("What is the bill?"));

console.log("What is the tip rate?");
let tipRate = Number(readline.question());

let tipAmount = (tipRate / 100) * billAmount;
let billTotal = tipAmount + billAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);
