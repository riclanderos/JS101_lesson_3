// Question 1. Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
// No errors. It will simply treat index slots 3-5 as empty slots.
//Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
// It will treat that line as undefined since no value was given for index 4.

// Question 2. How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
// By using the endsWith() method.  
str1.endsWith('!'); // true
str2.endsWith('!'); // false

// Question 3. Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// Using the hasOwnProperty() Method
ages.hasOwnProperty('Spot'); // false

/* Question 4. Using the following string, create a new string that contains all lowercase letters except
 for the first character, which should be capitalized. (See the example output.)*/
 let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();
/*Using charAt(0) to select the first index, .toUpperCase() to make the 'T' upper case. Adding substring(1) starting at index one and 
utilizing .toLowerCase() to make the rest of the string lower case. */

// Question 5. What will the following code output? 
console.log(false == '0');  // true (It coerces the values to the same type before determining if they are equal.) 
console.log(false === '0'); // false (strict equality requires that both expressions be the same type and value.)

// Question 6. We have most of the Munster family in our ages object:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);

// Question 7. Determine whether the name Dino appears in the strings below -- check each string separately):
let str1 = "Few things in life are as important as house training your pet dinosaur."; // str1.includes('Dino'); False
let str2 = "Fred and Wilma have a pet dinosaur named Dino."; // str2.includes('Dino'); True

// Question 8. How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"]; 
// flintstones.push('Dino'); Will add Dino to the end of the array.

//Question 9. In the previous problem, our first answer added 'Dino' to the array like this:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
//How can we add multiple items to our array? ('Dino' and 'Hoppy')
// We can add multiple items simply by separating them with a comma. flintstones.push('Dino', 'Hoppy');

/* Question 10. Return a new version of this sentence that ends just before the word house.
Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence. */
let advice = "Few things in life are as important as house training your pet dinosaur.";
// Expected return value:
// => 'Few things in life are as important as '


