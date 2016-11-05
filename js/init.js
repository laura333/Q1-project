'use strict';

$(document).ready(function() {
    console.log('Let\'s do this!');
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();

    var answers = {};

    // $('.gender').on('click', function(mf) {
    //     var $elmf = $(mf.target);
    //     var gender = $elmf.text();
    //     answers.gender = gender;
    //     // console.log(answers);
    //
    //     $('#modal2').modal('open');
    // });
    //
    // $('.origin').on('click', function(type) {
    //     var $eltype = $(type.target);
    //     var origin = $eltype.text();
    //     answers.origin = origin;
    //     // console.log(answers);
    //     // console.log(origin);
    //
    //     $('#modal3').modal('open');
    // });
    //
    // $('.deck').on('click', function(prop) {
    //     var $elprop = $(prop.target);
    //     var propensity = $elprop.text();
    //     answers.propensity = propensity;
    //     console.log(answers);
    //
    //     $('#modal4').modal('open');
    // });
    //
    // $('#modal4').on('click', function(event) {
    //     event.preventDefault();

    $('.gender').on('click', function(event) {
      event.preventDefault();

        var $elmf = $(event.target);
        var gender = $elmf.text();
        answers.gender = gender;
        // console.log(answers);
        var $xhr = $.getJSON('https://g-comicvine3.herokuapp.com/api/characters?api_key=19b875b3fb7d4abe44bbf49506248a975491895f&format=JSON&filter=gender:' + answers.gender);
        // var $xhr = $('data.js');

        $('.popup').toggle();
        $('#modal5').modal('open');
        $('#modal5').on('click', function() {
          $('#modal6').modal('open');
        });
        $('#modal6').on('click', function() {
          $('#modal7').modal('open');
        });
        $('#modal7').on('click', function() {
          $('#result').modal('open');
        });

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

                // if (char.gender && char.origin && char.origin.name && char.deck && char.image && char.image.super_url) {
                if (char.image.super_url) {

                    $("#result").append('Name: ' + char.name +
                        '<br><br><img class="char-img" src=' + char.image.super_url + '>' +
                        '<br>Origin: ' + char.origin.name +
                        '<br><p class="description">Description: ' + char.deck);

                    // console.log(char.gender, char.origin.name, char.deck, char.image.super_url);
                    // $('.background').toggle();
                    // $('#result').modal('open');
                }
        });

        $xhr.fail(function(err) {
            console.log(err);
            $('.popup').toggle();
            // $('.background').toggle();
        });

        // $('#modal7').modal('open');
        // $('#modal6').modal('open');
        // $('#modal5').modal('open');


    });
});
