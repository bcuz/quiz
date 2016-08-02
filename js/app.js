$(function() {

  var questions = [
  {
    question: "When did?",
    option1: "bob",
    option2: "nick"
  }


  ]

  $("form").prepend("<p>" + questions[0].question + "</p>")

  // next question function

  var stuff = ["w/e"]

  // form is appened onto the page at start
$("form").submit(function() {

    $("input").val(stuff[0])



    return false;

  });
});