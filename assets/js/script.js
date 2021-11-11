// // //DECLARE VARIABLES

var startCountDown = document.getElementById("timer")
var userQuestions = document.getElementById("questions")
var displayAnswers = document.getElementById("answers")
var displayValue = document.getElementById("rightWrong")
var choicesArray1 = document.getElementById("choice1")
var choicesArray2 = document.getElementById("choice2")
var choicesArray3 = document.getElementById("choice3")
var choicesArray4 = document.getElementById("choice4")
var displayScore =  document.getElementById("points")

//get local storage

//set item in code below, stringify

// questionAndanswersArray
var quizQuestions = [

    { question : "The following is an example of what? var = studentNames = [ “Jason”, “Moe”, “Collin”, “Olivia”]",
    choices : ["a string", "an array", "comma notation", "a function"],
    answer : "an array" },

   { question : "sample 2",
    choices : [ 1, 2, 3, 4 ],
    answer : 2 },

    { question : "sample3",
    choices : ["z", "y", "x", "w"],
    answer : "w" },

    { question : "sample 4",
    choices : [ 9, 8, 7, 6 ],
    answer : 8 }
];

var quizQa = 0;
var penalty = 5;
var secondsLeft = 35;
var points = 0;

//EventListener - button clicks
document.getElementById("button").addEventListener('click', startTimer);
document.getElementById("choice1").addEventListener('click', judgeMent);
document.getElementById("choice2").addEventListener('click', judgeMent);
document.getElementById("choice3").addEventListener('click', judgeMent);
document.getElementById("choice4").addEventListener('click', judgeMent);



    

function startTimer (){
    var timerInterval = setInterval(function() {
       
        secondsLeft--;
        startCountDown.textContent = secondsLeft + " seconds remaining.";
    
        if(secondsLeft < 10) 
        {
            startCountDown.textContent = secondsLeft + " seconds remaining! time is almost up!";
        } 
        
        if (secondsLeft <= 0) { 
            startCountDown.textContent = "OUT OF TIME";
            clearInterval(timerInterval)
            gameOver()
        }
      }, 1000); //milliseconds
      
    question1() 
};

function question1(){
        for (var i = 0; i < quizQuestions.length; i++){
        
            var displayQuestion = quizQuestions[quizQa].question;
            userQuestions.textContent = displayQuestion;
        };
        
        for (var i = 0; i < quizQuestions.length; i++ ){ 
            
            var displayChoices = quizQuestions[quizQa].choices[i];
            
            if (i == 0) {
                choicesArray1.textContent = displayChoices
            }
            if (i == 1) {
                choicesArray2.textContent = displayChoices
            }
            if (i == 2) {
                choicesArray3.textContent = displayChoices
            }
            if (i == 3) {
                choicesArray4.textContent = displayChoices
            } 
                
        }
    
}
function judgeMent(event){
       var displayChoices = event.target;
       for (var i = 0; i < 1; i++){
        
         var displayAnswers = quizQuestions[quizQa].answer;
   
       if (displayAnswers === displayChoices.textContent){
            displayValue.textContent = "NICE! +1 Points!";
            points += 1;
            displayScore.textContent = points;
            console.log(points);
            i++;
            
        } else {
            secondsLeft = secondsLeft - penalty;
            displayValue.textContent = "TRY AGAIN -5 seconds!" ; 
        }
    }
      
}



// display page after timer is up or questions are over

function gameOver() {
    
   window.location.replace("highscores.html");
   
};