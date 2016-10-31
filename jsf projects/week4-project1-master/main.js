/*
=======================================================

** Week 4 - Project 1 **
*** jQuery! ***

For any methods that we didn't cover, please refer to the jQuery documentation.
https://api.jquery.com/

BASIC TRACK: 1-8
ADVANCED TRACK: 9-12
=======================================================
*/

// Add your JS here.
$(document).ready(function(){
//Question 1
  $(".hideMe").click (function(){
    $(this).hide();
  });
//Question 2
  $(".changeColor").click(function(){
    $("ul li:nth-child(3)").css("color", "#8A2BE2");
  });
//Question 3
  $("ul li:nth-child(4)").click(function(){
    $(this).append("<li>li</li>");
  });
//Question 4
  $("#removeLi").click(function(){
   $('ul li:nth-child(2)').hide();
 });
//Question 5
  $("ul li:last-child").click(function() {
    $("ul li:nth-last-child(n+2)").remove()
    $(this).css("font-size", "40px")
  });
// Question #6
  $(".cute").click(function() {
    $(this).clone().appendTo($(".clones"));
  });
// Question #7
  $('html').dblclick(function() {
    $("#makeSquare").css({"border-radius": "0px", "width": "100px", "height": "100px"});
  });
// Question #8
  $("#dontClick").click(function() {
    alert("I said Don't Click Here!")
  });
//Question 9
  $(".black").click(function(){
    $("html").css("background-image", "none");
    $("html").css("background-color", "#000");
  });
  $(".wood").click(function(){
    $("html").toggleClass("wood");
  });
  $(".chaos").click(function(){
    $("html").toggleClass("chaos");
  });
// Question #10
  $("#hover").hover(function(){
    $(this).css("background-color", "red");
  }, function(){
      $(this).css("background-color", "#39B7CD");
    });
    $("#hover").click(function(){
      $(this).toggleClass("green");
    });
});
