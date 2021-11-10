//DECLARE VARIABLES



var startCountDown = document.getElementById("timer")

var beginQuestion1 = document.getElementById("questions")

var secondsLeft = 60;


//EventListener - button clicks



document.getElementById("button").addEventListener('click', startTimer)

document.getElementById("button").addEventListener('click', beginQuestion1)

function startTimer (){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        startCountDown.textContent = secondsLeft + " seconds remaining.";
    
        if(secondsLeft < 15) 
        {
            startCountDown.textContent = secondsLeft + " time is almost up!";
        } 
        // else (secondsLeft === 0); { 
            
        //     clearInterval(timerInterval);
           
        // };
      }, 1000); //milliseconds 
};

function beginQuestion1() {
        beginQuestion1

}