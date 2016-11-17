'use strict';
// Write a function that takes 2 inputs. One input is an array and the second input is a callback function.

// The callback function will expect three inputs:
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array map was called upon.

// Your myMap function should return an array.

// var numArray = [1,2,3,4];
// var callbackFnc = function (currentValue, index, array){
//   returnValue = currentValue + 4;
//   array[index] = returnValue;
//   return array[index];
// }
// function myMap(array, callbackFnc){
//   var newArr = [];
//   for (var i = 0; i < array.length; i++) {
//     newArr.push(callbackFnc(array[i], i, array));
//   }
//   return newArr;
  // return array.map(callbackFnc); // this solution is off limits :)
// }

//Write a callback function that is passed to myMap that will return the given input plus 4.
// var addedArray = myMap(numArray,function(){
  //WRITE CODE HERE

// });

// Write a callback function that is passed to myMap that will return a string like "The Person at index 0 owes $1"
// var dollarArray = myMap(numArray, function(){
  //WRITE CODE HERE

// })

// console.log(addedArray); // [5,6,7,8]
// console.log(dollarArray);
// [ 'The Person at index 0 owes $1',
//   'The Person at index 1 owes $2',
//   'The Person at index 2 owes $3',
//   'The Person at index 3 owes $4' ]

// Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:

// parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")
//=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}

// parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")
//=> {q: "dogs", sort: "top", t: "week"}

// function parseQueryString(url) {
//         var query = {};
//         var pairs = url.substr(1).split('?');
//         for (var i = 0; i < pairs.length; i++) {
//             var result = pairs[i].split('=');
//             query[decodeURIComponent(result[0])] = decodeURIComponent(result[1] || '');
//         }
//         return query;
//     }
// console.log(parseQueryString("https://www.facebook.com/groups/WOMENEXIST/?hc_ref=NEWSFEED"));
