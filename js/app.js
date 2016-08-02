$(function() {

  $("form").prepend("<input type='text'>")

  // form is appened onto the page at start
$("form").submit(function() {
    alert('hi');



    return false;

  });
});