'use strict';

var array = [1,2,3,4,5,6];

var evenNumArray = array.filter(isEven);

function isEven(num) {
  return num % 2 === 0;
}
//
// console.log(array);
// console.log(evenNumArray);


var grades = [
  {name: 'Batman', grade: 100},
  {name: 'Superman', grade: 70},
  {name: 'Wonder Woman', grade: 115},
  {name: 'Robin', grade: 50},
  {name: 'Oracle', grade: 110},
  {name: 'Spider-Man', grade: 80},
  {name: 'Doctor Strange', grade: Infinity}
]

var studentsPassed = grades.filter(hasPassed);

function hasPassed(student) {
  return student.grade >= 70;
}

var arrowPassed = grades.filter(student => student.grade >= 70);

// student => student.grade >= 70

// function (student) {
//   return student.grade >= 70;
// }

console.log('Arrow Passed',arrowPassed);
//
// console.log('Original Students List',grades);
// console.log('Filtered List',studentsPassed);

var oldWayFiltered = [];

for (var i = 0; i < grades.length; i++) {
  if (grades[i].grade >= 70) {
    oldWayFiltered.push(grades[i]);
  }
}

// console.log('Old Way', oldWayFiltered);
