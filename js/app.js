$(function() {

  var questions = [
  {
    question: "What's my name?",
    option1: "bob",
    option2: "nick"
  }


  ]

  $("form").prepend("



    <input type='text'>"

    )

  // next question function

  var stuff = ["w/e"]

  // form is appened onto the page at start
$("form").submit(function() {

    $("input").val(stuff[0])



    return false;

  });
});