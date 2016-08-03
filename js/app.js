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

  // console.log(questions[1].question);

  $(".questions").prepend("<p>" + questions[question_num].question + "</p>\
    <input type='radio' value='" + questions[question_num].option1 + "'>"
    + questions[question_num].option1 + "<input type='radio' value='" +
    questions[question_num].option2 + "'>" + questions[question_num].option2)

  var nextQuestion = function() {
    question_num += 1;
    console.log(question_num);

    $(".questions").empty();

    $(".questions").prepend("<p>" + questions[question_num].question + "</p>")
  }

$("form").submit(function() {

    nextQuestion();

    return false;

  });
});