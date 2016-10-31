// // // // "use strict";
// // // //
// // // // var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];
// // // //
// // // // function removeBadPeople(people) {
// // // //   var result = [];
// // // //
// // // //   for (var i = 0; i < people.length; i++) {
// // // // if (people[i].name) {
// // // //   result.push(people[i]);
// // // // }
// // // //   }
// // // //   return result;
// // // // }
// // // // console.log(removeBadPeople(people));
// // // // // => [{name:'A', age: 20}, {name:'B', age: 30}];
// // // //
// // // // function sumAgesValid(people) {
// // // //   var result = 0;
// // // //
// // // // var goodPeople = removeBadPeople(people);
// // // //   for (var i = 0; i < goodPeople.length; i++) {
// // // //   result = result + goodPeople[i].age;
// // // //   }
// // // //   return result;
// // // // }
// // // // console.log(sumAgesValid(people));
// // // // // => 50
// // // //
// // // // // function sumAgesAll(people) {
// // // // //   var result = 0;
// // // // //   for (var i = 0; i < people.length; i++) {
// // // // //     if (!isNan(people[i].age))
// // // // //    result += people[i].age;
// // // // //   }
// // // // //   return result;
// // // // // }
// // // // // console.log(sumAgesAll(people));
// // // //
// // // // function sumAgesAll(people) {
// // // //   var result = 0;
// // // //   for (var i = 0; i < people.length; i++) {
// // // //     if (!isNaN(people[i].age))
// // // //       result+=people[i].age;
// // // //   }
// // // //   return result;
// // // // }
// // // // // => 60
// // // //
// // //
// // //
// // // // 10.19.16
// // // //
// // // // // Write functions to sort the following in ascending order. Include at least 1 what if/assumption you are working with:
// // // // var array1 = ["zoe","nicole", "lyric", "nancy", "anna"];
// // // // function sortNames(arr) {
// // // //   var result = [];
// // // // for (var i = 0; i < arr.length; i++) {
// // // //   result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
// // // // }
// // // //   return result.sort();
// // // // }
// // // // sortNames(array1);
// // // // // [Anna","Lyric","Nancy", "Nicole", "Zoe"]
// // // //
// // // // var array2 = [5,2,7,3];
// // // // function sortNums(arr) {
// // // //   return arr.sort(function (x,y) {
// // // //     return x-y;
// // // //   });
// // // // }
// // // // console.log(sortNums(array2));
// // // // // //[2,3,5,7]
// // // //
// // // // var array3 = [10,2,100,3];
// // // // function sortNums(arr) {
// // // //   return arr.sort(function (x,y) {
// // // //     return x - y;
// // // //   });
// // // // }
// // // // console.log(sortNums(array3));
// // // // // //[2,3,10,100]
// // // // //
// // // // // Stretch, sort this array of objects in ascending order by age.:
// // // // var array4 = [];
// // // // array4[0] = {name: "Zoe", age:10, numDogs:2};
// // // // array4[1] = {name: "Nick", age:2, numDogs:3};
// // // // array4[2] = {name: "Lyric", age:34, numDogs:4};
// // // // array4[3] = {name: "Nancy", age:100, numDogs:1};
// // // // array4[4] = {name: "Anna", age:7, numDogs:2};
// // // // array4[5] = {name: "Edward", age:59, numDogs:0};
// // // //
// // // // function sortObj(arr) {
// // // //   var result = [];
// // // //
// // // //   return arr.sort(function (x,y) {
// // // //     return x.age - y.age;
// // // //   });
// // // // }
// // // //
// // // // console.log(sortObj(array4));
// // // //
// // //
// // //
// // // // 10.20.16
// // // // Part 1: Write a function that takes an object that has dogs and
// // // // their ages and returns an object with the ages(as integers)
// // // // converted to dog years (multiply each age by 7).
// // // // Example: {'sparky': 1, 'zion':3, 'henry':5, 'lucky':8}
// // // // will return {'sparky': 7, 'zion':21, 'henry':35, 'lucky':56}
// // //
// // // var dogs = {'sparky': 1, 'zion':3, 'henry':5, 'lucky':8};
// // // // var copy = Object.assign({}, dogs);
// // //
// // // function dogYears(dog) {
// // //   var result = {};
// // // for (var age in dog) {
// // //   dogs[age] *= 7;
// // // }
// // //   console.log(dog);
// // //   // return copy;
// // // }
// // //
// // // dogYears(dogs);
// // //
// // //
// // // // Part 2: Write a function that will console.log all dog names (assume a simple object as given above).
// // //
// // // function logNames(dogs) {
// // //   for (var name in dogs) {
// // //     console.log(name);
// // //   }
// // // }
// // //
// // // logNames(dogs);
// // //
// // // // Stretch: Don't change the original object. In other words, the ages in the dogs object should remain 1,3,5,8 even after your function has been called.
// //
// //
// // // 10.24.16
// // // Define a JavaScript function add that can be used like so:
// //
// // // add(1)(1);   // returns 2
// // // add(20)(20); // returns 40
// //
// // function add(x) {
// //   return function(y) {
// //     return x + y;
// //   };
// // }
// // add(11)(22);
//
//
// // 10.25.16 
// // Write a function that takes two numbers and multiplies them without using *
// //Stretch: write a curried version
//
// // Write a function that takes two arrays and returns a new array with all items in alphabetical order.
//
// function multiply(num, times){
//    var n = num;
//    for(var i = 1; i < times; i++)
//       num += n;
//    return num;
// }
// multiply(3,9);
//
// var array1 = ['cat', 'dog', 'fish', 'sheep'];
// var array2 = ['lion', 'tiger', 'panther', 'wolf'];
//
// function alpha(arr1, arr2) {
//   return [...arr1, ...arr2].sort();
//   // spread operator, rest operator
// // --or--
// // return arr1.concat(arr2).sort();
// // --or--
// // var concat = arr1.concat(arr2);
// // return concat.sort();
// }
// console.log(alpha(array1, array2));
