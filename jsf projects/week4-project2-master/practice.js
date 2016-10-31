$(document).ready(function(){
//Question 1
  $("#submitBtn").click(function(){
    var userInput = $("input:text").val();
    $("<h3>" + userInput + "</h3>").insertAfter("#submitBtn");
  });
//Question 2
$(".chex").click(function(){
  $("h2").toggleClass("hidden");
  });
//Question 3
$(".table-striped").append("<tr><td>Stevie Licks</td><td>15</td><td>Hangry</td></tr>");
//Question 4
$(".table-striped tbody").children().each(function(){
  var kid = $(this).children("td:nth-child(3)");
  if(kid.text() === "Hangry"){
    $(kid).css("color", "red");
  } else {
      $(kid).css("color", "green");
    };
  });
//Question 5
$(".btn-warning").click(function(){
     $(".table-striped tbody").children().each(function(){
       var weight = $(this).children("td:nth-child(2)");
       if(weight.text() < 10){
         $(this).hide();
       };
     });
   });
   //Question 6
$(".btn-success").click(function(){
  $("td:nth-child(1)").css("text-transform","uppercase");
});
// or
  //$(".table-striped tbody").children().each(function(){
  //  var yell = $(this).children("td:nth-child(1)");
  //  $(yell).text($(yell).text().toUpperCase());
  // or
  //  $(yell).css("text-transform", "uppercase");
//});

//Question 7
$(".btn-primary").click(function(){
    $(".table-striped").toggle();
});
//Question 8
$("#disableUs input").prop("disabled", true);
    $("#disableUs a").click(function(){
      return false;
    });
//Question 9
$(".dropdown").change(function(){
      var value = $(this).find("option:selected").text();
     $("<h3>" + value + "</h3>").insertAfter(".dropdown");
    });
//Question 10
$("<input type='button' class='btn btn-secondary' value='add'/>").insertBefore("#alertList");
    $("<input type='button' class='btn btn-danger' value='remove'/>").insertBefore("#alertList");
    var count = 0;
    $("#alertList").children().each(function(){
      count += 1;
    });
    alert(count);
    $(".btn-secondary").click(function(){
      $("#alertList").append("<li>New Item</li>");
      count += 1;
      update();
    });
//Question 11
$(".btn-danger").click(function(){
  $("#alertList").children('li:last-child').remove();
  count -= 1;
  update();
});
//Question 12
var update = function(){
      $("#12").text("The count is: " + count)
    };
});
