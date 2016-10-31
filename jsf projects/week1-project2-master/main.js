/*
=======================================================

** Week 1 - Project 2 **
*** Arrays for Days! ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Array Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Discovering new things is fun and a great way to learn!!

EXAMPLE:
1. Log your 'hello world' to the console.
console.log("Question 1")
console.log("hello world")

BASIC TRACK: 1-12
ADVANCED TRACK: 13-18
=======================================================
*/


// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

console.log("Question 1");
var rowling = ["Harry", "Hermione", "Ron", "Ginny"];

// 2. Add an additional item to the beginning of your array.
console.log("Question 2");
rowling.unshift("Neville");
console.log(rowling);

// 3. Remove the second and third items in your array.
console.log("Question 3");
rowling.splice(1, 2);
console.log(rowling);

// 4. Add two new items after the second item.
console.log("Question 4");
rowling.splice(2, 0, "Cho", "Cedric");
console.log(rowling);

// 5. Log to the console: 'The current length of the array is....' using the .length method
console.log("Question 5");
console.log("The current length of the array is " + rowling.length);

// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
console.log("Question 6");
things[2] = "keyboard";
console.log(things);

// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)
console.log("Question 7");
console.log(things.join());

// 8. Remove the first item.
console.log("Question 8");
var freeThing = things.shift();
console.log(things);

// 9. Remove all items from the things array.
console.log("Question 9");
things = [];
//things.splice(0, 4)
//things.splice(0, array.length)
console.log(things);

// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople
console.log("Question 10");
var orderedPeople = people.sort();
console.log(orderedPeople);

// 11. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]
console.log("Question 11");
var dogs = [array1, array2, array3];
// dogs.push(array1, array2, array3);
console.log(dogs);

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 12. Remove "Sparky" and "White" from the above array of arrays.
console.log("Question 12");
//dogs[0].splice(3, 1);
dogs[0].pop();
//dogs[2].splice(0, 1);
dogs[2].shift();
console.log(dogs);


// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.
console.log("Question 13");
var lastItem = [campingItems.pop()];
console.log(campingItems);
console.log(lastItem);

// 14. Add two new items to lastItem, one at the beginning and one at the end.
console.log("Question 14");
lastItem.unshift("iodine");
lastItem.push("sleeping bag");
console.log(lastItem);

// 15. Add s'mores to the lastItem array.
console.log("Question 15");
lastItem.push("s'mores");
console.log(lastItem);

// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.
console.log("Question 16");
var reversedItems = ["cooler", "iodine", "sleeping bag", "s'mores"];
reversedItems.sort();
reversedItems.reverse();
console.log(reversedItems);

// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
console.log("Question 17");
var numberPets = firstArray.slice();
numberPets.push(secondArray[0], secondArray[1]);
console.log(numberPets);

// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
console.log("Question 18");
sortingNumbers.sort(function(a, b) {
  return a - b
});
console.log (sortingNumbers);

// If it doesn't sort as expected, explain why.
