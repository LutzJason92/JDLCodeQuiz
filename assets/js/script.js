// // //DECLARE VARIABLES


var startCountdown = $("#timer");

var userQuestions = $("#questions");

var displayValue = $("#rightWrong")

var choicesArray1 = $("#choice1")

var choicesArray2 = $("#choice2");

var choicesArray3 = $("#choice3");

var choicesArray4 = $("#choice4");

var displayScore = $("#points")

var highScores = $("#highscores")

var userInitials = ""





var quizIndex = 0;
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

var points = displayScore;
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
  
    var displayAnswers = quizQuestions[quizIndex].answer;
    
    
    // if (quizQuestions[quizIndex].answer === event.target.outerText)
    if (quizQuestions[quizIndex].answer === event.target.outerText) {
    points += 1;
    displayValue.text("NICE! +1 Points!");
    quizIndex++;
    renderQuestion()
    } else { 
     secondsLeft = secondsLeft - penalty;
     displayValue.text("TRY AGAIN -5 seconds!") 
    }
    
};

function userStats(){
    const userData = JSON.parse(localstorage.getItem("data")) || [];
    
    const dataEntry = { initials : userInitials, score : points };

    userData.push(dataEntry);

    localStorage.setItem("data", JSON.stringify(userData));
    
    console.log(userData)
    
    let template = " "
    for (let i = 0; i < allData.legnth; i++) {
        template += `<li> ${ userData[i].initials} ${userData[i].score}</li>`;
    }
    $("#highscores").append(template);
    quizIndex = 0;

    console.log(userData)
}


function gameOver() {
clearInterval(secondsLeft);
alert("QUIZ OVER");
 userInitials = prompt("ENTER YOUR INITIALS FOR BRAGGING RIGHTS!")

   userStats()
   console.log(points)
   console.log(userInitials)
//  window.location.replace("highscores.html")
};