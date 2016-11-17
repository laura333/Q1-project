"use strict";

// var body = document.querySelector('body');
// var button = document.querySelector('button');
//
// body.addEventListener('click', function() {
//   alert("YOU CLICKED ON THE BODY!!!!");
// });
//
// button.addEventListener('click', function() {
//   alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
// });
//
var body = document.querySelector('body');
var button = document.querySelector('button');

body.addEventListener('click', function() {
  alert("YOU CLICKED ON THE BODY!!!!");
}, true);

button.addEventListener('click', function() {
  alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
});
//
// window.addEventListener("click", function() {
//   alert("You clicked on the page!");
// });
//
// // var button = document.querySelector("button");
// //
// // button.addEventListener("click", function(){
// //   alert("SOMEONE CLICKED THE BUTTON!!");
// // });
// // //
// // // var button = document.querySelector("button");
// // //
// // // var clickAlert = function() {
// // //     alert("SOMEONE CLICKED THE BUTTON!!");
// // // }
// // //
// // // button.addEventListener("click", clickAlert);
// // //
// // // button.removeEventListener("click", clickAlert);
// // //
// // // var button = document.querySelector("button");
// // //
// // // var once = function() {
// // //   console.log("Done.");
// // //   button.removeEventListener("click", once);
// // // }
// // //
// // // button.addEventListener("click", once);
// //
// // // var logText = function() {
// // //   console.log(this.textContent);
// // // }
// // // button.addEventListener("click", logText);
// //
// // var clickCount = 0;
// //
// // var div = document.querySelector("div");
// //
// // var logText = function() {
// //   console.log(event.target.textContent);
// // }
// //
// // div.addEventListener("click", logText);
// //
// // // var paragraphs = document.querySelectorAll('p');
// // //
// // // var eventHandler = function() {
// // //   console.log("Woof!");
// // // }
// // // for (var i = 0; i < paragraphs.length; i++) {
// // //   paragraphs[i].addEventListener('click', eventHandler);
// // // }
// //
// // var container = document.getElementById('container');
// //
// // var eventHandler = function() {
// //   console.log('Woof!');
// // }
// // container.addEventListener('click', eventHandler);
//
// var img = document.querySelector('img');
//
// // var imgLog = function() {
// //   console.log("You moused over Mega Man!");
// // }
// //
// // img.addEventListener('mouseover', imgLog);
//
// var imgLog = function() {
//   console.log("You moused over Mega Man!");
// }
//
// document.addEventListener("DOMContentLoaded", function() {
//   var img = document.querySelector('img');
//   img.addEventListener('mouseover', imgLog);
// });
