/*  Title: sticky.js
    Author: Tristan Luther
    Date: 09/27/2018
    Purpose: Sticks half of the navbar
*/
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });