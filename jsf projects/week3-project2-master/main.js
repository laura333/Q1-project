/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smaller number.
console.log("Question 1");
function minimum(num1, num2) {
  if(num1 < num2) {
  return num1;
} else {
  return num2;
}
};
console.log(minimum(5,7));

// 2. Create a new function called minimum3() to find the smallest of three numbers.
console.log("Question 2");
function minimum3(num1, num2, num3) {
  if(num1 < num2 && num1 < num3) {
  return num1;
} else if(num2 < num1 && num2 < num3) {
  return num2;
} else {
  return num3;
}
};
console.log(minimum3(5,7,9));

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together.
//    i.e. sum([1, 2, 3, 4]) should return 10.
console.log("Question 3");
var arraySum = [1, 2, 3, 4]
function sum(array) {
  var total = 0;
  for(i=0; i<array.length; i++) {
    total += array[i];
  }
  return "The total is " + total;
};
console.log(sum(arraySum));

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
console.log("Question 4");
var arrayTimes = [1, 2, 3, 4]
function multiply(array) {
  var total = 1;
  for(i=0; i<array.length; i++) {
    total *= array[i];
  }
  return "The total is " + total;
};
console.log(multiply(arrayTimes));

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
console.log("Question 5");
function filterSixPlus(array) {
  for(i=0; i<array.length; i++) {
    if(array[i].length < 6) {
      array.splice(i, 1)
      i--
    }
  }
  return array;
};
console.log(filterSixPlus(words));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.
console.log("Question 6");
var Celsius = prompt("Enter a temperature in Celsius.")
function temperature(userInput) {
  return Celsius * 9 / 5 + 32
};
console.log(Celsius + " degrees Celsius is " + temperature(Celsius) + " degrees Fahrenheit.");

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.
console.log("Question 7");
var corF = prompt("Would you like to convert from Fahrenheit to Celsius (enter F) or Celsius to Fahrenheit (enter C)?")
function conversion(corF) {
  if(corF === "C") {
    var temperature = prompt("Enter a temperature.")
    var newTemp = temperature * 9 / 5 + 32;
    return (temperature + " degrees Celsius is " + newTemp + " degrees Fahrenheit.");
  } else if (corF === "F") {
    var temperature = prompt("Enter a temperature.")
    var newTemp2 = (temperature - 32) * 5 / 9;
    return (temperature + " degrees Fahrenheit is " + newTemp2 + " degrees Celsius.");
  } else {
    userInput = prompt("You didn't pick F or C. Please try again.")
    conversion(corF)
  }
};

// function f2COrC2F(userChoice){
//   if(userChoice === "C to F"){
//     var userInput = prompt("Please enter the degree.")
//     userInput = parseFloat(userInput);
//     userInput *= 1.8;
//     userInput += 32;
//     value = userInput.toFixed(0);
//     return value;
//   } else if (userChoice === "F to C"){
//     var userInput = prompt("Please enter the degree.")
//     userInput = parseFloat(userInput);
//     userInput -= 32;
//     userInput /= 1.8;
//     value = userInput.toFixed(0);
//     return value;
//   } else {
//     userChoice = prompt("You didn't pick F to C or C to F. TRY AGAIN!")
//     f2COrC2F(userChoice)
//   }
// }

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()
console.log("Question 8");
function countBs(string) {
  var count = 0;
  for(i=0; i<string.length; i++) {
    if(string.charAt(i) === "B")
    count += 1;
  }
  return count;
};
console.log(countBs("My mother-in-law is DeBBy Baukol."));
console.log(countBs("Brie is one of my favorite cheeses."));

// 9. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!
console.log("Question 9");
console.log("I really don't understand how to properly write loops and functions and cannot do so under pressure.")

// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.
console.log("Question 10");
function countChars(string, character) {
  var count = 0;
  for(i=0; i<string.length; i++) {
    if(string[i] == character)
    count += 1;
  }
  return count;
};
console.log(countChars("These still confuse me, but I'm getting there.", "e"));
console.log(countChars("Today's the day!", "a"));

// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.
console.log("Question 11");
function ohZero(string) {
  var splitString = string.split("")
    for(i=0; i<splitString.length; i++){
      if(splitString[i] === "o" || splitString[i] === "O"){
        splitString[i] = "0"
      }
    }
    return splitString.join("")
};
console.log(ohZero("Oooh, will I ever understand functions?!?"));

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.
console.log("Question 12");
function bottlesBeer(numberBottles){
  for (i = numberBottles; i > 0; i--) {
    remainder = i - 1;
    if (i != 1) {
      beercase = "bottles";
    } else {
      beercase = "bottle";
    }
    if (remainder != 1) {
      remaindercase = "bottles";
    } else {
      remaindercase = "bottle"
    };
    console.log(i + " " + beercase + " of beer on the wall. " + i + " " + beercase + " of beer.");
    console.log("Take 1 down, pass it around,");
    if (remainder != 0) {
      console.log(remainder + " " + remaindercase + " of beer on the wall.");
    } else {
      console.log("No more bottles of beer on the wall.");
    }
  }
};
bottlesBeer(99);

// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.
console.log("Question 13");
function guessingGame(){
  var guessString = prompt("Please guess a number 1 through 3.");
  var guessNum = parseInt(guessString);
  var randomNum = Math.floor(Math.random() * 4);
  while(parseInt(guessNum) != randomNum){
  	if(guessNum < randomNum){
  		guessNum = prompt("Nope! Too low! Please guess another number.")
  	}
  	else{
  		guessNum = prompt("Nope! Too high! Please guess another number.")
  	}
  };
  alert("You're amazing! The number was " + randomNum + ".");
};
guessingGame();
