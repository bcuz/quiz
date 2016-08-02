$(function() {

  var questions = {
    1: "hi",
    2: "no"
  }

  $("form").prepend("<input type='text'>")

  // next question function

  var stuff = ["w/e"]

  // form is appened onto the page at start
$("form").submit(function() {

    $("input").val(stuff[0])



    return false;

  });
});