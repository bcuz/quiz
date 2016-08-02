$(function() {

  $("form").prepend("<input type='text'>")

  // next question function

  var stuff = ["hi"]

  // form is appened onto the page at start
$("form").submit(function() {

    $("input").val(stuff[0])



    return false;

  });
});