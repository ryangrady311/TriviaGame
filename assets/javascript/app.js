 //Insert Questions Here///////////////////////

 var triviaQuestions = [{ question: "When did Arizona become a state?", answer: ["November 5, 1882", "July 4, 1776", "February 14, 1912", "April 15, 1902"], correctAnswer: 2 }, { question: "Arizona's 5 C's are Copper, Cattle, Cotton, Climate, and ______?", answer: ["Candy", "Citrus", "Camping", "Cars"], correctAnswer: 1 }, { question: "The Arizona State Capitol used to be in which of the following cities", answer: ["Payson", "Flagstaff", "Prescott", "Scottsdale"], correctAnswer: 2 }, { question: "Which desert lies in Southern Arizona?", answer: ["The Sonoran Desert", "The Sahara Desert", "The Great Sandy Desert", "The Gobi Desert"], correctAnswer: 0 }, { question: "How deep is the Grand Canyon?", answer: ["10,063ft", "200ft", "2,050ft", "6,093ft"], correctAnswer: 3 }];

 ////////////////////////////////////////////

 var questionNumber = 0;

 var totalCorrect = 0;

 var myTimerCount=10;

 var answerSelected = false;

 var endofgame = false;

 //Display Start Screen

 $("#jQueryDiv").html(" <div id='playArea'> <h1>Test your knowledge of Arizona!</h1><button id='startButton'>Start!</button></div>");


 //Start the game

 $("#startButton").click(function () {


    

     document.getElementById("timer").innerHTML = "Remaining Time: 10";
     var myVar = setInterval(myTimer, 1000);



     Math.floor(Math.random() * 10 + 1);  //random # between 1 and 10


     //Initialize the first question

     $("#jQueryDiv").html(" <div id='playArea' > <h2>" + triviaQuestions[questionNumber].question + "</h2><form ><input type='radio' name='answer' value='answer1' id='answer1'> <p1>" + triviaQuestions[questionNumber].answer[0] + "</p1><br><input type='radio' name='answer' value='answer2' isCorrect='incorrect' id='answer2'> <p2>" + triviaQuestions[questionNumber].answer[1] + "</p2><br><input type='radio' name='answer' value='answer3' isCorrect='incorrect' id='answer3'> <p3>" + triviaQuestions[questionNumber].answer[2] + "</p3><br><input type='radio' name='answer' value='answer4' isCorrect='incorrect' id='answer4'> <p4>" + triviaQuestions[questionNumber].answer[3] + "</p4></form></div>");

     initalizeQuestion();


     $("#answer1").click(function () {

        

         if (triviaQuestions[questionNumber].correctAnswer == 0) {

             totalCorrect = totalCorrect + 1;
         }

        
         answerSelected = true;
         
         var windowTimeout = setTimeout(function () {
             updateQuestion()
         }, 3000);




     });

     $("#answer2").click(function () {

         if (triviaQuestions[questionNumber].correctAnswer == 1) {

             totalCorrect = totalCorrect + 1;
         }

        


         answerSelected = true; 
         var windowTimeout = setTimeout(function () {
             updateQuestion()
         }, 1000);

     });

     $("#answer3").click(function () {

         if (triviaQuestions[questionNumber].correctAnswer == 2) {

             totalCorrect = totalCorrect + 1;
        }

        
         
         answerSelected = true;  
         var windowTimeout = setTimeout(function () {
             updateQuestion()
         }, 1000);

     });

     $("#answer4").click(function () {

         if (triviaQuestions[questionNumber].correctAnswer == 3) {

             totalCorrect = totalCorrect + 1;
         }

         
         answerSelected = true;
         var windowTimeout = setTimeout(function () {
             updateQuestion()
         }, 1000);


     });



    
     //  setTimeout(function(){ $("#jQueryDiv").html(" <div id='playArea'> <h1>Test your knowledge of Arizona!</h1><button id='startButton'>Start!</button></div>"); }, 3000);    

     return;
 });


 function initalizeQuestion() {




     $("h2").text(triviaQuestions[questionNumber].question);

     $("p1").text(triviaQuestions[questionNumber].answer[0]);
     $("p2").text(triviaQuestions[questionNumber].answer[1]);
     $("p3").text(triviaQuestions[questionNumber].answer[2]);
     $("p4").text(triviaQuestions[questionNumber].answer[3]);

     //console.log(triviaQuestions[questionNumber].answers[0].correctAnswer)
 }





 function updateQuestion() {


     $("input[type=radio]").prop('checked', false);

     if (questionNumber < triviaQuestions.length - 1) {
         questionNumber = questionNumber + 1;

         $("h2").text(triviaQuestions[questionNumber].question);
         $("p1").text(triviaQuestions[questionNumber].answer[0]);
         $("p2").text(triviaQuestions[questionNumber].answer[1]);
         $("p3").text(triviaQuestions[questionNumber].answer[2]);
         $("p4").text(triviaQuestions[questionNumber].answer[3]);

         

     }

     else {

         $("#jQueryDiv").html(" <div id='playArea' > <h2> Congrats!</h2> <h2>You got "+totalCorrect+" out of "+triviaQuestions.length+" correct!</h2>");
         endofgame = true;
        


     }
     answerSelected = false;
     console.log(totalCorrect);
     
 }

 function myTimer() {

     if (endofgame == true){

         document.getElementById("timer").innerHTML = "";
         $("#jQueryDiv").attr("style", "margin-top: 200px");
     }
     
     else if (answerSelected == true){
         myTimerCount = 11;   
         document.getElementById("timer").innerHTML = "Remaining Time: ";

     }

     else if (myTimerCount>0){
     myTimerCount = myTimerCount-1;
     document.getElementById("timer").innerHTML = "Remaining Time: "+myTimerCount;
     }
     else if (answerSelected ==false){
         updateQuestion();
         myTimerCount = 10;
         document.getElementById("timer").innerHTML = "Remaining Time: "+myTimerCount;
     }
     
 }