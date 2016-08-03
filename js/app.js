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

  // put this in a fuction

  var showQuestions = function() {
  $(".questions").prepend("<p>" + questions[question_num].question + "</p>\
    <div><input type='radio' value='" + questions[question_num].option1 + "'>"
    + questions[question_num].option1 + "</div><div><input type='radio' value='" +
    questions[question_num].option2 + "'>" + questions[question_num].option2) + "</div>"
  }

  showQuestions();

  var nextQuestion = function() {
    question_num += 1;
    console.log(question_num);

    $(".questions").empty();

    showQuestions();
  }

$("form").submit(function() {

    nextQuestion();

    return false;

  });
});