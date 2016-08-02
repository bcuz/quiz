$(function() {

  var question_num = 1;

  var questions = [
  {
    question: "When did?",
    option1: "bob",
    option2: "nick"
  }
  ]

  // gonna need stuff incremented here
  $("form").prepend("<p>" + questions[0].question + "</p>")

  // next question function
  // can delete the form and remake it

  var stuff = ["w/e"]

$("form").submit(function() {

    $("input").val(stuff[0])



    return false;

  });
});