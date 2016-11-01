'use strict';

// (function($) {
//     $(function() {
//
//     }); // end of document ready
// })(jQuery); // end of jQuery name space

$(document).ready(function() {

// testing data.js data
//    console.log('error', data.error);

    console.log('Let\'s do this!');
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.gender').on('click', function() {
        console.log('gender!')
        
    });
    $('.origin').on('click', function() {
        console.log('origin!')
    });

    $('.btn-large-test').on('click', function(event){
      event.preventDefault();

      var $xhr = $.getJSON('https://g-comicvine.herokuapp.com/api/characters?api_key=19b875b3fb7d4abe44bbf49506248a975491895f&format=JSON');
      // var $xhr = $(data);
      console.log($xhr);

      $xhr.done(function(data) {
          if ($xhr.status !== 200) {
              return;
          }
          console.log(data);

    for (var i = 0; i < data.results.length; i++) {
      var stuff = data.results[i];
      if(stuff.gender && stuff.origin.name) {
          console.log(stuff.gender, stuff.origin.name);
      };

    }
      });

      $xhr.fail(function(err) {
          console.log(err);
      });

    });

    // var gender = document.getElementsByClassName('gender')
    // for (var i = 0; i < gender.length; i++) {
    //   gender[i].addEventListener('click',function () {
    //     console.log('it was clicked');
    //   })
    // }

});
