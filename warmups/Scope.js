'use strict';

// var scope = 'global';
// function testScope() {
// 	console.log(scope);
// }
// testScope();

// var scope = 'global';
// function testScope() {
// 	var innerScope = 'function';
// 	console.log(scope);
// 	console.log(innerScope);
// }
// testScope();

// function varTest(){
//   var x = 1;
//   if (true) {
//     var x = 2; //same variable!
//     console.log(x); // 2
//   }
//   console.log(x); // 2
// }
// varTest();

// function letTest(){
//   let x = 1;
//   if (true) {
//     let x = 2; //same variable!
//     console.log(x); // 2
//   }
//   console.log(x); // 1
// }
// letTest();

// const job = 'bartender';
// job = 'Beverage Dissemination Officer';
// console.log('My job title is: ' + job);

// function test() {
//   // console.log(x);
//   x = 1;
//   var x;
//   console.log(x);
// }
// test();

function count() {
  var count = 0;

  return function () {
    count += 1;
    console.log(count);
  };
}
var testCounter = count();

testCounter();
testCounter();

var testCounter2 = count();

testCounter2();
testCounter2();
testCounter2();

// var testCounter3 = count() + count();
//
// testCounter3();
// testCounter3();
// testCounter3();
