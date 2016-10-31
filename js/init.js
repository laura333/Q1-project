'use strict';

// (function($) {
//     $(function() {
//
//     }); // end of document ready
// })(jQuery); // end of jQuery name space

$(document).ready(function() {

    console.log('Let\'s do this!');
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.gender').on('click', function() {
        console.log('clicked!')
    });

    // $('.btn-large-test').on('click', function(event){
    //   event.preventDefault();
    //   // var search = $('#search').val();
    //   // console.log(search);
    //
    //   // var $xhr = $.getJSON('http://comicvine.gamespot.com/api/characters?api_key=19b875b3fb7d4abe44bbf49506248a975491895f&format=json');
    //   var $xhr = $('JSON.json');
    //   console.log($xhr);
    //
    //   $xhr.done(function(data) {
    //       if ($xhr.status !== 200) {
    //           return;
    //       }
    // for (var i = 0; i < data.Search.length; i++) {
    //   var stuff = data.Search[i];
    //
    //   console.log(stuff.Poster, stuff.Title, stuff.imdbID, stuff.Year);
    //
    // }
    //   });

      // $xhr.fail(function(err) {
      //     console.log(err);
      // });

    // });
    // var genderBtns = document.getElementsByClassName('gender')
    // for (var i = 0; i < genderBtns.length; i++) {
    //   genderBtns[i].addEventListener('click',function () {
    //     console.log('it was clicked');
    //   })
    // }
    // console.log(genderBtns);
    // $('h2').click(function () {
    //   alert('it was clicked!!!!')
    // })



})
