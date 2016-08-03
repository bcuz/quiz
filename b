[1mdiff --git a/index.html b/index.html[m
[1mindex a25be15..8f25236 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -7,6 +7,7 @@[m
   <link rel="stylesheet" href="css/style.css">[m
 </head>[m
 <body>[m
[32m+[m[32m  <h1></h1>[m
   <form role="form">[m
     <!-- <input type="radio">bob -->[m
     <div class="questions"></div>[m
[1mdiff --git a/js/app.js b/js/app.js[m
[1mindex 2cde777..bb2b3fe 100644[m
[1m--- a/js/app.js[m
[1m+++ b/js/app.js[m
[36m@@ -16,6 +16,8 @@[m [m$(function() {[m
   }[m
   ][m
 [m
[32m+[m[32m  $("h1").text("Question " + question_num)[m
[32m+[m
   // console.log(questions[1].question);[m
 [m
   var showQuestions = function() {[m
[36m@@ -29,7 +31,7 @@[m [m$(function() {[m
 [m
   var nextQuestion = function() {[m
     question_num += 1;[m
[31m-[m
[32m+[m[32m    $("h1").text("Question " + question_num)[m
     $(".questions").empty();[m
 [m
     showQuestions();[m
