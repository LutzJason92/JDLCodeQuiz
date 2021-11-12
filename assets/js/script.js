// // //DECLARE VARIABLES

var startCountDown = document.getElementById("timer");
var userQuestions = document.getElementById("questions");
var displayAnswers = document.getElementById("answers");
var displayValue = document.getElementById("rightWrong");
var choicesArray1 = document.getElementById("choice1");
var choicesArray2 = document.getElementById("choice2");
var choicesArray3 = document.getElementById("choice3");
var choicesArray4 = document.getElementById("choice4");
var displayScore =  document.getElementById("points");

//get local storage

//set item in code below, stringify

// questionAndanswersArray key value pairs
var quizQuestions = [

    { 
        
    arQuestion1 : "The following is an example of what? var = studentNames = [ “Jason”, “Moe”, “Collin”, “Olivia”]",
        choice1 : ["a string"],
        choice2 : ["an array"],
        choice3 : ["comma notation"],
        choice4 : ["a function"],
    answer : "an array" 
    
    },

    { 
    
    arQuestion2 : "sample 2",
        choice1 : ["a"],
        choice2 : ["b"],
        choice3 : ["c"],
        choice4 : ["d"],
    answer : "c" 
    
    },

    { 
        
    arQuestion3 : "sample 3",
        choice1 : ["a"],
        choice2 : ["b"],
        choice3 : ["c"],
        choice4 : ["d"],
    answer : "c" 

    },
    
    { 
        
    arQuestion4 : "sample 4",
        choice1 : ["a"],
        choice2 : ["b"],
        choice3 : ["c"],
        choice4 : ["d"],
    answer : "c" 

    },
    
    { 
        
    arQuestion5 : "sample 5",
        choice1 : ["a"],
        choice2 : ["b"],
        choice3 : ["c"],
        choice4 : ["d"],
    answer : "c" 
    
    }
];


var quizIndex = 0;
var penalty = 5;
var secondsLeft = 5000;
var points = 0;

//EventListener - button clicks
document.querySelector("#startButton").addEventListener('click', startTimer);
// document.querySelector(".buttons").onclick = function(){userChoices1()}

document.getElementById("choice1").addEventListener('click', checkAnswer)
document.getElementById("choice2").addEventListener('click', checkAnswer)
document.getElementById("choice3").addEventListener('click', checkAnswer)
document.getElementById("choice4").addEventListener('click', checkAnswer)





    

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
      
    renderQuestion1() 
};
//renderQuestion()


function renderQuestion1(){
    var displayQuestion = quizQuestions[0].arQuestion1;
    userQuestions.textContent = displayQuestion; 
     
     userChoices1()
    }


function userChoices1(){
    
    
    var displayChoices1 = quizQuestions[0].choice1;
    choicesArray1.textContent = displayChoices1
    var displayChoices2 = quizQuestions[0].choice2;
    choicesArray2.textContent = displayChoices2
    var displayChoices3 = quizQuestions[0].choice3;
    choicesArray3.textContent = displayChoices3
    var displayChoices4 = quizQuestions[0].choice4;
    choicesArray4.textContent = displayChoices4
};

function checkAnswer(event) {
    var displayChoices1 = quizQuestions[0].choice1;
    choicesArray1.textContent = displayChoices1
    var displayChoices2 = quizQuestions[0].choice2;
    choicesArray2.textContent = displayChoices2
    var displayChoices3 = quizQuestions[0].choice3;
    choicesArray3.textContent = displayChoices3
    var displayChoices4 = quizQuestions[0].choice4;
    choicesArray4.textContent = displayChoices4
    var displayAnswers = quizQuestions[0].answer;
    
    if 
    
    (displayAnswers == displayChoices1.textContent, 
    displayAnswers == displayChoices2.textContent,
    displayAnswers == displayChoices3.textContent,
    displayAnswers == displayChoices4.textContent)
    {
     displayValue.textContent = "NICE! +1 Points!";
     points += 1;
     
    //  userChoices2()
     
    } else { 
     secondsLeft = secondsLeft - penalty;
     displayValue.textContent = "TRY AGAIN -5 seconds!" ; 
    }
    console.log(displayChoices1)
    console.log(displayChoices2)
    console.log(displayChoices3)
    console.log(displayChoices4)

    console.log(displayAnswers)
}
 


function userChoices2(){
    var displayQuestion = quizQuestions[0].arQuestion1;
    userQuestions.textContent = displayQuestion;
    
    var displayChoices1 = quizQuestions[0].choice1;
    choicesArray1.textContent = displayChoices1
    var displayChoices2 = quizQuestions[0].choice2;
    choicesArray2.textContent = displayChoices2
    var displayChoices3 = quizQuestions[0].choice3;
    choicesArray3.textContent = displayChoices3
    var displayChoices4 = quizQuestions[0].choice4;
    choicesArray4.textContent = displayChoices4   
    //  renderChoices2()
    }



function gameOver() {
    
   window.location.replace("highscores.html");
   
};