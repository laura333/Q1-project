/*
=======================================================

** Week 2 - Project 2 **
*** Looping & Conditionals ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Loops and Iteration Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

or If...Else Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

or While Loop Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


BASIC TRACK: 1-15
ADVANCED TRACK: 16-20
=======================================================
*/


// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
console.log("Question 1");
for (i=0; i < livingRoom.length; i++) {
console.log(livingRoom[i]);
}

// 2. Using a loop, log numbers 22-33 in the console.
console.log("Question 2");
for (i=22; i<34; i++) {
  console.log(i);
}

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log("Question 3");
for (i=75; i<=100; i+=5) {
  console.log(i);
}

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
console.log("Question 4");
var counter = 0
while (counter<5) {
  console.log("This is how a professional loops.");
  counter++;
}

// 5. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.
console.log("Question 5");
for (i=10; i<111; i+=25) {
    console.log("At home, I have " + i + " cats.");
}

var cats = 10
while (cats<111) {
  console.log("At home, I have " + cats + " cats.");
  cats+=25;
}

// 6. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];
console.log("Question 6");
for (i=0; i<numArray.length; i++) {
  if (numArray[i] % 2 ==0 && numArray[i] > 10) {
    console.log("Even and greater than 10");
  } else if (numArray[i] % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]
console.log("Question 7");
var numThrees = [];
for (i=0; i<numArray.length; i+=3) {
  numThrees.push(numArray[i]);
}
console.log(numThrees);
//
// 8. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######
console.log("Question 8");
var pound = "#";
for (i=1; i<7; i++){
  console.log(pound);
  pound += "#";
}

// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
console.log("Question 9");
for (i=0; i<=100; i++){
  if(i % 5 == 0 && i % 3 == 0){
    console.log("FizzBuzz");
  } else if(i % 5 == 0){
    console.log("Buzz");
  } else if (i % 3 == 0){
    console.log("Fizz");
  } else {
    console.log(i)
  }
};

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.
// 10. Use a variable called "human" to prompt the user to type their choice.
console.log("Question 10");
var human = prompt("Choose rock, paper, or scissors.");
console.log(human);

// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
console.log("Question 11");
var computer = Math.random();
console.log(computer);

// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
console.log("Question 12");
if(computer < .33){
  computer = "rock";
} else if (computer > .33 && computer < .66){
  computer = "paper";
} else {
  computer = "scissors";
}
console.log(computer);

// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
console.log("Question 13");
var winner;
if(human === "rock"){
  if(computer === "rock"){
    console.log("Tie!");
    winner = "No one";
  } else if(computer === "paper"){
    winner = "Computer";
  } else {
    winner = "Human";
  }
} else if(human === "paper"){
  if(computer === "paper"){
    console.log("Tie!");
    winner = "No one";
  } else if(computer === "scissors"){
    winner = "Computer";
  } else {
    winner = "Human";
  }
} else if(human === "scissors"){
  if(computer === "scissors"){
    console.log("Tie!");
    winner = "No one";
  } else if(computer === "rock"){
    winner = "Computer";
  } else {
    winner = "Human";
  }
} else{
  alert("Can't you read? You were supposed to enter rock, paper or scissors.");
  winner = "No one"
}

// 14. After comparing, determine who has won; the computer or the human!
console.log("Question 14");
console.log(winner + " is the winner!");

// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]
console.log("Question 16");
var big = largestNum[0];
for(i=0; i<largestNum.length; i++){
  if(largestNum[i] > big){
    big = largestNum[i]
  }
}
console.log("The largest number is " + big);

// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
console.log("Question 17");
var sides = ["heads", "tails"]
var result = sides[coin]
console.log(result)

// 18. Use a do/while loop to keep flipping the coin until you get tails.
console.log("Question 18");
result = sides[0];
while(result === "heads") {
  var coin = Math.floor(Math.random() * 2);
  if(coin === 1){
    result = "heads";
    console.log("Heads...bummer...Let's try again.");
  } else {
    result = "tails";
    console.log("Hurray, it's tails!");
  }
};

// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
console.log("Question 19");
var chess = "";
for (y = 0; y < 8; y++) {
  for (x = 0; x < 8; x++) {
    if( (x+y) % 2 == 0){
      chess += " ";
    }
    else {
      chess += "#";
    }
  }
  chess += "\n";
}
console.log(chess);

// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// so that it works for any size, outputting a grid of the given width and height.
console.log("Question 20");
var size = 15;
var chess = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ( (x+y) % 2 == 0){
      chess += " ";
    }
    else {
      chess += "#";
    }
  }
  chess += "\n";
}
console.log(chess);
