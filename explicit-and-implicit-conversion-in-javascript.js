/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
(parseInt(result) + 2); // The parseInt() function converts the string "3" to the number 3, allowing for correct addition.
console.log("The result is: " + result);

let isValid = Boolean("false");
Boolean("false"); // The Boolean() function converts the non-empty string "false" to true, which is why the condition evaluates to true.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // The Number() function converts the string "25" to the number 25, allowing for correct addition to get 30.
console.log("Total Age: " + totalAge);

// Example of implicit type conversion
let theAnswer = "the answer is " + 14;
console.log(theAnswer);

// Example of explicit type conversion with an edge case
let edgeCase = Number(exampleText);
console.log("Edge Case Result: " + edgeCase);
