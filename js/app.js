$(function() {

  var question_num = 1;

  var questions = [
  {
    question: "When did?",
    option1: "bob",
    option2: "nick",
    option3: "bob",
    option4: "nick"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick"
  }
  ]

  var showQuestions = function() {
  $("h1").text("Question " + question_num + " out of 5")
  $(".questions").prepend("<p>" + questions[question_num-1].question + "</p>\
    <div><input type='radio' value='" + questions[question_num-1].option1 + "'>"
    + questions[question_num-1].option1 + "</div><div><input type='radio' value='" +
    questions[question_num-1].option2 + "'>" + questions[question_num-1].option2) + "</div>"
  }

  showQuestions();

  var nextQuestion = function() {
    question_num += 1;
    $(".questions").empty();

    showQuestions();
  }

$("form").submit(function() {
    if ($("input[type='radio']:checked").val() === undefined ) {
      alert("Answer the question")
    } else {
      nextQuestion();

    }


    return false;

  });
});