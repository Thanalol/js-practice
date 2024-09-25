const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timeDisplay.textContent = timeToString(elapsedTime);
    }, 1000);
    startButton.disabled = true;  
}


startButton.addEventListener('click', startTimer);
