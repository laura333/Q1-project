var array = [1,2,3,4,5];

var reduced = array.reduce(sum);

function sum(total, num) {
  return total + num;
}

// console.log(reduced);


var text = ['Hello','my','name','is','Mat'];

var greeting = text.reduce(myConcat);

function myConcat(str, word) {
  return str + ' ' + word;
}

// console.log(greeting);


var nums = [1,5,4,1,3,2,5,4];

var uniqueNums = nums.reduce(isUnique,[]).sort(mySort);

function isUnique(final, num) {

  if (final.indexOf(num) === - 1) {
    final.push(num)
  }

  return final;
}

function mySort(a,b) {
  return a-b;
}

// console.log(uniqueNums);

var ints = [4,8,1,10,-5,8,99,-10, Infinity];

// var biggest = ints.reduce(findBiggest);
//
// function findBiggest(prev, cur) {
//   console.log(prev,cur);
//   return Math.max(prev,cur);
// }

var biggest = ints.reduce((prev,cur) => Math.max(prev,cur));

console.log(biggest);
