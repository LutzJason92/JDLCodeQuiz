// // //DECLARE VARIABLES

var quizQuestions = [

    { question : "sample",
    choices : ["a", "b", "c", "d"],
    answer : "b" },

//    { question :
//     choices :
//     answer :  },

//     { question :
//     choices :
//     answer : },

//     { question :
//     choices :
//     answer : },

//     { question :
//     choices :
//     answer : },

//     { question :
//     choices :
//     answer : },

//     { question :
//     choices :
//     answer : }
];



var startCountDown = document.getElementById("timer")

var beginQuestion1 = document.getElementById("questions")

var displayAnswers = document.getElementById("answers")

var secondsLeft = 60;

var questionAndanswersArray = 0;

var ulChoices = document.createElement("ul")

//EventListener - button clicks



document.getElementById("button").addEventListener('click', startTimer);



function startTimer (){
    var timerInterval = setInterval(function() {
        // beginQuestion1()
        secondsLeft--;
        startCountDown.textContent = secondsLeft + " seconds remaining.";
    
        if(secondsLeft < 10) 
        {
            startCountDown.textContent = secondsLeft + " time is almost up!";
        }; 
        
        // else (secondsLeft === 0); { 
            
        //     clearInterval(timerInterval);
        //     gameOver()
        // };
      }, 1000); //milliseconds
      
    questions() 
};

function questions(){
    //proves content is pushed to page
        //beginQuestion1.textContent = "question Place Holder"
        displayAnswers.textContent = "answer Place holder"

        for (var i = 0; i < quizQuestions.length; i++)
        // assigns variable ID 'displayQuestion' to the questions within quizQuestions array 
            var displayQuestion = quizQuestions[questionAndanswersArray].question;
            beginQuestion1.textContent = displayQuestion;


        // assigns variable ID 'displayChoices'
            var displayChoices = quizQuestions[questionAndanswersArray].choices;
            displayAnswers.textContent = displayChoices;
    
};

// function gameOver() {

// };

