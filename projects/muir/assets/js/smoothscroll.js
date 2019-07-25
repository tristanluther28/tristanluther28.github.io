/*  Title: smoothscroll.js
    Author: Tristan Luther
    Date: 09/24/2018
    Purpose: Smooth Scroll animation
*/

$(document).on('click', 'a[href^="#"]', function (event) {
  //Section Indicator on Navbar
  $('body').scrollspy({target: ".navbar", offset: 40}); 
  //Prevents the default anchor behavior
  event.preventDefault();
  //Plays animation (800 is the speed setting)
  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});
