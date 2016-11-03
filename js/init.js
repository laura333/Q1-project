'use strict';

$(document).ready(function() {
    console.log('Let\'s do this!');
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();

    var answers = {};

    $('.gender').on('click', function(event) {
      event.preventDefault();

        var $elmf = $(event.target);
        var gender = $elmf.text();
        answers.gender = gender;
        // console.log(answers);
        var $xhr = $.getJSON('https://g-comicvine.herokuapp.com/api/characters?api_key=19b875b3fb7d4abe44bbf49506248a975491895f&format=JSON&filter=gender:' + answers.gender);
        // var $xhr = $(data.js);

        $xhr.done(function(data) {
            if ($xhr.status !== 200) {
                return;
            }

            // var randomChar = Math.floor((Math.random(data.results.length) * 100) + 1);
            // console.log(randomChar);

            var randomNum = Math.floor((Math.random(data.results.length) * 100) + 1);
            console.log(randomNum);

            // for (var i = 0; i < data.results.length; i++) {
                var char = data.results[randomNum];
                console.log(char);

                if (char.gender && char.origin && char.origin.name && char.deck && char.image && char.image.super_url !== null) {

                    $("#result").append("Name: " + char.name +
                        "<br><img src=" + char.image.super_url + ">" +
                        "<br>Origin: " + char.origin.name +
                        "<br>Summary: " + char.deck);

                    console.log(char.gender, char.origin.name, char.deck, char.image.super_url);
                }
        });

        $xhr.fail(function(err) {
            console.log(err);
        });
    });
});
