/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number
on a separate line.
*/

for (let number = 1; number <= 99; number++) {
  if (number % 2 === 1) {
    console.log(number);
  }
}
