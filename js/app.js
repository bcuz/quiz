$(function() {

  var question_num = 1;
  var score = 0;

  var questions = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, cum.?",
    option1: "bob",
    option2: "nick",
    option3: "bob",
    option4: "nick",
    answer: "bob"
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
    questions[question_num-1].option2 + "'>" + questions[question_num-1].option2 + "</div>\
    </div><div><input type='radio' value='" + questions[question_num-1].option3 + "'>"
    + questions[question_num-1].option3 + "</div>")
  }

  showQuestions();

  var nextQuestion = function() {
    question_num += 1;

    if (question_num === 2) {
      //maybe add a start new game button here
      $("body").find("form").remove();
      $("body").append("<p>The game is done</p><button class='new'>New Game</button>");

      $("body").on("click", ".new", function() {
        console.log("fired");
          question_num = 1;

          showQuestions();
        })

    } else {
    $(".questions").empty();

    showQuestions();

    }
  }

$("form").submit(function() {
    if ($("input[type='radio']:checked").val() === undefined ) {
      alert("Answer the question")
    } else {

      if ($("input[type='radio']:checked").val() === questions[question_num-1].answer) {
        score += 1;
        console.log(score);
      }

      nextQuestion();

    }


    return false;

  });
});