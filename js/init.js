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
