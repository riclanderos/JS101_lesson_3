/*
Build a program that asks the user to enter the length and width of a
 room in meters, and then logs the area of the room to the console in
 both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the
readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

let readline = require("readline-sync");
const ONE_SQ_METER = 10.7639;

console.log("Enter the length of the room in meters:");
let lengthInMeters = Math.trunc(Number(readline.question()));

console.log("Enter the width of the room in meters:");
let widthInMeters = Math.trunc(Number(readline.question()));

let areaInSqMeters = lengthInMeters * widthInMeters;
let areaInSqFeet = areaInSqMeters * ONE_SQ_METER;
console.log(
  `The area of the room is ${areaInSqMeters.toFixed(
    2
  )} square meters(${areaInSqFeet.toFixed(2)} square feet).`
);
