/*
Write a program that asks the user to enter an integer greater than 0,
then asks whether the user wants to determine the sum or the product
of all numbers between 1 and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

*/

let readline = require("readline-sync");
let computeMethod = "";

let integer = Number(
  readline.question("Please enter an integer greater than 0:\n")
);

while (!Number(integer)) {
  console.log("That is not a number, please try again.");
  integer = Number(readline.question());
}

let selection = readline.question(
  "To compute the sum enter 's', to compute the product enter 'p': "
);

while (!["s", "p"].includes(selection)) {
  console.log("Please enter only 's' or 'p'");
  selection = readline.question();
}

function computeBy(selection) {
  let total;
  if (selection === "s") {
    computeMethod = "sum";
    total = add(integer);
  } else if (selection === "p") {
    computeMethod = "product";
    total = product(integer);
  }
  return result(total);
}
computeBy(selection);

function add(integer) {
  let total = 0;
  for (let initial = 0; initial <= integer; initial += 1) {
    total += initial;
  }
  return total;
}

function product(integer) {
  let total = 1;
  for (let initial = 1; initial <= integer; initial += 1) {
    total *= initial;
  }
  return total;
}

function result(total) {
  console.log(
    `The ${computeMethod} of the integers between 1 and ${integer} is ${total}.`
  );
}
