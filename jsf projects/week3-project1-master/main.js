/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
console.log("Question 1");
var divideByTwo = function(number) {
  return number / 2;
};
console.log(divideByTwo(42));

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
console.log("Question 2");
var greeting = function(name1, name2) {
  return "Hello, " + name1 + " and " + name2;
};
console.log(greeting("Matthew", "Laura"));

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
console.log("Question 3");
var total = function(price) {
  return (6 * price);
};
console.log("Your total this month is $" + total(4) + ".");

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
console.log("Question 4");
var team1 = [];
var team2 = [];
var splitTeams = function (teamArray) {
  for (i=0; i<teamArray.length; i++) {
    if (i % 2 === 0) {
      team1.push(teamArray[i]);
    } else {
      team2.push(teamArray[i]);
    }
  }
  console.log(team1);
  console.log(team2);
};
console.log(splitTeams(teammates));

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
console.log("Question 5");
var quarter = function(number) {
  return number / 4;
};
console.log(quarter(100));

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
console.log("Question 6");
var area = function(length, width) {
  return length * width;
};
console.log(area(3,2));

var perimeter = function(length, width) {
  return (2 * length) + (2 * width);
};
console.log(perimeter(4,5));

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
console.log("Question 7");
var sleepings = function(hours) {
  if (hours >= 8) {
    return "You are getting enough sleep."
  } else {
    return "You need more shuteye!"
  }
};
console.log(sleepings(8));
console.log(sleepings(5));

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//    Note: Strings can be treated as arrays too.
console.log("Question 8");
// var number = prompt("Please enter a three-digit number.")
// var addition = function(threeDigit) {
//  return Number(number) + threeDigit
// };
// console.log(addition(100));
var threes = function(userInput){
  var stringSplit = userInput.split("");
  var total = 0;
  for(i=0; i<stringSplit.length; i++){
    var number = parseInt(stringSplit[i])
    total += number
  }
  return "The total is: " + total;
};
console.log(threes(prompt("Input a 3 digit number")))

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.
console.log("Question 9");
var change = function(quarters, dimes, nickels, pennies) {
  var qTotal = (quarters * .25);
  var dTotal = (dimes * .1);
  var nTotal = (nickels * .05);
  var pTotal = (pennies * .01);
  var total = (qTotal + dTotal + nTotal + pTotal);
  return "$" + total.toFixed(2);
};
console.log(change(25, 60, 75, 333));

// 10. Develop a function that determines a person's age by prompting them for their birth year.
console.log("Question 10");
var currentYear = 2016
var birthYear = prompt("In what year were you born?")
var age = function(birthYear) {
    return currentYear - birthYear
  };
console.log("You'll be " + age(birthYear) + " years old in " + currentYear + ".");


// ADVANCED TRACK
// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.
console.log("Question 11");
var phoneNumber = prompt("What is your phone number?")
var goodPhone = function(phone) {
  var phone = phone.toString();
  if(phone.length > 11 || phone.length < 10) {
    return "Bad Number";
  }
  else if(phone.length === 11) {
    if(phone.charAt(0) == 1){
      var clean = phone.substring(1);
      return clean;
    }
    else {
      return "Bad Number";
    }
  }
  else {
    return phone;
  }
};
console.log(goodPhone(phoneNumber));

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
console.log("Question 12");
var letsCheck = function(array) {
  for(i=0; i<array.length; i++) {
    if(isNaN(array[i])) {
      console.log(array[i] + " is not a number.");
    } else {
      console.log(array[i] + " is a number.");
    }
  }
};
console.log(letsCheck(arrayOfAllTheThings));

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.
console.log("Question 13");
var rolling = function() {
  total = Math.floor(Math.random() * 6) + 1;
  total += Math.floor(Math.random() * 6) + 1;
  return "My roll: " + total;
};
console.log(rolling());

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.
console.log("Question 14");
var rollDice = function() {
  var total = 0
  dieOne = Math.floor(Math.random() * 6) + 1;
  dieTwo = Math.floor(Math.random() * 6) + 1;
  console.log("die one:", dieOne)
  console.log("die two:", dieTwo)
  var roll = dieOne + dieTwo
  console.log("Your roll: " + roll);
  total += roll
  count = 1
  while(total < 41){
    dieOne = Math.floor(Math.random() * 6) + 1;
    dieTwo = Math.floor(Math.random() * 6) + 1;
    var roll = dieOne + dieTwo
    console.log("Your roll:", roll);
    total += roll
    console.log(total)
    count ++
  }
  return "It took me " + count + " rolls to get around the Monopoly board.";
}
console.log(rollDice());

// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
console.log("Question 15");
var leapYear = function(year) {
  if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
    return year + " is a Leap Year.";
  } else {
    return year + " is not a Leap Year."
  }
};
console.log(leapYear(1900));
console.log(leapYear(1938));
console.log(leapYear(2000));
console.log(leapYear(2003));
console.log(leapYear(2016));
