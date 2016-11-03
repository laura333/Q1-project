'use strict';

// var heroWords = ['hero', 'strangers', 'agents of shield', 'good'];
// var villainWords = ['villain', 'tntnt', 'doom', 'kills', 'j.d. hunt', 'guy hunt'];
//
// function isHero(description) {
//     for (var i = 0; i < heroWords.length; i++) {
//         if (description.toLowerCase().indexOf(heroWords[i]) !== -1) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isHero());
//
// function isVillain(description) {
//     for (var i = 0; i < villainWords.length; i++) {
//         if (description.toLowerCase().indexOf(villainWords[i]) !== -1) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(isVillain());

$(document).ready(function() {
    console.log('Let\'s do this!');
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();

    var answers = {};

    $('.gender').on('click', function(mf) {
        var $elmf = $(mf.target);
        var gender = $elmf.text();
        // if (gender === "Female") {
        //     gender = 2;
        // } else {
        //     gender = 1;
        // }
        // console.log(gender);
        answers.gender = gender;
        // console.log(answers);

        $('#modal2').modal('open');
    });

    $('.origin').on('click', function(type) {
        var $eltype = $(type.target);
        var origin = $eltype.text();
        answers.origin = origin;
        // console.log(answers);
        // console.log(origin);

        $('#modal3').modal('open');
    });

    $('.deck').on('click', function(prop) {
        var $elprop = $(prop.target);
        var propensity = $elprop.text();
        // if (propensity === "Good") {
        //     propensity = "Heroes";
        // } else {
        //     propensity = "Villains";
        // }
        // console.log(propensity);
        answers.propensity = propensity;
        console.log(answers);

        $('#modal4').modal('open');
    });

    $('#modal4').on('click', function(event) {
        event.preventDefault();

        // var $xhr = $.getJSON('https://g-comicvine.herokuapp.com/api/characters?api_key=19b875b3fb7d4abe44bbf49506248a975491895f&format=JSON');
        var $xhr = $.getJSON('https://g-comicvine.herokuapp.com/api/characters?api_key=19b875b3fb7d4abe44bbf49506248a975491895f&format=JSON&filter=gender:' + answers.gender);
        // var $xhr = $(data.js);
        // console.log($xhr);

        $xhr.done(function(data) {
            if ($xhr.status !== 200) {
                return;
            }

            var characters = [];
            for (var i = 0; i < data.results.length; i++) {
                var char = data.results[i];
                if (isVillain(char) && answers.propensity === "Evil" || isHero(char) && answers.propensity === "Good") {
                    if (data.origin === answers.origin === "Alien") {
                        characters.push(char);
                    }
                // }
            }
            console.log(characters);

            // for (var i = 0; i < data.results.length; i++) {
            //       var char = data.results[i];
            // if (char.gender && char.origin.name && char.deck && char.image.super_url) {
            //
            //     $("#result").html("Name: " + char.name +
            //         "<br><img src=" + char.image.super_url + ">" +
            //         "<br>Origin: " + char.origin.name +
            //         "<br>Summary: " + char.deck);
            //
            //     console.log(char.gender, char.origin.name, char.deck, char.image.super_url);

            // console.log('Is ' + char.name + ' a villain?', isVillain(char.deck));
            //
            // console.log(char.deck);
            // }

            var randomChar = Math.floor((Math.random(characters.length) * 100) + 1);
            console.log(randomChar);
        });

      $xhr.fail(function(err) {
            console.log(err);
            // console.log("Name: Wonder Woman"
            // "<br><img src= " + char.image.super_url + ">" +
            // "<br>Origin: " + char.origin.name +
            // "<br>Summary: " + char.deck);
            // "The princess of the Amazons, Wonder Woman is one of Earth's most powerful defenders of peace and equality and a member of the Justice League. She is often considered an archetype for the comic book superheroine. Her original origin depicted her as a clay figure brought to life by the gods, but in recent years she has been depicted as the daughter of Zeus and the Amazon queen Hippolyta.";
        });
        // console.log(data);
        //
        // for (var origin in answers) {
        //   console.log(answers[origin]);
        // }
      });
});
