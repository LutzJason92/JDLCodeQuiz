// // //DECLARE VARIABLES


var startCountdown = $("#timer");

var userQuestions = $("#questions");

var displayValue = $("#rightWrong")

var choicesArray1 = $("#choice1")

var choicesArray2 = $("#choice2");

var choicesArray3 = $("#choice3");

var choicesArray4 = $("#choice4");

var displayScore = $("#points")





var quixIndex = 0
//get local storage

//set item in code below, stringify

// questionAndanswersArray key value pairs
var quizQuestions = [

    { 
        
    question : "The following is an example of what? var = studentNames = [ “Jason”, “Moe”, “Collin”, “Olivia”]",
        choice1 : ["a string"],
        choice2 : ["an array"],
        choice3 : ["comma notation"],
        choice4 : ["a function"],
    answer : "an array" 
    
    },

    { 
    
    question : "sample 2",
        choice1 : ["a"],
        choice2 : ["b"],
        choice3 : ["c"],
        choice4 : ["d"],
    answer : "c" 
    
    },

    { 
        
    question : "sample 3",
        choice1 : ["a"],
        choice2 : ["b"],
        choice3 : ["c"],
        choice4 : ["d"],
    answer : "c" 

    },
    
    { 
        
    question : "sample 4",
        choice1 : ["a"],
        choice2 : ["b"],
        choice3 : ["c"],
        choice4 : ["d"],
    answer : "c" 

    },
    
    { 
        
    question : "sample 5",
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
        startCountdown.text(secondsLeft + " seconds remaining");
    
        if(secondsLeft < 10) 
        {
            startCountdown.text(secondsLeft + " seconds remaining! time is almost up!");
        } 
        
        if (secondsLeft <= 0) { 
            startCountdown.text("OUT OF TIME");
            clearInterval(timerInterval)
            gameOver()
        }
      }, 1000); //milliseconds
      
    renderQuestion() 
};


function renderQuestion(){
    if (quizIndex < quizQuestions.length){
        userQuestions.text(quizQuestions[quizIndex].question);
        choicesArray1.text(quizQuestions[quizIndex].choice1);
        choicesArray2.text(quizQuestions[quizIndex].choice2);
        choicesArray3.text(quizQuestions[quizIndex].choice3);
        choicesArray4.text(quizQuestions[quizIndex].choice4);




    } else {

        gameOver()
    }

    // var displayQuestion = quizQuestions[quizIndex].question;
    // userQuestions.textContent = displayQuestion; 
     
    //  userChoices1()
    }

function checkAnswer(event) {
  
    var displayAnswers = quizQuestions[quixIndex].answer;
    
    
    // if (quizQuestions[quizIndex].answer === event.target.outerText)
    if (quizQuestions[quizIndex].answer === event.target.outerText) {
     
     displayValue.text("NICE! +1 Points!")
     points ++;
    quizIndex++;
    } else { 
     secondsLeft = secondsLeft - penalty;
     displayValue.text("TRY AGAIN -5 seconds!") 
    }
    
    renderQuestion()
    
};
 


// function userChoices2(){
//     var displayQuestion = quizQuestions[0].arQuestion1;
//     userQuestions.textContent = displayQuestion;
    
//     var displayChoices1 = quizQuestions[0].choice1;
//     choicesArray1.textContent = displayChoices1
//     var displayChoices2 = quizQuestions[0].choice2;
//     choicesArray2.textContent = displayChoices2
//     var displayChoices3 = quizQuestions[0].choice3;
//     choicesArray3.textContent = displayChoices3
//     var displayChoices4 = quizQuestions[0].choice4;
//     choicesArray4.textContent = displayChoices4   
//     //  renderChoices2()
//     }



function gameOver() {
    
   window.location.replace("highscores.html");
   
};