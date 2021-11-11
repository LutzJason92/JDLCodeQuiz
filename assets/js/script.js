// // //DECLARE VARIABLES

var startCountDown = document.getElementById("timer")
var beginQuestion1 = document.getElementById("questions")
var displayAnswers = document.getElementById("answers")
var displayValue = document.getElementById("rightWrong")
var choicesArray1 = document.getElementById("choice1")
var choicesArray2 = document.getElementById("choice2")
var choicesArray3 = document.getElementById("choice3")
var choicesArray4 = document.getElementById("choice4")


// questionAndanswersArray
var quizQuestions = [

    { question : "sample",
    choices : ["a", "b", "c", "d"],
    answer : "b" },

   { question : "sample 2",
    choices : [ 1, 2, 3, 4 ],
    answer : 2 },

    { question : "sample3",
    choices : ["z", "y", "x", "w"],
    answer : "w" },

    { question : "sample 4",
    choices : [ 9, 8, 7, 6 ],
    answer : 8 }

//     { question :
//     choices :
//     answer : },


];


var quizQa = 0;
var penalty = 5;
var secondsLeft = 35;
var score = 0

//EventListener - button clicks
document.getElementById("button").addEventListener('click', startTimer);
document.getElementById("choice1").addEventListener('click', judgeMent);document.getElementById("choice2").addEventListener('click', judgeMent);document.getElementById("choice3").addEventListener('click', judgeMent);document.getElementById("choice4").addEventListener('click', judgeMent);

function startTimer (){
    var timerInterval = setInterval(function() {
        // beginQuestion1()
        secondsLeft--;
        startCountDown.textContent = secondsLeft + " seconds remaining.";
    
        if(secondsLeft < 10) 
        {
            startCountDown.textContent = secondsLeft + " time is almost up!";
        } 
        
        if (secondsLeft <= 0) { 
            startCountDown.textContent = "OUT OF TIME";
            clearInterval(timerInterval)
            gameOver()
        }
      }, 1000); //milliseconds
      
    questions() 
};

function questions(){

        //proves content is pushed to page
        // beginQuestion1.textContent = "question Place Holder"
        // displayAnswers.textContent = "answer Place holder"

        for (var i = 0; i < quizQuestions.length; i++){
        
            var displayQuestion = quizQuestions[quizQa].question;
            beginQuestion1.textContent = displayQuestion;
        };
        
        for (var x = 0; x < quizQuestions.length; x++){ 
            
            var displayChoices = quizQuestions[quizQa].choices[x];
            
            if (x == 0) {
                choicesArray1.textContent = displayChoices
            }
            if (x == 1) {
                choicesArray2.textContent = displayChoices
            }
            if (x == 2) {
                choicesArray3.textContent = displayChoices
            }
            if (x == 3) {
                choicesArray4.textContent = displayChoices
            } 
                  
        }
    
}
function judgeMent(event){
       var displayChoices = event.target;

       for (var i = 0; i < quizQuestions.length; i++){
        
         var displayAnswers = quizQuestions[quizQa].answer;
   
       if (displayAnswers === displayChoices.textContent){
            displayValue.textContent = "NICE!"
            score++
        }    

            else {
                displayValue.textContent = "TRY AGAIN"
                secondsLeft = secondsLeft -- penalty;
            }
    }

}
        // list items are buttons that trigger a correct / wrong output to rightWrong ID in HTML
        
        // store score in local memory

        // progress to next question after right answer is selected

// display page after timer is up or questions are over

function gameOver() {
    console.log("gameOver")
};