const startButton = document.getElementById("startBtn");
const resetButton = document.getElementById("resetBtn");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const tieScore = document.getElementById("tieScore");


let playerWin = 0;
let computerWin = 0;
let tieWin = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function startGame() {
    const playerRoll = getRandomNumber();
    const computerRoll = getRandomNumber();
    let result;

    if (playerRoll === computerRoll) {
        result = "It's a tie!!!";
        resultDisplay.style.color = "black";
    } else if (playerRoll > computerRoll) {
        result = "Player wins!";
        resultDisplay.style.color = "green";
    } else {
        result = "Computer wins!";
        resultDisplay.style.color = "red";
    }

    
    updateScore(result);

    playerDisplay.textContent = `Player roll: ${playerRoll}`;
    computerDisplay.textContent = `Computer roll: ${computerRoll}`;
    resultDisplay.textContent = result;
}


function updateScore(result) {
    if (result === "Player wins!") {
        playerWin++;
    } else if (result === "Computer wins!") {
        computerWin++;
    } else if (result === "It's a tie!!!") {
        tieWin++;
    }

    
    playerScore.textContent = `You have ${playerWin} Points!`;
    computerScore.textContent = `Computer has ${computerWin} Points!`;
    tieScore.textContent = `Ties: ${tieWin}`;
}

function resetGame(){
    
    playerWin = 0;
    computerWin = 0;
    tieWin = 0;

    playerDisplay.textContent = ``;
    computerDisplay.textContent = ``;
    resultDisplay.textContent = ``;

    playerScore.textContent = ``;
    computerScore.textContent = ``;
    tieScore.textContent = ``;


}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
