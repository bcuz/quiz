'use strict'   //strict mode

$(function() {

  var question_num = 1;
  var score = 0;

  var questions = [
  {
    question: "Kurt Warner became the ___ player in NFL history\
    to throw 40+ touchdowns in a a single season.",
    option1: "1st",
    option2: "2nd",
    option3: "3rd",
    option4: "4th",
    answer: "2nd",
    more: "Dan Marino was the first."
  },

  {
    question: "Which of these single season records did Marshall Faulk break?",
    option1: "Receiving touchdowns for a running back",
    option2: "Total yards from scrimmage",
    option3: "Rushing touchdowns",
    option4: "Receptions by a running back",
    answer: "Total yards from scrimmage",
    more: "The record was previously held by Barry Sanders"
  },

  {
    question: "What was the nickname for the Rams offense?",
    option1: "Bob and Weave",
    option2: "K-Gun",
    option3: "The Greatest Show on Turf",
    option4: "The Triplets",
    answer: "The Greatest Show on Turf",
    more: "This offense set a new record for total yards in a season."
  }
  // ,

  // {
  //   question: "Who did?",
  //   option1: "gary",
  //   option2: "lerton",
  //   option3: "bob",
  //   option4: "nick",
  //   answer: "bob"
  // },

  // {
  //   question: "Who did?",
  //   option1: "gary",
  //   option2: "lerton",
  //   option3: "bob",
  //   option4: "nick",
  //   answer: "bob"
  // }
  ]

  var newGame = function() {
    question_num = 1;
    $(".questions").show();
    showQuestions();
    $(".score").hide();
    $("img").show();
  }

  var genState = function() {
    $("input:radio").attr("checked", false);
    $(".score").show();
    $("h2").show();
    $(".over").remove();
    $("button[type='submit']").show();
    $("h2").text("Question " + question_num + " out of 3")

  }

  var showQuestions = function() {
    genState();

    $(".questions p ").text( questions[question_num-1].question);
    $("label[for*='1']").text(questions[question_num-1].option1);
    $("#1").val(questions[question_num-1].option1)
    $("label[for*='2']").text(questions[question_num-1].option2);
    $("#2").val(questions[question_num-1].option2)
    $("label[for*='3']").text(questions[question_num-1].option3);
    $("#3").val(questions[question_num-1].option3)
    $("label[for*='4']").text(questions[question_num-1].option4);
    $("#4").val(questions[question_num-1].option4)

  }

  // original questions are shown here.
  showQuestions();

  // starts the quiz over
  $("body").on("click", ".new", function() {
    newGame();
      })

  var nextQuestion = function() {
    question_num += 1;

    if (question_num === 4) {

      question_num = 1;
      $(".questions").hide();
      $("h2").hide();
      $(".score").hide();
      $("img").hide();
      $("button[type='submit']").hide();
      $("body").append("<div class='over'><p>Final score: " + score +
        "/3</p><button class='new'>Replay</button></div>");
      score = 0;


    } else {
    showQuestions();

    }
  }

$("form").submit(function() {
    if ($("input[type='radio']:checked").val() === undefined ) {
      alert("Answer the question")
    } else {

      if ($("input[type='radio']:checked").val() === questions[question_num-1].answer) {
        score += 1;
        $(".score").text("Current score " + score + "/3")

        alert("Correct! " +  questions[question_num-1].more)
        nextQuestion();
      } else {
        $(".score").text("Current score " + score + "/3")
        alert("Incorrect")
        nextQuestion();
      }

    }

    return false;
  });
});