'use strict';

var heroWords = ['hero','strangers','agents of shield','good'];
var villainWords = ['villain','tntnt','doom'];

$(document).ready(function() {

    console.log('Let\'s do this!');
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.modal2').modal();

  var answers = {};

    $('.gender').on('click', function(mf) {
        var $elmf = $(mf.target);
        var gender = $elmf.text();
        if (gender === "Female") {
          gender = 2;
        } else {
          gender = 1;
        }
        console.log(gender);
        answers.gender = gender;
        console.log(answers);

        $('#modal2').modal('open');
    });

    $('.origin').on('click', function(type) {
        var $eltype = $(type.target);
        var origin = $eltype.text();
        answers.origin = origin;
        console.log(answers);
        // console.log(origin);

        $('#modal3').modal('open');
    });

    $('.deck').on('click', function(prop) {
        var $elprop = $(prop.target);
        var propensity = $elprop.text();
        if (propensity === "Good") {
          propensity = "Heroes";
        } else {
          propensity = "Villains";
        }
        console.log(propensity);
        answers.propensity = propensity;
        console.log(answers);
    });

    $('.btn-large-test').on('click', function(event) {
        event.preventDefault();

        // var $xhr = $.getJSON('https://g-comicvine.herokuapp.com/api/characters?api_key=19b875b3fb7d4abe44bbf49506248a975491895f&format=JSON');
        var $xhr = $(data.js);
        console.log($xhr);

        // $xhr.done(function(data) {
        //     if ($xhr.status !== 200) {
        //         return;
        //     }
        //     console.log(data);

            for (var i = 0; i < data.results.length; i++) {
                var character = data.results[i];
                if (character.gender && character.origin.name && character.deck) {
                    console.log(character.gender, character.origin.name, character.deck, character.image.super_url);
                    // console.log('Is ' + character.name + ' a hero?', isHero(character.deck));
                    // console.log(character);
                }

            }
        });

        // $xhr.fail(function(err) {
        //     console.log(err);
        // });
    //
    // });

  function isHero(description) {
    for (var i = 0; i < heroWords.length; i++) {
      if (description.toLowerCase().indexOf(heroWords[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

  function isVillain(description) {
    for (var i = 0; i < villainWords.length; i++) {
      if (description.toLowerCase().indexOf(villainWords[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

});
