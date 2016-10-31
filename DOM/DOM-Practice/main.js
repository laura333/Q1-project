"use strict";

console.log("main.js loaded");

document.querySelector("#addHero").addEventListener("click", function (event) {
var heroName = document.querySelector("#heroName").value;
if (heroName) {
  var div = document.createdElement("div");
  div.innerText = heroName;
  document.querySelector("#heroes").appendChild(div);
}
document.querySelector("#heroName").value = "";
});

document.querySelector("#heroes").addEventListener("click", function (event) {
  var heroName = event.target.innerText;
  document.querySelector("#greeting").innerText = "Hello, " + heroName;
});
