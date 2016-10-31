$(document).ready(function(){
  $("#random").removeClass('hidden');
  wheel = new wheelnav('wheelDiv');
wheel.wheelRadius = 110;
wheel.colors = colorpalette.parrot;
wheel.initWheel(["random", "color", "name", "id"]);
wheel.createWheel();

wheel.navItems[0].navigateFunction = function() {
  $("#id").addClass("hidden");
  $(".userInputID").addClass("hidden");
  $("#random").removeClass("hidden");
  $("#name").addClass("hidden");
  $(".userInputName").addClass("hidden");
    };

wheel.navItems[1].navigateFunction = function() {
  $("#color").removeClass("hidden");
  $(".userInputColor").removeClass("hidden");
  $("#id").addClass("hidden");
  $(".userInputID").addClass("hidden");
  $("#random").addClass("hidden");
  $("#name").addClass("hidden");
  $(".userInputName").addClass("hidden");
    };

wheel.navItems[2].navigateFunction = function() {
  $("#random").addClass("hidden");
  $("#name").removeClass("hidden");
  $(".userInputName").removeClass("hidden");
  $(".userInputID").addClass("hidden");
  $("#id").addClass("hidden");
    };

wheel.navItems[3].navigateFunction = function() {
  $("#id").removeClass("hidden");
  $(".userInputID").removeClass("hidden");
  $("#random").addClass("hidden");
  $("#name").addClass("hidden");
  $(".userInputName").addClass("hidden");
  $("#color").addClass("hidden");
  $(".userInputColor").addClass("hidden");
  };

});

function randomPoke(){
  var randomNum = Math.floor((Math.random() * 721) + 1)
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/' + randomNum,
    type: 'GET',
    data: {
      format: 'json'
    },
    error: function(){
      alert('An error has occurred');
    },
    success: function(results){
      console.log(results);
      $("#result").html("Name: " + results.name +
      "<br>Height: " + results.height +
      "<br>Weight: " + results.weight +
      "<br><img src=" + results.sprites.front_shiny + ">");
    }
  })
}

function pokeByID(){
  var userInputID = $(".userInputID").val()
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/' + userInputID,
    type: 'GET',
    data: {
      format: 'json'
    },
    error: function(){
      alert('An error has occurred');
    },
    success: function(results){
      console.log(results);
      $("#result").html("Name: " + results.name +
      "<br>Height: " + results.height +
      "<br>Weight: " + results.weight +
      "<br><img src=" + results.sprites.front_shiny + ">");
    }
  })
}

function pokeByName(){
  var userInputName = $(".userInputName").val()
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/' + userInputName,
    type: 'GET',
    data: {
      format: 'json'
    },
    error: function(){
      alert('An error has occurred');
    },
    success: function(results){
      console.log(results);
      $("#result").html("Name: " + results.name +
      "<br>Height: " + results.height +
      "<br>Weight: " + results.weight +
      "<br><img src=" + results.sprites.front_shiny + ">");
    }
  })
}

function pokeByColor(){
  var userInputColor = $(".userInputColor :selected").text()
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon-color/' + userInputColor,
    type: 'GET',
    data: {
      format: 'json'
    },
    error: function(){
      alert('An error has occurred');
    },
    success: function(results){
      console.log(results);
      $("#result").html("Name: " + "<br>");
      for (i=0; i<10; i++) {
        $("#result").append(results.pokemon_species[i].name + '<br>');
      }
      // + results.pokemon_species[i].name
    //   $("#result").html("Name: " + results.name +
    //   "<br>Height: " + results.height +
    //   "<br>Weight: " + results.weight +
    //   "<br><img src=" + results.sprites.front_shiny + ">");
    }
  })
}
