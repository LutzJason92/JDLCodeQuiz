// // //DECLARED VARIABLES


var startCountdown = $("#timer");
var userQuestions = $("#questions");
var displayValue = $("#rightWrong")
var choicesArray1 = $("#choice1")
var choicesArray2 = $("#choice2");
var choicesArray3 = $("#choice3");
var choicesArray4 = $("#choice4");
var displayScore = $("#points")
var highScores = $("#highscores")
var quizIndex = 0;
//get local storage



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
    
    question : "The technical term for an element wrapped in quotation marks is what?",
        choice1 : ["a string"],
        choice2 : ["an object"],
        choice3 : ["an array"],
        choice4 : ["a function"],
    answer : "a string" 
    
    },

    { 
        
    question : "For Loops are:",
        choice1 : ["used to execute code more than once"],
        choice2 : ["include a declaration, condition and an incrementor"],
        choice3 : ["dependent on defined variables"],
        choice4 : ["all of the above"],
    answer : "all of the above" 

    },
    
    { 
        
    question : "What is the technical term for a parameter that has been assigned a value within a function?",
        choice1 : ["for loop"],
        choice2 : ["declaration"],
        choice3 : ["argument"],
        choice4 : ["console.log"],
    answer : "argument" 

    },
    
    { 
        
    question : "DOM stands for:",
        choice1 : ["Dusty Old Monitor"],
        choice2 : ["Document Object Model"],
        choice3 : ["Declaration Of Model"],
        choice4 : ["Description Of Methods"],
    answer : "Document Object Model" 
    
    }
];

var points = 0;
var quizIndex = 0;
var penalty = 5;
var secondsLeft = 20;
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
        alert("YOU MADE IT!! THE QUIZ IS OVER!! You got " + points + " points" + " with " + secondsLeft + " seconds remaining.")
        gameOver()
    }

    // var displayQuestion = quizQuestions[quizIndex].question;
    // userQuestions.textContent = displayQuestion; 
     
    //  userChoices1()
    }

function checkAnswer(event) {
    if (quizQuestions[quizIndex].answer === event.target.outerText) {
    displayScore.text(points += 1)
    displayValue.text("NICE! +1 Points!");
    quizIndex++;

    renderQuestion()
    } else { 
     secondsLeft = secondsLeft - penalty;
     displayValue.text("TRY AGAIN -5 seconds!") 
    }
    

    localStorage.setItem("Points" , points)
    localStorage.getItem("Points")

};

function gameOver() {
clearInterval(secondsLeft);

userInitials = prompt("Enter your initials below for bragging rights!"); 

    localStorage.setItem("Initials", userInitials)
    localStorage.getItem("Initials")
    window.location.replace("highscores.html")

};

console.log(points)