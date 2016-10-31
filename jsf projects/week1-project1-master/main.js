/*
=======================================================

** Week 1 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

EXAMPLE:
// 1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-7
ADVANCED TRACK: 8-11
=======================================================
*/



// 1. Log your name to the console (as a string).
console.log("Question 1");
console.log("Laura");



// 2. Declare a new variable called 'name',
//    and then log it to the console.
console.log("Question 2");
var name = "Matthew"
console.log(name);


// 3. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
console.log("Question 3");
var great = 33
var scott = 22
console.log(great + scott);
console.log(great - scott);
console.log(great * scott);
console.log(great / scott);

// 4. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places a space between the strings.
console.log("Question 4");
var favorite = "My favorite wine is";
var wine = "The Prisoner";
console.log(favorite + " " + wine);


// 5. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the console.
console.log("Question 5");
console.log('5' + '3');
console.log('5' - '3');
console.log('5' * '3');
console.log('5' / '3');

// 6. Create an alert.
console.log("Question 6");
alert("So far, so good!");



// 7. Create a prompt that asks a user to pick a number.
//    Then double the answer.
console.log("Question 7");
var newAnswer = prompt("Pick a number");
console.log(newAnswer * 2);


// ADVANCED TRACK

// 8. Ask for a user's name, age and city.
//    In a single command display/log the sentence:
//    "My name is...I'm....years old, and I live in....."
console.log("Question 8");
var name = prompt("What is your name?");
var age = prompt("How old are you?");
var city = prompt("In what city do you live?");
console.log("My name is" + " " + name + ". I'm" + " " + age + " " +
"years old" + ", and I live in" + " " + city + ".");


// 9. Create an alert that uses the response from a prompt.
console.log("Question 9");
alert(prompt("Enter the text for your alert here."))



// 10. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
console.log("Question 10");
var length = 3
var width = 2
var area = length * width
console.log("The area of the rectangle is " + area + ".");

// 11. Prompt a user for their name. Find the length (number of characters).
console.log("Question 11");
var secondName = prompt("What is your name?");
console.log(secondName.length);
