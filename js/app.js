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
    answer: "2nd"
  },

  {
    question: "Which of these records did Marshall Faulk break?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick",
    answer: "bob"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick",
    answer: "bob"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick",
    answer: "bob"
  },

  {
    question: "Who did?",
    option1: "gary",
    option2: "lerton",
    option3: "bob",
    option4: "nick",
    answer: "bob"
  }
  ]

  var showQuestions = function() {
    // maybe could just replace values of form instead of recreating each time
  $(".over").remove();
  $("button[type='submit']").show();
  $("h2").text("Question " + question_num + " out of 5")
  $(".questions").prepend("<p>" + questions[question_num-1].question + "</p>\
    <div><input type='radio' name='question' value='" + questions[question_num-1].option1 + "'>"
    + questions[question_num-1].option1 + "</div><div><input type='radio' name='question' value='" +
    questions[question_num-1].option2 + "'>" + questions[question_num-1].option2 + "</div>\
    </div><div><input type='radio' name='question' value='" + questions[question_num-1].option3 + "'>"
    + questions[question_num-1].option3 + "</div> </div><div><input type='radio' name='question' value='"
     + questions[question_num-1].option4 + "'>" + questions[question_num-1].option4 + "</div>")
  }

  // original questions are shown here.
  showQuestions();

   $("body").on("click", ".new", function() {
          question_num = 1;
          showQuestions();
        })

  var nextQuestion = function() {
    question_num += 1;

    // this needs to be changed back to 6 at the end
    if (question_num === 6) {
      $(".questions").empty();
      $("h2").remove();
      $("button[type='submit']").hide();
      $("body").append("<div class='over'><p>Finished. Score: " + score +
        "/5</p><button class='new'>New Game</button></div>");


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
        alert("You're right!")
        nextQuestion();
      } else {
        alert("Wrong!")
        nextQuestion();
      }


    }

    return false;
  });
});