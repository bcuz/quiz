$(function() {

  var question_num = 0;

  var questions = [
  {
    question: "When did?",
    option1: "bob",
    option2: "nick"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton"
  }
  ]

  // gonna need stuff incremented here
  $("form").prepend("<p>" + questions[question_num].question + "</p>")

  // next question function
  // can delete the form and remake it

  var stuff = ["w/e"]

  var nextQuest = function() {
    question_num += 1;
  }

$("form").submit(function() {

    $("input").val(stuff[0])



    return false;

  });
});