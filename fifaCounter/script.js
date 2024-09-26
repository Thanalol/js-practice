const playerOneButton = document.getElementById("playerOneButton");
const playerTwoButton = document.getElementById("playerTwoButton");
const playerOneDisplay = document.getElementById("playerOneDisplay");
const playerTwoDisplay = document.getElementById("playerTwoDisplay");
const resetButton = document.getElementById("resetButton");

let playerOneScore = 0;
let playerTwoScore = 0;

function addPointOne(){
    playerOneScore++;
    playerOneDisplay.textContent = playerOneScore;
}

function addPointTwo(){
    playerTwoScore++;
    playerTwoDisplay.textContent = playerTwoScore;
}

function resetScore(){
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;
}

playerOneButton.addEventListener("click", addPointOne);
playerTwoButton.addEventListener("click", addPointTwo);
resetButton.addEventListener("click", resetScore);