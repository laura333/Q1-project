"use strict";

for (i = 0; i < 101; i++){
  if(i % 5 == 0 && i % 3 == 0){
    console.log("FizzBuzz");
  } else if(i % 5 == 0){
    console.log("Buzz");
  } else if (i % 3 == 0){
    console.log("Fizz");
  } else {
    console.log(i)
  }
}

// for (var i = 1; i <= 100; i++) {
//   console.log({
//     truefalse: "Fizz",
//     falsetrue: "Buzz",
//     truetrue: "FizzBuzz"
//   }[(i % 3 == 0) + " " + (i % 5 == 0)] || i);
// }
