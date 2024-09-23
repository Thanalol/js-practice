const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const resetButton = document.getElementById("resetButton");
const scoreDisplay = document.getElementById("scoreDisplay");

let score = 0;

function updateScoreDisplay(){
    scoreDisplay.textContent = score;
}

addButton.addEventListener('click', function(){
    score++;
    updateScoreDisplay();
});

subtractButton.addEventListener('click', function(){
    score--;
    updateScoreDisplay();
});

resetButton.addEventListener('click', function(){
    score = 0;
    updateScoreDisplay();
})